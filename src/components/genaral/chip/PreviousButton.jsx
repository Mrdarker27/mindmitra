import React from "react";
import styled from "styled-components";
import { THEME_COLORS } from "../../../ThemeConfig";

function PreviousButton( {onClick}) {
  return <Previous onClick={onClick}>Previous</Previous>;
}

export default PreviousButton;
const Previous = styled.button`
  background-color: ${THEME_COLORS.white};
  cursor: pointer;
  color: ${THEME_COLORS.dark_500};
  font-family: "DM_sans_medium";
  font-size: 14px;
  width: 105px;
  height: 48px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 24px;
  border: 2px solid ${THEME_COLORS.light_400};
  border-radius: 8px;
`;
