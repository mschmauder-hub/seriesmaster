import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";

const StyledView = styled.View`
  width: 100%;
`;

const List = ({ children }) => {
  return <StyledView>{children}</StyledView>;
};

export default List;

List.propTypes = {
  children: PropTypes.any,
};
