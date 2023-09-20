import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { THEME_COLORS } from "../../../ThemeConfig";

export default function Header() {
  return (
    <Head>
      <LogoContainer to="/">
        <img
          src={
            require("../../../assets/image/loginpage/header/logofull.svg")
              .default
          }
          alt="Icon"
        />
      </LogoContainer>
    </Head>
  );
}
const Head = styled.header`
  display: flex;
  align-items: center;
  padding: 15px 40px;
  border-bottom: 2px solid ${THEME_COLORS.divider};
  @media all and (max-width: 1920px) {
    padding: 15px 82px;
  }
  @media all and (max-width: 1440px) {
    padding: 15px 42px;
  }
`;

const LogoContainer = styled(Link)`
  width: 170px;
  img {
    width: 100%;
    display: block;
  }
`;
