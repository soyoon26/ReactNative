import { StyleSheet, View } from "react-native";
import { Text as RNText } from "react-native";
import React from "react";

export default function Typography({ color, fontSize, children }) {
  return (
    <RNText style={{ color: color, fontSize: fontSize }}>{children}</RNText>
  );
}

const styles = StyleSheet.create({});
