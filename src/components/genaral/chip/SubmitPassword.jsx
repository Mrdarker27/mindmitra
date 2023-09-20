import React from "react";
import styled from "styled-components";
import { THEME_COLORS } from "../../../ThemeConfig";
function SubmitPassword({ onClick }) {
  return (
    <ButtonBox>
      <Button onClick={onClick}>Submit</Button>
    </ButtonBox>
  );
}

export default SubmitPassword;
const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;
const Button = styled.button`
  background-color: ${THEME_COLORS.chips_blue_on_container};
  color: ${THEME_COLORS.white};
  font-size: 14px;
  display: block;
  border-radius: 7px;
  padding: 15px 0;
  border: none;
  width: 100%;
  cursor: pointer;
  font-family: "DM_sans_bold";
`;
