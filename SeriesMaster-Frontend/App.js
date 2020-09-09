import React from "react";
import styled from "styled-components/native";
import { StatusBar } from "react-native";
import Header from "./App/components/Header";

const Container = styled.View`
  flex: 1;
  align-items: center;
  background: #20232a;
  padding-top: ${StatusBar.currentHeight};
`;

const StyledText = styled.Text`
  color: red;
  align-items: center;
  background: green;
`;

export default function App() {
  return (
    <Container>
      <Header title="Discover"></Header>
      <StyledText>Open up your app! Test</StyledText>
    </Container>
  );
}
