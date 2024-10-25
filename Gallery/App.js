import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
  Dimensions,
  Platform,
  TouchableOpacity,
  Text,
} from "react-native";

import useGallery from "./src/use-gallery";
import MyDropDownPicker from "./src/MyDropDownPicker";
import TextInputModal from "./src/TextInputModal";
import { useEffect } from "react";

export default function App() {
  const width = Dimensions.get("screen").width;
  const columnSize = width / 3;
  const {
    imagesWithAddButton,
    pickImage,
    deleteImage,
    selectedAlbum,
    modalVisible,
    openModal,
    closeModal,
    albumTitle,
    setAlbumTitle,
    addAlbum,
    resetAlbumTitle,
  } = useGallery();
  const onPressOpenGallery = () => {
    pickImage();
  };
  const onLongPressImage = (imageId) => deleteImage(imageId);
  const onPressAddAlbum = () => {
    console.log("왜2");
    openModal();
  };
  useEffect(() => {
    console.log("앱 실행됨");
  }, []);

  const onSubmitEditing = () => {
    if (!albumTitle) return;
    // 1. 앨범 타이틀 추가
    addAlbum();
    // 2. 모달 닫기 & TextInput의 value 초기화
    closeModal();
    resetAlbumTitle();
  };

  const onPressBackdrop = () => {
    closeModal();
  };

  const renderItem = ({ item: { id, uri }, index }) => {
    if (id === -1) {
      return (
        <TouchableOpacity
          onPress={onPressOpenGallery}
          style={{
            width: columnSize,
            height: columnSize,
            backgroundColor: "lightgrey",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontWeight: "100", fontSize: 50 }}>+</Text>
        </TouchableOpacity>
      );
    }

    return (
      <TouchableOpacity onLongPress={() => onLongPressImage(id)}>
        <Image
          source={{ uri }}
          style={{ width: columnSize, height: columnSize }}
        />
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* 앨범 드롭다운, 추가 버튼 */}
      <MyDropDownPicker
        selectedAlbumTitle={selectedAlbum.title}
        onPressAddAlbum={onPressAddAlbum}
      />
      {/* 앨범 추가 모달 */}
      <TextInputModal
        modalVisible={modalVisible}
        albumTitle={albumTitle}
        setAlbumTitle={setAlbumTitle}
        onSubmitEditing={onSubmitEditing}
        onPressBackdrop={onPressBackdrop}
      />
      {/* 이미지 리스트 */}
      <FlatList
        data={imagesWithAddButton}
        renderItem={renderItem}
        numColumns={3}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignContent: "center",
    marginTop: Platform.OS === "android" ? 30 : 0,
  },
});
