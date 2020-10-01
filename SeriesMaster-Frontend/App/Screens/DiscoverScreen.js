import React, { useEffect, useState } from "react";
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
import registerForPushNotifications from "../notifications/register";
import * as Notifications from "expo-notifications";

const Container = styled.View`
  flex: 1;
  align-items: center;
  background: #20232a;
`;

const Main = styled.View`
  background: ${colors.dark};
  width: 100%;
  flex: 1;
`;
const CardsContainer = styled.View`
  flex-flow: row wrap;
  justify-content: space-around;
  margin: 20px 10px;
`;

Notifications.setNotificationHandler({
  handleNotification: () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const DiscoverScreen = ({ navigation }) => {
  const [query, setQuery] = useState("");
  const [tvShows, setTvShows] = useState([]);
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    registerForPushNotifications();

    const responseListener = Notifications.addNotificationResponseReceivedListener(
      () => navigation.navigate("Profile")
    );

    fetchShows();
    async function fetchShows() {
      const shows = await getShows(debouncedQuery);
      setTvShows(shows);
    }

    return () => {
      Notifications.removeNotificationSubscription(responseListener);
    };
  }, [debouncedQuery]);

  return (
    <Container>
      <Main>
        <AppInputText placeholder="Search" input={query} onChange={setQuery} />
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
                <AppText>{tvShow.title}</AppText>
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
