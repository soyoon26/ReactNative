import { Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

export default (props) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <Text styles={{ color: "grey" }}>친구 {props.friendProfileLen}</Text>
      <TouchableOpacity>
        <MaterialIcons name="keyboard-arrow-down" size={24} color="lightgrey" />
      </TouchableOpacity>
    </View>
  );
};
