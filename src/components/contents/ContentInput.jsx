import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { postContent } from "../../redux/modules/contents";
import CustomBtn from "../common/CustomBtn";
import Nav from "../common/Nav";
import useInputRef from "../hooks/useInputRef";

const ContentInput = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //각 input에 대해 useRef로 ref값을 주는 커스텀 hook
  const [
    nicknameRef,
    passwordRef,
    contentTitleRef,
    contentWhyRef,
    contentHowRef,
    contentWhenRef,
  ] = useInputRef();

  //onSubmit했을 때 추가되는 기능
  const submitHandler = (event) => {
    event.preventDefault();
    const newContent = {
      id: nanoid(),
      nickname: nicknameRef.current.value,
      password: passwordRef.current.value,
      contentTitle: contentTitleRef.current.value,
      contentWhy: contentWhyRef.current.value,
      contentHow: contentHowRef.current.value,
      contentWhen: contentWhenRef.current.value,
      date: Date.now(),
    };

    // 값이 입력되지 않으면 alret창을 띄운다.
    if (!nicknameRef.current.value) {
      alert("닉네임을 입력해주세요.");
      nicknameRef.current.focus();
      return;
    } else if (passwordRef.current.value.length < 4) {
      alert("비밀번호를 4자리 이상 입력해주세요.");
      passwordRef.current.focus();
      return;
    } else if (!contentTitleRef.current.value) {
      alert("이루고 싶은 소원을 입력해주세요.");
      contentTitleRef.current.focus();
      return;
    } else if (!contentWhyRef.current.value) {
      alert("소원을 이루고 싶은 이유를 입력해주세요.");
      contentWhyRef.current.focus();
      return;
    } else if (!contentHowRef.current.value) {
      alert("소원을 이루기 위해서 실천할 내용을 입력해주세요.");
      contentHowRef.current.focus();
      return;
    } else if (!contentWhenRef.current.value) {
      alert("소원을 언제까지 이루실건지 입력해주세요.");
      contentWhenRef.current.focus();
      return;
    } else {
      dispatch(postContent(newContent));
      alert("소원이 등록되었습니다🙏🏻");
      navigate("/home");
    }

    //입력이 완료되면 모든 input창의 값을 초기화 시킨다.
    nicknameRef.current.value = "";
    passwordRef.current.value = "";
    contentTitleRef.current.value = "";
    contentWhyRef.current.value = "";
    contentHowRef.current.value = "";
    contentWhenRef.current.value = "";
  };
  return (
    <InputPageContainer>
      <Nav isInput={true} />
      <InputForm onSubmit={submitHandler}>
        <UserInputBox>
          <UserInput ref={nicknameRef} placeholder="닉네임" autoFocus={true} />
          <UserInput type="password" placeholder="비밀번호" ref={passwordRef} />
        </UserInputBox>
        <WishInput placeholder="소원을 적어주세요." ref={contentTitleRef} />
        <TextareaBox>
          <label htmlFor="why">왜 이 소원을 이루고 싶으신가요?</label>
          <Textarea id="why" ref={contentWhyRef} />
        </TextareaBox>
        <TextareaBox>
          <label htmlFor="how">어떤 노력을 하실 건가요?</label>
          <Textarea id="how" ref={contentHowRef} />
        </TextareaBox>
        <TextareaBox>
          <label htmlFor="when">목표를 언제까지 달성하고 싶으세요?</label>
          <Textarea id="when" ref={contentWhenRef} />
        </TextareaBox>
        <CustomBtn width="100%" height="50px" fontSize="18px">
          소원빌기
        </CustomBtn>
      </InputForm>
    </InputPageContainer>
  );
};

const InputPageContainer = styled.div`
  border-radius: 66px;
  height: 1146px;
  width: 531px;
  margin-top: 21px;
  margin-left: 5px;
`;
const InputForm = styled.form`
  width: 80%;
  margin: 0 auto;
  padding-top: 50px;
`;

const TextareaBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 35px;
  &:last-of-type {
    margin-bottom: 60px;
  }
`;
const Textarea = styled.textarea`
  background-color: #f8f5ef;
  border: none;
  height: 95px;
  width: 97%;
  background: #f8f5ef;
  border: 1px solid #dedede;
  border-radius: 5px;
  padding-left: 3%;
  padding-top: 10px;
  margin-top: 10px;
  resize: none;
  &:focus {
    outline: none;
    border-color: #bb2649;
    box-shadow: 0 0 5px #bb2649;
  }
`;
const UserInputBox = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
`;
const UserInput = styled.input`
  background-color: #f8f5ef;
  height: 35px;
  width: 100px;
  background: #f8f5ef;
  border: 1px solid #dedede;
  border-radius: 5px;
  padding-left: 3%;
  &:focus {
    outline: none;
    border: 1px solid #bb2649;
    box-shadow: 0 0 5px #bb2649;
  }
`;
const WishInput = styled.input`
  background-color: #f8f5ef;
  border: none;
  border-radius: 10px;
  width: 97%;
  height: 40px;
  margin-bottom: 30px;
  border: 1px solid #dedede;
  border-radius: 5px;
  padding-left: 3%;
  &:focus {
    outline: none;
    border: 1px solid #bb2649;
    box-shadow: 0 0 5px #bb2649;
  }
`;
export default ContentInput;
