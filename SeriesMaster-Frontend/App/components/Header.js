import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";

const HeaderStyle = styled.View`
  display: flex;
  flex-direction: row;
  padding: 10px;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-bottom-color: #707070;
`;

const StyledText = styled.Text`
  margin: auto;
  padding-left: 30px;
  color: #fff;
  font-size: 16px;
`;

const StyledImage = styled.Image`
  height: 30px;
  width: 30px;
`;

const Header = ({ title }) => {
  return (
    <HeaderStyle>
      <StyledText>{title}</StyledText>
      <StyledImage source={require("../assets/menu-white.svg")} />
    </HeaderStyle>
  );
};

export default Header;

Header.propTypes = {
  title: PropTypes.string,
};
