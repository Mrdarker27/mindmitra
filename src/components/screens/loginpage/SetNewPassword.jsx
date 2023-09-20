import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { THEME_COLORS } from "../../../ThemeConfig";
import SubmitPassword from "../../genaral/chip/SubmitPassword";

function SetNewPassword() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [error, setError] = useState(false);
  const [requirements, setRequirements] = useState([]);

  const validatePassword = (password) => {
    let requirements = [];
    if (!/[A-Z]/.test(password)) {
      requirements.push("at least one uppercase letter");
    }
    if (!/[a-z]/.test(password)) {
      requirements.push("at least one lowercase letter");
    }
    if (!/\d/.test(password)) {
      requirements.push("at least one digit");
    }
    if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) {
      requirements.push("at least one special character");
    }
    if (/\s/.test(password)) {
      requirements.push("no whitespace characters");
    }
    if (password.length < 8) {
      requirements.push("minimum length of 8 characters");
    }
    return requirements;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== repassword) {
      setError(true);
    } else {
      setError(false);
      console.log("Submitted new password:", password);
      navigate("/login-page");
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
            <Title>Set new password</Title>
            <Description>
              Your new password must be different to previosly <br /> used
              password
            </Description>
          </TextBox>
          <InputBox className="new">
            <PassInput
              type="password"
              placeholder="New Password"
              onChange={(e) => {
                setPassword(e.target.value);
                setRequirements(validatePassword(e.target.value));
              }}
              value={password}
              minLength="8"
            />
          </InputBox>
          {requirements.length > 0 && (
            <PasswordMessege>
              Your password is missing: {requirements.join(", ")}
            </PasswordMessege>
          )}
          <InputBox>
            <PassInput
              type="password"
              placeholder="Confirm password"
              onChange={(e) => setRepassword(e.target.value)}
              value={repassword}
              minLength="8"
            />
          </InputBox>
          {error ? <Error>Password doesn't match</Error> : ""}

          <SubmitPassword
            onClick={(e) => {
              handleSubmit(e);
            }}
          />
        </Container>
      </MainBox>
    </MainContainer>
  );
}

export default SetNewPassword;

const PassInput = styled.input`
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
    color: ${THEME_COLORS.text_para};
  }
`;

const PasswordMessege = styled.p`
  color: ${THEME_COLORS.chips_green_on_container};
  margin-bottom: 3%;
  margin-left: 1%;
  width: 400px;
`;

const Error = styled.span`
  color: ${THEME_COLORS.red_error};
`;
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
  padding: 30px 30px;
  box-shadow: ${THEME_COLORS.elevation_expert_e4};
  width: 500px;
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
