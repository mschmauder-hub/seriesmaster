import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";

const CardContainer = styled.View`
  background: green;
  align-items: center;
  margin: 10px;
`;

const Card = ({ children }) => {
  return <CardContainer>{children}</CardContainer>;
};

export default Card;

Card.propTypes = {
  children: PropTypes.any,
};
