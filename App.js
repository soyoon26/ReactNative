import { View } from "react-native";
import StateWithClassComponent from "./StateWithClassComponent";
import StateWithFuctionalComponent from "./StateWithFuctionalComponent";

export default function App() {
  return (
    <View>
      <StateWithClassComponent />
      <StateWithFuctionalComponent />
    </View>
  );
}
