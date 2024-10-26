import {
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const ArrowButton = ({ icon, onPress, disabled }) => {
  <TouchableOpacity
    disabled={disabled}
    onPress={onPress}
    style={{
      alignItems: "center",
      paddingHorizontal: 20,
      height: "100%",
    }}
  >
    <Text style={{ fontSize: 20, color: disabled ? "transparent" : "black" }}>
      {icon}
    </Text>
  </TouchableOpacity>;
};

export default ({
  bigImgModalVisible,
  onPressBackdrop,
  onPressLeftArrow,
  onPressRightArrow,
  showPreviousArrow,
  showNextArrow,
}) => {
  return (
    <Modal animationType="fade" transparent={true} visible={bigImgModalVisible}>
      <Pressable
        onPress={onPressBackdrop}
        style={{
          flex: 1,
          // backgroundColor: "lightgrey",
          justifyContent: "center",
          alignItems: "center",
          // opacity: 0.5,
          backgroundColor: `rgba(115,115,115,0.5)`,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {/* 화살표< */}
          {showPreviousArrow && (
            <ArrowButton
              icon="◀"
              onPress={onPressLeftArrow}
              disabled={!showPreviousArrow}
            />
          )}
          {/* 이미지 */}
          <Pressable>
            <Image
              source={{ uri: selectedImage?.uri }}
              style={{ width: 280, height: 280, backgroundColor: "white" }}
              resizeMode="contain"
            />
          </Pressable>
          {/* 화살표> */}
          {showNextArrow && (
            <ArrowButton
              icon="▶"
              onPress={onPressRightArrow}
              disabled={!showNextArrow}
            />
          )}
        </View>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({});
