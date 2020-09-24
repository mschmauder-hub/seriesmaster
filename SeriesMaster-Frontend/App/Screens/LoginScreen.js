import React, { useContext, useState } from "react";
import { Image, Text } from "react-native";
import PropTypes from "prop-types";
import styled from "styled-components/native";
import { login } from "../api/login";
import logo from "../assets/logo.png";
import AppButton from "../components/AppButton";
import AppInputText from "../components/AppInputText";
import Screen from "./Screen";
import AuthContext from "../auth/context";
import tokenStorage from "../auth/tokenStorage";
import TouchableText from "../components/TouchableText";

const Container = styled.View`
  justify-content: center;
  flex: 1;
`;

const View = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authContext = useContext(AuthContext);
  const [loginFailed, setLoginFailed] = useState(false);

  async function handleOnPress() {
    try {
      const credentials = { email, password };
      const jwtToken = await login(credentials);

      if (!jwtToken) {
        setLoginFailed(true);
        return;
      }
      tokenStorage.storeToken(jwtToken);
      const user = await tokenStorage.getUser();
      authContext.setUser(user);
    } catch (error) {
      console.log(error);
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
        <View>
          <TouchableText title="Forgot Password" />
          <TouchableText
            title="Sign up"
            onPress={() => navigation.navigate("Register")}
          />
        </View>
        {loginFailed && (
          <Text style={{ color: "red", alignSelf: "center" }}>
            Login invalid
          </Text>
        )}
        <AppButton title="Login" onPress={handleOnPress} />
      </Container>
    </Screen>
  );
};

export default LoginScreen;

LoginScreen.propTypes = {
  navigation: PropTypes.object,
};
