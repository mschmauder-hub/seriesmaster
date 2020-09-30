/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { useEffect } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import colors from "../config/colors";
import DiscoverStack from "./DiscoverStack";
import MyShowsStack from "./MyShowsStack";
import ProfileScreen from "../Screens/ProfileScreen";

const Tab = createBottomTabNavigator();

function TabNavigator() {
  useEffect(() => {}, []);

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: colors.dark,
        inactiveBackgroundColor: colors.dark,
        activeTintColor: colors.secondary,
        inactiveTintColor: colors.grey,
        showLabel: false,
        style: { borderTopColor: colors.grey },
      }}
    >
      <Tab.Screen
        name="Discover"
        component={DiscoverStack}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="magnify" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="MyShows"
        component={MyShowsStack}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="view-list"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
