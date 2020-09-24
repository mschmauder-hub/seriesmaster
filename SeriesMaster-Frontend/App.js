import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./App/navigation/TabNavigator";
import LoginScreen from "./App/Screens/LoginScreen";
import AuthContext from "./App/auth/context";
import tokenStorage from "./App/auth/tokenStorage";

export default function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    async function restoreUser() {
      const user = await tokenStorage.getUser();
      setUser(user);
    }
    restoreUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        {user ? <TabNavigator /> : <LoginScreen />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
