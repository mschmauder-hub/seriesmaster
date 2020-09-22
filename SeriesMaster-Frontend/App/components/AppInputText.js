import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

const InputContainer = styled.View`
  background: ${colors.primary};
  border-radius: 25px;
  margin: 5px;
  width: 70%;
  align-self: center;
  flex-direction: row;
  align-items: center;
`;

const InputText = styled.TextInput`
  color: ${colors.dark};
  padding: 10px;
  margin-left: 5px;
`;

const Icon = styled(MaterialCommunityIcons)`
  margin-left: 10px;
  color: ${colors.grey};
`;

const AppInputText = ({
  icon,
  iconSize,
  placeholder,
  input,
  onChange,
  ...otherProps
}) => {
  return (
    <InputContainer>
      {icon && <Icon name={icon} size={iconSize} />}
      <InputText
        value={input}
        onChangeText={onChange}
        placeholder={placeholder}
        {...otherProps}
      />
    </InputContainer>
  );
};

AppInputText.propTypes = {
  input: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  icon: PropTypes.string,
  iconSize: PropTypes.number,
};

export default AppInputText;
