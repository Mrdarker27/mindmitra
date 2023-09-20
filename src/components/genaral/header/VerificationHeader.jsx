import React from "react";
import styled from "styled-components";
import { THEME_COLORS } from "../../../ThemeConfig";

function VerificationHeader() {
  return (
    <>
      <MainContainer>
        <Wrapper>
          <Container>
            <Left>
              <LogoBox>
                <Image
                  src={
                    require("../../../assets/image/loginpage/header/logofull.svg")
                      .default
                  }
                  alt="logo_full"
                />
              </LogoBox>
            </Left>
            {/* <Center>
              <Box className="dashboard">
                <ImgBox>
                  <Image
                    src={
                      require("../../../assets/image/loginpage/profileheader/dashbord_icon.svg")
                        .default
                    }
                    alt="dashbord_icon"
                  />
                </ImgBox>

                <Heading className="blue">Dashboard</Heading>
              </Box>
              <Box>
                <ImgBox>
                  <Image
                    src={
                      require("../../../assets/image/loginpage/profileheader/schedule_icon.svg")
                        .default
                    }
                    alt="schedule_icon"
                  />
                </ImgBox>

                <Heading>Schedule</Heading>
              </Box>
              <Box>
                <ImgBox>
                  <Image
                    src={
                      require("../../../assets/image/loginpage/profileheader/reports_icon.svg")
                        .default
                    }
                    alt="reports_icon"
                  />
                </ImgBox>

                <Heading>Reports</Heading>
              </Box>
              <Box>
                <ImgBox>
                  <Image
                    src={
                      require("../../../assets/image/loginpage/profileheader/account_icon.svg")
                        .default
                    }
                    alt="account_icon"
                  />
                </ImgBox>
                <Heading>My Account</Heading>
              </Box>
            </Center> */}
            <Right>
              <ImageBox>
                <Image
                  src={
                    require("../../../assets/image/loginpage/profileheader/search_icon.svg")
                      .default
                  }
                  alt="search_icon"
                />
              </ImageBox>
              <ImageBox>
                <Image
                  src={
                    require("../../../assets/image/loginpage/profileheader/bell_icon.svg")
                      .default
                  }
                  alt="bell_icon"
                />
              </ImageBox>
              {/* <ImageBox>
                <Image
                  src={
                    require("../../../assets/image/loginpage/profileheader/settings_icon.svg")
                      .default
                  }
                  alt="settings_icon"
                />
              </ImageBox> */}
              <ImageBox className="avatar">
                <Image
                  src={
                    require("../../../assets/image/loginpage/profileheader/avatar.svg")
                      .default
                  }
                  alt="avatar_icon"
                />
              </ImageBox>
              <ImageBox>
                <Image
                  src={
                    require("../../../assets/image/loginpage/profileheader/down_arrow_icon.svg")
                      .default
                  }
                  alt="down_arrow_icon"
                />
              </ImageBox>
            </Right>
          </Container>
        </Wrapper>
      </MainContainer>
    </>
  );
}

export default VerificationHeader;

const MainContainer = styled.div``;
const Wrapper = styled.div`
  margin: 0 auto;
`;
const Left = styled.div`
  padding-left: 35px;
  margin-bottom: 10px;
  @media all and (max-width: 980px) {
    padding-left: 20px;
  }
`;

const LogoBox = styled.div`
  width: 150px;
  @media all and (max-width: 980px) {
    width: 120px;
  }
`;
const Image = styled.img``;

const Right = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  margin-right: 35px;
  @media all and (max-width: 980px) {
    margin-right: 20px;
  }
  .avatar {
    width: 30px;
    margin-right: 1px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  border-bottom: 1px solid ${THEME_COLORS.divider};
  height: 50px;
`;
const ImageBox = styled.div`
  width: 20px;
  margin-right: 10px;
`;
