import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getComments } from "../../redux/modules/comments";
import CommentInput from "./CommentInput";
import CommentItem from "./CommentItem";

const Comment = () => {
  const commentsState = useSelector((state) => {
    return state.comments;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    commentsState.commentsData.length === 0 && dispatch(getComments());
  }, [dispatch, commentsState]);

  // TODO: postId는 contents 기능 개발 이후 수정할 것
  const validComments = commentsState.commentsData.filter(
    (item) => item.postId === "temptmeptmeptmetpemprmer"
  );
  return (
    <CommentWrapper>
      <CommentsContainer>
        <CommentInput />
        {validComments.map((item) => (
          <CommentItem
            key={item.id}
            nickname={item.nickname}
            commentText={item.commentText}
            id={item.id}
          />
        ))}
        {/* <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          <span>&lt; 1 2 3 4 &gt; </span>
        </div> */}
      </CommentsContainer>
    </CommentWrapper>
  );
};

const CommentWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
`;

const CommentsContainer = styled.div`
  border-radius: 20px;
  height: 500px;
  width: 480px;
  margin-left: 5px;
  background-color: #f8f5ef;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  padding: 20px;
`;

export default Comment;
