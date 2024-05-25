import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  Switch,
  ActivityIndicator,
} from "react-native";

const Component = () => {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(true);
  const [input, setInput] = useState("");
  const [isRefresh, setIsRefresh] = useState(false);

  useEffect(() => {
    console.log("didMount");
  }, []); //의존성배열이 바뀔 때

  useEffect(() => {
    console.log("didUpdate - count", count);
  }, [count]);

  useEffect(() => {
    console.log("didUpdate - isOn", isOn);
  }, [isOn]);

  useEffect(() => {
    console.log("didUpdate - input", input);
  }, [input]);

  useEffect(() => {
    if (isRefresh) {
      setTimeout(() => {
        setIsRefresh(false);
      }, 2000);
    }
  }, [isRefresh]); //True일때만 바꿔주기

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
      <Button
        title="새로고침!"
        onPress={() => {
          setIsRefresh(true);
        }}
      />
      {/* 새로고침 눌렀을 때 isRefresh */}
      {isRefresh && <ActivityIndicator />}
    </View> //로딩표시
  );
};

export default Component;
