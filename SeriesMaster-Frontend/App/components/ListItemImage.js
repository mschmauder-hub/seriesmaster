import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";

const Image = styled.Image`
  height: 75px;
  width: 75px;
  border-radius: 25px;
  margin: 5px;
`;

const ListItemImage = ({ imageSrc }) => {
  return <Image source={{ uri: imageSrc }}></Image>;
};

export default ListItemImage;

ListItemImage.propTypes = {
  imageSrc: PropTypes.string,
};
