import React, { useState } from "react";
import { Image } from "react-native";
import styled from "styled-components/native";
import { register } from "../api/register";
import logo from "../assets/logo.png";
import AppButton from "../components/AppButton";
import AppInputText from "../components/AppInputText";
import Screen from "./Screen";

const Container = styled.View`
  justify-content: center;
  flex: 1;
`;

const Text = styled.Text`
  color: red;
  align-self: center;
`;

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [failed, setFailed] = useState(false);

  async function handleOnPress() {
    const credentials = { email, password };
    const result = await register(credentials);

    if (!result) {
      console.log(result);
      setFailed(true);
      return;
    }
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
        {failed && <Text>Register Failed! Please try again.</Text>}
        <AppButton title="Register" onPress={handleOnPress} />
      </Container>
    </Screen>
  );
};

export default RegisterScreen;
