import React, { useState } from "react";
import styled from "styled-components/native";
import Tab from "../components/Tab";
import colors from "../config/colors";
import PropTypes from "prop-types";
import Watchlist from "../components/Watchlist";
import CompletedList from "../components/CompletedList";

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

      {activeTab === "completed" && (
        <CompletedList
          onPress={() =>
            navigation.navigate("Details", {
              title: "24 ",
              id: 2,
            })
          }
        />
      )}

      {activeTab === "watchlist" && (
        <Watchlist
          onPress={() =>
            navigation.navigate("Details", {
              title: "24 ",
              id: 2,
            })
          }
        />
      )}
    </Container>
  );
};

export default MyShowsScreen;

MyShowsScreen.propTypes = {
  navigation: PropTypes.object,
};
