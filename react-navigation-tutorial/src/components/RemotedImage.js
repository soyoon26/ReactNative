import { StyleSheet, Text, View } from "react-native";
import { Image as RNImage } from "react-native";
import React from "react";

export default function RemotedImage({ url, style, width, height }) {
  return (
    <RNImage
      source={{ uri: url }}
      style={[style, { width: width, height: height }]}
    />
  );
}

const styles = StyleSheet.create({});
