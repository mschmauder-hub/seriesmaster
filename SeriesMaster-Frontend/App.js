import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./App/navigation/TabNavigator";
import AuthContext from "./App/auth/context";
import tokenStorage from "./App/auth/tokenStorage";
import AuthStack from "./App/navigation/AuthStack";

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
        {user ? <TabNavigator /> : <AuthStack />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
