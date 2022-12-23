import React from "react";
import styled from "styled-components";
import {
  AiFillEdit,
  AiOutlineCloseCircle,
  AiFillPushpin,
} from "react-icons/ai";

const ContentItem = () => {
  return (
    <StyledTotalContainer>
      <StyledItemBox>
        <AiOutlineCloseCircle
          onClick={() => alert("삭제")}
          style={{ float: "right", cursor: "pointer" }}
        ></AiOutlineCloseCircle>
        <AiFillEdit
          onClick={() => alert("수정")}
          style={{ float: "right", marginRight: "15px", cursor: "pointer" }}
        ></AiFillEdit>
        <CustomH2>프론트엔드 개발자로 취업하기</CustomH2>
        <div style={{ float: "right", color: "#5E5E5E", marginTop: "10px" }}>
          김채하
        </div>

        <ul>
          <StyledItemSemiTitle>
            <span>
              <AiFillPushpin />
            </span>
            &nbsp;이루고 싶은 이유
          </StyledItemSemiTitle>
          <StyledLi>코딩이 재미있어서</StyledLi>
          <StyledLi>모아둔 돈이 떨어져서</StyledLi>
        </ul>
        <ul>
          <StyledItemSemiTitle>
            <span>
              <AiFillPushpin />
            </span>
            &nbsp;해야 할 일
          </StyledItemSemiTitle>
          <StyledLi>매일 코딩테스트문제 1개씩 풀기</StyledLi>
          <StyledLi>공식문서 읽어보기</StyledLi>
          <StyledLi>사이드 프로젝트 만들기</StyledLi>
        </ul>
        <ul>
          <StyledItemSemiTitle>
            <span>
              <AiFillPushpin />
            </span>
            &nbsp;목표달성일
          </StyledItemSemiTitle>
          <StyledLi>벚꽃피기 전에 취업!!</StyledLi>
          <StyledLi>이 안되면 여름옷 입기 전까지..</StyledLi>
        </ul>
      </StyledItemBox>
    </StyledTotalContainer>
  );
};

const StyledTotalContainer = styled.div`
  border-radius: 66px;
  height: auto;
  width: 531px;
  margin-top: 11px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
const StyledItemBox = styled.div`
  box-sizing: border-box;
  background-color: #f8f5ef;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 26px;
  width: 485px;
  padding: 30px;
  margin-top: 20px;
`;
const StyledItemSemiTitle = styled.div`
  font-weight: bold;
  margin: 15px 0;
  margin-top: 30px;
`;

const CustomH2 = styled.h2`
  font-size: 20px;
  font-weight: bold;
`;

const StyledLi = styled.li`
  margin: 10px 0;
`;

export default ContentItem;
