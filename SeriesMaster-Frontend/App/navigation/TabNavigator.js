/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from "react";
import DiscoverScreen from "../Screens/DiscoverScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from "react-native";
import colors from "../config/colors";

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
      }}
    >
      <Tab.Screen
        name="Discover"
        component={DiscoverScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="magnify" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen name="Screen2" component={DiscoverScreen2} />
    </Tab.Navigator>
  );
}

export default TabNavigator;
