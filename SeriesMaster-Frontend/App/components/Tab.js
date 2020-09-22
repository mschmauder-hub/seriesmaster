import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import styled from "styled-components/native";
import colors from "../config/colors";
import PropTypes from "prop-types";

const StyledView = styled.View`
  border-width: 2px;
  border-color: ${(props) => (props.isActive ? colors.secondary : colors.grey)};
  border-bottom-color: ${colors.dark};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  flex: 1;
  align-items: center;
  margin-top: 10px;
`;

const StyledText = styled.Text`
  color: ${(props) => (props.isActive ? colors.primary : colors.grey)};
`;

const Tab = ({ onPress, title, isActive }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <StyledView isActive={isActive}>
        <StyledText isActive={isActive}>{title}</StyledText>
      </StyledView>
    </TouchableWithoutFeedback>
  );
};

export default Tab;

Tab.propTypes = {
  onPress: PropTypes.func,
  title: PropTypes.string,
  isActive: PropTypes.bool,
};
