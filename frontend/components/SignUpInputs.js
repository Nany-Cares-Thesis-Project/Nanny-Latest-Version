import React from "react";
import { Formik } from "formik";
import { View } from "react-native-animatable";
import { Button, Input, Text } from "galio-framework";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import {
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
} from "react-native";

import axios from "axios";
const image = {
  uri:
    "https://images.theconversation.com/files/338577/original/file-20200529-78875-18d0wif.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
};
export default function Signup({ navigation }) {
  return (
    <ImageBackground
      source={image}
      style={style.image}
      imageStyle={{ opacity: 0.4 }}
    >
      <View>
        <KeyboardAvoidingView behavior="position" disabled>
          <View
            style={{ marginTop: 50, marginLeft: "auto", marginRight: "auto" }}
          ></View>
          <View>
            <Formik
              initialValues={{
                Name: "",
                Email: "",
                PhoneNumber: "",
                password: "",
              }}
              onSubmit={(values) => {
                axios
                  .post("http://192.168.1.16:5000/signup", values)

                  .then(function (res) {
                    console.log(res.data);
                    if (res.data === "User authenticated") {
                      navigation.navigate("LoginPage");
                    } else {
                      if (res.data === "User authenticated") {
                        navigation.navigate("LoginPage");
                      } else {
                        if (res.data === "User already exists...") {
                          alert("User already exists...");
                        }
                      }
                    }
                  })

                  .catch(function (error) {
                    console.log(error);
                  });
              }}
            >
              {(props) => (
                <View>
                  <View
                    style={{
                      flexDirection: "row",
                      marginLeft: "70%",
                    }}
                  >
                    <Text>Name</Text>

                    <MaterialIcons
                      name="perm-identity"
                      size={24}
                      color="black"
                    />
                  </View>
                  <Input
                    onChangeText={props.handleChange("Name")}
                    value={props.values.Name}
                    onBlur={function allLetter(uname) {
                      var letters = /^[A-Za-z]+$/;
                      if (props.values.Name.match(letters)) {
                        return true;
                      } else {
                        alert("Username must have alphabet characters only");
                        uname.focus();
                        return false;
                      }
                    }}
                    style={{
                      backgroundColor: "rgba(255,255,255,0.4)",
                      borderRadius: 5,
                      padding: 5,
                      width: "80%",
                      marginLeft: "10%",
                      marginRight: "10%",
                    }}
                  ></Input>
                  <View
                    style={{
                      flexDirection: "row",
                      marginLeft: "70%",
                    }}
                  >
                    <Text>E-mail</Text>

                    <MaterialIcons name="email" size={24} color="black" />
                  </View>

                  <Input
                    onChangeText={props.handleChange("Email")}
                    type="email-address"
                    value={props.values.Email}
                    onBlur={function ValidateEmail(mail) {
                      if (
                        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                          props.values.Email
                        )
                      ) {
                        return true;
                      }
                      alert("You have entered an invalid email address!");
                      return false;
                    }}
                    style={{
                      backgroundColor: "rgba(255,255,255,0.4)",
                      borderRadius: 5,
                      padding: 5,
                      width: "80%",
                      marginLeft: "10%",
                      marginRight: "10%",
                    }}
                  ></Input>
                  {/* PhoneNumber input */}
                  <View
                    style={{
                      flexDirection: "row",
                      marginLeft: "55%",
                    }}
                  >
                    <Text>Phone Number</Text>
                    <AntDesign name="phone" size={24} color="black" />
                  </View>
                  <Input
                    onChangeText={props.handleChange("PhoneNumber")}
                    value={props.values.PhoneNumber}
                    onBlur={function phonenumber(number) {
                      var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
                      if (props.values.PhoneNumber.match(phoneno)) {
                        return true;
                      } else {
                        alert("Not a valid Phone Number");
                        return false;
                      }
                    }}
                    style={{
                      backgroundColor: "rgba(255,255,255,0.4)",
                      borderRadius: 5,
                      padding: 5,
                      width: "80%",
                      marginLeft: "10%",
                      marginRight: "10%",
                    }}
                  ></Input>

                  {/* password input  */}
                  <View
                    style={{
                      flexDirection: "row",
                      marginLeft: "65%",
                    }}
                  >
                    <Text>Password</Text>
                    <Entypo name="eye" size={24} color="black" />
                  </View>
                  <Input
                    secureTextEntry={true}
                    onChangeText={props.handleChange("password")}
                    value={props.values.password}
                    onBlur={function CheckPassword(inputtxt) {
                      var decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
                      if (props.values.password.match(decimal)) {
                        return true;
                      } else {
                        alert(
                          "Wrong password it should contain 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character"
                        );
                        return false;
                      }
                    }}
                    style={{
                      backgroundColor: "rgba(255,255,255,0.4)",
                      borderRadius: 5,
                      padding: 5,
                      width: "80%",
                      marginLeft: "10%",
                      marginRight: "10%",
                    }}
                  ></Input>

                  {/* submit bttn  */}
                  <View
                    style={{
                      marginLeft: "25%",
                    }}
                  >
                    <Button
                      title="signUp"
                      mode="contained"
                      Text="signUp"
                      color="rgba(255,255,255,0.6)"
                      onPress={props.handleSubmit}
                    >
                      <Text style={{ color: "black" }}>Signup</Text>
                    </Button>
                  </View>
                </View>
              )}
            </Formik>
          </View>
        </KeyboardAvoidingView>
      </View>
    </ImageBackground>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
