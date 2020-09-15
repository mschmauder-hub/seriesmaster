import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import colors from "../config/colors";

const StyledListItem = styled.View`
  flex-direction: row;
  border-color: ${colors.dark};
  border-bottom-color: ${colors.grey};
  width: 100%;
  border-width: 1px;
`;

const ListItem = ({ children }) => {
  return <StyledListItem>{children}</StyledListItem>;
};

export default ListItem;

ListItem.propTypes = {
  children: PropTypes.any,
};
