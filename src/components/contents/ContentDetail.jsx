import React from "react";
import styled from "styled-components";
import Nav from "../common/Nav";
import ContentItem from "./ContentItem";
import Comment from "../comments/Comment";

const ContentDetail = () => {
  return (
    <>
      <ContentDetailWrapper>
        <Nav />
        <ContentItem />
        <Comment />
      </ContentDetailWrapper>
    </>
  );
};

const ContentDetailWrapper = styled.div`
  border-radius: 66px;
  height: 1146px;
  width: 531px;
  margin-top: 21px;
  margin-left: 5px;
`;
export default ContentDetail;
