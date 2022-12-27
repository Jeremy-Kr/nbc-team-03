import React, { useState } from "react";
import styled from "styled-components";
import Nav from "../common/Nav";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import ContentListItem from "./ContentListItem";
import { __getContents } from "../../redux/modules/contents";
import ContentFooter from "../common/ContentFooter";

const ContentsList = () => {
  const contents = useSelector((state) => state.contents);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);
  const dispatch = useDispatch();

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const currentPosts = contents.contents
    ? contents.contents.slice(firstPostIndex, lastPostIndex)
    : null;

  useEffect(() => {
    dispatch(__getContents());
  }, [dispatch]);

  return (
    <ContentsListWrapper>
      <Nav />
      <ContentsListItemContainer>
        <ContentListTitle>🎊 2023 소원 목록 🎊</ContentListTitle>
        <CustomHr />
        {currentPosts && <ContentListItem contents={currentPosts} />}

        <br />
        <br />
        {currentPosts && (
          <ContentFooter
            totalContents={contents.contents.length}
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        )}
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

export default ContentsList;
