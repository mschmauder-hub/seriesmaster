import React from "react";
import { View, Text, Image } from "react-native";

import Header from "../components/Header";
import styled from "styled-components/native";
import Tags from "../components/Tags";
import genreColors from "../config/genreColors";
import colors from "../config/colors";
import placeholderImg from "../assets/225030.jpg";

const Container = styled.View`
  flex: 1;
  align-items: center;
  background: #20232a;
  padding-top: 24px;
`;

const Main = styled.View`
  align-items: center;
  background: ${colors.dark};
  width: 100%;
  flex: 1;
`;
const TagsContainer = styled.View`
  flex-direction: row;
`;
const tag1 = "action";
const tag2 = "drama";
const tag3 = "thriller";

const DetailsScreen = () => {
  return (
    <Container>
      <Header title="Show Title"></Header>
      <Main>
        <Image style={{ height: 200, width: 200 }} source={placeholderImg} />
        <TagsContainer>
          <Tags tag="Action" color={genreColors[tag1]} />
          <Tags tag="Drama" color={genreColors[tag2]} />
          <Tags tag="Thriller" color={genreColors[tag3]} />
        </TagsContainer>
      </Main>
      <View style={{ padding: 10 }}>
        <Text>Footer</Text>
      </View>
    </Container>
  );
};

export default DetailsScreen;
