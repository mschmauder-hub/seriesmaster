import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import Tab from "../components/Tab";
import colors from "../config/colors";
import PropTypes from "prop-types";
import Watchlist from "../components/Watchlist";
import CompletedList from "../components/CompletedList";
import { getMyShows } from "../api/getMyShows";

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
  const [activeTab, setActiveTab] = useState("watchlist");
  const [watchlist, setWatchlist] = useState([]);
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    async function fetchMyShows() {
      const shows = await getMyShows(activeTab);
      if (activeTab === "watchlist") {
        setWatchlist(shows);
        return;
      }
      setCompleted(shows);
    }
    fetchMyShows();
  }, [activeTab]);

  return (
    <Container>
      <StyledView>
        <Tab
          title="Watchlist"
          onPress={() => setActiveTab("watchlist")}
          isActive={activeTab === "watchlist"}
        />
        <Tab
          title="Completed"
          onPress={() => setActiveTab("completed")}
          isActive={activeTab === "completed"}
        />
      </StyledView>

      {activeTab === "completed" &&
        completed?.map((show) => (
          <CompletedList
            key={show.id}
            show={show}
            onPress={() =>
              navigation.navigate("Details", {
                title: show.title,
                id: show.id,
              })
            }
          />
        ))}
      {activeTab === "watchlist" &&
        watchlist?.map((show) => (
          <Watchlist
            key={show.id}
            show={show}
            onPress={() =>
              navigation.navigate("Details", {
                title: show.title,
                id: show.id,
              })
            }
          />
        ))}
    </Container>
  );
};

export default MyShowsScreen;

MyShowsScreen.propTypes = {
  navigation: PropTypes.object,
};
