import React, { useContext } from "react";
import styled from "styled-components";
import { THEME_COLORS } from "../../../ThemeConfig";
import { Context } from "../../contexts/Store";

function ProfileHeader({ completed }) {
    let path = window.location.pathname;
    const { state } = useContext(Context);
    const profile_updation = state.profile_updation;

    return (
        <>
            <Main>
                <Wrapper>
                    <Logo>
                        <img
                            src={
                                require("../../../assets/image/loginpage/header/logofull.svg")
                                    .default
                            }
                            alt="logo_full"
                        />
                    </Logo>

                    <Right>
                        <AboutBox>
                            <First>
                                {path === "/about-you" && !profile_updation.about_you && (
                                    <Icon
                                        src={
                                            require("../../../assets/image/loginpage/header/onefiled.svg")
                                                .default
                                        }
                                        alt="twofiled"
                                    />
                                )}
                                {profile_updation.about_you && (
                                    <Icon
                                        src={
                                            require("../../../assets/image/loginpage/header/tik.svg")
                                                .default
                                        }
                                        alt="tik"
                                    />
                                )}
                            </First>
                            <TextBox>
                                {" "}
                                <Head className={path === "/about-you" ? "currentPage" : ""}>
                                    About you
                                </Head>
                                <Line>
                                    <Lines
                                        src={
                                            require("../../../assets/image/loginpage/header/line.svg")
                                                .default
                                        }
                                        alt="line_small"
                                    />
                                </Line>
                            </TextBox>
                        </AboutBox>
                        <Expert>
                            <Second>
                                {path === "/expert-details" && !profile_updation.expert_details && (
                                    <Icon
                                        src={
                                            require("../../../assets/image/loginpage/header/twofiled.svg")
                                                .default
                                        }
                                        alt="twofiled"
                                    />
                                )}
                                {profile_updation.expert_details && (
                                    <Icon
                                        src={
                                            require("../../../assets/image/loginpage/header/tik.svg")
                                                .default
                                        }
                                        alt="tik"
                                    />
                                )}
                                {path !== "/expert-details" && !profile_updation.expert_details && (
                                    <Icon
                                        src={
                                            require("../../../assets/image/loginpage/header/twoblank.svg")
                                                .default
                                        }
                                        alt="tik"
                                    />
                                )}
                            </Second>
                            <LiteText>
                                <Head className={path !== "/expert-details" ? "currentPage" : ""}>
                                    Expert Details
                                </Head>
                                <Line>
                                    <Lines
                                        src={
                                            require("../../../assets/image/loginpage/header/line.svg")
                                                .default
                                        }
                                        alt="line_small"
                                    />
                                </Line>
                            </LiteText>
                        </Expert>
                        <Working>
                            <Three>
                                {path === "/working-status" && !profile_updation.working_status && (
                                    <Icon
                                        src={
                                            require("../../../assets/image/loginpage/header/threefiled.svg")
                                                .default
                                        }
                                        alt="twofiled"
                                    />
                                )}
                                {profile_updation.working_status && (
                                    <Icon
                                        src={
                                            require("../../../assets/image/loginpage/header/tik.svg")
                                                .default
                                        }
                                        alt="tik"
                                    />
                                )}
                                {path !== "/working-status" && !profile_updation.working_status && (
                                    <Icon
                                        src={
                                            require("../../../assets/image/loginpage/header/threeblank.svg")
                                                .default
                                        }
                                        alt="three_blank"
                                    />
                                )}
                            </Three>
                            <WorkingText>
                                <Head className={path !== "/working-status" ? "currentPage" : ""}>
                                    Working Status
                                </Head>
                                <Line>
                                    <Lines
                                        src={
                                            require("../../../assets/image/loginpage/header/line.svg")
                                                .default
                                        }
                                        alt="line_small"
                                    />
                                </Line>
                            </WorkingText>
                        </Working>
                        <Bio>
                            <Four>
                                {path === "/your-bio" && !profile_updation.your_bio && (
                                    <Icon
                                        src={
                                            require("../../../assets/image/loginpage/header/fourfiled.svg")
                                                .default
                                        }
                                        alt="four_filed"
                                    />
                                )}
                                {profile_updation.your_bio && (
                                    <Icon
                                        src={
                                            require("../../../assets/image/loginpage/header/tik.svg")
                                                .default
                                        }
                                        alt="tik"
                                    />
                                )}
                                {path !== "/your-bio" && !profile_updation.your_bio && (
                                    <Icon
                                        src={
                                            require("../../../assets/image/loginpage/header/fourblank.svg")
                                                .default
                                        }
                                        alt="four_blank"
                                    />
                                )}
                            </Four>
                            <WorkingText>
                                <Head>Your Bio</Head>
                            </WorkingText>
                        </Bio>
                    </Right>
                </Wrapper>
            </Main>
        </>
    );
}

export default ProfileHeader;
const Head = styled.p`
    font-size: 16px;
    font-family: "DM_sans_bold";
    text-align: center;
    text-decoration: none;
    color: ${THEME_COLORS.text_para};
    &.currentPage {
        color: ${THEME_COLORS.text_title};
    }
    @media all and (max-width: 980px) {
        font-size: 14px;
    }
`;

const WorkingText = styled.div`
    margin: auto 7px;
    width: 100%;
    display: flex;

`;
const Bio = styled.div`
    display: flex;
    align-items: center;
 
`;
const LiteText = styled.div`
    display: flex;

`;
const Expert = styled.div`
    display: flex;
    align-items: center;

`;
const Working = styled.div`
    display: flex;
    align-items: center;

`;
const Three = styled.div`
    width: 15%;

`;
const Four = styled.div`
    width: 30%;
  
`;
const Second = styled.div`
    width: 13%;
    margin-right: 10px;
  
`;
const Lines = styled.img``;
const Line = styled.div`
    width: 20px;
    margin: 12px 0px 12px 12px;
    @media all and (max-width: 980px) {
        width: 0px;
    }
`;
const TextBox = styled.div`
    margin: auto 13px;
    display: flex;
`;
const AboutBox = styled.div`
    display: flex;
    align-items: center;
 
`;
const First = styled.div`
    width: 15%;
  
`;
const Icon = styled.img`
    margin-right: 10px;
`;
const Main = styled.div`
    border-bottom: 1px solid ${THEME_COLORS.divider};
    position: sticky;
    height: 80px;
    position: fixed;
    right: 0;
    top: 0;
    width: 100%;
    z-index: 100;
    background-color: ${THEME_COLORS.white};
`;
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 130px;
    @media all and (max-width: 1280px) {
        padding: 0px 30px;
    }
`;

const Logo = styled.div`
    width: 170px;
    display: inline-block;
    @media all and (max-width: 1200px) {
        margin-left: 0px;
    }
    @media all and (max-width: 980px) {
        width: 120px;
    }
    img {
        width: 100%;
        display: block;
    }
`;
const Right = styled.div`
    display: flex;
@media all and (max-width: 1920px) {
    gap: 100px;
}
 
`;
