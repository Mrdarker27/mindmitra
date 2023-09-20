import React from "react";
import styled from "styled-components";
import { THEME_COLORS } from "../../../ThemeConfig";

function Cancel({ onClick }) {
  return (
    <ExitBox onClick={onClick}>
      <Exit
        src={
          require("../../../assets/image/loginpage/profilecreatepage/close.svg")
            .default
        }
        alt="Exit_icon"
      />
      Cancel
    </ExitBox>
  );
}

export default Cancel;
const ExitBox = styled.span`
  justify-content: end;
  align-items: center;
  display: flex;
  margin-right: 5px;
  color: ${THEME_COLORS.chips_green_on_container};
  cursor: pointer;
  font-size: 14px;
  font-family: "DM_sans";
  text-decoration: none;
`;
const Exit = styled.img`
  width: 2%;
  margin-right: 5px;
`;
