import React from "react";
import styled from "styled-components";
import CustomBtn from "../common/CustomBtn";

const CommentInput = () => {
  return (
    <InputsContainer>
      <InputBoxContainer>
        <CustomInput
          width="157px"
          height="35px"
          type="text"
          placeholder="닉네임"
        />
        <CustomInput
          width="157px"
          height="35px"
          type="password"
          placeholder="비밀번호"
        />
      </InputBoxContainer>
      <InputBoxContainer>
        <CustomInput
          width="330px"
          height="35px"
          type="text"
          placeholder="댓글로 응원하기"
        />
        <CustomBtn width="85px" height="35px" fontSize="16px">
          응원하기
        </CustomBtn>
      </InputBoxContainer>
    </InputsContainer>
  );
};

const InputsContainer = styled.div`
  margin-bottom: 40px;
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
`;

const InputBoxContainer = styled.div`
  margin-bottom: 20px;
`;

export default CommentInput;
