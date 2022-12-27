import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getComments } from "../../redux/modules/comments";
import CommentInput from "./CommentInput";
import CommentItem from "./CommentItem";

const Comment = () => {
  const commentsState = useSelector((state) => state.comments);
  const dispatch = useDispatch();

  useEffect(() => {
    commentsState.commentsData.length === 0 && dispatch(getComments());
  }, [dispatch, commentsState]);

  const paramId = useParams().id;

  const validComments = commentsState.commentsData.filter(
    (item) => item.postId === paramId
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
            password={item.password}
          />
        ))}
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
  max-height: 400px;
  height: auto;
  width: 480px;
  margin-left: 5px;
  background-color: #f8f5ef;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  padding: 20px;
  overflow: scroll;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default Comment;
