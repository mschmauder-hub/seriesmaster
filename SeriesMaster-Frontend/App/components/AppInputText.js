import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";

const InputContainer = styled.View`
  background: #fcfcfc;
  border-radius: 25px;
  margin: 10px;
  width: 50%;
  align-self: center;
`;

const InputText = styled.TextInput`
  color: #20232a;
  padding: 10px;
  margin-left: 5px;
`;

const AppInputText = ({ placeholder, query, onChange }) => {
  return (
    <InputContainer>
      <InputText
        value={query}
        onChangeText={onChange}
        placeholder={placeholder}
      />
    </InputContainer>
  );
};

AppInputText.propTypes = {
  query: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

export default AppInputText;
