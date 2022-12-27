import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import SecularOne from "../../Styles/fonts/SecularOne-Regular.ttf";
import CustomBtn from "../common/CustomBtn";

const Lending = () => {
  const navigate = useNavigate();
  return (
    <LendingContainer>
      <LendingTitle>
        作心
        <br />
        一年
      </LendingTitle>
      <LendingQuote style={{ transform: "scale(-1, -1)" }}>''</LendingQuote>
      <LendingText>여러분의 새해 목표는 무엇인가요?</LendingText>
      <LendingQuote>''</LendingQuote>
      <CustomBtn
        onClick={() => {
          navigate("/home");
        }}
        width="200px"
        height="60px"
        fontSize="22px"
      >
        새해소원 빌러가기
      </CustomBtn>
    </LendingContainer>
  );
};

const LendingContainer = styled.div`
  // 모든 component에서 컨테이너로 적용해야함
  border-radius: 66px;
  height: 1146px;
  width: 531px;
  margin-top: 21px;
  margin-left: 5px;
  // 요기까지

  background-color: #35353f;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LendingTitle = styled.h1`
  color: #f8f5ef;
  margin-top: 230px;
  font-size: 50px;
  margin-bottom: 100px;
`;

const LendingQuote = styled.h2`
  @font-face {
    font-family: "Secular One";
    src: local("Secular One"), url(${SecularOne}) format("woff");
    font-weight: 300;
    font-style: normal;
  }
  font-family: "Secular One", sans-serif;
  color: #bb2649;
  font-size: 60px;
  margin: 0;
  &:last-of-type {
    margin-bottom: 90px;
  }
`;

const LendingText = styled.h2`
  color: #f8f5ef;
  font-size: 28px;
  line-height: 130px;
`;

export default Lending;
