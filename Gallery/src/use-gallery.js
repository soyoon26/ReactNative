import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { Alert } from "react-native";
export default useGallery = () => {
  const [images, setImages] = useState([]);
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

  const imagesWithAddButton = [...images, { id: -1, uri: "" }];
  //   그냥 차지하는게 중요
  return { images, imagesWithAddButton, pickImage, deleteImage };
};
