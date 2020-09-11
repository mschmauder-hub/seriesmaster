import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DiscoverScreen from "../Screens/DiscoverScreen";
import DetailsScreen from "../Screens/DetailsScreen";

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Discover" component={DiscoverScreen} />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={({ route }) => ({ title: route.params.name })}
      />
    </Stack.Navigator>
  );
}

export default StackNavigator;
