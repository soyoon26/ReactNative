import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { ScrollView } from "react-native";
import Profile from "./Profile";
import Margin from "./Margin";

const bottomSpace = getBottomSpace();

export default (props, index) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {/* 빼면 스크롤이 보임 */}
      {props.data.map((item) => (
        <View key={index}>
          {/* key는 최상단에 있어야 함 */}
          <Profile
            uri={item.uri}
            name={item.name}
            introduction={item.introduction}
          />
          <Margin height={13} />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({});
