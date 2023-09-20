import React from "react";
import styled from "styled-components";
import { THEME_COLORS } from "../../../ThemeConfig";

function LoginPageLeft() {
  return (
    <>
      <Left>
        <ImageBox>
          <img
            src={require("../../../assets/image/loginpage/loginpageimage.png")}
            alt="loginimage"
          />
          <TextImage>
            <HeadImage>Welcome to MindMitra Expert</HeadImage>
            <SubText>
              As an Expert in MindMitra, you have the power to make a difference
              in the lives of many.
            </SubText>
          </TextImage>
        </ImageBox>
      </Left>
    </>
  );
}

export default LoginPageLeft;
const TextImage = styled.div`
  background: ${THEME_COLORS.background_blur};

  -webkit-backdrop-filter: blur(28.5px);
  backdrop-filter: blur(28.5px);
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 26px;
  padding: 30px 20px;
  border-radius: 15px;
  width: 90%;
  border: 2px solid ${THEME_COLORS.background_blur};
  @media all and (max-width: 1440px) {
    width: 87%;
    left: 48%;
    padding: 24px 8px;
    bottom: 17px;
  }
  @media all and (max-width: 1280px) {
    bottom: 10px;
  }
`;
const HeadImage = styled.h1`
  color: ${THEME_COLORS.white};
  font-family: "DM_sans_medium";
  font-weight: 300;
  margin-top: 10px;
  text-align: left;
  font-size: 27px;
  padding-left: 15px;
  margin-bottom: 13px;
  font-size: 26px;

  @media all and (max-width: 1180px) {
    font-size: 25px;
  }
  @media all and (max-width: 1080px) {
    font-size: 20px;
  }
`;
const SubText = styled.p`
  color: ${THEME_COLORS.white};
  margin: 0 auto;
  width: 100%;
  padding-left: 15px;
  opacity: 0.7;
  font-size: 16px;
  font-family: "DM_sans";
  @media all and (max-width: 1080px) {
    font-size: 14px;
  }
`;
const Left = styled.div`
  width: 50%;

  @media all and (max-width: 1920px) {
    width: 47%;
  }
  @media all and (max-width: 1440px) {
    width: 53%;
  }
  @media all and (max-width: 1280px) {
    width: 45%;
  }
`;
const ImageBox = styled.div`
  align-items: center;
  display: flex;
  width: 100%;
  overflow: hidden;
  border-radius: 24px;
  position: relative;
`;
