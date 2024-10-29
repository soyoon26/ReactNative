import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenA from "./src/ScreenA";
import ScreenB from "./src/ScreenB";
import NestedStackNavigator from "./src/NestedStackNavigator";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ScreenA" component={ScreenA}></Stack.Screen>
        <Stack.Screen name="ScreenB" component={ScreenB}></Stack.Screen>
        <Stack.Screen
          name="NestedNavigator"
          component={NestedStackNavigator}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
