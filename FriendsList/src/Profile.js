import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import styled from "styled-components/native";
import Margin from "./Margin";

export default ({ uri, name, introduction, isMe }) => {
  const size = isMe ? 50 : 40;
  const Container = styled.View`
    flex-direction: row;
  `;
  const ProfileImage = styled.Image`
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;
    border-radius: ${(props) => props.size * 0.4}px;
  `;
  const TextContainer = styled.View`
    justify-content: center;
    margin-left: 10px;
  `;
  const NameText = styled.Text`
    font-weight: ${(props) => (props.isMe ? "bold" : "normal")};
    font-size: ${(props) => (props.isMe ? 16 : 15)}px;
  `;
  const IntroductionText = styled.Text`
    font-size: ${(props) => (props.isMe ? 12 : 11)}px;
    color: grey;
  `;
  return (
    <Container>
      <ProfileImage source={{ uri: uri }} size={size} />
      <TextContainer>
        <NameText isMe={isMe}>{name}</NameText>
        {!!introduction && (
          <View>
            <Margin height={isMe ? 6 : 2} />
            <IntroductionText isMe={isMe}>{introduction}</IntroductionText>
          </View>
        )}
      </TextContainer>
    </Container>
  );
};

const styles = StyleSheet.create({});
