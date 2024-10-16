import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StateWithFunctionalComponent from "./StateWithFunctionalComponent";
import UseEffectWithFunctionalComponent from "./UseEffectWithFunctionalComponent";
import CustomHook from "./CustomHook";
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      {/* <StateWithFunctionalComponent /> */}
      {/* <UseEffectWithFunctionalComponent /> */}
      <CustomHook />
      {/* <StatusBar style="auto" /> */}
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
