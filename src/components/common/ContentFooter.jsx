import React from "react";
import PageNation from "../common/PageNation";
import styled from "styled-components";

const ContentFooter = ({
  totalContents,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  const pages = [];
  for (let i = 1; i <= Math.ceil(totalContents / postsPerPage); i++) {
    pages.push(i);
  }

  const newYearDay = new Date(2022, 12, 1);
  const today = new Date();
  const dayGap = newYearDay.getTime() - today.getTime();
  const dayCount = Math.ceil(dayGap / (1000 * 60 * 60 * 24));
  return (
    <ListFooterWrapper>
      <PageNationWrapper>
        <ArrowBtn
          onClick={() => {
            if (currentPage === 1) {
              currentPage = 1;
            } else {
              setCurrentPage(currentPage - 1);
            }
          }}
        >
          &lt;
        </ArrowBtn>
        <PageNation
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          pages={pages}
        />
        <ArrowBtn
          onClick={() => {
            if (currentPage === pages.length) {
              currentPage = pages.length;
            } else {
              setCurrentPage(currentPage + 1);
            }
          }}
        >
          &gt;
        </ArrowBtn>
      </PageNationWrapper>
      <br />
      <DayCounter> 2023년까지 D - {dayCount} </DayCounter>
    </ListFooterWrapper>
  );
};

const ListFooterWrapper = styled.div`
  position: absolute;
  bottom: 45px;
`;

const PageNationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
`;
const ArrowBtn = styled.button`
  border: none;
  background-color: transparent;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    color: #bb2649;
  }
`;

const DayCounter = styled.span`
  margin-top: 15px;
  font-size: 20px;
`;

export default ContentFooter;
