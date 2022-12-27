import { nanoid } from "@reduxjs/toolkit";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { postComments } from "../../redux/modules/comments";
import CustomBtn from "../common/CustomBtn";

const CommentInput = () => {
  const dispatch = useDispatch();
  const paramId = useParams().id;

  const [commentNickname, setCommentNickname] = useState("");
  const [commentPassword, setCommentPassword] = useState("");
  const [commentText, setCommentText] = useState("");

  useEffect(() => {
    if (commentNickname && commentPassword && commentText) {
      submitButtonRef.current.disabled = false;
    }
    if (!commentNickname || !commentPassword || !commentText) {
      submitButtonRef.current.disabled = true;
    }
  }, [commentNickname, commentPassword, commentText]);

  const nicknameRef = useRef();
  const passwordRef = useRef();
  const textRef = useRef();
  const submitButtonRef = useRef();
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
    if (!commentNickname) {
      nicknameRef.current.focus();
      return alert("닉네임을 입력하세요");
    }
    if (!commentPassword) {
      passwordRef.current.focus();
      return alert("비밀번호를 입력하세요");
    }
    if (!commentText) {
      textRef.current.focus();
      return alert("댓글을 입력하세요");
    }
    const newComment = {
      id: nanoid(),
      postId: paramId,
      nickname: commentNickname,
      password: commentPassword,
      commentText: commentText,
      createdDate: Date.now(),
    };
    dispatch(postComments(newComment));
    setCommentNickname("");
    setCommentPassword("");
    setCommentText("");
    return alert("코멘트 등록이 완료되었습니다.");
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
          ref={nicknameRef}
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
          ref={passwordRef}
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
          ref={textRef}
          onChange={(e) => {
            handleTextOnChange(e);
          }}
        />
        <CustomBtn
          ref={submitButtonRef}
          type="submit"
          width="85px"
          height="35px"
          fontSize="16px"
          disabled={true}
        >
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
