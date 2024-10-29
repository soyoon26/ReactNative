import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ScreenB({ navigation }) {
  return (
    <View style={{ flex: 1, alignContent: "center", justifyContent: "center" }}>
      <Text>ScreenB</Text>
      <Button
        title="뒤로가기"
        onPress={() => {
          console.log("뒤로가기 클릭");
          navigation.goBack();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
