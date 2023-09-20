/** @format */

import React, { useContext, useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { THEME_COLORS } from "../../../ThemeConfig";
import { Context } from "../../contexts/Store";
import PreviousButton from "../../genaral/chip/PreviousButton";
import SaveAndContinue from "../../genaral/chip/SaveAndContinue";
import Cancel from "../../genaral/chip/Cancel";

function YourBio() {
  const navigate = useNavigate();
  const [isChecked, setChecked] = useState(false);
  const [isCheckedTerms, setCheckedTerms] = useState(false);
  const [handleBorder, setBorder] = useState(false);
  const [bioDetail, setBioDetail] = useState("");
  const [isError, setError] = useState(false);
  const [isEduUploaded, setEduUploaded] = useState(false);
  const [isLicenseUploaded, setLicenseUploaded] = useState(false);
  const [isRCIUploaded, setRCIUploaded] = useState(false);
  const [isPMUploaded, setPMUploaded] = useState(false);

  const { dispatch, state } = useContext(Context);
  const [file, setFile] = useState([
    {
      id: 1,
      title: "Education and Training*",
      labelId: "file_Input_1",
      fileName: "",
      is_uploaded: false,
      file: "",
      show_error: true,
    },
    {
      id: 2,
      title: "RCI Registration*",
      labelId: "file_Input_2",
      fileName: "",
      is_uploaded: false,
      file: "",
      show_error: true,
    },
    {
      id: 3,
      title: "Licensing (if any)",
      labelId: "file_Input_3",
      fileName: "",
      is_uploaded: false,
      // file: "",
      show_error: false,
    },
    {
      id: 4,
      title: "Professional Membership (if any)",
      labelId: "file_Input_4",
      fileName: "",
      is_uploaded: false,
      show_error: false,
      // file: "",
    },
  ]);
  useEffect(() => {
    setBioDetail(state.user_data.your_bio.biography);
  }, []);

  useEffect(() => {
    dispatch({
      type: "PROFILE_STATUS_UPDATE",
      profile_updation: {
        working_status: true,
        your_bio: false,
      },
    });
  }, []);
  const verifyDetails = () => {
    let Continue = true;
    if (!bioDetail) {
      setError(true);
      Continue = false;
    } else if (!isChecked) {
      setError(true);
      Continue = false;
    } else if (!isCheckedTerms) {
      setError(true);
      Continue = false;
    } else if (!isEduUploaded) {
      setError(true);
      Continue = false;
    } else if (!isRCIUploaded) {
      setError(true);
      Continue = false;
    } else {
      setError(false);
      Continue = true;
    }
    return Continue;
  };
  const handleSubmit = () => {
    setBorder(true);
    let canContinue = verifyDetails();
    if (canContinue) {
      navigate("/account-successful");
      // navigate("/account-verification");
      dispatch({
        type: "UPDATE_USER_DATA",
        user_data: {
          your_bio: {
            biography: bioDetail,
          },
        },
      });
      dispatch({
        type: "PROFILE_STATUS_UPDATE",
        profile_updation: {
          your_bio: true,
          is_completed: true,
        },
      });
    }
  };

  const handleFileUpload = (event, data) => {
    data.fileName = event.target.files[0]?.name;
    data.file = event.target.files[0];
    data.is_uploaded = true;

    if (data.labelId === "file_Input_1") {
      setEduUploaded(true);
    } else if (data.labelId === "file_Input_2") {
      setRCIUploaded(true);
    } else if (data.labelId === "file_Input_3") {
      setLicenseUploaded(true);
    } else if (data.labelId === "file_Input_4") {
      setPMUploaded(true);
    }

    setFile([...file]);
  };

  const handleRemoveFileName = (data) => {
    data.fileName = "";
    data.file = "";
    data.is_uploaded = false;
    setFile([...file]);
    if (data.labelId === "file_Input_1") {
      setEduUploaded(false);
    } else if (data.labelId === "file_Input_2") {
      setRCIUploaded(false);
    } else if (data.labelId === "file_Input_3") {
      setLicenseUploaded(false);
    } else if (data.labelId === "file_Input_4") {
      setPMUploaded(false);
    }
  };

  const renderFileInputs = () => {
    return file.map((data) => {
      return (
        <UploadBoxMain key={data.id}>
          <EducationText>{data.title}</EducationText>

          <Upload
            type="file"
            onChange={(e) => handleFileUpload(e, data)}
            id={data.labelId}
            accept=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf"
          />
          {Boolean(data.fileName) === false && (
            <UploadText className="input_container" htmlFor={data.labelId}>
              + Upload
            </UploadText>
          )}

          {data.fileName && (
            <p>
              {" "}
              <CancelBox>
                <h4>{data.fileName}</h4>
                <div>
                  <img
                    src={
                      require(`../../../assets/image/loginpage/profilecreatepage/cancel.svg`)
                        .default
                    }
                    onClick={() => {
                      handleRemoveFileName(data);
                    }}
                    alt="cancel"
                  />
                </div>
              </CancelBox>
            </p>
          )}
          {isError && !data.is_uploaded && data.show_error && (
            <ErrorMessage>select the file</ErrorMessage>
          )}
        </UploadBoxMain>
      );
    });
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
                <Titile>Your Bio</Titile>
              </TitileBox>
              <Heading>
                <TopBox className="self">
                  <SubHeading>Describe Yourself </SubHeading>
                  <SubTitile>Describe yourself in a short brief.</SubTitile>
                </TopBox>
              </Heading>
              <Sub>
                <SubText>Upload Documents</SubText>
                <SubBox>
                  <Number>1.</Number>
                  <MoreDetail>
                    Education and Training: A minimum of a Master's degree in
                    psychology or a related field is required. Some roles may
                    require a Doctorate degree (Ph.D. or Psy.D.){" "}
                  </MoreDetail>
                </SubBox>
                <SubBox>
                  <Number>2.</Number>
                  <MoreDetail>
                    Registration: Experts in India are required to register with
                    the Rehabilitation Council of India (RCI) in order to
                    practice legally
                  </MoreDetail>
                </SubBox>
                <SubBox>
                  <Number>3.</Number>
                  <MoreDetail>
                    Licensing: Some states in India have their own licensing /
                    boards which require an additional registration and{" "}
                    certification process.
                  </MoreDetail>
                </SubBox>
                <SubBox>
                  <Number>4.</Number>
                  <MoreDetail>
                    Professional Membership: Such as the Indian Association of
                    Clinical Psychologists (IACP) or the Indian Psychiatric
                    Society (IPS).
                  </MoreDetail>
                </SubBox>
              </Sub>
            </Left>
            <Right>
              <Cancel onClick={handleCancel} />

              <Brief>
                <Bio
                  type="text"
                  placeholder="Enter a Brief Bio *"
                  onChange={(e) => {
                    setBioDetail(e.target.value);
                  }}
                  value={bioDetail}
                />
                {isError && !bioDetail && (
                  <ErrorMessage>Enter you bio*</ErrorMessage>
                )}
              </Brief>
              <UploadBox>{renderFileInputs()}</UploadBox>

              <Box className="CheckBox1">
                <CheckBox
                  onClick={() => setCheckedTerms(!isCheckedTerms)}
                  border={isCheckedTerms}
                  handleBorder={handleBorder}
                >
                  {isCheckedTerms && (
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
                  I Agree to mindmitra <TCBox> Terms and Policy</TCBox>
                </Check>
              </Box>
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
                  100% I Agree Expert <TCBox> Code of Conduct</TCBox>
                </Check>
              </Box>
              <Bottom>
                <LeftBox>*This field is mandatory</LeftBox>
                {/* <RightBox>
                 
                  <Save
                    // onClick={() => {
                    //   navigate("/account-verification");
                    // }}
                    // onClick={() => {
                    //   navigate("/account-rejected");
                    // }}
                    onClick={() => {
                      navigate("/account-successful");
                    }}
                  >
                    Save & Continue
                  </Save>
                </RightBox> */}
                <RightBox>
                  <PreviousButton
                    onClick={() => {
                      navigate("/working-status");
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

export default YourBio;

const CancelBox = styled.div`
  display: flex;
  width: fit-content;
  background-color: ${THEME_COLORS.chips_green_container};
  padding: 10px 15px;
  border-radius: 10px;
  div {
    width: fit-content;
    margin-left: 15px;
    align-items: center;
    display: flex;
  }
  h4 {
    color: ${THEME_COLORS.chips_green_on_container};
    font-family: "DM_sans_medium";
    font-size: 14px;
  }
`;
const UploadBox = styled.div`
  margin-bottom: 150px;
  @media all and (max-width: 1080px) {
    margin-bottom: 50px;
  }
`;

const Upload = styled.input`
  display: none;
`;
const UploadText = styled.label`
  display: inline-block;
  user-select: none;
  cursor: pointer;
  border-radius: 8px;
  color: ${THEME_COLORS.dark_500};
  border: 3px solid ${THEME_COLORS.light_400};
  align-items: center;
  display: flex;
  justify-content: center;
  font-size: 14px;
  font-family: "DM_sans_medium";
  border-radius: 9px;
  padding: 6px 16px;
`;
const Brief = styled.div`
  position: relative;
  margin-bottom: 30px;
  margin-top: 100px;
`;
const Bio = styled.textarea`
  resize: none;
  height: 90px;
  width: 96%;
  border-radius: 8px;
  background-color: ${THEME_COLORS.light_200} !important;
  border: none;
  padding: 10px;
  font-size: 16px;
  text-transform: capitalize;
  width: 100%;

  &:focus {
    outline-color: ${THEME_COLORS.chips_blue_on_container_2};
  }
  ::placeholder {
    font-size: 16px;
    font-weight: 400;
    font-family: "DM_sans";
  }
`;
const ErrorMessage = styled.p`
  font-size: 14px;
  color: ${THEME_COLORS.red_error};
  position: absolute;
  bottom: -20px;
`;
const Sub = styled.div`
  margin-top: 30px;
`;
const SubText = styled.h3`
  color: ${THEME_COLORS.text_title};
  font-size: 20px;
  font-family: "dm_sans_medium";
  margin-bottom: 20px;
`;
const SubBox = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
const Number = styled.p`
  margin-right: 5px;
  font-size: 14px;

  color: ${THEME_COLORS.text_para};
`;
const MoreDetail = styled.p`
  color: ${THEME_COLORS.text_para};
  font-size: 14px;
  font-family: "DM_sans";
  max-width: 88%;
  @media all and (max-width: 1080px) {
    max-width: 80%;
  }
`;
const UploadBoxMain = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  font-size: 14px;
`;
const EducationText = styled.h3`
  font-family: "DM_sans_medium";
  font-size: 16px;
  display: flex;
  align-items: center;
`;
const Box = styled.div`
  margin-bottom: 40px;
  display: flex;
  &.CheckBox1 {
    margin-bottom: 14px;
  }
`;
const CheckBox = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 5px;
  margin-top: 1px;
  cursor: pointer;
  border: ${({ border, handleBorder }) =>
    border === false && handleBorder
      ? `1px solid ${THEME_COLORS.red_error}`
      : `1px solid ${THEME_COLORS.light_400}`};
  @media all and (max-width: 1280px) {
    margin-top: 0;
    width: 15px;
    height: 15px;
  }
`;
const CheckBoxIcon = styled.img``;
const Check = styled.div`
  display: flex;
  color: ${THEME_COLORS.text_para};
  margin-left: 10px;
  font-size: 16px;
  font-family: "DM_sans";
  font-weight: 400;
  @media all and (max-width: 1280px) {
    font-size: 14px;
  }
`;
const TCBox = styled(Link)`
  text-decoration: underline;
  color: ${THEME_COLORS.chips_blue_on_container_2};
  margin-left: 5px;
  font-family: "DM_sans";
  font-weight: 400;
  font-size: 16px;
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media all and (max-width: 1080px) {
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

  @media all and (max-width: 1080px) {
    margin-bottom: 15px;
  }
`;

const TopBox = styled.div``;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 80px 0;
`;

const Main = styled.div`
  margin-top: 80px;
`;
const Div = styled.div`
  border-top: 2px solid ${THEME_COLORS.chips_blue_on_container_2};
  width: 100%;
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
    width: 500px;
  }
`;
const Right = styled.div`
  width: 58%;
  display: flex;
  flex-direction: column;
  @media all and (max-width: 1280px) {
    width: 45%;
  }
  @media all and (max-width: 980px) {
    width: 50%;
  }
  @media all and (max-width: 868px) {
    width: 53%;
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
  font-weight: 400;
  margin-bottom: 10px;
  font-family: "dm_sans_medium";
  color: ${THEME_COLORS.text_title};
`;
const SubTitile = styled.h5`
  color: ${THEME_COLORS.text_para};
  font-size: 14px;
  font-family: "dm_sans_medium";
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
