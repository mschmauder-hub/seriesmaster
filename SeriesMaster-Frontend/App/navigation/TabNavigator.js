/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from "react-native";
import colors from "../config/colors";
import StackNavigator from "./StackNavigator";

const Tab = createBottomTabNavigator();

function DiscoverScreen2() {
  return (
    <View>
      <Text>View2</Text>
    </View>
  );
}

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
        component={DiscoverScreen2}
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
