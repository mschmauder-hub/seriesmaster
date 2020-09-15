import React, { useState } from "react";
import styled from "styled-components/native";
import List from "../components/List";
import ListItem from "../components/ListItem";
import ListItemImage from "../components/ListItemImage";
import ListItemText from "../components/ListItemText";
import Tab from "../components/Tab";
import colors from "../config/colors";
import PropTypes from "prop-types";
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

const MyShowsScreen = ({ navigation }) => {
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
          <ListItem
            onPress={() =>
              navigation.navigate("Details", {
                title: "24 Legacy",
                id: 2,
              })
            }
          >
            <ListItemImage imageSrc={imageSrc} />
            <ListItemText title="24 Legacy" />
          </ListItem>
        </List>
      )}
      {completedIsActive && (
        <List>
          <ListItem
            onPress={() =>
              navigation.navigate("Details", {
                title: "24 Legacy",
                id: 2,
              })
            }
          >
            <ListItemImage imageSrc={imageSrc} />
            <ListItemText title="24" />
          </ListItem>
        </List>
      )}
    </Container>
  );
};

export default MyShowsScreen;

MyShowsScreen.propTypes = {
  navigation: PropTypes.object,
};
