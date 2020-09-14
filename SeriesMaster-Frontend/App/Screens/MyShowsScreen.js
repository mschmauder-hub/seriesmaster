import React, { useState } from "react";
import { Text } from "react-native";

import styled from "styled-components/native";
import Header from "../components/Header";
import Tab from "../components/Tab";
import colors from "../config/colors";

const Container = styled.View`
  flex: 1;
  align-items: center;
  background: ${colors.dark};
`;

const StyledView = styled.View`
  flex-direction: row;
`;

const MyShowsScreen = () => {
  const [watchlistIsActive, setWatchlistIsActive] = useState(false);
  const [completedIsActive, setCompletedIsActive] = useState(true);

  function handleSetWatchlist() {
    setWatchlistIsActive(true);
    setCompletedIsActive(false);
  }
  function handleSetCompleted() {
    setWatchlistIsActive(false);
    setCompletedIsActive(true);
  }

  return (
    <Container>
      <Header title="MyShows" />
      <StyledView style={{ width: 400 }}>
        <Tab
          title="Watchlist"
          onPress={handleSetWatchlist}
          isActive={watchlistIsActive}
        />
        <Tab title="Completed" onPress={handleSetCompleted} />
      </StyledView>
      {watchlistIsActive && (
        <Text style={{ color: colors.primary }}>Watchlist</Text>
      )}
      {completedIsActive && (
        <Text style={{ color: colors.primary }}>Completed</Text>
      )}
    </Container>
  );
};

export default MyShowsScreen;
