/** @format */

import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { THEME_COLORS } from "../../../ThemeConfig";
import { Context } from "../../contexts/Store";
import SaveAndContinue from "../../genaral/chip/SaveAndContinue";
import PreviousButton from "../../genaral/chip/PreviousButton";
import Cancel from "../../genaral/chip/Cancel";

function ExpertDetails({ completed, setCompleted }) {
  const { state, dispatch } = useContext(Context);
  const navigate = useNavigate();
  const [qualificationModal, setQualificationModal] = useState(false);
  const [experienceModal, setExperienceModal] = useState(false);
  const [experienceSelected, setExperienceSelected] = useState("");
  const [isError, setError] = useState(false);

  const [selected, setSelected] = useState(
    state.user_data.expert_details.area_of_expertise
  );
  useEffect(() => {
    setSelected(() => {
      return state.user_data.expert_details.area_of_expertise;
    });
  }, []);

  const [expertise, setExpertise] = useState([
    {
      id: 1,
      text: "Anxiety disorders",
      selected: false,
    },
    {
      id: 2,
      text: "Mood disorders",
      selected: false,
    },
    {
      id: 3,
      text: "Child and adolescent mental health",
      selected: false,
    },
    {
      id: 4,
      text: "Trauma and PTSD",
      selected: false,
    },
    {
      id: 5,
      text: "Geriatric mental health",
      selected: false,
    },
    {
      id: 6,
      text: "Substance use disorder",
      selected: false,
    },
    {
      id: 7,
      text: "Sexual and gender identity",
      selected: false,
    },
    {
      id: 8,
      text: "Couple and family therapy",
      selected: false,
    },
    {
      id: 9,
      text: "Neuropsychology",
      selected: false,
    },
    {
      id: 10,
      text: "Eating disorders",
      selected: false,
    },
    {
      id: 11,
      text: "Sleep disorders",
      selected: false,
    },
    {
      id: 12,
      text: "Pain management",
      selected: false,
    },
    {
      id: 13,
      text: "Spiritual and religious issues",
      selected: false,
    },
    {
      id: 14,
      text: "Forensic psychology",
      selected: false,
    },
    {
      id: 15,
      text: "Medical psychology",
      selected: false,
    },
    {
      id: 16,
      text: "Business psychology",
      selected: false,
    },
    {
      id: 17,
      text: "Sport psychology",
      selected: false,
    },
  ]);
  const [isExpertise, setIsExpertise] = useState([]);
  const [lists, setLists] = useState([
    {
      id: 1,
      title: "MSc Psychology",
      selected: false,
    },
    {
      id: 2,
      title: "Bachelor's degree in Psychology",
      selected: false,
    },
    {
      id: 3,
      title: "Master's degree in Psychology",
      selected: false,
    },

    {
      id: 4,
      title: "M.Phil in Clinical Psychology",
      selected: false,
    },
    {
      id: 5,
      title: "Ph.D. in Psychology",
      selected: false,
    },
    {
      id: 6,
      title: "Certificate or Diploma in Psychiatry",
      selected: false,
    },
    {
      id: 7,
      title: "Diploma in Clinical Psychology",
      selected: false,
    },
    {
      id: 8,
      title: "Other",
      selected: false,
    },
  ]);
  const [qualificationSelectedData, setQualificationSelectedData] = useState(
    []
  );
  const [selectedExpertDetail, setSelectedExpertDetail] = useState([]);

  const [language, setLanguage] = useState([
    {
      id: 1,
      text: "English",
      selected: false,
    },
    {
      id: 2,
      text: "Malayalam",
      selected: false,
    },
    {
      id: 3,
      text: "Hindi",
      selected: false,
    },
    {
      id: 4,
      text: "Tamil",
      selected: false,
    },
    {
      id: 5,
      text: "Telungu",
      selected: false,
    },
    {
      id: 6,
      text: "Kannada",
      selected: false,
    },
  ]);
  const [isLanguage, setIsLanguage] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [experience, setExperience] = useState([
    {
      id: 1,
      year: "0-1 years",
    },
    {
      id: 2,
      year: "1-2 years",
    },
    {
      id: 3,
      year: "2-3 years",
    },
    {
      id: 4,
      year: "3-4 years",
    },
    {
      id: 5,
      year: "5 + years",
    },
  ]);

  const verifyDetails = () => {
    let Continue = true;
    if (qualificationSelectedData.length < 0) {
      Continue = false;
      setError(true);
    } else if (selectedExpertDetail.length <= 0) {
      Continue = false;
      setError(true);
    } else if (!experienceSelected) {
      Continue = false;
      setError(true);
    } else if (selectedLanguages.length <= 0) {
      Continue = false;
      setError(true);
    } else {
      Continue = true;
      setError(false);
    }
    return Continue;
  };
  useEffect(() => {
    dispatch({
      type: "PROFILE_STATUS_UPDATE",
      profile_updation: {
        about_you: true,
        expert_details: false,
      },
    });
    setQualificationSelectedData(state.user_data.expert_details.qualification);
    setSelectedExpertDetail(state.user_data.expert_details.area_of_expertise);
    setExperienceSelected(state.user_data.expert_details.experience);
    setSelectedLanguages(state.user_data.expert_details.languages);
  }, []);

  const handleSubmit = () => {
    const canContinue = verifyDetails();
    if (canContinue) {
      navigate("/working-status");
      dispatch({
        type: "UPDATE_USER_DATA",
        user_data: {
          expert_details: {
            area_of_expertise: selectedExpertDetail,
            qualification: qualificationSelectedData,
            experience: experienceSelected,
            languages: selectedLanguages,
          },
        },
      });
      dispatch({
        type: "PROFILE_STATUS_UPDATE",
        profile_updation: {
          expert_details: true,
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

  //updating the list item selected
  const updateItem = (item, list, setList, selectedState, state) => {
    item.selected = !item.selected;
    setList([...list]);
    var selectitem = list.filter((item) => item.selected === true);

    selectedState(selectitem);
  };
  let updateSelectedData = (item) => {
    setQualificationSelectedData([...qualificationSelectedData, item]);
  };

  const PreviousFunction = () => {
    navigate("/about-you");
  };

  //rendering the Qualification list
  let renderQualification = () => {
    return (
      <ExpertBox onClick={() => setQualificationModal(!qualificationModal)}>
        <DetailsLabel>Select your Qualification *</DetailsLabel>
        <ListDown>
          <ListIcon
            src={
              require("../../../assets/image/loginpage/profilecreatepage/list_down.svg")
                .default
            }
            alt="list_down"
          />
        </ListDown>

        <DropList className={qualificationModal && "view-modal"}>
          {lists.map((item) => (
            <DropDowns
              onClick={() => {
                updateItem(item, lists, setLists, setQualificationSelectedData);
                updateSelectedData(item);
              }}
              key={item.id}
            >
              {item.title}
            </DropDowns>
          ))}
        </DropList>
      </ExpertBox>
    );
  };

  // delete function
  let handleDelete = (id) => {
    setQualificationSelectedData(
      qualificationSelectedData.filter((item) => id !== item.id)
    );
  };

  return (
    <>
      <Main>
        <Div></Div>
        <Wrapper>
          <Container>
            <Left>
              <TitileBox>
                <Titile>Expert Details</Titile>
              </TitileBox>
              <Heading>
                <TopBox className="expert">
                  <SubHeading>Proffesional Info *</SubHeading>
                  <SubTitile>Provide your Proffesional Info</SubTitile>
                </TopBox>
                <TopBox className="top">
                  <SubHeading>Experience *</SubHeading>
                  <SubTitile>Provide your Contact Informations</SubTitile>
                </TopBox>
              </Heading>
            </Left>
            <Right>
              <Cancel onClick={handleCancel} />

              <DetailsTitle>Qualification</DetailsTitle>
              <More>
                {qualificationSelectedData.length > 0 ? (
                  qualificationSelectedData.map((data, index) => {
                    return (
                      <SelectedDataBox>
                        <p>{data.title}</p>
                        <BoxClose onClick={() => handleDelete(data.id)}>
                          <CloseBox
                            src={
                              require("../../../assets/image/loginpage/profilecreatepage/del.svg")
                                .default
                            }
                          />
                        </BoxClose>
                      </SelectedDataBox>
                    );
                  })
                ) : (
                  <MoreBox>
                    <MoreSubText>+ Add more qualification</MoreSubText>
                  </MoreBox>
                )}
                {isError && qualificationSelectedData.length === 0 && (
                  <QualiErrorMessage>
                    Select your qualifications
                  </QualiErrorMessage>
                )}
              </More>
              <Details>{renderQualification()}</Details>
              <Area>
                <AreaHead>Area of Expertise *</AreaHead>
                <Textfelid>
                  {expertise.map((item) => (
                    <Expertise
                      key={item.id}
                      className={
                        selectedExpertDetail.find(
                          (obj) => obj.text === item.text
                        )
                          ? "selected"
                          : "not-selected"
                      }
                      onClick={() => {
                        setIsExpertise(item.text);
                        updateItem(
                          item,
                          expertise,
                          setExpertise,
                          setSelectedExpertDetail
                        );
                      }}
                    >
                      <ExpertiseText
                        className={
                          selectedExpertDetail.find(
                            (obj) => obj.text === item.text
                          )
                            ? "selected"
                            : "not-selected"
                        }
                      >
                        {item.text}
                      </ExpertiseText>
                    </Expertise>
                  ))}
                </Textfelid>
                {isError && selectedExpertDetail.length === 0 && (
                  <ErrorMessage>Select your area of expertise</ErrorMessage>
                )}
              </Area>
              <Experience>
                <ExperienceBox
                  onClick={() => setExperienceModal(!experienceModal)}
                >
                  <SelectedTotalDataBox>
                    <ExperienceSubText>
                      Total Relevant Experience *{" "}
                    </ExperienceSubText>
                    <span>{experienceSelected && experienceSelected}</span>
                  </SelectedTotalDataBox>
                  {isError && !experienceSelected && (
                    <ErrorMessage style={{ bottom: "-37px", right: "-37px" }}>
                      Select your experience
                    </ErrorMessage>
                  )}

                  <ListDown>
                    <img
                      src={
                        require("../../../assets/image/loginpage/profilecreatepage/list_down.svg")
                          .default
                      }
                      alt="list_down"
                    />
                  </ListDown>

                  <DropList className={experienceModal && "view-modal"}>
                    {experience.map((item) => (
                      <DropDowns
                        key={item.id}
                        onClick={() => setExperienceSelected(item.year)}
                      >
                        {item.year}
                      </DropDowns>
                    ))}
                  </DropList>
                </ExperienceBox>
              </Experience>
              <Language>
                <LanguageHead>Language Preference *</LanguageHead>
                <LanguageFelid>
                  {" "}
                  {language.map((item) => (
                    <LanguageBox
                      key={item.id}
                      onClick={() => {
                        setIsLanguage(item.text);
                        updateItem(
                          item,
                          language,
                          setLanguage,
                          setSelectedLanguages,
                          selectedLanguages
                        );
                      }}
                      className={
                        selectedLanguages.find((obj) => obj.text === item.text)
                          ? "selected"
                          : "not-selected"
                      }
                    >
                      <Languagetext
                        className={
                          selectedLanguages.find(
                            (obj) => obj.text === item.text
                          )
                            ? "selected"
                            : "not-selected"
                        }
                        key={item.id}
                      >
                        {item.text}
                      </Languagetext>
                    </LanguageBox>
                  ))}
                </LanguageFelid>
                {isError && selectedLanguages.length === 0 && (
                  <ErrorMessage>Select your languages</ErrorMessage>
                )}
              </Language>
              <Bottom>
                <LeftBox>*This field is mandatory</LeftBox>
                <RightBox>
                  <PreviousButton onClick={PreviousFunction} />

                  <SaveAndContinue
                    onClick={() => {
                      handleSubmit();
                    }}
                  />
                </RightBox>
              </Bottom>
            </Right>
          </Container>
        </Wrapper>
      </Main>
    </>
  );
}

export default ExpertDetails;
const BoxClose = styled.div`
  width: fit-content;
`;
const SelectedTotalDataBox = styled.div`
  position: relative;
  border-radius: 8px;
  background-color: ${THEME_COLORS.light_200};
  width: 100%;

  p {
    font-size: 14px;
    color: ${THEME_COLORS.dark_500};
  }
`;
const DetailsTitle = styled.h5`
  font-size: 16px;
  color: ${THEME_COLORS.text_title};
  margin-bottom: 20px;
  margin-top: 95px;
  font-family: "DM_sans";
`;
const DetailsLabel = styled.label`
  color: ${THEME_COLORS.text_para};
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  font-family: "DM_sans";
`;
const CloseBox = styled.img``;
const MoreSubText = styled.p`
  font-size: 14px;
  color: ${THEME_COLORS.text_title};
`;

const ExperienceBox = styled.div`
  position: relative;
  user-select: none;
  cursor: pointer;
  p {
    color: ${THEME_COLORS.text_para};
    margin: 0;
    font-size: 14px;
    margin-bottom: 5px;
  }
  display: flex;
  justify-content: space-between;
  border-radius: 8px;
  margin-top: 9%;
  height: 70px;
  background-color: ${THEME_COLORS.light_200};
  padding: 11px 20px;
  position: relative;
`;

const Experience = styled.div`
  margin-bottom: 15px;
`;
const LanguageFelid = styled.div`
  display: flex;
  gap: 15px;
  width: 100%;
  flex-wrap: wrap;
`;
const LanguageBox = styled.div`
  border: 1px solid ${THEME_COLORS.light_300};
  width: fit-content;
  border-radius: 25px;
  padding: 8px 16px;
  color: ${THEME_COLORS.text_title};
  cursor: pointer;
  &.selected {
    background: ${THEME_COLORS.chips_blue_container};
    color: ${THEME_COLORS.chips_blue_on_container};
    border: 1px solid ${THEME_COLORS.chips_blue_on_container_2};
  }
`;
const Languagetext = styled.p`
  font-size: 16px;
  color: ${THEME_COLORS.text_title};
  font-family: "DM_sans_medium";

  &.selected {
    color: ${THEME_COLORS.chips_blue_on_container};
  }
`;
const LanguageHead = styled.p`
  margin-bottom: 2%;
  margin-top: 2%;
  font-family: "dm_sans_medium";
  font-size: 16px;
  color: ${THEME_COLORS.text_title};
`;
const Language = styled.div`
  position: relative;
  margin-bottom: 100px;
`;
const Textfelid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
const Expertise = styled.div`
  border: 1px solid ${THEME_COLORS.light_300};
  width: fit-content;
  padding: 8px 16px;
  border-radius: 53px;
  cursor: pointer;
  &.selected {
    background: ${THEME_COLORS.chips_blue_container};
    color: ${THEME_COLORS.chips_blue_on_container_2};
    border: 1px solid ${THEME_COLORS.chips_blue_on_container_2};
  }
`;
const ExpertiseText = styled.p`
  color: ${THEME_COLORS.text_title};
  font-size: 14px;
  font-family: "DM_sans_medium";
  &.selected {
    color: ${THEME_COLORS.chips_blue_on_container_2};
  }
`;
const AreaHead = styled.p`
  margin-bottom: 2%;
  font-family: "DM_sans_medium";
  color: ${THEME_COLORS.text_title};
  font-size: 16px;
`;
const Area = styled.div`
  width: 100%;
  position: relative;
`;

const More = styled.div`
  position: relative;
  margin-bottom: 1%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  cursor: pointer;
`;
const MoreBox = styled.div`
  border-radius: 8px;
  border: 3px solid ${THEME_COLORS.light_200};

  text-align: center;
  padding: 6px 6px;
`;
const QualiErrorMessage = styled.p`
  font-size: 14px;
  color: ${THEME_COLORS.red_error} !important;
  position: absolute;
  bottom: -83px;
`;
const ErrorMessage = styled.p`
  font-size: 14px;
  color: ${THEME_COLORS.red_error} !important;
  position: absolute;
  bottom: -40px;
  left: 0px;
`;
const ExperienceSubText = styled.p`
  color: ${THEME_COLORS.text_para};
  margin: 0;
  font-size: 12px;
  margin-bottom: 5px;
  font-family: "DM_sans";
  span {
    font-size: 16px;
  }
`;
const ExpertBox = styled.div`
  user-select: none;
  cursor: pointer;
  p {
    color: ${THEME_COLORS.text_para};
    margin: 0;
    font-size: 14px;
    margin-bottom: 5px;
  }
  display: flex;
  justify-content: space-between;
  border-radius: 8px;
  min-height: 50px;
  background-color: ${THEME_COLORS.light_200};
  padding: 11px 20px;
  position: relative;
`;

const SelectedDataBox = styled.div`
  display: flex;
  padding: 4px 12px;
  background-color: ${THEME_COLORS.light_200};
  border-radius: 4px;
  width: fit-content;
  height: 28px;
  p {
    color: ${THEME_COLORS.dark_500};
  }
`;

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
  z-index: 10;

  &.view-modal {
    height: auto;
    transition: all 0.5 ease-in-out;
    box-shadow: ${THEME_COLORS.elevation_expert_e2};
    overflow: hidden;
  }
  position: absolute;
  width: 100%;
  top: 80px;
  left: 0;
  border-radius: 5px;
  background-color: ${THEME_COLORS.white};
  max-height: 400px;
  overflow-y: scroll;
`;
const TopBox = styled.div`
  &.expert {
    @media all and (max-width: 1920px) {
      margin-bottom: 510px;
    }
  }
  &.top {
    margin-top: 10px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 80px 0;
`;

const Details = styled.div`
  margin-bottom: 3%;
`;

const ListDown = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  cursor: pointer;
  img {
    width: 100%;
    display: block;
  }
`;
const ListIcon = styled.img``;
const Main = styled.div`
  margin-top: 80px;
`;
const Div = styled.div`
  border-top: 2px solid ${THEME_COLORS.chips_blue_on_container_2};
  width: 50%;
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
  @media all and (max-width: 1920px) {
    width: 50%;
  }
`;
const Right = styled.div`
  width: 58%;
  display: flex;
  flex-direction: column;
  @media all and (max-width: 1920px) {
    width: 50%;
  }
  @media all and (max-width: 1080px) {
    width: 60%;
  }
`;
const TitileBox = styled.div``;
const Titile = styled.h1`
  font-size: 32px;
  margin-bottom: 60px;
  margin-top: 0;
  font-family: "dm_sans_bold";
  color: ${THEME_COLORS.black};
  @media all and (max-width: 980px) {
    font-size: 27px;
    display: inline-block;
  }
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
