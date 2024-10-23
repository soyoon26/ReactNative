import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconButton = (props) => {
  return (
    <TouchableOpacity
      hitSlop={{ top: 10, bottom: 10 }}
      style={{ paddingHorizontal: 6 }}
    >
      <Ionicons name={props.name} size={24} color="black"></Ionicons>
    </TouchableOpacity>
  );
};

export default function Header() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10,
      }}
    >
      {/* 자동 조절방법, View 사용시 라이브러리 사용 react-native-iphone-x-helper 업데이트 불가*/}
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>친구</Text>
      <View style={{ flexDirection: "row" }}>
        <IconButton name="search-outline" />
        <IconButton name="person-add-outline" />
        <IconButton name="musical-notes-outline" />
        <IconButton name="settings-outline" />
      </View>
    </View>
  );
}
// @expo/vector/icons에서 아이콘 검색

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
  },
  title: { fontSize: 22, fontWeight: "bold" },
});
