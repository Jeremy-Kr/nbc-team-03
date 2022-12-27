import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { __getSelectedContent } from "../../redux/modules/contents";
import { useNavigate, useParams } from "react-router-dom";
import { TfiPencilAlt, TfiTrash } from "react-icons/tfi";
import { GiFallingStar } from "react-icons/gi";
import { deleteContent } from "../../redux/modules/contents";

const ContentItem = () => {
  const contents = useSelector((state) => state.contents);
  const dispatch = useDispatch();
  const paramId = useParams().id;
  const navigate = useNavigate();

  const handleOnDeleteClick = () => {
    const confirmPassword = prompt("삭제하시려면 비밀번호를 입력하세요.");
    if (confirmPassword === contents.content.password) {
      dispatch(deleteContent(paramId));
      alert("삭제 되었습니다.");
      navigate("/home");
    } else {
      alert("취소 되었습니다.");
    }
  };

  useEffect(() => {
    dispatch(__getSelectedContent(paramId));
  }, []);

  useEffect(() => {
    if (contents.content?.id !== paramId) {
      dispatch(__getSelectedContent(paramId));
    }
  }, [dispatch, contents, paramId]);

  return (
    <StyledTotalContainer>
      <StyledItemBox>
        <StyledDeleteIcon
          onClick={() => {
            handleOnDeleteClick();
          }}
        />
        <StyledEditIcon
          onClick={() => navigate(`/content/Update/${paramId}`)}
        />
        <CustomH2>{contents.content && contents.content.contentTitle}</CustomH2>
        <StyledItemSemiTitle>
          <span>
            <StyledStarIcon />
          </span>
          &nbsp; 소원을 이루고 싶은 이유
        </StyledItemSemiTitle>
        <CustomHr />
        <StyledSpan>
          {contents.content && contents.content.contentWhy}
        </StyledSpan>
        <StyledItemSemiTitle>
          <span>
            <StyledStarIcon />
          </span>
          &nbsp; 소원을 이루기 위해 하는 노력
        </StyledItemSemiTitle>
        <CustomHr />
        <StyledSpan>
          {contents.content && contents.content.contentHow}
        </StyledSpan>
        <StyledItemSemiTitle>
          <span>
            <StyledStarIcon />
          </span>
          &nbsp; 소원 이루어 지는날
        </StyledItemSemiTitle>
        <CustomHr />
        <StyledSpan>
          {contents.content && contents.content.contentWhen}
        </StyledSpan>
        <NameContainer>
          {contents.content && contents.content.nickname} 님의 소원
          <LuckyBag
            draggable={false}
            src="/assets/lucky-bag.png"
            alt="복주머니"
          />
        </NameContainer>
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

const StyledEditIcon = styled(TfiPencilAlt)`
  scale: 1.2;
  float: right;
  margin-right: 15px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: #bb2649;
    scale: 1.3;
  }
`;

const StyledDeleteIcon = styled(TfiTrash)`
  margin-top: 0.5px;
  scale: 1.4;
  float: right;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: #bb2649;
    scale: 1.5;
  }
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
  display: flex;
  align-items: center;
  margin: 15px 0;
  margin-top: 30px;
  font-size: 17px;
  color: #212127;
`;

const StyledStarIcon = styled(GiFallingStar)`
  color: #f28137;
  scale: 1.05;
`;

const CustomH2 = styled.h2`
  font-size: 25px;
  font-weight: bold;
  color: #35353f;
`;

const StyledSpan = styled.span`
  margin: 10px 0;
  font-size: 15px;
  color: #212127;
`;

const NameContainer = styled.div`
  display: flex;
  align-items: center;
  float: right;
  color: #5e5e5e;
  margin-top: 10px;
`;

const LuckyBag = styled.img`
  height: 15px;
  margin-left: 6px;
`;

const CustomHr = styled.hr`
  width: 65%;
  border: none;
  height: 1px;
  background-color: #35353f;
  border-radius: 5px;
  margin: 14px 0;
`;

export default ContentItem;
