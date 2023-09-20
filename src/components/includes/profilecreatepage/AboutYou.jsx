/** @format */

import React, { useRef, useState, useContext } from "react";
import { useEffect } from "react";
import { Link, useAsyncValue, useNavigate } from "react-router-dom";
import styled from "styled-components";
// var data = require("../../assets/data.json");
import data from "../../../assets/data.json";
import { THEME_COLORS } from "../../../ThemeConfig";
import { Context } from "../../contexts/Store";
import PreviousButton from "../../genaral/chip/PreviousButton";
import SaveAndContinue from "../../genaral/chip/SaveAndContinue";
import Cancel from "../../genaral/chip/Cancel";

function AboutYou({ completed, setCompleted }) {
  const { state, dispatch } = useContext(Context);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [isError, setError] = useState(false);
  const [value, setValue] = useState("");
  const [attr, setAttr] = useState("");
  const menuRef = useRef();
  const logoutRef = useRef();
  const [specializationModal, setSpecializationModal] = useState(false);
  const [genderModal, setGenderModal] = useState(false);
  const [selectedLocation, setLocation] = useState(
    state.user_data ? state.user_data.about_info.location : ""
  );
  const [gender, setGender] = useState(state.user_data.about_info.gender || "");
  const [selected, setSelected] = useState(
    state.user_data.about_info.specialization
  );
  const [email, setEmail] = useState(state.user_data.about_info.email);
  const [firstName, setFirstName] = useState(
    state.user_data.about_info.first_name
  );
  const [lastName, setLastName] = useState(
    state.user_data.about_info.last_name
  );
  const [age, setAge] = useState(state.user_data.about_info.age);
  const [phone, setPhone] = useState(state.user_data.about_info.phone);

  useEffect(() => {
    dispatch({
      type: "PROFILE_STATUS_UPDATE",
      profile_updation: {
        about_you: false,
      },
    });
  }, []);

  window.addEventListener("click", (e) => {
    if (e.target !== menuRef.current && e.target !== logoutRef.current) {
      setOpen(false);
    }
  });
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const verifyDetails = () => {
    // console.log(regex.test(email));
    var Continue = true;
    if (!selected) {
      setError(true);
      Continue = false;
    } else if (!firstName) {
      setError(true);
      Continue = false;
    } else if (!lastName) {
      setError(true);
      Continue = false;
    } else if (!gender) {
      setError(true);
      Continue = false;
    } else if (!age) {
      setError(true);
      Continue = false;
    } else if (!phone) {
      setError(true);
      Continue = false;
    } else if (!regex.test(email)) {
      setError(true);
      Continue = false;
    } else {
      setError(false);
      Continue = true;
    }
    return Continue;
  };

  const handleSubmit = () => {
    var canContinue = verifyDetails();
    if (canContinue) {
      navigate("/expert-details");
      dispatch({
        type: "UPDATE_USER_DATA",
        user_data: {
          about_info: {
            specialization: selected,
            first_name: firstName,
            last_name: lastName,
            gender: gender,
            age: age,
            phone: phone,
            email: email,
            location: selectedLocation,
          },
        },
      });
      dispatch({
        type: "PROFILE_STATUS_UPDATE",
        profile_updation: {
          about_you: true,
        },
      });
    }
  };
  const handleCancel = () => {
    dispatch({
      type: "UPDATE_USER_DATA",
      user_data: {
        is_verified: false,
      },
    });
    navigate("/auth/register-page");
  };
  const handleKeyPress = (event) => {
    const keyCode = event.which || event.keyCode;
    if (keyCode < 48 || keyCode > 57) {
      // only allow numeric key codes
      event.preventDefault();
    }
  };

  // search function
  const handleSearch = (event) => {
    let value = event.target.value;
    setValue(value);
    setLocation(value);
  };

  const onSearch = (searchItem) => {
    setValue(searchItem);
    setLocation(searchItem);
  };

  const setAttribute = (attr) => {
    setAttr(attr);
  };
  const [lists, setLists] = useState([
    {
      id: 1,
      title: "Psychiatrist",
      // phone,
    },
    {
      id: 2,
      title: "Clinical psychologist",
    },
    {
      id: 3,
      title: "Consultant psychologist",
    },
    {
      id: 4,
      title: "Counselor",
    },
    {
      id: 5,
      title: "School counselors",
    },
    {
      id: 6,
      title: "Social worker",
    },
    {
      id: 7,
      title: "Special education",
    },
    {
      id: 8,
      title: "Speech therapist",
    },
    {
      id: 9,
      title: "yoga trainer",
    },
    { setCompleted },
    {
      id: 10,
      title: "Other",
    },
  ]);
  

  return (
    <>
      <Main>
        <Div></Div>
        <Wrapper>
          <Container>
            <Left>
              <Titile>About you</Titile>
              <Heading>
                <TopBox className="personal">
                  <SubHeading>Personal Info *</SubHeading>
                  <SubTitile>Provide your Personal Info</SubTitile>
                </TopBox>
                <TopBox>
                  <SubHeading>Contact Info *</SubHeading>
                  <SubTitile>Provide your Contact Informations</SubTitile>
                </TopBox>
              </Heading>
            </Left>
            <Right>
              <Cancel onClick={handleCancel} />
              <Details>
                <PersonalBox
                  onClick={() => setSpecializationModal(!specializationModal)}
                >
                  <SelectedDataBox>
                    <TextSubList>Specialization * </TextSubList>
                    <span>{selected && selected}</span>
                  </SelectedDataBox>

                  <ListDown>
                    <ListIcon
                      src={
                        require("../../../assets/image/loginpage/profilecreatepage/list_down.svg")
                          .default
                      }
                      alt="list_down"
                    />
                  </ListDown>

                  <DropList className={specializationModal && "view-modal"}>
                    {lists.map((item) => (
                      <DropDowns
                        key={item.id}
                        onClick={() => setSelected(item.title)}
                      >
                        {item.title}
                      </DropDowns>
                    ))}
                  </DropList>
                  {isError && !selected && (
                    <ErrorMessage>select your specializations</ErrorMessage>
                  )}
                </PersonalBox>
              </Details>
              <Name>
                <Firstname className={attr === "FirstName" ? "active" : ""}>
                  <SubHead>Firstname *</SubHead>
                  <NameBox
                    value={firstName}
                    type="text"
                    id="FirstName"
                    onClick={() => setAttribute("FirstName")}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                  {isError && !firstName && (
                    <ErrorMessage>enter your firstname</ErrorMessage>
                  )}
                </Firstname>
                <LastName className={attr === "LastName" ? "active" : ""}>
                  <SubHead>Last name *</SubHead>{" "}
                  <NameBox
                    value={lastName}
                    type="text"
                    id="LastName"
                    onClick={() => setAttribute("LastName")}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  {isError && !lastName && (
                    <ErrorMessage>enter your lastname</ErrorMessage>
                  )}
                </LastName>
              </Name>
              <GenderAge>
                <Gender onClick={() => setGenderModal(!genderModal)}>
                  <GenderBox>
                    <SubHead>Gender *</SubHead>
                    <span>{gender && gender}</span>
                  </GenderBox>

                  <Down>
                    <Image
                      src={
                        require("../../../assets/image/loginpage/profilecreatepage/list_down.svg")
                          .default
                      }
                      alt="list_down_icon"
                    />
                  </Down>
                  <GenderList className={genderModal && "view-modal"}>
                    <>
                      <ListGender onClick={() => setGender("Male")}>
                        Male
                      </ListGender>
                      <ListGender onClick={() => setGender("Female")}>
                        Female
                      </ListGender>
                      <ListGender onClick={() => setGender("Other")}>
                        Other
                      </ListGender>
                    </>
                  </GenderList>
                  {isError && !gender && (
                    <ErrorMessage>select your gender</ErrorMessage>
                  )}
                </Gender>
                <Age className={attr === "Age" ? "active" : ""}>
                  <SubHead>Age *</SubHead>
                  <NameBox
                    value={age}
                    type="number"
                    id="Age"
                    onKeyPress={handleKeyPress}
                    maxLength={2}
                    onClick={() => setAttribute("Age")}
                    onChange={(e) => {
                      setAge(e.target.value);
                    }}
                  />
                  {isError && !age && (
                    <ErrorMessage>enter your age</ErrorMessage>
                  )}
                </Age>
              </GenderAge>
              <Contact>
                <Email
                  className={attr === "email" ? "active" : ""}
                  onSubmit={handleSubmit}
                  action=""
                >
                  {" "}
                  <SubHead>Email ID *</SubHead>
                  <EmailBox
                    value={email}
                    name="email"
                    type="email"
                    id="Email"
                    onClick={() => setAttribute("email")}
                    required
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  {isError && (
                    <>
                      {email ? (
                        <>
                          {regex.test(email) ? (
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
                </Email>

                <PhoneBox className={attr === "mobile" ? "active" : ""}>
                  <Phone
                    value={phone}
                    type="number"
                    inputmode="numeric"
                    id="Mobile"
                    maxLength={10}
                    className="active"
                    placeholder="Phone No"
                    onKeyPress={handleKeyPress}
                    onClick={() => setAttribute("mobile")}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                  {isError && !phone && (
                    <ErrorMessage>enter your phone</ErrorMessage>
                  )}
                </PhoneBox>
              </Contact>
              <Location className={attr === "location" ? "active" : ""}>
                <SearchMenu
                  type="text"
                  id="location"
                  value={selectedLocation ? selectedLocation : value}
                  onChange={handleSearch}
                  onClick={() => setAttribute("location")}
                  placeholder="Current Location of practice"
                />
                <DropDownMenu>
                  {data
                    .filter((item) => {
                      const searchItem = value.toLowerCase();
                      const place = item.place.toLowerCase();
                      return (
                        searchItem &&
                        place.startsWith(searchItem) &&
                        place !== searchItem
                      );
                    })
                    .map((item, index) => {
                      return (
                        <DropDown
                          key={index}
                          onClick={() => {
                            onSearch(item.place);
                          }}
                        >
                          {item.place}
                        </DropDown>
                      );
                    })}
                </DropDownMenu>
              </Location>
              <Bottom>
                <LeftBox>*This field is mandatory</LeftBox>
                <RightBox>
                  <PreviousButton
                    onClick={() => {
                      completed.about_you = "";
                      navigate("/about-you");
                    }}
                  />

                  <SaveAndContinue onClick={handleSubmit} />
                </RightBox>
              </Bottom>
            </Right>
          </Container>
        </Wrapper>
      </Main>
    </>
  );
}

export default AboutYou;
const GenderList = styled.div`
  box-shadow: ${THEME_COLORS.elevation_expert_e2};
  display: none;
  overflow: hidden;
  transition: all 0.5 ease-in-out;
  position: absolute;
  z-index: 10;
  width: 100%;
  left: 0;
  top: 85px;
  border-radius: 5px;
  background-color: ${THEME_COLORS.white};
  &.view-modal {
    height: auto;
    transition: all 0.5 ease-in-out;
    display: block;
  }
`;
const ListGender = styled.div`
  cursor: pointer;
  padding: 11px 20px;
  border-radius: 8px;
  margin: 10px;
  font-size: 16px;
  font-family: "DM_sans_medium";
  transition: all 0.2s;
  :hover {
    background: ${THEME_COLORS.light_200};
  }
`;

const GenderBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  span {
    font-size: 18px;
    margin-top: 5px;
  }
`;
const TextSubList = styled.p`
  color: ${THEME_COLORS.text_para};
  font-size: 12px !important;
  font-family: "DM_sans";
`;
const SelectedDataBox = styled.div``;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media all and (max-width: 980px) {
    flex-direction: column;
  }
`;
const RightBox = styled.div`
  align-items: flex-end;
  display: flex;
  align-items: center;
  gap: 10px;
`;
const LeftBox = styled.p`
  color: ${THEME_COLORS.text_para};
  font-size: 14px;
  text-align: start;
  font-family: "DM_sans";

  @media all and (max-width: 980px) {
    margin-bottom: 15px;
  }
`;

const DropDowns = styled.div`
  cursor: pointer;
  padding: 11px 20px;
  border-radius: 8px;
  margin: 10px;
  font-size: 16px;
  font-family: "DM_sans_medium";
  color: ${THEME_COLORS.text_title};
  transition: all 0.2s;
  :hover {
    background: ${THEME_COLORS.light_200};
  }
`;
const DropList = styled.div`
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  height: 0;
  overflow: hidden;
  transition: all 0.5 ease-in-out;

  &.view-modal {
    height: auto;
    transition: all 0.5 ease-in-out;
    box-shadow: ${THEME_COLORS.elevation_user_u4};
  }
  position: absolute;
  z-index: 10;
  width: 100%;
  top: 80px;
  left: 0;
  border-radius: 5px;
  background-color: ${THEME_COLORS.white};
  max-height: 400px;
  overflow-y: scroll;
`;
const TopBox = styled.div``;
const PhoneBox = styled.div`
  position: relative;
  width: 49%;
  min-height: 63px;
  background-color: ${THEME_COLORS.light_200};
  border-radius: 8px;
  cursor: pointer;
  padding: 11px 20px;
  border: 2px solid transparent;

  &.active {
    border: 2px solid ${THEME_COLORS.chips_blue_on_container_2};
  }
`;
const EmailBox = styled.input`
  margin-right: 3%;
  border-radius: 8px;
  border: none;
  height: 30px;
  width: 100%;
  font-family: "DM_sans_medium";
  font-size: 16px;
  &:focus {
    outline: none;
  }
`;
const Down = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  img {
    width: 100%;
    display: block;
  }
`;
const Phone = styled.input`
  background-color: ${THEME_COLORS.light_200};
  border: none;
  font-size: 16px;
  display: block;
  margin: auto 0;
  height: 100%;
  font-family: "DM_sans_medium";
  &:focus {
    outline: none;
  }
  ::placeholder {
    outline: none;
    text-align: start;
    font-size: 16px;
  }
`;
const Email = styled.div`
  position: relative;
  width: 49%;
  min-height: 63px;
  max-height: 70px;
  background-color: ${THEME_COLORS.light_200};
  padding: 2px 17px 10px 17px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  border: 2px solid transparent;
  &.active {
    border: 2px solid ${THEME_COLORS.chips_blue_on_container_2};
  }
`;
const Contact = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;
const GenderAge = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3%;
  @media all and (max-width: 1440px) {
    margin-bottom: 3%;
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 80px 0;
`;
const Gender = styled.div`
  position: relative;
  width: 48%;
  min-height: 60px;
  background-color: ${THEME_COLORS.light_200};
  padding: 11px 20px;
  border-radius: 8px;
  display: flex;
  cursor: pointer;
  position: relative;
  justify-content: space-between;
`;
const Image = styled.img``;
const Age = styled.div`
  position: relative;
  width: 49%;
  min-height: 63px;
  background-color: ${THEME_COLORS.light_200};
  padding: 0px 0 0 10px;
  border-radius: 8px;
  margin-right: 0;
  display: flex;
  flex-direction: column;
  padding: 15px;
  cursor: pointer;
  border: 2px solid transparent;

  &.active {
    border: 2px solid ${THEME_COLORS.chips_blue_on_container_2};
  }
`;
const Name = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3%;
`;
const Firstname = styled.div`
  position: relative;
  width: 48%;
  min-height: 60px;
  background-color: ${THEME_COLORS.light_200};
  padding: 11px 20px;
  border-radius: 8px;
  cursor: pointer;
  border: 2px solid transparent;

  &.active {
    border: 2px solid ${THEME_COLORS.chips_blue_on_container_2};
  }
`;
const LastName = styled.div`
  position: relative;
  width: 49%;
  min-height: 60px;
  background-color: ${THEME_COLORS.light_200};
  padding: 11px 20px;
  border-radius: 8px;
  cursor: pointer;
  border: 2px solid transparent;
  &:focus {
    border: 2px solid ${THEME_COLORS.chips_blue_on_container_2};
  }
  &.active {
    border: 2px solid ${THEME_COLORS.chips_blue_on_container_2};
  }
`;
const Details = styled.div`
  margin-bottom: 3%;
`;

const PersonalBox = styled.div`
  position: relative;
  user-select: none;
  cursor: pointer;
  p {
    color: ${THEME_COLORS.text_para};
    margin: 0;
    font-size: 14px;
  }
  display: flex;
  justify-content: space-between;
  border-radius: 8px;
  margin-top: 9%;
  width: 100%;
  background-color: ${THEME_COLORS.light_200};
  min-height: 60px;
  padding: 11px 20px;
  position: relative;
`;
const ErrorMessage = styled.p`
  font-size: 14px;
  color: ${THEME_COLORS.red_error} !important;
  position: absolute;
  bottom: -25px;
  left: 5px;
`;
const ListDown = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;
const ListIcon = styled.img``;
const Main = styled.div`
  margin-top: 80px;
`;
const Div = styled.div`
  border-top: 2px solid ${THEME_COLORS.chips_blue_on_container_2};
  width: 25%;
`;
const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  @media all and (max-width: 1920px) {
    width: 85%;
  }
  @media all and (max-width: 1440px) {
    width: 80%;
  }
  @media all and (max-width: 1280px) {
    width: 90%;
  }
`;
const Left = styled.div`
  width: 42%;
`;
const Right = styled.div`
  width: 58%;
  display: flex;
  flex-direction: column;
  @media all and (max-width: 1080px) {
    width: 70%;
  }
  @media all and (max-width: 980px) {
    width: 80%;
  }
`;
const Titile = styled.h1`
  font-size: 32px;
  margin-bottom: 60px;
  margin-top: 0;
  font-family: "DM_sans_bold";
  color: ${THEME_COLORS.black};
  @media all and (max-width: 980px) {
    font-size: 27px;
    display: inline-block;
  }
`;
const SubHead = styled.label`
  color: #818181;
  margin-bottom: 5px;
  font-size: 12px;
  display: inline-block;
  font-family: "DM_sans";
`;
const SubHeading = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
  font-family: "dm_sans_medium";
  color: ${THEME_COLORS.text_title};
`;
const SubTitile = styled.h5`
  color: ${THEME_COLORS.text_para};
  font-size: 14px;
  font-family: "DM_sans";
  margin-top: 0px;
`;
const Heading = styled.div`
  @media all and (max-width: 800px) {
    margin-right: 10px;
  }
  .personal {
    margin-bottom: 250px;
  }
`;

const Location = styled.div`
  border-radius: 8px;
  min-height: 60px;
  background-color: ${THEME_COLORS.light_200};
  cursor: pointer;
  margin-bottom: 12%;
  position: relative;
  border: 2px solid transparent;
  &.active {
    border: 2px solid ${THEME_COLORS.chips_blue_on_container_2};
  }
`;
const SearchMenu = styled.input`
  min-height: 60px;
  width: 96%;
  border-radius: 8px;
  background-color: ${THEME_COLORS.light_200};
  border: none;
  font-family: "DM_sans_medium";
  padding: 10px 17px;
  font-size: 16px;
  &:focus {
    outline-color: ${THEME_COLORS.chips_blue_on_container_2};
  }
  ::placeholder {
    font-size: 16px;
  }
`;
const DropDownMenu = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  width: 100%;
  padding: 0 0 0px 18px;
  background-color: ${THEME_COLORS.light_200};
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  cursor: pointer;
`;
const DropDown = styled.div``;
const NameBox = styled.input`
  border: none;
  width: 90%;
  font-size: 16px;
  background-color: ${THEME_COLORS.light_200};
  outline: none;
  font-family: "DM_sans_medium";
  text-transform: capitalize;
`;
