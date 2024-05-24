import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

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
      name="소유니"
      uri="https://velog.velcdn.com/images/for24ng/profile/52560e4e-6322-47a8-ae80-000f3cde217b/image.jpg"
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
        name="소금"
        uri="https://velog.velcdn.com/images/for24ng/post/634e9f82-f9cb-4138-a0b1-0ccc242311cf/image.jpg"
        profileSize={30}
      />
      <Profile
        name="치치"
        uri="https://velog.velcdn.com/images/for24ng/post/634e9f82-f9cb-4138-a0b1-0ccc242311cf/image.jpg"
        profileSize={30}
      />
      <Profile
        name="알콩"
        uri="https://velog.velcdn.com/images/for24ng/post/634e9f82-f9cb-4138-a0b1-0ccc242311cf/image.jpg"
        profileSize={30}
      />
      <Profile
        name="달콩"
        uri="https://velog.velcdn.com/images/for24ng/post/634e9f82-f9cb-4138-a0b1-0ccc242311cf/image.jpg"
        profileSize={30}
      />
      <Profile
        name="설채현"
        uri="https://velog.velcdn.com/images/for24ng/post/634e9f82-f9cb-4138-a0b1-0ccc242311cf/image.jpg"
        profileSize={30}
      />
    </View>
  );
};
// const Profile = (props) => {
//   return (
//     <View style={{ flexDirection: "row" }}>
//       {/* 가로로 정렬, 세로는 column */}
//       <Image
//         source={{
//           uri: props.uri,
//         }}
//         style={{
//           width: props.profileSize,
//           height: props.profileSize,
//         }}
//       />
//       {/* 가로, 세로 길이 정해주지 않으면 화면에 뜨지 않음 */}
//       <Text>{props.name}</Text>
//     </View>
//   );
// };

class Profile extends React.Component {
  render() {
    return (
      <View style={{ flexDirection: "row" }}>
        {/* 가로로 정렬, 세로는 column */}
        <Image
          source={{
            uri: this.props.uri,
          }}
          style={{
            width: this.props.profileSize,
            height: this.props.profileSize,
          }}
        />
        {/* 가로, 세로 길이 정해주지 않으면 화면에 뜨지 않음 */}
        <Text>{this.props.name}</Text>
      </View>
    );
  }
}
//class컴포넌트는 this를 붙여줘야 props가 사용 가능하다.

export default function App() {
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
