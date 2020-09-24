import React, { useContext, useState } from "react";
import { Image } from "react-native";
import styled from "styled-components/native";
import { login } from "../api/login";
import logo from "../assets/logo.png";
import AppButton from "../components/AppButton";
import AppInputText from "../components/AppInputText";
import Screen from "./Screen";
import jwtDecode from "jwt-decode";
import AuthContext from "../auth/context";

const Container = styled.View`
  justify-content: center;
  flex: 1;
`;

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authContext = useContext(AuthContext);

  async function handleOnPress() {
    const credentials = { email, password };
    const jwtToken = await login(credentials);

    const user = await jwtDecode(jwtToken);

    authContext.setUser(user);
  }

  return (
    <Screen>
      <Image source={logo} />
      <Container>
        <AppInputText
          autoCapitalize="none"
          icon="email"
          iconSize={25}
          placeholder="E-mail"
          input={email}
          onChange={setEmail}
          keyboardType="email-address"
        />
        <AppInputText
          autoCapitalize="none"
          icon="lock"
          iconSize={25}
          placeholder="Password"
          input={password}
          onChange={setPassword}
          secureTextEntry
        />
        <AppButton title="Login" onPress={handleOnPress} />
      </Container>
    </Screen>
  );
};

export default LoginScreen;
