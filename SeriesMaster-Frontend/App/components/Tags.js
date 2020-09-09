import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";

const TagContainer = styled.View`
  background: ${(props) =>
    `rgba(${props.color ? props.color : "168, 158, 158"},0.2)`};
  padding: 10px;
  margin: 10px;
`;

const TagText = styled.Text`
  color: ${(props) => `rgb(${props.color ? props.color : "168, 158, 158"})`};
`;

const Tags = ({ tag, color }) => {
  return (
    <TagContainer color={color}>
      <TagText color={color}>{tag}</TagText>
    </TagContainer>
  );
};

export default Tags;

Tags.propTypes = {
  tag: PropTypes.string,
  color: PropTypes.string,
};
