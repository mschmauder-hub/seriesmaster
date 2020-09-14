/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import colors from "../config/colors";
import StackNavigator from "./StackNavigator";
import MyShowsScreen from "../Screens/MyShowsScreen";

const Tab = createBottomTabNavigator();

function TabNavigator() {
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
        component={StackNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="magnify" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Screen2"
        component={MyShowsScreen}
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
    </Tab.Navigator>
  );
}

export default TabNavigator;
