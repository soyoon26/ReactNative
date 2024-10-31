import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenA from "./src/ScreenA";
import ScreenB from "./src/ScreenB";
import NestedStackNavigator from "./src/NestedStackNavigator";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabA from "./src/TabA";
import TabB from "./src/TabB";
import { Ionicons } from "@expo/vector-icons";
import BottomTabNavigator from "./src/BottomTabNavigator";
import Typography from "./src/components/Typography";
import { View } from "react-native";
import LocalImages from "./src/components/LocalImages";
import RemotedImage from "./src/components/RemotedImage";
const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();
// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="ScreenA" component={ScreenA}></Stack.Screen>
//         <Stack.Screen name="ScreenB" component={ScreenB}></Stack.Screen>
//         <Stack.Screen
//           name="NestedNavigator"
//           component={NestedStackNavigator}
//         ></Stack.Screen>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name={"NestedBottomTab"} component={BottomTabNavigator} />
//         <Stack.Screen name="ScreenB" component={ScreenB} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

export default function App() {
  return (
    <View>
      <Typography color="red" fontSize={20}>
        이것은
        <Typography color="green" fontSize={40}>
          텍스트
        </Typography>
        입니다.
      </Typography>
      <LocalImages
        localAsset={require("./assets/favicon.png")}
        width={50}
        height={50}
      />
      <RemotedImage
        url={"https://d3ihz389yobwks.cloudfront.net/1708438488164oWS18.jpg"}
        width={200}
        height={100}
      />
    </View>
  );
}
