import * as React from "react";
import { View, Text } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Logout from "./Logout";
import Payment from "./payment";
import ContactUS from "./ContactUS";
// import SignUpPage from "./signup";
import AllNany from "./Home";

import Profile from "./profile";

import HiringForm from "./hiringForm";
import MapScreen from "./map";
function Profile1() {
  return <Profile />;
}
function Logout1() {
  return <Logout />;
}
function payment() {
  return <Payment />;
}
function Home1() {
  return <AllNany />;
}

function HiringFormFunc() {
  return <HiringForm />;
}

function LogOut() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Log Out Screen</Text>
    </View>
  );
}
function Map() {
  return <MapScreen />;
}
function ContactUs() {
  return <ContactUS />;
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={Home1} />
      <Drawer.Screen name="Profile" component={Profile1} />
      <Drawer.Screen name="Map" component={Map} />

      <Drawer.Screen name="Logout" component={Logout1} />
      <Drawer.Screen name="Profile" component={Profile1} />
      <Drawer.Screen name="Contact Us" component={ContactUs} />
    </Drawer.Navigator>
  );
}
export default MyDrawer;
