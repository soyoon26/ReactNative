import React, { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { View, Text, Button, TextInput, Switch } from "react-native";

const Component = () => {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(true);
  const [input, setInput] = useState("");
  const [isRefresh, setIsRefresh] = useState(false);

  useEffect(() => {
    console.log("Did Mount");
  }, []);

  useEffect(() => {
    console.log("Did Mount - count");
  }, [count]);

  useEffect(() => {
    console.log("Did Mount - isOn");
  }, [isOn]);
  useEffect(() => {
    if (isRefresh) {
      setTimeout(() => {
        setIsRefresh(false);
      }, 2000);
    }
  }, [isRefresh]);

  return (
    <View style={{ alignItems: "center" }}>
      <Text>You clicked {count} times</Text>
      <Button title="Click me" onPress={() => setCount(count + 1)} />

      <Text style={{ marginVertical: 15 }}>
        -------------------------------------------------
      </Text>
      <Switch value={isOn} onValueChange={setIsOn} />

      <Text style={{ marginVertical: 15 }}>
        -------------------------------------------------
      </Text>

      <Text>input: {input}</Text>
      <TextInput
        value={input}
        onChangeText={setInput}
        style={{ borderBottomWidth: 1, borderColor: "grey" }}
      />

      <Text style={{ marginVertical: 15 }}>
        -------------------------------------------------
      </Text>
      <Button title="새로고침!" onPress={() => setIsRefresh(true)} />
      {isRefresh && <ActivityIndicator />}
      {/* 가져오는 중 스핀*/}
    </View>
  );
};

export default Component;
