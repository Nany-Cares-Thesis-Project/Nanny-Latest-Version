import React, { useState, useEffect } from "react";
import { Card } from "galio-framework";
import { AsyncStorage, ScrollView } from "react-native";
import { Button } from "react-native-paper";
import axios from "axios";
import { Keyboard, View, Text, TextInput, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Notifications } from "expo";
import { Actions } from "react-native-router-flux";
export default function Confirm() {
  const [info, setInfo] = useState([]);
  const [state, setButtounState] = useState(true);
  const [doneButton, setButtonText] = useState("calculate total first");
  const [value, onChangeText] = React.useState("0");
  const [total, setTotal] = useState("0");
  const [selectedLocation, setSelectedLocation] = useState({});
  const localNotification = {
    title: "Nany APP",
    body: "Thank you for using nanny App , wait for your next visit",
  };
  var calculate;
  var onSubmit;

  useEffect(() => {
    //Retrieving user token, reserved nanny information and user location value from AsyncStorage
    try {
      AsyncStorage.multiGet(["token", "nany", "location"]).then((res) => {
        var nany = JSON.parse(res[1][1]);
        var location = JSON.parse(res[2][1]);
        setInfo(nany);
        setSelectedLocation(location);
      });
    } catch (error) {
      throw error;
    }
  }, []);

  // function to send user location and total cost to the nanny via SMS
  onSubmit = () => {
    axios

      .post("http://192.168.127.43:5000/sendSMS1", [
        selectedLocation,
        total,
        info,
      ])
      .then(function (response) {
        console.log(response);
        alert(
          "the nanny receive your request , if she is available she will contact you with in 15 minutes "
        );
      })
      .catch(function (error) {
        console.log(error);
      });
    Keyboard.dismiss();
    const schedulingOptions = {
      time: new Date().getTime() + 1000,
    };
    // Notifications show only when app is not active.
    // (ie. another app being used or device's screen is locked)
    Notifications.scheduleLocalNotificationAsync(
      localNotification,
      schedulingOptions
    );
  };

  //Calculating total cost based on user input for how many hours he will reserve the nanny service

  //Calculating total cost based on user input for how many hours he will reserve the nanny service
  calculate = function calculateTotal() {
    var totalCost = info.cost * value;
    setTotal(totalCost);
    setButtounState(false);
    setButtonText("Done");
    alert("Your reservation done \n Your service costs: " + totalCost);
  };

  return (
    <View>
      <>
        <ScrollView>
          <View>
            <Card
              flex
              borderless
              title={info.name}
              caption={info.cost + "  JD  /H"}
              image={info.image}
            >
              <View
                style={{
                  flexDirection: "row",
                  marginLeft: "76%",
                }}
              >
                <MaterialIcons name="place" size={24} color="black" />
                <Text>{info.place}</Text>
              </View>
            </Card>
            <View>
              <View>
                <Text style={styles.text}>
                  Enter how many hours you need our service
                </Text>
                <TextInput
                  style={styles.input}
                  onChangeText={(text) => onChangeText(text)}
                  value={value}
                ></TextInput>
              </View>

              <View>
                <Button
                  mode="contained"
                  color="rgba(255,255,255,0.6)"
                  onPress={calculate}
                >
                  <Text>Calculate total</Text>
                </Button>
              </View>
            </View>
            <View>
              <View>
                <Button
                  title="Submit"
                  mode="contained"
                  color="rgba(255,255,255,0.6)"
                  style={{ marginTop: "3%" }}
                  disabled={state}
                  onPress={onSubmit}
                >
                  <Text>{doneButton}</Text>
                </Button>
              </View>
              <View>
                <Button
                  title="Submit"
                  mode="contained"
                  style={{ marginTop: "3%" }}
                  color="rgba(255,255,255,0.6)"
                  onPress={() => {
                    Actions.push("MyDrawer");
                  }}
                >
                  <Text>Cancel</Text>
                </Button>
              </View>
            </View>
          </View>
        </ScrollView>
      </>
    </View>
  );
}

/*******************************Styling********************************/
const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },

  input: {
    textAlign: "center",
  },
  text: {
    marginTop: 30,
    textAlign: "center",
  },
});
