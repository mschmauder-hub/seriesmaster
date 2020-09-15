import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import colors from "../config/colors";

const StyledListItem = styled.TouchableOpacity`
  flex-direction: row;
  border-color: ${colors.dark};
  border-bottom-color: ${colors.grey};
  width: 100%;
  border-width: 1px;
`;

const ListItem = ({ onPress, children }) => {
  return <StyledListItem onPress={onPress}>{children}</StyledListItem>;
};

export default ListItem;

ListItem.propTypes = {
  children: PropTypes.any,
  onPress: PropTypes.func,
};
