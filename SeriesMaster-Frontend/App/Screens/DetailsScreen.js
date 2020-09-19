import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";
import Tags from "../components/Tags";
import genreColors from "../config/genreColors";
import colors from "../config/colors";
import ToggleButton from "../components/ToggleButton";
import SummaryText from "../components/SummaryText";
import TitleImage from "../components/TitleImage";
import PropTypes from "prop-types";
import { getShow } from "../api/getShows";

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

const DetailsScreen = ({ route }) => {
  const [completed, setCompleted] = useState(false);
  const [onWatchList, setOnWatchList] = useState(false);
  const [tvShow, setTvShow] = useState([]);

  useEffect(() => {
    async function fetchShow() {
      const show = await getShow(route.params.id);
      setTvShow(show);
    }
    fetchShow();
  }, [route.params.id]);

  return (
    <Container>
      <ScrollView>
        <Main>
          <TitleImage imageSrc={tvShow.imgSrc} />
          <TagsContainer>
            {tvShow.genre?.map((genre) => (
              <Tags key={genre} tag={genre} color={genreColors[genre]} />
            ))}
          </TagsContainer>

          <SummaryText text={tvShow.summary}></SummaryText>

          <ToggleButton
            title="Watchlist"
            status={onWatchList}
            onPress={() => setOnWatchList(!onWatchList)}
          />
          <ToggleButton
            title="Completed"
            status={completed}
            onPress={() => setCompleted(!completed)}
          />
        </Main>
      </ScrollView>
    </Container>
  );
};

export default DetailsScreen;

DetailsScreen.propTypes = {
  route: PropTypes.object,
};
