import styled from "styled-components/native";
import React from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import colors from "../config/colors";
import PropTypes from "prop-types";

const Text = styled.Text`
  color: ${colors.grey};
`;

const TouchableText = ({ title, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Text>{title}</Text>
    </TouchableWithoutFeedback>
  );
};

export default TouchableText;

TouchableText.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
};
