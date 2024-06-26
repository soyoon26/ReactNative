import React, { useState } from "react";
import { View, Text, Button, Switch, TextInput } from "react-native";

const Component = () => {
  const [count, setCount] = useState(0); // number
  const [isOn, setIsOn] = useState(false); // boolean
  const [name, setName] = useState(""); // string
  const arr = [1, 2, 3];
  const [first, second, third] = arr; //구조분해방법
  return (
    <View>
      <Text>You clicked {count} times</Text>
      <Button title="Click me" onPress={() => setCount(count + 1)} />

      <Text>-------</Text>
      <Switch
        value={isOn}
        onValueChange={(v) => {
          console.log("v", v);
          setIsOn(v);
        }}
      />

      <Text>-------</Text>
      <TextInput
        value={name}
        onChangeText={(v) => {
          console.log("v", v);
          setName(v);
        }}
        style={{ backgroundColor: "pink" }}
      />
    </View>
  );
};

export default Component;
