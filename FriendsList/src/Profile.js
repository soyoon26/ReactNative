import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Margin from "./Margin";

export default (uri, name, introduction, isMe) => {
  const size = isMe ? 50 : 40;
  return (
    <View style={{ flexDirection: "row" }}>
      <Image
        source={{ uri: uri }}
        style={{
          width: 50,
          height: size,
          borderRadius: size * 0.4,
        }}
      />
      <View style={{ justifyContent: "center", marginLeft: 10 }}>
        <Text
          style={{
            fontWeight: isMe ? "bold" : undefined,
            fontSize: isMe ? 16 : 15,
          }}
        >
          {name}
        </Text>
        {!!introduction && (
          <View style={{ height: isMe ? 6 : 2 }}>
            <Text style={{ fontSize: isMe ? 12 : 11, color: "grey" }}>
              {introduction}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
