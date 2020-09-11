import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";

const CardContainer = styled.TouchableOpacity`
  align-items: center;
  margin: 10px;
`;

const Card = ({ onPress, children }) => {
  return <CardContainer onPress={onPress}>{children}</CardContainer>;
};

export default Card;

Card.propTypes = {
  onPress: PropTypes.func,
  children: PropTypes.node,
};
