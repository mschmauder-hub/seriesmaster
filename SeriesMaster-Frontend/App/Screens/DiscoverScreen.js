import React, { useState } from "react";
import styled from "styled-components/native";
import { ScrollView } from "react-native";
import AppInputText from "../components/AppInputText";
import Card from "../components/Card";
import colors from "../config/colors";
import AppText from "../components/AppText";
import CardImage from "../components/CardImage";
import PropTypes from "prop-types";
import { getShows } from "../api/getShows";
import useDebounce from "../hooks/useDebounce";

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
  const [tvShows, setTvShows] = useState([]);
  const debouncedQuery = useDebounce(query, 500);

  async function handleChange(input) {
    setQuery(input);
    const shows = await getShows(debouncedQuery);
    setTvShows(shows);
  }

  return (
    <Container>
      <Main>
        <AppInputText
          placeholder="Search"
          query={query}
          onChange={handleChange}
        />
        <ScrollView>
          <CardsContainer>
            {tvShows?.map((tvShow) => (
              <Card
                key={tvShow.id}
                onPress={() =>
                  navigation.navigate("Details", {
                    title: tvShow.title,
                    id: tvShow.id,
                  })
                }
              >
                <CardImage imageSrc={tvShow.imgSrc} />
                <AppText cardText={tvShow.title} />
              </Card>
            ))}
          </CardsContainer>
        </ScrollView>
      </Main>
    </Container>
  );
};

export default DiscoverScreen;

DiscoverScreen.propTypes = {
  navigation: PropTypes.object,
};
