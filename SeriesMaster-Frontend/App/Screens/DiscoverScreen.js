import React from "react";
import styled from "styled-components/native";
import { StatusBar, View, Text } from "react-native";
import Header from "../components/Header";

const Container = styled.View`
  flex: 1;
  align-items: center;
  background: #20232a;
  padding-top: ${StatusBar.currentHeight};
`;

const StyledText = styled.Text`
  color: red;
  align-items: center;
  background: lightgrey;
  width: 100%;
  flex: 1;
`;

const DiscoverScreen = () => {
  return (
    <Container>
      <Header title="Discover"></Header>
      <StyledText>Open up your app! Test</StyledText>
      <View style={{ padding: 10 }}>
        <Text>Footer</Text>
      </View>
    </Container>
  );
};

export default DiscoverScreen;
