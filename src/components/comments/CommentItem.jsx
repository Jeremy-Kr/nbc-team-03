import React from "react";
import styled from "styled-components";

const CommentItem = () => {
  return (
    <CommentItemWrapper>
      <CommentTextContainer>
        <CommentTitle>올해는 돈 많이 벌게 해주세요</CommentTitle>
        <CommentUser>홍길동</CommentUser>
      </CommentTextContainer>
      <img src="#" alt="수정" />
      <img src="#" alt="삭제" />
    </CommentItemWrapper>
  );
};

const CommentItemWrapper = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  margin-bottom: 12px;
`;

const CommentTextContainer = styled.div`
  background-color: #fff;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 10px 20px;
  height: 30px;
  width: 288px;
  display: flex;
  justify-content: space-between;
  margin-right: 10px;
  border-radius: 6px;
`;

const CommentTitle = styled.div`
  font-size: 14px;
`;

const CommentUser = styled.div`
  font-size: 14px;
  color: #d3cace;
`;

export default CommentItem;
