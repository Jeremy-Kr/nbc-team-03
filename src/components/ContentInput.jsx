import React from "react";
import styled from "styled-components";
import CustomBtn from "./common/CustomBtn";

const ContentInput = () => {
  return (
    <InputPageContainer>
      {/* navvar */}
      <InputContainer>
        <UserInputBox>
          <UserInput type="text" placeholder="닉네임" autoFocus={true} />
          <UserInput type="password" placeholder="비밀번호" />
        </UserInputBox>
        <WishInput placeholder="소원" />
        <TextareaBox>
          <label htmlFor="why">왜 이 소원을 이루고 싶으신가요?</label>
          <Textarea id="why" />
        </TextareaBox>
        <TextareaBox>
          <label htmlFor="how">어떤 노력을 하실 건가요?</label>
          <Textarea id="how" />
        </TextareaBox>
        <TextareaBox>
          <label htmlFor="when">목표를 언제까지 달성하고 싶으세요?</label>
          <Textarea id="when" />
        </TextareaBox>
        <CustomBtn width="100%" height="50px" fontSize="18px">
          소원빌기
        </CustomBtn>
      </InputContainer>
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
const InputContainer = styled.div`
  width: 80%;
  margin: auto;
  padding-top: 100px;
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
`;
export default ContentInput;
