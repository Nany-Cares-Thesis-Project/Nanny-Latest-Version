import React from "react";
import { Formik } from "formik";
import { View } from "react-native-animatable";
import { Button, Input, Text } from "galio-framework";
import { MaterialIcons } from "@expo/vector-icons";
import {
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
const image = {
  uri:
    "https://images.theconversation.com/files/338577/original/file-20200529-78875-18d0wif.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
};
import axios from "axios";
import { AsyncStorage } from 'react-native';

export default function Login({ navigation }) {
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
                Email: "",
                password: "",
              }}
              onSubmit={(values) => {
                axios
                  .post("http://192.168.1.16:5000/login", values)
                  .then(function (res) {
                    console.log(res.data.token);
                    if (res.data.token) {
                      try {
                        AsyncStorage.setItem('token', JSON.stringify(res.data.token)); 
                         console.log(JSON.stringify(res.data.token)) 
                      } catch (error) {
                        console.log(error.message);
                      }
                      
                        console.log(res.data.token);
                      navigation.navigate("AllNany");
                      
                    } else {
                      if (res.data === "User not exist") {
                        
                        alert(" User does not exist");
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
                  {/* Email input */}
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
                  <View
                    style={{
                      flexDirection: "row",
                      marginLeft: "70%",
                    }}
                  >
                    <Text>password</Text>
                  </View>

                  <Input
                    secureTextEntry={true}
                    onChangeText={props.handleChange("password")}
                    value={props.values.password}
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
                      title="login"
                      mode="contained"
                      color="rgba(255,255,255,0.6)"
                      onPress={props.handleSubmit}
                      Text="Login"
                    >
                      <Text style={{ color: "black" }}>Login</Text>
                    </Button>
                  </View>
                  <View
                    style={{
                      marginLeft: "25%",
                    }}
                  >
                    <Button
                      title="SignUp"
                      mode="contained"
                      Text="SignUp"
                      color="rgba(255,255,255,0.6)"
                      onPress={() => navigation.navigate("SignUp")}
                    >
                      <Text style={{ color: "black" }}>SignUp</Text>
                    </Button>
                  </View>
                  <View
                    style={{
                      marginLeft: "25%",
                    }}
                  >
                    <Button
                      title="HiringForm"
                      mode="contained"
                      Text="HiringForm"
                      color="rgba(255,255,255,0.6)"
                      onPress={() => navigation.navigate("HiringForm")}
                    >
                      <Text style={{ color: "balck" }}>HiringForm</Text>
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
  title: {
    color: "#8E9BEA",
    textAlign: "center",
    marginTop: 50,
    fontSize: 30,
    fontWeight: "bold",
  },
  center: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 30,
  },
  textButton: {
    width: 140,
    padding: 10,
    fontSize: 20,
    marginTop: 100,
    marginLeft: 100,
    fontWeight: "bold",
    borderRadius: 30,
    color: "white",
    textAlign: "center",
    backgroundColor: "#CC7575",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
