import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenC from "./ScreenC";
import ScreenB from "./ScreenB";
import ScreenA from "./ScreenA";

const Stack = createNativeStackNavigator();

export default function NestedStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ScreenA" component={ScreenA}></Stack.Screen>
      {/* <Stack.Screen name="ScreenB" component={ScreenB}></Stack.Screen> */}
      <Stack.Screen name="ScreenC" component={ScreenC}></Stack.Screen>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
