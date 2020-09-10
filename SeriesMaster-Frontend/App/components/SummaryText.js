import React from "react";
import styled from "styled-components/native";
import colors from "../config/colors";
import fonts from "../config/fonts";
import PropTypes from "prop-types";

const TextContainer = styled.View`
  margin: 10px 20px;
  align-items: center;
`;
const Text = styled.Text`
  font-size: ${fonts.subtext};
  color: ${colors.primary};
  margin: 10px;
`;

const SummaryText = ({ text }) => {
  return (
    <TextContainer>
      <Text>{text}</Text>
    </TextContainer>
  );
};

export default SummaryText;

SummaryText.propTypes = {
  text: PropTypes.string,
};
