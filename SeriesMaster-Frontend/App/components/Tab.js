import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import styled from "styled-components/native";
import colors from "../config/colors";
import PropTypes from "prop-types";

const StyledView = styled.View`
  border-width: 1px;
  border-color: ${colors.secondary};
  border-bottom-color: ${colors.dark};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  flex: 1;
  margin: 5px;
  align-items: center;
`;

const StyledText = styled.Text`
  color: ${colors.primary};
`;

const Tab = ({ onPress, title }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <StyledView>
        <StyledText>{title}</StyledText>
      </StyledView>
    </TouchableWithoutFeedback>
  );
};

export default Tab;

Tab.propTypes = {
  onPress: PropTypes.func,
  title: PropTypes.string,
};
