import React from "react";
import styled from "styled-components/native";
import colors from "../config/colors";
import PropTypes from "prop-types";

const ButtonContainer = styled.TouchableOpacity`
  width: 50%;
  height: 50px;
  align-self: center;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  background-color: ${colors.secondary};
`;

const Text = styled.Text`
  color: ${colors.dark};
`;

const AppButton = ({ title }) => {
  return (
    <ButtonContainer>
      <Text>{title}</Text>
    </ButtonContainer>
  );
};

export default AppButton;

AppButton.propTypes = {
  title: PropTypes.string,
};
