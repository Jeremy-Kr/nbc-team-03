import React from "react";
import styled from "styled-components";
import CommentInput from "./CommentInput";
import CommentItem from "./CommentItem";

const Comment = () => {
  return (
    <CommentWrapper>
      <CommentsContainer>
        <CommentInput />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        {/* 아래 페이지네이션 구현 후 다시 변경할 것 */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          <span>&lt; 1 2 3 4 &gt; </span>
        </div>
      </CommentsContainer>
    </CommentWrapper>
  );
};

const CommentWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const CommentsContainer = styled.div`
  border-radius: 20px;
  height: 600px;
  width: 480px;
  margin-top: 200px;
  margin-left: 5px;
  background-color: #f8f5ef;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  padding: 20px;
`;

export default Comment;
