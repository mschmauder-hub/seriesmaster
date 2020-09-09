import React from "react";
import styled from "styled-components/native";
import colors from "../config/colors";
import fonts from "../config/fonts";
import PropTypes from "prop-types";

const StyledText = styled.Text`
  color: ${colors.primary};
  font-size: ${fonts.text};
`;

const AppText = ({ cardText }) => {
  return <StyledText>{cardText}</StyledText>;
};

export default AppText;

AppText.propTypes = {
  cardText: PropTypes.string,
};
