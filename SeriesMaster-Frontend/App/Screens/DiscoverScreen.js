import React, { useState } from "react";
import styled from "styled-components/native";
import { StatusBar, View, Text } from "react-native";
import Header from "../components/Header";
import AppInputText from "../components/AppInputText";

const Container = styled.View`
  flex: 1;
  align-items: center;
  background: #20232a;
  padding-top: ${StatusBar.currentHeight};
`;

const Main = styled.View`
  align-items: center;
  background: lightgrey;
  width: 100%;
  flex: 1;
`;

const DiscoverScreen = () => {
  const [query, setQuery] = useState("");

  function handleChange(input) {
    setQuery(input);
  }

  return (
    <Container>
      <Header title="Discover"></Header>
      <Main>
        <AppInputText
          placeholder="Search"
          query={query}
          onChange={setQuery}
        />
      </Main>
      <View style={{ padding: 10 }}>
        <Text>Footer</Text>
      </View>
    </Container>
  );
};

export default DiscoverScreen;
