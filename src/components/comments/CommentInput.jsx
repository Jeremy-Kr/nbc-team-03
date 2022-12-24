import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { postComments } from "../../redux/modules/comments";
import CustomBtn from "../common/CustomBtn";

const CommentInput = () => {
  const dispatch = useDispatch();
  const [commentNickname, setCommentNickname] = useState("");
  const [commentPassword, setCommentPassword] = useState("");
  const [commentText, setCommentText] = useState("");
  const handleNicknameOnChange = (e) => {
    setCommentNickname(e.target.value);
  };

  const handlePasswordOnChange = (e) => {
    setCommentPassword(e.target.value);
  };

  const handleTextOnChange = (e) => {
    setCommentText(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      id: nanoid(),
      // TODO: postId는 contents 기능 개발 이후 수정할 것
      postId: "temptmeptmeptmetpemprmer",
      nickname: commentNickname,
      password: commentPassword,
      commentText: commentText,
    };
    dispatch(postComments(newComment));
  };

  return (
    <InputsContainer
      onSubmit={(e) => {
        handleOnSubmit(e);
      }}
    >
      <InputBoxContainer>
        <CustomInput
          width="157px"
          height="35px"
          type="text"
          placeholder="닉네임"
          value={commentNickname}
          onChange={(e) => {
            handleNicknameOnChange(e);
          }}
        />
        <CustomInput
          width="157px"
          height="35px"
          type="password"
          placeholder="비밀번호"
          value={commentPassword}
          onChange={(e) => {
            handlePasswordOnChange(e);
          }}
        />
      </InputBoxContainer>
      <InputBoxContainer>
        <CustomInput
          width="330px"
          height="35px"
          type="text"
          placeholder="댓글로 응원하기"
          value={commentText}
          onChange={(e) => {
            handleTextOnChange(e);
          }}
        />
        <CustomBtn type="submit" width="85px" height="35px" fontSize="16px">
          응원하기
        </CustomBtn>
      </InputBoxContainer>
    </InputsContainer>
  );
};

const InputsContainer = styled.form`
  margin-bottom: 26px;
`;

const CustomInput = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: 16px;
  margin-right: 15px;
  border-radius: 8px;
  border: 0.5px solid #35353f;
  padding: 0 8px;
  box-sizing: border-box;
  &:focus {
    outline: none;
    border-color: #bb2649;
    box-shadow: 0 0 5px #bb2649;
  }
`;

const InputBoxContainer = styled.div`
  margin-bottom: 20px;
`;

export default CommentInput;
