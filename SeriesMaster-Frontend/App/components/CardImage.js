import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";

const IMG = styled.Image`
  height: 125px;
  width: 125px;
  border-radius: 25px;
  margin: 5px;
`;

const CardImage = ({ image }) => {
  return <IMG source={image} />;
};

export default CardImage;

CardImage.propTypes = {
  image: PropTypes.any,
};
