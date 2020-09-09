import React, { useState } from "react";
import styled from "styled-components/native";
import { View, Text, ScrollView } from "react-native";
import Header from "../components/Header";
import AppInputText from "../components/AppInputText";
import Card from "../components/Card";
import colors from "../config/colors";
import AppText from "../components/AppText";
import CardImage from "../components/CardImage";
import placeholderImg from "../assets/225030.jpg";

const Container = styled.View`
  flex: 1;
  align-items: center;
  background: #20232a;
  padding-top: 24px;
`;

const Main = styled.View`
  background: ${colors.dark};
  width: 100%;
  flex: 1;
`;
const CardsContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 10px;
`;

const DiscoverScreen = () => {
  const [query, setQuery] = useState("");

  return (
    <Container>
      <Header title="Discover"></Header>
      <Main>
        <AppInputText placeholder="Search" query={query} onChange={setQuery} />
        <ScrollView>
          <CardsContainer>
            <Card>
              <CardImage image={placeholderImg} />
              <AppText cardText="24 Legacy" />
            </Card>
          </CardsContainer>
        </ScrollView>
      </Main>
      <View style={{ padding: 10 }}>
        <Text>Footer</Text>
      </View>
    </Container>
  );
};

export default DiscoverScreen;
