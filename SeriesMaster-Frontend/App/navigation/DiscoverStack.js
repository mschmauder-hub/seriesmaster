import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DiscoverScreen from "../Screens/DiscoverScreen";
import DetailsScreen from "../Screens/DetailsScreen";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Stack = createStackNavigator();

function DiscoverStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.dark,
          borderBottomColor: colors.grey,
        },
        headerTintColor: colors.primary,
        headerTitleAlign: "center",
        // eslint-disable-next-line react/display-name
        headerRight: () => (
          <MaterialCommunityIcons
            name="menu"
            color={colors.primary}
            size={22}
            style={{ marginRight: 10 }}
          />
        ),
      }}
    >
      <Stack.Screen name="Discover" component={DiscoverScreen} />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={({ route }) => ({ title: route.params.title })}
      />
    </Stack.Navigator>
  );
}

export default DiscoverStack;
