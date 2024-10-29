import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenC from "./ScreenC";

const Stack = createNativeStackNavigator();

export default function NestedStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ScreenC" component={ScreenC}></Stack.Screen>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
