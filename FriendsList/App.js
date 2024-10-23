import { FlatList, StyleSheet, View } from "react-native";
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
import TabBar from "./src/TabBar";

const statusBarHeight = getStatusBarHeight(true);

export default function App() {
  const [isOpened, setIsOpened] = useState(true);
  const [selectedTabIdx, setSelectedTabIdx] = useState(0);
  const onPressArrow = () => {
    setIsOpened(!isOpened);
  };
  const ItemSeparatorComponent = () => <Margin height={13} />;
  const renderItem = ({ item }) => (
    <View>
      <Profile
        uri={item.uri}
        name={item.name}
        introduction={item.introduction}
        isMe={true}
      />
      <Margin height={13} />
    </View>
  );

  const ListHeaderComponent = () => (
    <View style={{ backgroundColor: "white" }}>
      <Header />
      <Margin height={10} />
      <Profile
        uri={myProfile.uri}
        name={myProfile.name}
        introduction={myProfile.introduction}
        isMe={false}
      />
      <Margin height={15} />
      <Division />
      <Margin height={12} />
      <FriendSection
        friendProfileLen={friendProfiles.length}
        onPressArrow={onPressArrow}
        isOpened={isOpened}
      />
      <Margin height={5} />
    </View>
  );

  const ListFooterComponent = () => <Margin height={10} />;
  return (
    <View style={styles.container}>
      <FlatList
        data={isOpened ? friendProfiles : []}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        keyExtractor={(_, index) => index}
        stickyHeaderIndices={[0]}
        // 고정할 헤더의 인덱스를 넣어줌

        ItemSeparatorComponent={ItemSeparatorComponent}
        renderItem={renderItem}
        ListHeaderComponent={ListHeaderComponent}
        ListFooterComponent={ListFooterComponent}
        showsVerticalScrollIndicator={false}
        // 스크롤 비가시
      />
      <TabBar
        selectedTabIdx={selectedTabIdx}
        setSelectedTabIdx={setSelectedTabIdx}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: statusBarHeight,
  },
});
