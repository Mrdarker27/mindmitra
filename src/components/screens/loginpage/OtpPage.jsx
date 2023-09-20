import React, { useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { THEME_COLORS } from "../../../ThemeConfig";
import { Context } from "../../contexts/Store";
import Left from "./LoginPageLeft";
import { useState } from "react";
function OtpPage() {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(Context);
  const phoneNumber = state.user_data?.about_info.phone;
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const [attr, setattr] = useState("");

  const handleSubmit = () => {
    if (otp == "") {
      setError("otp field is required");
    } else if (otp.length < 4 || otp.length > 4) {
      setError(" Invalid Otp. Otp should have 4 digits");
    } else {
      dispatch({
        type: "UPDATE_USER_DATA",
        user_data: {
          is_verified: true,
        },
      });
      navigate("/about-you");
    }
  };
  const handleKeyPress = (event) => {
    const keyCode = event.which || event.keyCode;
    if (keyCode < 48 || keyCode > 57) {
      // only allow numeric key codes
      event.preventDefault();
    }
    if (keyCode === 13) {
      handleSubmit(event);
    }
  };
  return (
    <>
      <Main>
        <Container>
          <Left />
          <Right>
            <RightContainer>
              <LogoBox>
                <img
                  src={
                    require("../../../assets/image/loginpage/logo.svg").default
                  }
                  alt="logo"
                />
              </LogoBox>
              <TopText>
                <Titile>Verify OTP</Titile>{" "}
                <SubTitile>
                  Enter OTP that has sent to your mobile number <br /> +91
                  ******* {phoneNumber?.slice(7, 10)}{" "}
                </SubTitile>
              </TopText>
              <InputBox className={attr === "otp" ? "active" : ""}>
                <Otp
                  type="tel"
                  id="otp"
                  maxLength={4}
                  className="active"
                  placeholder="Enter OTP"
                  onKeyPress={handleKeyPress}
                  onChange={(e) => {
                    setOtp(e.target.value);
                  }}
                  value={otp}
                  onClick={() => setattr("otp")}
                />
              </InputBox>
              <ErrorMessage>{error}</ErrorMessage>
              <ButtonBox
                onClick={() => {
                  handleSubmit();
                }}
              >
                Verify
              </ButtonBox>{" "}
              <Resend>
                Resend <Log>OTP?</Log>{" "}
              </Resend>
            </RightContainer>
          </Right>
        </Container>
      </Main>
    </>
  );
}

export default OtpPage;

const Otp = styled.input`
  border: none;
  background-color: ${THEME_COLORS.light_200};
  padding-left: 10px;
  height: 20px;
  font-size: 20px;
  width: 100%;
  cursor: pointer;
  @media all and (max-width: 1280px) {
    font-size: 16px;
  }
  @media all and (max-width: 1050px) {
    font-size: 15px;
  }
  :focus {
    outline: none;
  }

  ::placeholder {
    font-size: 16px;
    font-weight: 400;
    @media all and (max-width: 1050px) {
      font-size: 14px;
    }
  }
`;
const Log = styled.a`
  color: ${THEME_COLORS.secondary};
`;
const Resend = styled.h5`
  font-size: 18px;
  font-weight: 300;
  cursor: pointer;
  text-align: center;
  color: ${THEME_COLORS.text_para};
  margin-top: 6%;
  @media all and (max-width: 1050px) {
    font-size: 16px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Main = styled.div`
  max-height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 200px;
  @media all and (max-width: 1440px) {
    padding: 150px;
  }
  @media all and (max-width: 1340px) {
    padding: 200px 150px;
  }
  @media all and (max-width: 1280px) {
    padding: 200px 100px;
  }
  @media all and (max-width: 980px) {
    padding: 200px 70px;
  }
  @media all and (max-width: 800px) {
    padding: 200px 40px;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
`;
const RightContainer = styled.div`
  width: 450px;
  @media all and (max-width: 1920px) {
    margin-right: 235px;
  }
  @media all and (max-width: 1440px) {
    margin-right: 0px;
  }
`;
const LogoBox = styled.div`
  width: 55px;
  img {
    display: block;
    width: 100%;
  }
`;
const TopText = styled.div``;
const Titile = styled.h2`
  font-size: 24px;
  margin: 30px 0 7px 0;
  color: ${THEME_COLORS.text_title};
  @media all and (max-width: 980px) {
    font-size: 22px;
  }
`;
const SubTitile = styled.p`
  color: ${THEME_COLORS.text_para};
  font-size: 18px;
  line-height: 20px;
  font-family: "DM_sans";
  font-weight: 400;
  @media all and (max-width: 980px) {
    font-size: 16px;
  }
`;

const InputBox = styled.div`
  background-color: ${THEME_COLORS.light_200};
  display: flex;
  border-radius: 8px;
  font-size: 20px;
  width: 100%;
  font-weight: 300;
  padding: 20px 18px;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 5px;
  border: 2px solid transparent;
  &.active {
    border: 2px solid ${THEME_COLORS.chips_blue_on_container_2};
  }
`;
const ButtonBox = styled.button`
  background-color: ${THEME_COLORS.chips_blue_on_container_2};
  color: ${THEME_COLORS.white};
  text-align: center;
  padding: 14px 24px;
  text-decoration: none;
  text-align: center;
  border-radius: 8px;
  margin-top: 20px;
  border: none;
  font-size: 18px;
  cursor: pointer;
  width: 405px;
  height: 48px;
  @media all and (max-width: 1920px) {
    width: 450px;
  }
`;
const ErrorMessage = styled.span`
  position: absolute;
  font-size: 12px;
  color: ${THEME_COLORS.red_error};
`;
