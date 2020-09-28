import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./App/navigation/TabNavigator";
import AuthContext from "./App/auth/context";
import tokenStorage from "./App/auth/tokenStorage";
import AuthStack from "./App/navigation/AuthStack";
import LoadingScreen from "./App/Screens/LoadingScreen";

export default function App() {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function restoreUser() {
      setLoading(true);
      const user = await tokenStorage.getUser();
      setUser(user);
      setLoading(false);
    }
    restoreUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        {loading && <LoadingScreen />}
        {user ? <TabNavigator /> : <AuthStack />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
