import React, { useState } from "react";
import styled from "styled-components";
import { AiFillEdit, AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteComment, patchComment } from "../../redux/modules/comments";
import CustomBtn from "../common/CustomBtn";

const CommentItem = ({ nickname, commentText, id, password }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(commentText);
  const [newNickname, setNewNickname] = useState(nickname);

  const handleEditIconClick = () => {
    setIsEditing(true);
  };
  const handleDeleteIconClick = () => {
    const validPassword = window.prompt("비밀번호를 입력 해 주세요.");
    if (validPassword === password) {
      return dispatch(deleteComment(id));
    }
    return alert("비밀번호를 확인 해 주세요!");
  };

  const handleTextOnChange = (e) => {
    setNewText(e.target.value);
  };

  const handleNicknameOnChange = (e) => {
    setNewNickname(e.target.value);
  };

  const handleEditSubmitClick = () => {
    const validPassword = window.prompt("비밀번호를 입력 해 주세요.");
    if (validPassword === password) {
      const newComment = {
        commentId: id,
        commentText: newText,
        nickname: newNickname,
      };
      dispatch(patchComment(newComment));
      return setIsEditing(false);
    }
    return alert("비밀번호를 확인 해 주세요!");
  };

  const handleEditCancelClick = () => {
    return setIsEditing(false);
  };

  return (
    <CommentItemWrapper>
      {isEditing ? (
        <>
          <CommentTextContainer>
            <CustomInput
              width="200px"
              height="30px"
              value={newText}
              onChange={(e) => {
                handleTextOnChange(e);
              }}
            />
            <CustomInput
              width="80px"
              height="30px"
              value={newNickname}
              onChange={(e) => {
                handleNicknameOnChange(e);
              }}
            />
          </CommentTextContainer>
          <CommentIconContainer>
            <CustomBtn
              width="42.5px"
              height="35px"
              fontSize="16px"
              onClick={() => {
                handleEditSubmitClick();
              }}
            >
              수정
            </CustomBtn>
            <CustomBtn
              width="42.5px"
              height="35px"
              fontSize="16px"
              onClick={() => {
                handleEditCancelClick();
              }}
            >
              취소
            </CustomBtn>
          </CommentIconContainer>
        </>
      ) : (
        <>
          <CommentTextContainer>
            <CommentTitle>{commentText}</CommentTitle>
            <CommentUser>{nickname}</CommentUser>
          </CommentTextContainer>
          <CommentIconContainer>
            <CommentEditIcon
              onClick={() => {
                handleEditIconClick();
              }}
            />
            <CommentDeleteIcon
              onClick={() => {
                handleDeleteIconClick();
              }}
            />
          </CommentIconContainer>
        </>
      )}
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

const CommentIconContainer = styled.div`
  width: 100px;
  display: flex;
  justify-content: space-around;
`;

const CommentEditIcon = styled(AiFillEdit)`
  scale: 1.2;
  cursor: pointer;
`;

const CommentDeleteIcon = styled(AiOutlineCloseCircle)`
  scale: 1.2;
  cursor: pointer;
`;

const CustomInput = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: 14px;
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

export default CommentItem;
