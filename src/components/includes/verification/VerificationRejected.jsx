import React from "react";
import styled from "styled-components";
import { THEME_COLORS } from "../../../ThemeConfig";
import VerificationHeader from "../../genaral/header/VerificationHeader";

function VerificationRejected() {
    return (
        <>
            <MainContainer>
                <Wrapper>
                    <Container>
                        <Top>
                            <VerificationHeader />
                        </Top>
                        <Bottom>
                            <Verification>
                                <ImageBox>
                                    <Image
                                        src={require("../../../assets/image/loginpage/verificatonpages/verification_rejected.png")}
                                        alt="rejected"
                                    />
                                </ImageBox>
                                <Titile>
                                    <Heading>Your account verification is Rejected</Heading>
                                    <SubTitile>Check your email to find the reason.</SubTitile>
                                </Titile>
                            </Verification>
                        </Bottom>
                    </Container>
                </Wrapper>
            </MainContainer>
        </>
    );
}

export default VerificationRejected;
const MainContainer = styled.div``;
const Wrapper = styled.div`
    margin: 0 auto;
`;
const Container = styled.div``;
const Top = styled.div`
    margin-bottom: 130px;
`;
const Bottom = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 550px;
`;
const Image = styled.img``;
const ImageBox = styled.div`
    padding: 64px 40px 35px 40px;
`;
const Heading = styled.h3`
    text-align: center;
    font-size: 24px;
    font-family: "DM_sans";
    font-weight: 700;
    margin-bottom: 14px;
    @media all and (max-width: 768px) {
        font-size: 20px;
    }
`;
const SubTitile = styled.p`
    text-align: center;
    font-size: 16px;
    font-family: "DM_sans";
    font-weight: 400;
    line-height: 1.4em;
`;
const Verification = styled.div`
    width: 450px;
    @media all and (max-width: 768px) {
        width: 400px;
    }
    box-shadow: ${THEME_COLORS.elevation_expert_e3};
    border-radius: 10px;
`;
const Titile = styled.div`
    margin-bottom: 30px;
`;
