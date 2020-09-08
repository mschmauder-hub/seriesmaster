import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledText = styled.Text`
  color: red;
`;

export default function App() {
  console.log("Test");
  return (
    <Container>
      <StyledText>Open up your app! Test</StyledText>
    </Container>
  );
}
