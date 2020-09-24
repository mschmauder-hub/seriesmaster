import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./App/navigation/TabNavigator";
import LoginScreen from "./App/Screens/LoginScreen";
import AuthContext from "./App/auth/context";

export default function App() {
  const [user, setUser] = useState();

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        {user ? <TabNavigator /> : <LoginScreen />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
