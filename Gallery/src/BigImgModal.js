import { Image, Modal, Pressable, StyleSheet, View } from "react-native";
import React from "react";

export default ({ bigImgModalVisible, onPressBackdrop }) => {
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
        <Pressable>
          <Image
            source={{ uri: selectedImage?.uri }}
            style={{ width: 280, height: 280, backgroundColor: "white" }}
            resizeMode="contain"
          />
        </Pressable>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({});
