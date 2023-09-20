import React, { useContext } from "react";
import { Link, NavLink, Navigate } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { THEME_COLORS } from "../../../ThemeConfig";
import VerificationHeader from "../../genaral/header/VerificationHeader";
import { Context } from "../../contexts/Store";

function VerificationSuccessful() {
  const { dispatch } = useContext(Context);
  const navigate = useNavigate();
  const handleLogIn = (e) => {
    e.preventDefault()
    dispatch({
      type: "UPDATE_USER_DATA",
      user_data: {
        is_verified: false,
      },
    });
    navigate('/auth/login-page/')
  }

  return (
    <>
      <MainContainer>
        <Wrapper>
          <Container>
            <Top>
              <VerificationHeader />
            </Top>
            <Bottom>
              <Verification>
                <ImageBox>
                  <Image
                    src={require("../../../assets/image/loginpage/verificatonpages/verification_successful.png")}
                    alt="verification_successful"
                  />
                </ImageBox>
                <Titile>
                  <Heading>Your account verification is Successful</Heading>
                  <SubTitile>Your account verification is Successful</SubTitile>
                </Titile>
                <Log>
                  <Chip to="/" onClick={handleLogIn}>Login now</Chip>
                </Log>
              </Verification>
            </Bottom>
          </Container>
        </Wrapper>
      </MainContainer>
    </>
  );
}

export default VerificationSuccessful;
const MainContainer = styled.div``;
const Wrapper = styled.div`
  margin: 0 auto;
`;
const Container = styled.div``;
const Top = styled.div`
  margin-bottom: 130px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 620px;
`;
const Image = styled.img``;
const ImageBox = styled.div`
  padding: 64px 40px 35px 40px;
`;
const Heading = styled.h3`
  text-align: center;
  font-size: 24px;
  font-family: "DM_sans";
  font-weight: 700;
  margin-bottom: 14px;
  @media all and (max-width: 980px) {
    font-size: 22px;
  }
  @media all and (max-width: 768px) {
    font-size: 20px;
  }
`;
const SubTitile = styled.p`
  text-align: center;
  font-size: 16px;
  font-family: "DM_sans";
  font-weight: 400;
  line-height: 1.4em;
  @media all and (max-width: 768px) {
    font-size: 15px;
  }
`;
const Verification = styled.div`
  width: 500px;
  box-shadow: ${THEME_COLORS.elevation_expert_e3};
  border-radius: 10px;
  padding: 30px;
`;
const Titile = styled.div`
  margin-bottom: 30px;
`;
const Chip = styled(Link)`
  background-color: ${THEME_COLORS.chips_blue_on_container_2};
  padding: 10px;
  border-radius: 5px;
  color: ${THEME_COLORS.white};
  font-family: "DM_sans";
  font-size: 14px;
  font-weight: 500;
`;
const Log = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
