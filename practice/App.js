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

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style="auto" />
      {/* light나 dark도 가능 */}
      <Image source={require("./assets/th.jpg")} style={styles.local_image} />
      <Image
        source={{
          uri: "https://i.namu.wiki/i/_dbHSCc0yjCZQ4ekHc2QiwYWux-Pfk_f63U2oP0TXkDHoxY4MEk55ULHH3AgtBvD5CYqyCcpfwdK6dywAlXcdQ.webp",
        }}
        style={styles.uri_image}
      />
      <TextInput placeholder="피크민 이름을 입력해주세요." />
      <TextInput value="피크민" />
      <Button
        title="Click Me!"
        onPress={() => {
          console.log("클릭되었습니다.");
        }}
      />
      <Switch value={true} />
      <Switch value={false} />
      {/* 디폴트는 false */}
      <ScrollView>
        <Image source={require("./assets/th.jpg")} style={styles.local_image} />
        <Image source={require("./assets/th.jpg")} style={styles.local_image} />
        <Image source={require("./assets/th.jpg")} style={styles.local_image} />
        <Image source={require("./assets/th.jpg")} style={styles.local_image} />
        <Image source={require("./assets/th.jpg")} style={styles.local_image} />
        <Image source={require("./assets/th.jpg")} style={styles.local_image} />
        <Image source={require("./assets/th.jpg")} style={styles.local_image} />
        <Image source={require("./assets/th.jpg")} style={styles.local_image} />
        <Image source={require("./assets/th.jpg")} style={styles.local_image} />
        <Image source={require("./assets/th.jpg")} style={styles.local_image} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  // 뷰에 적용한 스타일링
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
  uri_image: {
    width: 200,
    height: 200,
  },
});
