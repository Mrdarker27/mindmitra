import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Left from "./LoginPageLeft";
import { Context } from "../../contexts/Store";
import { THEME_COLORS } from "../../../ThemeConfig";

function RegisterPage() {
	const [phoneNumber, setPhoneNumber] = useState("");
	const [error, setError] = useState("");
	const navigate = useNavigate();
	const { dispatch } = useContext(Context);

	const handleSubmit = () => {
		if (phoneNumber == "") {
			setError("phone number field is required");
		} else if (phoneNumber.length < 10 || phoneNumber.length > 10) {
			setError(
				"Invalid phone number. Phone number must be at least 10 characters"
			);
		} else if (phoneNumber.length === 10) {
			navigate("/auth/otp-page");
			dispatch({
				type: "UPDATE_USER_DATA",
				user_data: {
					about_info: {
						phone: phoneNumber,
					},
				},
			});
		}
	};
	const handleKeyPress = (event) => {
		const keyCode = event.which || event.keyCode;
		if (keyCode < 48 || keyCode > 57) {
			// only allow numeric key codes
			event.preventDefault();
		}
    if (event.keyCode === 13 || event.which === 13) {
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
										require("../../../assets/image/loginpage/logo.svg")
											.default
									}
									alt="logo"
								/>
							</LogoBox>
							<TopText>
								<Titile>Let’s Get Started!</Titile>
								<SubTitile>
									Join in assisting someone to reach a
									brighter future.
								</SubTitile>
							</TopText>
							<InputBox>
								<Bar>+91</Bar>
								<PhoneNumber
									type="tel"
									id="Mobile"
									onKeyPress={handleKeyPress}
									onChange={(e) =>
										setPhoneNumber(e.target.value)
									}
									minLength={10}
                  maxLength={10}
									className="active"
									placeholder="Enter  mobile number"
								/>
							</InputBox>
							<ErrorMessage>{error}</ErrorMessage>

							<ButtonBox
								onClick={() => {
									handleSubmit();
								}}
							>
								Register
							</ButtonBox>
							<Expert>
								Login as an{" "}
								<Log to="/auth/login-page">Expert!</Log>{" "}
							</Expert>
						</RightContainer>
					</Right>
				</Container>
			</Main>
		</>
	);
}
export default RegisterPage;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const PhoneNumber = styled.input`
  border: none;
  background-color: ${THEME_COLORS.light_200};
  padding-left: 10px;
  height: 40px;
  font-size: 20px;
  width: 100%;
  cursor: pointer;

  :focus {
    outline: none;
  }

  ::placeholder {
    font-size: 16px;
    font-weight: 400;
  }
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
    margin-right: 225px;
  }
  @media all and (max-width: 1440px) {
    margin-right: 0;
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
const Bar = styled.span`
  display: inline-block;
  border-right: 1px solid ${THEME_COLORS.Wireframe_300};
  padding-right: 10px;
  margin-left: 5px;
`;
const InputBox = styled.div`
  background-color: ${THEME_COLORS.light_200};
  display: flex;
  border-radius: 8px;
  font-size: 20px;
  width: 100%;
  font-weight: 300;
  padding: 10px 18px;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 5px;
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
  width: 100%;
`;
const Log = styled(Link)`
  color: ${THEME_COLORS.secondary};
  text-decoration: none;
`;
const Expert = styled.h5`
  font-size: 18px;
  font-weight: 300;
  cursor: pointer;
  text-align: center;
  color: ${THEME_COLORS.text_para};
  margin-top: 6%;
`;
const ErrorMessage = styled.span`
  position: absolute;
  font-size: 12px;
  color: ${THEME_COLORS.red_error};
`;
