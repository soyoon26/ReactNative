import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { Alert } from "react-native";

const defaultAlbum = { id: 1, title: "기본" };

export default useGallery = () => {
  const [images, setImages] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(defaultAlbum);
  const [selectedImage, setSelectedImage] = useState(null);
  const [albums, setAlbums] = useState([defaultAlbum]);
  const [bigImgModalVisible, setBigImgModalVisible] = useState(false);
  const [textInputModalVisible, setTextInputModalVisible] = useState(false);
  const [albumTitle, setAlbumTitle] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      const lastId = images.length === 0 ? 0 : images[images.length - 1].id;
      const newImage = {
        id: lastId + 1,
        uri: result.assets[0].uri,
        albumId: selectedAlbum.id,
      };
      setImages([...images, newImage]);
    }
  };
  const deleteImage = (imageId) => {
    Alert.alert("이미지를 삭제하시겠어요?", "", [
      { style: "cancel", text: "아니요" },
      {
        text: "네",
        onPress: () => {
          const newImages = images.filter((image) => image.id !== imageId);
          setImages(newImages);
        },
      },
    ]);
  };

  const openTextInputModal = () => {
    setTextInputModalVisible(true);
  };
  const closeTextInputModal = () => setTextInputModalVisible(false);

  const openBigImgModal = () => {
    setBigImgModalVisible(true);
  };
  const closeBigImgModal = () => setBigImgModalVisible(false);

  const openDropdown = () => {
    setIsDropdownOpen(true);
  };
  const closeDropdown = () => setIsDropdownOpen(false);

  const addAlbum = () => {
    const lastId = albums.length === 0 ? 0 : albums[albums.length - 1].id;
    const newAlbum = {
      id: lastId + 1,
      title: albumTitle,
    };
    setAlbums([...albums, newAlbum]);
    setSelectedAlbum(newAlbum);
  };

  const selectAlbum = (album) => {
    setSelectedAlbum(album);
  };
  const selectImage = (image) => {
    setSelectedImage(image);
  };

  const deleteAlbum = (albumId) => {
    if (albumId === defaultAlbum.id) {
      Alert.alert("기본 앨범은 삭제할 수 없어요!");
      return;
    }
    Alert.alert("앨범을 삭제하시겠어요?", "", [
      { style: "cancel", text: "아니요" },
      {
        text: "네",
        onPress: () => {
          const newAlbums = albums.filter((album) => album.id !== albumId);
          setAlbums(newAlbums);
          setSelectedAlbum(defaultAlbum.id);
        },
      },
    ]);
  };

  const resetAlbumTitle = () => setAlbumTitle("");

  const filteredImages = images.filter(
    (image) => image.albumId === selectedAlbum.id
  );
  const imagesWithAddButton = [...filteredImages, { id: -1, uri: "" }];
  //   그냥 차지하는게 중요

  const moveToPreviousImage = () => {
    const selectedImageIndex = filteredImages.findIndex(
      (image) => image.id === selectedImage.id
    );
    const previousImageIndex = selectedImageIndex - 1;
    if (previousImageIndex < 0) return;
    const previousImage = filteredImages[previousImageIndex];
    setSelectedImage(previousImage);
  };
  const moveToNextImage = () => {
    const selectedImageIndex = filteredImages.findIndex(
      (image) => image.id === selectedImage.id
    );
    const nextImageIndex = selectedImageIndex + 1;
    if (nextImageIndex > filteredImages.length - 1 || nextImageIndex === -1)
      return;
    const nextImage = filteredImages[nextImageIndex];
    setSelectedImage(nextImage);
  };

  const showPreviousArrow =
    filteredImages.findIndex((image) => image.id === selectedImage?.id) !== 0;
  const showNextArrow =
    filteredImages.findIndex((image) => image.id === selectedImage?.id) !==
    filteredImages.length - 1;

  return {
    imagesWithAddButton,
    pickImage,
    deleteImage,
    selectedAlbum,
    textInputModalVisible,
    openTextInputModal,
    closeTextInputModal,
    albumTitle,
    setAlbumTitle,
    addAlbum,
    resetAlbumTitle,
    isDropdownOpen,
    openDropdown,
    closeDropdown,
    albums,
    selectAlbum,
    deleteAlbum,
    bigImgModalVisible,
    openBigImgModal,
    closeBigImgModal,
    selectImage,
    selectedImage,
    moveToPreviousImage,
    moveToNextImage,
    showPreviousArrow,
    showNextArrow,
  };
};
