import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import colors from "../config/colors";
import fonts from "../config/fonts";

const Container = styled.TouchableOpacity`
  background: ${colors.grey};
  padding: 20px;
  width: 40%;
  align-items: center;
  margin: 10px;
`;

const ButtonText = styled.Text`
  font-size: ${fonts.text};
  color: ${(props) => (props.status ? colors.lightblue : colors.primary)};
`;

const ToggleButton = ({ title, onPress, status }) => {
  return (
    <Container onPress={onPress}>
      <ButtonText status={status}>{title}</ButtonText>
    </Container>
  );
};

export default ToggleButton;

ToggleButton.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
  status: PropTypes.bool,
};
