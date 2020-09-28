import React from "react";
import styled from "styled-components/native";
import Screen from "./Screen";
import fullLogo from "../assets/logo-full.png";

const Loading = styled(Screen)`
  align-items: center;
`;

const Image = styled.Image``;

const LoadingScreen = () => {
  return (
    <Loading>
      <Image source={fullLogo} />
    </Loading>
  );
};

export default LoadingScreen;
