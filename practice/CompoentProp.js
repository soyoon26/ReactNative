import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

/**
 * Header
 * MyProfile
 * Division
 * FriendSection
 * FriendList
 */

const Header = (props) => {
  return <Text>{props.title}</Text>;
};
const MyProfile = () => {
  return (
    <Profile
      name="핫크리스피"
      uri="https://i.namu.wiki/i/BqlzCvt7nLWH1Q11YkNDLAe4LbNG0TX5kf0ntL8wia9RMKC61ku56DKdV6cKntWPQvO_8FFfeb3mkMge-QEw_A.webp"
      profileSize={40}
    />
  );
};
const Division = () => {
  return <Text>Division</Text>;
};
const FriendSection = () => {
  return <Text>FriendSection</Text>;
};
const FriendList = () => {
  return (
    <View>
      <Profile
        name="뿌링클옐로우"
        uri="https://tistory2.daumcdn.net/tistory/4540863/skin/images/pikmin_02_yellow.png"
        profileSize={30}
      />
      <Profile
        name="뿌링클옐로우2"
        uri="https://tistory2.daumcdn.net/tistory/4540863/skin/images/pikmin_02_yellow.png"
        profileSize={30}
      />
      <Profile
        name="뿌링클옐로우3"
        uri="https://tistory2.daumcdn.net/tistory/4540863/skin/images/pikmin_02_yellow.png"
        profileSize={30}
      />
    </View>
  );
};

const Profile = (props) => {
  return (
    <View style={{ flexDirection: "row" }}>
      {/* column은 세로로 렌더링 */}
      <Image
        source={{
          uri: props.uri,
        }}
        style={{
          width: props.profileSize,
          height: props.profileSize,
          marginRight: 10,
        }}
      />
      {/* 가로 세로 정하지 않으면 안 나옴 */}
      <Text>{props.name}</Text>;
    </View>
  );
};
export default function CompoentProp() {
  return (
    <View style={styles.container}>
      <Header title="친구" />
      <MyProfile />
      <Division />
      <FriendSection />
      <FriendList />
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
});
