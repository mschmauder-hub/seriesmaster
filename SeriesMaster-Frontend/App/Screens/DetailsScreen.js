import React, { useContext, useEffect, useState } from "react";
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
import { postMyList } from "../api/getMyShows";
import LoadingScreen from "./LoadingScreen";
import AuthContext from "../auth/context";

const Container = styled.View`
  flex: 1;
  align-items: center;
  background: ${colors.dark};
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

const ButtonContainer = styled.View`
  flex-direction: row;
`;

const DetailsScreen = ({ route }) => {
  const [completed, setCompleted] = useState(false);
  const [onWatchList, setOnWatchList] = useState(false);
  const [tvShow, setTvShow] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user, setUser } = useContext(AuthContext);

  useEffect(() => {
    async function fetchShow() {
      setLoading(true);
      const show = await getShow(route.params.id);
      checkStatus();
      setTvShow(show);
      setLoading(false);
    }
    fetchShow();
  }, [route.params.id]);

  function checkStatus() {
    const completedListStatus = user.completed.some((item) => {
      return item == route.params.id;
    });
    const watchListStatus = user.watchlist.some((item) => {
      return item == route.params.id;
    });

    setOnWatchList(watchListStatus);
    setCompleted(completedListStatus);
  }

  async function handleOnPress(list) {
    list === "watchlist"
      ? setOnWatchList(!onWatchList)
      : setCompleted(!completed);

    const newList = await postMyList(list, route.params.id);
    let newUser = { ...user };
    newUser[list] = newList;
    await setUser(newUser);
  }

  if (loading) {
    return <LoadingScreen />;
  }

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
          <ButtonContainer>
            <ToggleButton
              title={onWatchList ? "Remove from Watchlist" : "Add to Watchlist"}
              status={onWatchList}
              onPress={() => handleOnPress("watchlist")}
            />
            <ToggleButton
              title={
                completed
                  ? "Remove from Completed list"
                  : "Add to Completed list"
              }
              status={completed}
              onPress={() => handleOnPress("completed")}
            />
          </ButtonContainer>
        </Main>
      </ScrollView>
    </Container>
  );
};

export default DetailsScreen;

DetailsScreen.propTypes = {
  route: PropTypes.object,
};
