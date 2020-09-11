import React, { useState } from "react";
import styled from "styled-components/native";
import { ScrollView } from "react-native";
import AppInputText from "../components/AppInputText";
import Card from "../components/Card";
import colors from "../config/colors";
import AppText from "../components/AppText";
import CardImage from "../components/CardImage";
import placeholderImg from "../assets/225030.jpg";
import PropTypes from "prop-types";

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

const DiscoverScreen = ({ navigation }) => {
  const [query, setQuery] = useState("");

  return (
    <Container>
      <Main>
        <AppInputText placeholder="Search" query={query} onChange={setQuery} />
        <ScrollView>
          <CardsContainer>
            <Card
              onPress={() =>
                navigation.navigate("Details", { title: "24 Legacy" })
              }
            >
              <CardImage imageSrc={placeholderImg} />
              <AppText cardText="24 Legacy" />
            </Card>
          </CardsContainer>
        </ScrollView>
      </Main>
    </Container>
  );
};

export default DiscoverScreen;

DiscoverScreen.propTypes = {
  navigation: PropTypes.func,
};
