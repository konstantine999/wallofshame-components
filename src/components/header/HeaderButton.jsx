import React from "react";
import { ButtonStyled } from "./HeaderStyled";

function HeaderButton(props) {
  return <ButtonStyled onClick={props.addNewUser}>Create</ButtonStyled>;
}

export default HeaderButton;
