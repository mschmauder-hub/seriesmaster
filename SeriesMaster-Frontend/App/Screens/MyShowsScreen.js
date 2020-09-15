import React, { useState } from "react";
import styled from "styled-components/native";
import Header from "../components/Header";
import List from "../components/List";
import ListItem from "../components/ListItem";
import ListItemImage from "../components/ListItemImage";
import ListItemText from "../components/ListItemText";
import Tab from "../components/Tab";
import colors from "../config/colors";
import imageSrc from "../assets/225030.jpg";

const Container = styled.View`
  flex: 1;
  align-items: center;
  background: ${colors.dark};
`;

const StyledView = styled.View`
  flex-direction: row;
  width: 100%;
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
      <StyledView>
        <Tab
          title="Watchlist"
          onPress={handleSetWatchlist}
          isActive={watchlistIsActive}
        />
        <Tab
          title="Completed"
          onPress={handleSetCompleted}
          isActive={completedIsActive}
        />
      </StyledView>
      {watchlistIsActive && (
        <List>
          <ListItem>
            <ListItemImage imageSrc={imageSrc} />
            <ListItemText title="24 Legacy" />
          </ListItem>
        </List>
      )}
      {completedIsActive && (
        <List>
          <ListItem>
            <ListItemImage imageSrc={imageSrc} />
            <ListItemText title="24" />
          </ListItem>
        </List>
      )}
    </Container>
  );
};

export default MyShowsScreen;
