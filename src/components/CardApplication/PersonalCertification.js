import React from 'react';
import styled from 'styled-components';
import logo from "../../assets/images/maah_logo.png";

const Background = styled.div`
  background: linear-gradient(180deg, #f1f1f1 37.44%, #b2b2b2 100%);
  min-height: 100vh;
`;

const BackLogo = styled.img`
  position: absolute;
  transform: rotate(90deg);
  top: 400px;
  left: 75%;
  opacity: 0.2;
`;

const Process = styled.div`
  padding: 50px;
  text-align: center;
`;

const CompleteStep = styled.span`
  display: inline-block;
  width: 90px;
  height: 20px;
  margin: 5px;
  border-radius: 10px;
  background-color: #5A5A5A;
`;

const ProcessStep = styled.span`
  display: inline-block;
  width: 90px;
  height: 20px;
  margin: 5px;
  border-radius: 10px;
  background-color: #CECDCA;
`;

const MainWrap = styled.div`
  background-color: #fff;
  border-radius: 50px;
  margin: auto;
  padding: 50px;
  width: 1100px;
  height: 600px;
  box-shadow: inset 1px 5px rgba(0,0,0,0.2);
`;

const MainTitle = styled.div`
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  margin: 100px 0px;
`;

const Buttons = styled.div`
  margin: 32px;
  margin-top: 150px;
  text-align: center;

  & > button {
    width: 60%;
    height: 70px;
    margin: 5px;
    border-radius: 35px;
    font-size: 20px;
    font-weight: bold;
    color: white;
    background-color: black;
    cursor: pointer;
  }
`;

function PersonalCertification({setProcess}) {
  const gotoPrev = () => {
    setProcess(1);
  };

  const gotoNext = () => {
    setProcess(3);
  };

    return (
        <Background>
            <BackLogo src={logo}></BackLogo>
            <Process>
                <CompleteStep></CompleteStep>
                <CompleteStep></CompleteStep>
                <ProcessStep></ProcessStep>
                <ProcessStep></ProcessStep>
                <ProcessStep></ProcessStep>
            </Process>
            <MainWrap>
                <div>
                    <MainTitle>
                        한마음 님<br />
                        본인인증을 진행해주세요
                    </MainTitle>
                </div>
                <Buttons>
                    <button onClick={gotoNext}>본인인증</button>
                    <button onClick={gotoPrev}>이전으로</button>
                </Buttons>
            </MainWrap>
        </Background>
    );
}

export default PersonalCertification;