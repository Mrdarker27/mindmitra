import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { THEME_COLORS } from "../../../ThemeConfig";

function ForgotPage() {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [isError, setError] = useState(false);
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const verifyEmail = () => {
    console.log(regex.test(input));
    var Continue = true;
    if (!regex.test(input)) {
      setError(true);
      Continue = false;
    }else{
      Continue = true
    }
    return Continue
  }    
  const handleSubmit = (event) => {
    event.preventDefault();
  
    if(verifyEmail()){
      console.log("Submitted email:", "email",input);
      navigate(`/auth/otp-verification-page/${input}`);
    }
  };
  return (
    <MainContainer>
      <MainBox>
        <Container>
          <LogoBox>
            <Logo
              src={require("../../../assets/image/loginpage/logo.svg").default}
              alt="logo"
            />
          </LogoBox>
          <TextBox>
            <Title>Forgot Password ?</Title>
            <Description>
              enter your email and associated with your account <br /> and we'll
              send you a otp to reset your password
            </Description>
          </TextBox>
          <form onSubmit={handleSubmit} action="">
            <InputBox>
              <EmailInput
                type="email"
                placeholder="Enter your Email"
                onChange={(e) => setInput(e.target.value)}
                required
                value={input}
              />
               {isError && (
                    <>
                      {input ? (
                        <>
                          {regex.test(input) ? (
                            <ErrorMessage></ErrorMessage>
                          ) : (
                            <ErrorMessage>enter a valid email</ErrorMessage>
                          )}
                        </>
                      ) : (
                        <ErrorMessage>enter your email</ErrorMessage>
                      )}
                    </>
                  )}
            </InputBox>
          </form>
          <ButtonBox>
            <Button
              onClick={(e) => {
                handleSubmit(e)
              }}
            >
              Reset Password
            </Button>
          </ButtonBox>
          <BackBox to="/auth/login-page">
            <BackIcon>
              <IconBack
                src={
                  require("../../../assets/image/loginpage/header/backIcon.svg")
                    .default
                }
                alt="back_icon"
              />
            </BackIcon>
            <Subtitle>Back to login in</Subtitle>
          </BackBox>
        </Container>
      </MainBox>
    </MainContainer>
  );
}

export default ForgotPage;
const MainContainer = styled.div`
  background: ${THEME_COLORS.light_200};
  height: 100vh;
  display: flex;
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
  box-shadow: ${THEME_COLORS.elevation_expert_e2};
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
`;
const InputBox = styled.div`
  margin-bottom: 3%;
`;
const EmailInput = styled.input`
  border: none;
  background-color: ${THEME_COLORS.light_200};
  padding-left: 24px;
  height: 50px;
  font-size: 20px;
  width: 100%;
  cursor: pointer;
  border-radius: 7px;
  cursor: pointer;
  :focus {
    outline: none;
  }

  ::placeholder {
    font-size: 16px;
    font-weight: 400;
  }
`;
const ErrorMessage = styled.p`
  font-size: 14px;
  color: ${THEME_COLORS.red_error} !important;

`;
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
const BackBox = styled(Link)`
  display: flex;
  text-decoration: none;
  align-items: center;
  width: 35%;
  margin: 0 auto;
  justify-content: space-between;
`;
const BackIcon = styled.div`
  width: 16%;
`;
const IconBack = styled.img``;
const Subtitle = styled.h6`
  text-decoration: none;
  color: ${THEME_COLORS.chips_blue_on_container};
  font-size: 14px;
`;