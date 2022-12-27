import React from "react";
import styled from "styled-components";

const PageNation = ({ setCurrentPage, currentPage, pages }) => {
  return (
    <div className="pagination">
      {pages.map((page, index) => {
        return (
          <PagenationBtn
            key={index}
            selected={page === currentPage ? "selected" : ""}
            onClick={() => setCurrentPage(page)}
          ></PagenationBtn>
        );
      })}
    </div>
  );
};

const PagenationBtn = styled.button`
  border: none;
  border-radius: 10px;
  background-color: ${(props) => (props.selected ? "#bb2649" : "#35353f")};
  /* background-color: #35353f; */
  font-size: 20px;
  width: 10px;
  height: 12px;
  font-weight: 700;
  margin: 5px;
  cursor: pointer;
  &:hover {
    background-color: #bb2649;
  }
`;

export default PageNation;
