import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image as RNImage } from "react-native";
export default function LocalImages({ localAsset, style, width, height }) {
  return (
    <RNImage
      source={localAsset}
      style={[style, { width: width, height: height }]}
    />
  );
}

const styles = StyleSheet.create({});
