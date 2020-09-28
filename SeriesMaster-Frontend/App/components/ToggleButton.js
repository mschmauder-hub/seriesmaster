import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import colors from "../config/colors";
import fonts from "../config/fonts";

const Container = styled.TouchableOpacity`
  flex-direction: row;
  background: ${colors.grey};
  padding: 20px 20px;
  width: 40%;
  margin: 10px;
  align-items: center;
  justify-content: center;
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
