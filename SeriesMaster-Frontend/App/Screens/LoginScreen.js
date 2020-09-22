import React, { useState } from "react";
import { Image } from "react-native";
import styled from "styled-components/native";
import logo from "../assets/logo.png";
import AppButton from "../components/AppButton";
import AppInputText from "../components/AppInputText";
import Screen from "./Screen";

const Container = styled.View`
  justify-content: center;
  flex: 1;
`;

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        <AppButton title="Login" />
      </Container>
    </Screen>
  );
};

export default LoginScreen;
