import React, { useState } from "react";
import { Button, TextInput, View } from "react-native";

// 컴포넌트 로직 간소화
// 중복되는 코드가 보일 때 props를 이용해 컴포넌트로 만들어 주기
const InputBox = (props) => {
  return (
    <View style={{ flexDirection: "row" }}>
      {/* row: 한 줄로 표현 */}
      <TextInput
        value={props.value}
        onChangeText={props.onChangeText}
        style={{ borderBottomWidth: 1, width: 200 }}
        placeholder={props.placeholder}
      />
      <Button title="초기화" onPress={props.onReset} />
    </View>
  );
};

const useInput = (initialValue) => {
  //커스텀 훅으로 빼기
  const [value, setValue] = useState(initialValue);

  const resetValue = () => setValue(initialValue);

  return {
    value,
    setValue,
    resetValue,
  };
};

const CustomHook = () => {
  const {
    value: name,
    setValue: setName,
    resetValue: resetName,
  } = useInput("");
  const { value: age, setValue: setAge, resetValue: resetAge } = useInput("");
  const {
    value: city,
    setValue: setCity,
    resetValue: resetCity,
  } = useInput("");

  return (
    <View>
      <InputBox
        value={name}
        onChangeText={setName}
        placeholder="이름을 입력해 주세요"
        onReset={resetName}
      />
      <InputBox
        value={age}
        onChangeText={setAge} // Text가 change됐을 때 콜백되는 함수
        placeholder="나이를 입력해 주세요"
        onReset={resetAge}
      />
      <InputBox
        value={city}
        onChangeText={setCity}
        placeholder="사는 곳을 입력해 주세요"
        onReset={resetCity}
      />
    </View>
  );
};

export default CustomHook;
