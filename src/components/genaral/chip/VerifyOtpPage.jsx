import React from "react";
import styled from "styled-components";
import { THEME_COLORS } from "../../../ThemeConfig";
function VerifyOtpPage({ onClick }) {
  return (
    <ButtonBox>
      <Button onClick={onClick}>Verify</Button>
    </ButtonBox>
  );
}

export default VerifyOtpPage;
const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  width: 100%;
`;
const Button = styled.button`
  background-color: ${THEME_COLORS.chips_blue_on_container};
  color: ${THEME_COLORS.white};
  font-size: 14px;
  display: block;
  border-radius: 7px;
  padding: 15px 37%;
  border: none;
  cursor: pointer;
  width: 100%;
  font-family: "DM_sans_bold";
`;
