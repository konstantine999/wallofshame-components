import React, { useState } from "react";
import { InputWrapper, InputStyled } from "./InputStyled";

function Input(props) {
  return (
    <div>
      <InputWrapper>
        <InputStyled
          placeholder={props.placeholder}
          onChange={props.getValue}
        />
      </InputWrapper>
    </div>
  );
}

export default Input;
