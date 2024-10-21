import { StyleSheet } from "react-native";
import Header from "./src/Header";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Profile from "./src/Profile";
import { friendProfiles, myProfile } from "./src/data";
import Margin from "./src/Margin";
import Division from "./src/Division";
import FriendSection from "./src/FriendSection";
import FriendList from "./src/FriendList";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { useState } from "react";

const statusBarHeight = getStatusBarHeight(true);

export default function App() {
  const [isOpened, setIsOpened] = useState(true);
  const onPressArrow = () => {
    setIsOpened(!isOpened);
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={styles.container}
        edges={["right", "bottom", "left"]}
      >
        <Header />
        <Margin height={10} />
        <Profile
          uri={myProfile.uri}
          name={myProfile.name}
          introduction={myProfile.introduction}
        />
        <Margin height={15} />
        <Division />
        <Margin height={12} />
        <FriendSection
          friendProfileLen={friendProfiles.length}
          onPressArrow={onPressArrow}
          isOpened={isOpened}
        />
        <FriendList data={friendProfiles} isOpened={isOpened} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: statusBarHeight,
    paddingHorizontal: 15,
  },
});
