import React, { useEffect } from "react";

import { Keyboard, StyleSheet, Button } from "react-native";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";
import Constants from "expo-constants";
import { View } from "react-native-animatable";

const localNotification = { title: "Nany APP", body: "Your Nany in her way!!" };

const onSubmit = (text) => {
  Keyboard.dismiss();
  const schedulingOptions = {
    time: new Date().getTime() + 3000,
  };
  // Notifications show only when app is not active.
  // (ie. another app being used or device's screen is locked)
  Notifications.scheduleLocalNotificationAsync(
    localNotification,
    schedulingOptions
  );
};
const handleNotification = () => {
  console.warn("ok! got your notif");
};

const askNotification = async () => {
  // We need to ask for Notification permissions for ios devices
  const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
  if (Constants.isDevice && status === "granted")
    console.log("Notification permissions granted.");
};

const TimerNotification = () => {
  useEffect(() => {
    askNotification();
    // If we want to do something with the notification when the app
    // is active, we need to listen to notification events and
    // handle them in a callback
    const listener = Notifications.addListener(handleNotification);
    return () => listener.remove();
  }, []);

  return (
    <View style={styles.input}>
      <Button onPress={onSubmit} title="Send!" color="blue" />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginTop: 50 + "%",
  },
});

export default TimerNotification;
