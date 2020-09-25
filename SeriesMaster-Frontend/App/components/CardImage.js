import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";

const Image = styled.Image`
  height: 125px;
  width: 125px;
  border-radius: 25px;
`;

const CardImage = ({ imageSrc }) => {
  return <Image source={{ uri: imageSrc }} />;
};

export default CardImage;

CardImage.propTypes = {
  imageSrc: PropTypes.string,
};
