import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabA from "./TabA";
import NestedStackNavigator from "./NestedStackNavigator";
import { Ionicons } from "@expo/vector-icons";

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name={"TabA"}
        component={TabA}
        options={{ tabBarIcon: () => <Ionicons name="home" size={20} /> }}
      />
      <BottomTab.Screen
        name={"Nested"}
        component={NestedStackNavigator}
        options={{ tabBarIcon: () => <Ionicons name="settings" size={20} /> }}
      />
    </BottomTab.Navigator>
  );
}

const styles = StyleSheet.create({});
