import Screen from "./Screen";
import React, { useContext } from "react";
import AppButton from "../components/AppButton";
import tokenStorage from "../auth/tokenStorage";
import AuthContext from "../auth/context";

const SettingsScreen = () => {
  const authContext = useContext(AuthContext);

  function handleLogout() {
    tokenStorage.removeToken();
    authContext.setUser();
  }

  return (
    <Screen>
      <AppButton title="Logout" onPress={handleLogout}></AppButton>
    </Screen>
  );
};

export default SettingsScreen;
