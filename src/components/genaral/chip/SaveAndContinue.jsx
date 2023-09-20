import React from "react";
import styled from "styled-components";
import { THEME_COLORS } from "../../../ThemeConfig";

function SaveAndContinue({ onClick }) {
    return <Save onClick={onClick}>Save & Continue</Save>;
}

export default SaveAndContinue;
const Save = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 14px 24px;
    gap: 10px;
    width: 158px;
    height: 48px;
    background: ${THEME_COLORS.chips_blue_on_container_2};
    border-radius: 8px;
    cursor: pointer;
    color: ${THEME_COLORS.white};
    font-family: "DM_sans_medium";
    font-size: 14px;
`;
