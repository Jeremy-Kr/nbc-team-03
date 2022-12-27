import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { __getContents } from "../../redux/modules/contents";
import { useParams } from "react-router-dom";
import {
  AiFillEdit,
  AiOutlineCloseCircle,
  AiFillPushpin,
} from "react-icons/ai";
import { deleteContent } from "../../redux/modules/contents";
import { useNavigate } from "react-router-dom";

const ContentItem = ({}) => {
  const contents = useSelector((state) => state.contents);
  const dispatch = useDispatch();

  const paramId = useParams().id;

  const handleOnDeleteClick = () => {
    dispatch(deleteContent(paramId));
  };

  useEffect(() => {
    contents.contents.length === 0 && dispatch(__getContents());
  }, [dispatch, contents]);

  const filteredContent = contents.contents.filter(
    (item) => item.id === paramId
  )[0];
  const navigate = useNavigate();
  return (
    <StyledTotalContainer>
      <StyledItemBox>
        <AiOutlineCloseCircle
          onClick={() => {
            let valid = false;
            do {
              let confirm = prompt("삭제하시려면 비밀번호를 입력하세요.");
              switch (confirm) {
                case "123":
                  alert("비밀번호가 일치합니다.");
                  valid = true;
                  break;
                default:
                  alert("잘못된 비밀번호입니다.");
                  valid = false;
                  break;
              }
            } while (!valid);
            if (window.confirm("정말 삭제하시겠습니까?")) {
              alert("삭제되었습니다.");
              handleOnDeleteClick();
              navigate("/home");
            } else {
              alert("취소되었습니다.");
            }
          }}
          style={{ float: "right", cursor: "pointer" }}
        ></AiOutlineCloseCircle>
        <AiFillEdit
          onClick={() => alert("수정")}
          style={{ float: "right", marginRight: "15px", cursor: "pointer" }}
        ></AiFillEdit>
        <CustomH2>{filteredContent && filteredContent.contentTitle}</CustomH2>
        <div style={{ float: "right", color: "#5E5E5E", marginTop: "10px" }}>
          {filteredContent && filteredContent.nickname}
        </div>

        <ul>
          <StyledItemSemiTitle>
            <span>
              <AiFillPushpin />
            </span>
            &nbsp;이유
          </StyledItemSemiTitle>
          <StyledLi>{filteredContent && filteredContent.contentWhy}</StyledLi>
        </ul>
        <ul>
          <StyledItemSemiTitle>
            <span>
              <AiFillPushpin />
            </span>
            &nbsp;할일
          </StyledItemSemiTitle>
          <StyledLi>{filteredContent && filteredContent.contentHow}</StyledLi>
        </ul>
        <ul>
          <StyledItemSemiTitle>
            <span>
              <AiFillPushpin />
            </span>
            &nbsp;목표달성일
          </StyledItemSemiTitle>
          <StyledLi>{filteredContent && filteredContent.contentWhen}</StyledLi>
        </ul>
      </StyledItemBox>
    </StyledTotalContainer>
  );
};

const StyledTotalContainer = styled.div`
  border-radius: 66px;
  height: auto;
  width: 531px;
  margin-top: 11px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
const StyledItemBox = styled.div`
  box-sizing: border-box;
  background-color: #f8f5ef;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 26px;
  width: 485px;
  padding: 30px;
  margin-top: 20px;
`;
const StyledItemSemiTitle = styled.div`
  font-weight: bold;
  margin: 15px 0;
  margin-top: 30px;
`;

const CustomH2 = styled.h2`
  font-size: 20px;
  font-weight: bold;
`;

const StyledLi = styled.li`
  margin: 10px 0;
`;

export default ContentItem;
