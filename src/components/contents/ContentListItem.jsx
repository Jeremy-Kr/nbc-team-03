import styled from "styled-components";

const ContentListItem = () => {
  return (
    <ContentListItemWrapper>
      <h4>올해는 돈 많이 벌게 해주세요</h4>
      <h5>홍길동</h5>
    </ContentListItemWrapper>
  );
};

const ContentListItemWrapper = styled.div`
  margin-top: 12px;
  padding-left: 20px;
  display: flex;
  background-color: #f8f5ef;
  border-radius: 10px;
  color: #35353f;
  border: none;
  width: 450px;
  height: 70px;
  overflow: hidden;
  font-size: 17px;
  align-items: center;
  justify-content: space-around;
  &:hover {
    box-shadow: 12px 8px 12px #bb2649;
    cursor: pointer;
  }
`;

export default ContentListItem;
