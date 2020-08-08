import React from "react";
import MyDrawer from "./slidbar";
import { NavigationContainer } from "@react-navigation/native";
export default function Main() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
