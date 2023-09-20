/** @format */

import { React, useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { THEME_COLORS } from "../../../ThemeConfig";
import { Context } from "../../contexts/Store";
import SaveAndContinue from "../../genaral/chip/SaveAndContinue";
import PreviousButton from "../../genaral/chip/PreviousButton";
import Cancel from "../../genaral/chip/Cancel";

function WorkingStatus() {
  const navigate = useNavigate();
  const [workingStatusModal, setWorkingStatusModal] = useState(false);
  const [isError, setError] = useState(false);
  const [selected, setSelected] = useState("");
  const [employerName, setEmployerName] = useState("");
  const [employerLocation, setEmployerLocation] = useState("");
  const { state } = useContext(Context);
  const [workStatus, setWorkStatus] = useState([
    {
      id: 1,
      status: "Corporate assistance",
    },
    {
      id: 2,
      status: "Working in Clinic",
    },
    {
      id: 3,
      status: "Working in Hospital",
    },
    {
      id: 4,
      status: "Working in Schools/Universities",
    },
    {
      id: 5,
      status: "Private Practice",
    },
    {
      id: 6,
      status: "Remote Working",
    },
    {
      id: 7,
      status: "Research",
    },
    {
      id: 8,
      status: "Government and non-profit organizations",
    },
    {
      id: 9,
      status: "Corporate assistance",
    },
    {
      id: 10,
      status: "Consulting",
    },
    {
      id: 11,
      status: "Rehabilitation centers",
    },
    {
      id: 12,
      status: "Media",
    },
    {
      id: 13,
      status: "Government Agencies",
    },
  ]);
  const { dispatch } = useContext(Context);
  useEffect(() => {
    dispatch({
      type: "PROFILE_STATUS_UPDATE",
      profile_updation: {
        expert_details: true,
        working_status: false,
      },
    });
    setEmployerLocation(state.user_data.working_status.location_of_employer);
    setEmployerName(state.user_data.working_status.name_of_employee);
    setSelected(state.user_data.working_status.status);
  }, []);
  const verifyDetails = () => {
    let Continue = true;
    if (!selected) {
      setError(true);
      Continue = false;
    } else if (!employerName) {
      setError(true);
      Continue = false;
    } else if (!employerLocation) {
      setError(true);
      Continue = false;
    } else {
      setError(false);
      Continue = true;
    }
    return Continue;
  };
  const handleSubmit = () => {
    let canContinue = verifyDetails();
    if (canContinue) {
      navigate("/your-bio");
      dispatch({
        type: "UPDATE_USER_DATA",
        user_data: {
          working_status: {
            location_of_employer: employerLocation,
            name_of_employee: employerName,
            status: selected,
          },
        },
      });
      dispatch({
        type: "PROFILE_STATUS_UPDATE",
        profile_updation: {
          working_status: true,
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

  return (
    <>
      <Main>
        <Div></Div>
        <Wrapper>
          <Container>
            <Left>
              <TitileBox>
                <Titile>Working Status</Titile>
              </TitileBox>
              <Heading>
                <TopBox className="working">
                  <SubHeading>Personal Info *</SubHeading>
                  <SubTitile>Provide your Personal Info</SubTitile>
                </TopBox>
              </Heading>
            </Left>

            <Right>
              <Cancel onClick={handleCancel} />

              <Details>
                <StatusBox
                  onClick={() => setWorkingStatusModal(!workingStatusModal)}
                >
                  <SelectedDataBox>
                    <p>Working Status * </p>
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

                  <DropList className={workingStatusModal && "view-modal"}>
                    {workStatus.map((item) => (
                      <DropDowns
                        key={item.id}
                        onClick={() => setSelected(item.status)}
                      >
                        {item.status}
                      </DropDowns>
                    ))}
                  </DropList>
                  {isError && !selected && (
                    <ErrorMessage>Select working status</ErrorMessage>
                  )}
                </StatusBox>
              </Details>
              <Employer>
                <Name
                  type="text"
                  placeholder="Name of Employer *"
                  onChange={(e) => {
                    setEmployerName(e.target.value);
                  }}
                  value={employerName}
                />
                {isError && !employerName && (
                  <ErrorMessage>Enter the name</ErrorMessage>
                )}
              </Employer>
              <Location>
                <NameEmployer
                  type="text"
                  placeholder="Location of Employer *"
                  onChange={(e) => {
                    setEmployerLocation(e.target.value);
                  }}
                  value={employerLocation}
                />
                {isError && !employerLocation && (
                  <ErrorMessage>Enter the location</ErrorMessage>
                )}
              </Location>
              <Bottom>
                <LeftBox>*This field is mandatory</LeftBox>
                <RightBox>
                  <PreviousButton
                    onClick={() => {
                      navigate("/expert-details");
                    }}
                  />
                  {/* {employerLocation && employerName && selected && (
                    <SaveAndContinue onClick={handleSubmit} />
                  )} */}
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

export default WorkingStatus;
const ErrorMessage = styled.p`
  font-size: 14px;
  color: ${THEME_COLORS.red_error} !important;
  position: absolute;
  bottom: -25px;
  left: 5px;
`;
const StatusBox = styled.div`
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
  width: 100%;
  min-height: 50px;
  background-color: ${THEME_COLORS.light_200};
  padding: 8px 12px;
  position: relative;
`;

const Employer = styled.div`
  position: relative;
  margin-bottom: 25px;
  cursor: pointer;
  min-height: 50px;
  border-radius: 8px;
  background-color: ${THEME_COLORS.light_200};
`;

const NameEmployer = styled.input`
  height: 100%;
  width: 100%;
  border-radius: 8px;
  background-color: ${THEME_COLORS.light_200};
  border: none;
  padding: 10px 17px;
  font-size: 18px;
  text-transform: capitalize;
  font-family: "DM_sans_medium";

  &:focus {
    outline-color: ${THEME_COLORS.light_200};
  }
  ::placeholder {
    font-size: 16px;
    color: ${THEME_COLORS.text_para};
    font-family: "DM_sans";
  }
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
    box-shadow: ${THEME_COLORS.elevation_expert_e4};
    overflow: hidden;
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

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 80px 0;
`;

const Name = styled.input`
  height: 100%;
  width: 100%;
  border-radius: 8px;
  background-color: ${THEME_COLORS.light_200};
  border: none;
  padding: 17px 12px;
  font-size: 18px;
  text-transform: capitalize;
  font-family: "DM_sans_medium";
  &:focus {
    outline-color: ${THEME_COLORS.light_200};
  }
  ::placeholder {
    font-size: 16px;
    font-family: "DM_sans";
    color: ${THEME_COLORS.text_para};
    @media all and (max-width: 1440px) {
    }
  }
`;

const Details = styled.div`
  margin-bottom: 25px;
  margin-top: 100px;
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
  width: 75%;
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
  @media all and (max-width: 1920px) {
    width: 49%;
  }
  @media all and (max-width: 1080px) {
    width: 70%;
  }
  @media all and (max-width: 980px) {
    width: 80%;
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
  font-family: "DM_sans_medium";
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
  margin-bottom: 35%;
  position: relative;
`;
