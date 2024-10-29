import React from "react";
import { Button, Text, View } from "react-native";

export default function ScreenA({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>이것은 스크린에이</Text>
      <Button
        title="B스크린으로 이동하기"
        onPress={() => {
          console.log("B스크린으로 이동하기");
          navigation.navigate("ScreenB", { value: "fromA" });
        }}
      />
      <Button
        title="C스크린으로 이동하기"
        onPress={() => {
          console.log("B스크린으로 이동하기");
          navigation.navigate("NestedNavigator", { screen: "ScreenC" });
        }}
      />
    </View>
  );
}
