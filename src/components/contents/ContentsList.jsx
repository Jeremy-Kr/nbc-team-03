import React from "react";
import styled from "styled-components";
import Nav from "../common/Nav";
import ContentListItem from "./ContentListItem";

const ContentsList = () => {
  return (
    <ContentsListWrapper>
      <Nav />
      <ContentsListItemContainer>
        <ContentListTitle>🎊 2023 작심 목록 🎊</ContentListTitle>
        <CustomHr />
        <ContentListItem />
        <ContentListItem />
        <ContentListItem />
        <ContentListItem />
        <ContentListItem />
        <ContentListItem />
        <ContentListItem />
        <ContentListItem />
        <br />
        <br />
        <PageNation>&lt; &#183; &#183; &#183; &#183; &gt; </PageNation>
        <br />
        <DayCounter> 2023년까지 D - 000</DayCounter>
      </ContentsListItemContainer>
    </ContentsListWrapper>
  );
};

const ContentsListWrapper = styled.div`
  border-radius: 66px;
  height: 1146px;
  width: 531px;
  margin-top: 21px;
  margin-left: 5px;
  overflow: hidden;
`;

const ContentsListItemContainer = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentListTitle = styled.span`
  font-size: 30px;
  font-weight: 600;
  margin: 15px 0;
`;

const CustomHr = styled.hr`
  width: 85%;
  border: none;
  height: 2px;
  background-color: #35353f;
  border-radius: 5px;
  margin: 15px 0;
`;

const PageNation = styled.span`
  font-size: 30px;
`;

const DayCounter = styled.span`
  margin-top: 15px;
  font-size: 20px;
`;

export default ContentsList;
