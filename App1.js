import { StatusBar } from "expo-status-bar";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App1() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {" "}
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style="auto" />
      <Image source={require("./no_smile.jpg")} style={styles.local_image} />
      <Image
        source={{ uri: "https://pbs.twimg.com/media/GNILou1acAApjQl.jpg" }}
        style={styles.url_image}
      />
      <TextInput value="박소윤" />
      <TextInput placeholder="이름을 입력해주세요" />
      <Button
        title="Click Me!"
        onPress={() => {
          console.log("Clicked");
        }}
      />
      {/* 이름과 클릭했을 때 실행되는 함수가 필수  */}
      <Switch value={true} />
      <Switch value={false} />
      {/* default로 false */}
      <ScrollView>
        <Image source={require("./no_smile.jpg")} style={styles.local_image} />
        <Image source={require("./no_smile.jpg")} style={styles.local_image} />
        <Image source={require("./no_smile.jpg")} style={styles.local_image} />
        <Image source={require("./no_smile.jpg")} style={styles.local_image} />
        <Image source={require("./no_smile.jpg")} style={styles.local_image} />
        <Image source={require("./no_smile.jpg")} style={styles.local_image} />
        <Image source={require("./no_smile.jpg")} style={styles.local_image} />
        <Image source={require("./no_smile.jpg")} style={styles.local_image} />
        <Image source={require("./no_smile.jpg")} style={styles.local_image} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  local_image: {
    width: 100,
    height: 100,
  },
  url_image: {
    width: 200,
    height: 200,
  },
});
