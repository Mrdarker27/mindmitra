/** @format */

import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { THEME_COLORS } from "../../../ThemeConfig";
import { Context } from "../../contexts/Store";
import Left from "./LoginPageLeft";

function LoginPage() {
  //states
  const [isChecked, setChecked] = useState(false);
  const [viewPassword, setViewPassword] = useState(false);
  const [handleBorder, setBorder] = useState(false);
  const [isError, setError] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { dispatch } = useContext(Context);

  const verifyDetails = () => {
    var Continue = true;
    if (!userName) {
      setError(true);
      Continue = false;
    } else if (!password) {
      setError(true);
      Continue = false;
    } else if (!isChecked) {
      setError(true);
      Continue = false;
    } else {
      Continue = true;
      setError(false);
    }
    return Continue;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBorder(true);
    var canContinue = verifyDetails();
    if (canContinue) {
      dispatch({
        type: "UPDATE_USER_DATA",
        user_data: {
          is_verified: true,
          profile_status: true,
        },
      });
      navigate("/");
    }
  };
  return (
    <MainContainer>
      <Wrapper>
        <Container>
          <Left />
          <Right>
            <RightContainer>
              <LogoBox>
                <LogoImage
                  src={
                    require("../../../assets/image/loginpage/logo.svg").default
                  }
                  alt="logo"
                />
              </LogoBox>
              <TopText>
                <Titile>Welcome Again, Login</Titile>
                <SubTitile>
                  Welcome to the MindMitra community of <br /> expert
                  psychologists!
                </SubTitile>
              </TopText>
              <Inputs>
                <InputUser>
                  <UserBox>
                    <UserIcon
                      src={
                        require("../../../assets/image/loginpage/account_circle.svg")
                          .default
                      }
                      alt="account_circle"
                    />
                  </UserBox>
                  <UserName
                    type="text"
                    placeholder="Enter Username"
                    name="username"
                    required
                    value={userName}
                    onChange={(e) => {
                      setUserName(e.target.value);
                    }}
                    onKeyDown={(e) => {
                      if (e.keyCode === 13 || e.which === 13) {
                        handleSubmit(e);
                      }
                    }}
                  />
                  {isError && !userName && (
                    <ErrorMessage>Enter your username</ErrorMessage>
                  )}
                </InputUser>
                <InputBox>
                  <PassBox>
                    <PassIcon
                      src={
                        require("../../../assets/image/loginpage/lock.svg")
                          .default
                      }
                      alt="lock"
                    />
                  </PassBox>
                  <PAssWord
                    type={viewPassword ? "text" : "password"}
                    placeholder="Enter Password"
                    name="password"
                    required
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    onKeyDown={(e) => {
                      if (e.keyCode === 13 || e.which === 13) {
                        handleSubmit(e);
                      }
                    }}
                  />
                  <Eye onClick={() => setViewPassword(!viewPassword)}>
                    <img
                      src={
                        require("../../../assets/image/loginpage/visibility.svg")
                          .default
                      }
                      alt="visibility"
                    />
                  </Eye>
                  {isError && !password && (
                    <ErrorMessage>Enter your password</ErrorMessage>
                  )}
                </InputBox>
              </Inputs>
              <For to="/auth/ForgotPage">Forget Password?</For>
              <Box>
                <CheckBox
                  onClick={() => setChecked(!isChecked)}
                  border={isChecked}
                  handleBorder={handleBorder}
                >
                  {isChecked && (
                    <CheckBoxIcon
                      src={
                        require("../../../assets/image/loginpage/profilecreatepage/Check-box.svg")
                          .default
                      }
                      alt="checkbox"
                    />
                  )}
                </CheckBox>{" "}
                {""}
                <Check>
                  I Agree to mindmitra {""} <TCBox> Terms and Policy</TCBox>
                </Check>
              </Box>

              <ButtonBox
                onClick={(e) => {
                  handleSubmit(e);
                }}
              >
                Login
              </ButtonBox>
              <Expert>
                Don't you have an account?{" "}
                <Log to="/auth/register-page"> Create Account</Log>{" "}
              </Expert>
            </RightContainer>
          </Right>
        </Container>
      </Wrapper>
    </MainContainer>
  );
}

export default LoginPage;
const CheckBoxIcon = styled.img``;
const PassIcon = styled.img``;
const UserIcon = styled.img``;
const PAssWord = styled.input`
  border: none;
  background-color: ${THEME_COLORS.light_200};
  padding-left: 10px;
  height: 20px;
  font-size: 20px;
  width: 100%;
  cursor: pointer;
  :focus {
    outline: none;
  }
  ::placeholder {
    font-size: 14px;
    font-weight: 400;
  }
`;
const UserName = styled.input`
  border: none;
  background-color: ${THEME_COLORS.light_200};
  padding-left: 10px;
  height: 50px;
  font-size: 20px;
  width: 100%;
  cursor: pointer;
  :focus {
    outline: none;
  }

  ::placeholder {
    font-size: 14px;
    font-weight: 400;
  }
`;
const ErrorMessage = styled.p`
  font-size: 14px;
  color: ${THEME_COLORS.red_error};
  position: absolute;
  bottom: -24px;
  left: 0px;
`;
const LogoImage = styled.img``;

const Eye = styled.div`
  margin-right: 15px;
  margin-top: 7px;
  width: 20px;
  cursor: pointer;
  img {
    display: block;
    width: 100%;
  }
`;
const UserBox = styled.div`
  width: 5%;
`;
const PassBox = styled.div`
  width: 5%;
`;
const Check = styled.div`
  display: flex;
  color: ${THEME_COLORS.text_para};
  margin-left: 10px;
  @media all and (max-width: 1280px) {
    font-size: 14px;
  }
`;
const TCBox = styled(Link)`
  text-decoration: underline;
  color: ${THEME_COLORS.chips_blue_on_container_2};
  margin-left: 5px;
`;

const Inputs = styled.div``;
const Box = styled.div`
  position: relative;
  margin-bottom: 20px;
  display: flex;
`;
const CheckBox = styled.div`
  width: 19px;
  height: 19px;
  border-radius: 5px;
  margin-top: 1px;
  cursor: pointer;
  border: ${({ border, handleBorder }) =>
    border === false && handleBorder
      ? `1px solid red`
      : `1px solid ${THEME_COLORS.dark_200}`};
  @media all and (max-width: 1280px) {
    margin-top: 0;
    width: 15px;
    height: 15px;
  }
`;
const For = styled(Link)`
  text-decoration: underline;
  color: ${THEME_COLORS.secondary};
  text-align: end;
  display: block;
  margin-bottom: 15px;
  @media all and (max-width: 1280px) {
    font-size: 12px;
  }
`;
const MainContainer = styled.div`
  height: calc(100vh - 80px);
`;
const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  @media all and (max-width: 1400px) {
    width: 82%;
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 100px;
`;

const Right = styled.div`
  width: 40%;
  @media all and (max-width: 1920px) {
    margin-right: 150px;
    width: 35%;
  }
  @media all and (max-width: 1440px) {
    width: 40%;
    margin-right: 0px;
  }
  @media all and (max-width: 1280px) {
    width: 35%;
  }
  @media all and (max-width: 1080px) {
    width: 37%;
  }
  @media all and (max-width: 980px) {
    width: 100%;
    padding: 20px 0px;
  }
`;
const LogoBox = styled.div`
  width: 9%;
  @media all and (max-width: 1440px) {
    width: 12%;
  }
`;
const TopText = styled.div``;
const Titile = styled.h5`
  font-size: 24px;
  margin: 30px 0 7px 0;
  color: ${THEME_COLORS.text_title};
  font-family: "DM_sans_bold";

  @media all and (max-width: 1050px) {
    font-size: 20px;
  }
`;
const SubTitile = styled.p`
  color: ${THEME_COLORS.text_para};
  font-size: 16px;
  font-weight: 300;
  line-height: 20px;
  @media all and (max-width: 1050px) {
    font-size: 14px;
    br {
      display: none;
    }
  }
`;

const InputUser = styled.div`
  position: relative;
  background-color: ${THEME_COLORS.light_200};
  height: 50px;
  display: flex;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 300;
  padding: 0 15px;
  align-items: center;
  margin-top: 25px;
  margin-bottom: 25px;
`;
const InputBox = styled.div`
  position: relative;
  background-color: ${THEME_COLORS.light_200};
  height: 50px;
  display: flex;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 300;
  padding: 0 15px;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 14px;
  @media all and (max-width: 1280px) {
    height: 35px;
  }
`;
const ButtonBox = styled.span`
  background-color: ${THEME_COLORS.chips_blue_on_container_2};
  color: ${THEME_COLORS.white};
  text-align: center;
  padding: 14px 24px;
  text-decoration: none;
  border-radius: 8px;
  margin-top: 5px;
  border: none;
  cursor: pointer;
  margin-bottom: 30px;
  display: block;
  font-family: "DM_sans_bold";
`;
const Log = styled(Link)`
  color: ${THEME_COLORS.secondary};
  text-decoration: underline;
`;
const Expert = styled.h5`
  font-size: 18px;
  font-weight: 300;
  cursor: pointer;
  text-align: center;
  color: ${THEME_COLORS.text_para};

  @media all and (max-width: 1280px) {
    font-size: 15px;
  }
  @media all and (max-width: 1050px) {
    font-size: 13px;
  }
`;
const RightContainer = styled.div``;
