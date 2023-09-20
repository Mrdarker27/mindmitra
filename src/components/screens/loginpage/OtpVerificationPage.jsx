import React, { useState } from "react";

// package
import OtpInput from "react-otp-input";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

// fonts
import { THEME_COLORS } from "../../../ThemeConfig";
import VerifyOtpPage from "../../genaral/chip/VerifyOtpPage";

function OtpVerificationPage() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isError, setError] = useState(false);
  const { email } = useParams();

  const verifyOtp = () => {
    let Continue = true;
    if (!otp || otp.length !== 4) {
      setError(true);
      Continue = false;
    } else {
      Continue = true;
    }
    return Continue;
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    if (verifyOtp()) {
      console.log("Submitted otp:", "otp", otp);
      navigate("/auth/set-new-password");
    }
  };
  console.log(otp);

  return (
    <MainContainer>
      <Wrapper>
        <MainBox>
          <Container>
            <LogoBox>
              <Logo
                src={
                  require("../../../assets/image/loginpage/logo.svg").default
                }
                alt="logo"
              />
            </LogoBox>
            <TextBox>
              <Title>Verify OTP</Title>
              <Description>
                Enter OTP that has sent to your Email <br />
                <div>{email}</div>
              </Description>
            </TextBox>
            <InputBox>
              <OtpInput
                value={otp}
                onChange={(e) => setOtp(e)}
                numInputs={4}
                placeholder={""}
                inputStyle={"OtpInput"}
                renderInput={(props) => <input {...props} />}
                inputType="tel"
              />
            </InputBox>
            {isError &&
              (otp ? (
                <ErrorMessage>enter a valid otp</ErrorMessage>
              ) : (
                <ErrorMessage>enter your otp</ErrorMessage>
              ))}
            <VerifyOtpPage
              onClick={(e) => {
                handleSubmit(e);
              }}
            />
            <BackBox to="/">
              <Subtitle>Resend OTP</Subtitle>
            </BackBox>
          </Container>
        </MainBox>
      </Wrapper>
    </MainContainer>
  );
}

export default OtpVerificationPage;
const MainContainer = styled.div`
  background: ${THEME_COLORS.light_200};
  height: 100vh;
  display: flex;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MainBox = styled.div`
  background-color: ${THEME_COLORS.white};
  display: inline-block;
  margin: 0 auto;
  border-radius: 15px;
`;
const Container = styled.div`
  padding: 30px 25px;
  box-shadow: 0px 12px 12px rgba(0, 0, 0, 0.04);
`;
const TextBox = styled.div``;
const LogoBox = styled.div`
  width: 15%;
  margin-bottom: 30px;
`;
const Logo = styled.img``;
const Title = styled.h3`
  font-size: 24px;
  color: ${THEME_COLORS.text_title};
  margin-bottom: 20px;
  font-family: "DM_sans_bold";
`;
const Description = styled.p`
  font-size: 16px;
  color: ${THEME_COLORS.text_para};
  margin-bottom: 30px;
  div {
    color: ${THEME_COLORS.chips_blue_on_container_2};
  }
`;
const InputBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  div {
    justify-content: space-between;
    /* width: 95%; */
    gap: 10px;
  }

  input {
    width: 5.5em !important;
    height: 3.3em !important;
    font-size: 16px;
    border-radius: 8px;
    border: none;
    background-color: ${THEME_COLORS.light_200};
    :focus {
      border: 3px solid ${THEME_COLORS.chips_blue_on_container_2};
      background-color: ${THEME_COLORS.white};
    }
  }
`;
const ErrorMessage = styled.p`
  font-size: 14px;
  color: ${THEME_COLORS.red_error} !important;
  margin-left: 10px;
`;

const BackBox = styled(Link)`
  display: flex;
  text-decoration: none;
  align-items: center;
  width: fit-content;
  margin: 0 auto;
  justify-content: space-between;
`;

const Subtitle = styled.h6`
  text-decoration: none;
  color: ${THEME_COLORS.chips_blue_on_container};
  font-size: 14px;
`;
