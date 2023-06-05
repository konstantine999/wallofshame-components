import React from "react";
import Input from "../input/Input";
import HeaderButton from "./HeaderButton";
import {
  HeaderStyled,
  H1Styled,
  HeaderLeftWrapper,
  MemberParagraph,
  InputsWrapper,
} from "./HeaderStyled";

function Header(props) {
  return (
    <HeaderStyled>
      <HeaderLeftWrapper>
        <H1Styled>Wall of shame</H1Styled>
        <MemberParagraph>5 Members</MemberParagraph>
      </HeaderLeftWrapper>
      <InputsWrapper>
        <Input placeholder="Name" getValue={props.name} />
        <Input placeholder="Excuse" getValue={props.excuse} />
      </InputsWrapper>
      <HeaderButton addNewUser={props.addNewUser} />
    </HeaderStyled>
  );
}

export default Header;
