import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";

const StyledCardImage = styled.Image`
  height: 125px;
  width: 125px;
  border-radius: 25px;
  margin: 5px;
`;

const CardImage = ({ imageSrc }) => {
  return <StyledCardImage source={imageSrc} />;
};

export default CardImage;

CardImage.propTypes = {
  imageSrc: PropTypes.string,
};
