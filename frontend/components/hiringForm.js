import React from "react";
import { ScrollView, SafeAreaView } from "react-native";
import { Formik } from "formik";
import { View } from "react-native-animatable";
import TextTicker from "react-native-text-ticker";
import { Button, Input, Text } from "galio-framework";
import * as yup from "yup";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import {
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import axios from "axios";
const image = {
  uri:
    "https://images.theconversation.com/files/338577/original/file-20200529-78875-18d0wif.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
};
const reviewSchema = yup.object({
  Name: yup.string().strict().required(),

  Age: yup
    .number()
    .required()
    .test("is-age-<18", "you must be 18 or older", (val) => {
      return parseInt(val) > 18 && parseInt(val) < 100;
    }),

  NumberOfKidsYouCanHandel: yup
    .number()
    .required()
    .test(
      "is-numkids->0",
      "you must atleast be able to deal with one kid",
      (val) => {
        return parseInt(val) > 0 && parseInt(val) < 11;
      }
    ),

  Place: yup.string().required(),

  EducationLevel: yup.string().required(),

  HowMannyHoursYouCanWorkADay: yup
    .number()
    .required()
    .test("is-workH->1-9", "invalid number of work hours", (val) => {
      return parseInt(val) > 1 && parseInt(val) < 10;
    }),

  ExperensLevel: yup.string().required(),
});

export default function HiringForm() {
  return (
    <ImageBackground
      source={image}
      style={styles.image}
      imageStyle={{ opacity: 0.7 }}
    >
      <SafeAreaView style={styles.container}>
        <ScrollView style={{ marginTop: "30%", marginBottom: "30%" }}>
          <View>
            <TextTicker
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "black",
                marginTop: 50,
                marginBottom: 50,
              }}
              duration={3000}
              loop
              bounce
              repeatSpacer={50}
              marqueeDelay={1000}
            >
              Welcome to Nany Family .. Welcome to Nany Family... Welcome to
              Nany Family
            </TextTicker>
            <View>
              <Formik
                initialValues={{
                  Name: "",
                  Age: "",
                  Email: "",
                  PhoneNumber: "",
                  NumberOfKidsYouCanHandel: "",
                  Place: "",
                  EducationLevel: "",
                  HowMannyHoursYouCanWorkADay: "",
                  ExperensLevel: "",
                }}
                validationSchema={reviewSchema}
                onSubmit={(values) => {
                  console.log(values);
                  axios
                    .post("192.168.1.16:5000/HiringForm", values)
                    .then(function (response) {
                      console.log(response);
                    })
                    .catch(function (error) {
                      console.log(error);
                    });
                }}
              >
                {(props) => (
                  <View>
                    {/* Name inpute */}
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
                      onBlur={props.handleBlur("Name")}
                      style={{
                        backgroundColor: "rgba(255,255,255,0.4)",
                        borderRadius: 5,
                        padding: 5,
                        width: "80%",
                        marginLeft: "10%",
                        marginRight: "10%",
                      }}
                    ></Input>
                    {/* Handling test for name */}
                    <Text> {props.touched.Name && props.errors.Name} </Text>

                    {/* Age input */}
                    <View
                      style={{
                        flexDirection: "row",
                        marginLeft: "80%",
                      }}
                    >
                      <Text> Age </Text>
                    </View>
                    <Input
                      onChangeText={props.handleChange("Age")}
                      value={props.values.Age}
                      onBlur={props.handleBlur("Age")}
                      style={{
                        backgroundColor: "rgba(255,255,255,0.4)",
                        borderRadius: 5,
                        padding: 5,
                        width: "80%",
                        marginLeft: "10%",
                        marginRight: "10%",
                      }}
                    ></Input>
                    {/* Handling test for age */}
                    <Text> {props.touched.Age /* && props.errors.Age */} </Text>

                    {/* Email input  */}
                    <View
                      style={{
                        flexDirection: "row",
                        marginLeft: "70%",
                      }}
                    >
                      <Text> E-mail </Text>
                      <Fontisto name="email" size={24} color="black" />
                    </View>
                    <Input
                      onChangeText={props.handleChange("Email")}
                      value={props.values.Email}
                      onBlur={props.handleBlur("Email")}
                      style={{
                        backgroundColor: "rgba(255,255,255,0.4)",
                        borderRadius: 5,
                        padding: 5,
                        width: "80%",
                        marginLeft: "10%",
                        marginRight: "10%",
                      }}
                    ></Input>
                    {/* Handling test for email */}
                    <Text> {props.touched.Email && props.errors.Email} </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        marginLeft: "57%",
                      }}
                    >
                      <Text> Phone Number </Text>
                      <Entypo name="phone" size={24} color="black" />
                    </View>
                    {/* PhoneNumber input */}
                    <Input
                      onChangeText={props.handleChange("PhoneNumber")}
                      value={props.values.PhoneNumber}
                      onBlur={props.handleBlur("PhoneNumber")}
                      style={{
                        backgroundColor: "rgba(255,255,255,0.4)",
                        borderRadius: 5,
                        padding: 5,
                        width: "80%",
                        marginLeft: "10%",
                        marginRight: "10%",
                      }}
                    ></Input>
                    {/* Handling test for phonenumber */}
                    <Text>
                      {" "}
                      {props.touched.PhoneNumber &&
                        props.errors.PhoneNumber}{" "}
                    </Text>

                    {/* NumberOfKidsYouCanHandel input */}
                    <View
                      style={{
                        flexDirection: "row",
                        marginLeft: "30%",
                      }}
                    >
                      <Text> How many kids you can handle </Text>
                      <FontAwesome5
                        name="baby-carriage"
                        size={24}
                        color="black"
                      />
                    </View>
                    <Input
                      placeholder="Enter number between 1-9"
                      onChangeText={props.handleChange(
                        "NumberOfKidsYouCanHandel"
                      )}
                      value={
                        props.touched.NumberOfKidsYouCanHandel &&
                        props.values.NumberOfKidsYouCanHandel
                      }
                      onBlur={props.handleBlur("NumberOfKidsYouCanHandel")}
                      style={{
                        backgroundColor: "rgba(255,255,255,0.4)",
                        borderRadius: 5,
                        padding: 5,
                        width: "80%",
                        marginLeft: "10%",
                        marginRight: "10%",
                      }}
                    ></Input>
                    {/* Handling test for numberOfKids   */}
                    <Text>
                      {" "}
                      {props.touched.NumberOfKidsYouCanHandel &&
                        props.errors.NumberOfKidsYouCanHandel}
                    </Text>

                    {/* Place input */}
                    <View
                      style={{
                        flexDirection: "row",
                        marginLeft: "50%",
                      }}
                    >
                      <Text> Where do you live ? </Text>
                      <Fontisto name="world-o" size={24} color="black" />
                    </View>
                    <Input
                      onChangeText={props.handleChange("Place")}
                      value={props.values.Place}
                      onBlur={props.handleBlur("Place")}
                      style={{
                        backgroundColor: "rgba(255,255,255,0.4)",
                        borderRadius: 5,
                        padding: 5,
                        width: "80%",
                        marginLeft: "10%",
                        marginRight: "10%",
                      }}
                    ></Input>
                    {/* Handling test for place */}
                    <Text> {props.touched.Place && props.errors.Place} </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        marginLeft: "25%",
                      }}
                    >
                      <Text> Please enter your Education Level </Text>
                      <Ionicons name="md-school" size={24} color="black" />
                    </View>
                    {/* EducationLevel input */}
                    <Input
                      onChangeText={props.handleChange("EducationLevel")}
                      value={props.values.EducationLevel}
                      onBlur={props.handleBlur("EducationLevel")}
                      style={{
                        backgroundColor: "rgba(255,255,255,0.4)",
                        borderRadius: 5,
                        padding: 5,
                        width: "80%",
                        marginLeft: "10%",
                        marginRight: "10%",
                      }}
                    ></Input>
                    {/* Handling test for education lvl */}
                    <Text>
                      {" "}
                      {props.touched.EducationLevel &&
                        props.errors.EducationLevel}{" "}
                    </Text>

                    {/* HowMannyHoursYouCanWorkADay input  */}
                    <View
                      style={{
                        flexDirection: "row",
                        marginLeft: "17%",
                      }}
                    >
                      <Text> How many hours you can work a day ? </Text>
                      <Entypo name="clock" size={24} color="black" />
                    </View>
                    <Input
                      onChangeText={props.handleChange(
                        "HowMannyHoursYouCanWorkADay"
                      )}
                      value={props.values.HowMannyHoursYouCanWorkADay}
                      onBlur={props.handleBlur("HowMannyHoursYouCanWorkADay")}
                      style={{
                        backgroundColor: "rgba(255,255,255,0.4)",
                        borderRadius: 5,
                        padding: 5,
                        width: "80%",
                        marginLeft: "10%",
                        marginRight: "10%",
                      }}
                    ></Input>
                    {/* Handling test for number of hours */}
                    <Text>
                      {props.touched.HowMannyHoursYouCanWorkADay &&
                        props.errors.HowMannyHoursYouCanWorkADay}{" "}
                    </Text>

                    {/* ExperensLevel input  */}
                    <View
                      style={{
                        flexDirection: "row",
                        marginLeft: "40%",
                      }}
                    >
                      <Text>What's your experens level ? </Text>
                    </View>
                    <Input
                      onChangeText={props.handleChange("ExperensLevel")}
                      value={props.values.ExperensLevel}
                      onBlur={props.handleBlur("ExperensLevel")}
                      style={{
                        backgroundColor: "rgba(255,255,255,0.4)",
                        borderRadius: 5,
                        padding: 5,
                        width: "80%",
                        marginLeft: "10%",
                        marginRight: "10%",
                      }}
                    ></Input>
                    {/* Handling test for exp lvl */}
                    <Text>
                      {" "}
                      {props.touched.ExperensLevel &&
                        props.errors.ExperensLevel}{" "}
                    </Text>
                    <View
                      style={{
                        marginLeft: "25%",
                      }}
                    >
                      {/* submit bttn  */}
                      <Button
                        title="Submit"
                        mode="contained"
                        color="rgba(255,255,255,0.6)"
                        onPress={props.handleSubmit}
                      >
                        <Text style={{ color: "black" }}>Send</Text>
                      </Button>
                    </View>
                  </View>
                )}
              </Formik>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
