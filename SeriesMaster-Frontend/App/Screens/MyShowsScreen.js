import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components/native";
import Tab from "../components/Tab";
import colors from "../config/colors";
import PropTypes from "prop-types";
import Watchlist from "../components/Watchlist";
import CompletedList from "../components/CompletedList";
import { getMyShows } from "../api/getMyShows";
import AuthContext from "../auth/context";

const Container = styled.View`
  flex: 1;
  align-items: center;
  background: ${colors.dark};
`;

const View = styled.View`
  flex-direction: row;
  width: 100%;
`;

const ScrollView = styled.ScrollView`
  width: 100%;
`;

const MyShowsScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState("watchlist");
  const [watchlist, setWatchlist] = useState([]);
  const [completed, setCompleted] = useState([]);
  const { user } = useContext(AuthContext);

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
  }, [activeTab, user]);

  return (
    <Container>
      <View>
        <Tab
          title="Watchlist"
          onPress={() => setActiveTab("watchlist")}
          isActive={activeTab === "watchlist"}
          margin="10px 0 0 10px"
        />
        <Tab
          title="Completed"
          onPress={() => setActiveTab("completed")}
          isActive={activeTab === "completed"}
          margin="10px 10px 0 0"
        />
      </View>
      <ScrollView>
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
      </ScrollView>
    </Container>
  );
};

export default MyShowsScreen;

MyShowsScreen.propTypes = {
  navigation: PropTypes.object,
};
