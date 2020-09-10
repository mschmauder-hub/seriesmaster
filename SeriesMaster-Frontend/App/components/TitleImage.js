import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";

const Image2 = styled.Image`
  height: 200px;
  width: 200px;
  margin: 20px 0 10px 0;
`;

const TitleImage = ({ imageSrc }) => {
  return <Image2 source={imageSrc} />;
};

export default TitleImage;

TitleImage.propTypes = {
  imageSrc: PropTypes.string,
};
