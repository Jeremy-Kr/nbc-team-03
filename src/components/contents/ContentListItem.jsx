import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ContentListItem = ({ contents }) => {
  const navigate = useNavigate();

  return (
    <>
      {contents ? (
        contents.map((item) => (
          <ContentListItemWrapper
            key={item.id}
            onClick={() => {
              navigate(`/content/${item.id}`);
            }}
          >
            <ContentTitle>{item.contentTitle}</ContentTitle>
            <ContentNickname>{item.nickname}</ContentNickname>
          </ContentListItemWrapper>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

const ContentListItemWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  background-color: #f8f5ef;
  border-radius: 10px;
  color: #35353f;
  border: none;
  width: 90%;
  height: 70px;
  overflow: hidden;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 25px;
  &:hover {
    box-shadow: 0px 1px 9px 4px rgba(187, 38, 73, 0.45);
    cursor: pointer;
  }
`;

const ContentTitle = styled.h4`
  font-size: 19px;
`;

const ContentNickname = styled.h5`
  color: #777;
`;

export default ContentListItem;
