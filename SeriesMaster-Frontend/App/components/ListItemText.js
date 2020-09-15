import React from "react";
import styled from "styled-components/native";
import colors from "../config/colors";
import fonts from "../config/fonts";
import PropTypes from "prop-types";

const Text = styled.Text`
  color: ${colors.primary};
  font-size: ${fonts.title};
`;

const ListItemText = ({ title }) => {
  return <Text>{title}</Text>;
};

export default ListItemText;

ListItemText.propTypes = {
  title: PropTypes.string,
};
