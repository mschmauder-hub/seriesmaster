import React, { useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";

import Header from "../components/Header";
import styled from "styled-components/native";
import Tags from "../components/Tags";
import genreColors from "../config/genreColors";
import colors from "../config/colors";
import AppText from "../components/AppText";
import placeholderImg from "../assets/225030.jpg";
import ToggleButton from "../components/ToggleButton";

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
const textExample =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const DetailsScreen = () => {
  const [status, setStatus] = useState(false);

  return (
    <Container>
      <Header title="Show Title"></Header>
      <ScrollView>
        <Main>
          <Image style={{ height: 200, width: 200 }} source={placeholderImg} />
          <TagsContainer>
            <Tags tag="Action" color={genreColors[tag1]} />
            <Tags tag="Drama" color={genreColors[tag2]} />
            <Tags tag="Thriller" color={genreColors[tag3]} />
          </TagsContainer>
          <AppText cardText={textExample}>Test</AppText>
          <ToggleButton
            title="Completed"
            status={status}
            onPress={() => setStatus(!status)}
          />
          <ToggleButton title="Watchlist" />
        </Main>
      </ScrollView>
      <View style={{ padding: 10 }}>
        <Text>Footer</Text>
      </View>
    </Container>
  );
};

export default DetailsScreen;
