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
          style={{ float: "right", marginRight: "10px", cursor: "pointer" }}
        ></AiFillEdit>
        <h2
          style={{
            paddingLeft: "38px",
            paddingBottom: "10px",
          }}
        >
          프론트엔드 개발자로 취업하기
        </h2>
        <div style={{ float: "right", color: "#5E5E5E" }}>김채하</div>

        <ul>
          <StyledItemSemiTitle>
            <span>
              <AiFillPushpin />
            </span>
            &nbsp;이유
          </StyledItemSemiTitle>
          <li>코딩이 재미있어서</li>
          <li>모아둔 돈이 떨어져서</li>
        </ul>
        <ul>
          <StyledItemSemiTitle>
            <span>
              <AiFillPushpin />
            </span>
            &nbsp;해야 할 일
          </StyledItemSemiTitle>
          <li>매일 코딩테스트문제 1개씩 풀기</li>
          <li>공식문서 읽어보기</li>
          <li>사이드 프로젝트 만들기</li>
        </ul>
        <ul>
          <StyledItemSemiTitle>
            <span>
              <AiFillPushpin />
            </span>
            &nbsp;목표달성일
          </StyledItemSemiTitle>
          <li>벚꽃피기 전에 취업!!</li>
          <li>이 안되면 여름옷 입기 전까지..</li>
        </ul>
      </StyledItemBox>
    </StyledTotalContainer>
  );
};

export default ContentItem;

const StyledTotalContainer = styled.div`
  border-radius: 66px;
  height: 1146px;
  width: 531px;
  margin-top: 21px;
  margin-left: 5px;
  background-color: darkgray;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
const StyledItemBox = styled.div`
  background-color: #f8f5ef;
  box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.25);
  border-radius: 26px;
  width: 430px;
  padding: 20px;
  margin-top: 20px;
`;
const StyledItemSemiTitle = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;
