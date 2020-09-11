import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./App/navigation/StackNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
      {/* <TabNavigator /> */}
    </NavigationContainer>
  );
}
