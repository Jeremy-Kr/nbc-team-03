import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CustomBtn from "./CustomBtn";

const Nav = ({ isInput }) => {
  const navigate = useNavigate();
  return (
    <NavWrapper>
      <LogoDiv
        onClick={() => {
          navigate("/home");
        }}
      >
        作心
        <br />
        一年
      </LogoDiv>
      {!isInput && (
        <CustomBtn
          onClick={() => {
            navigate("/input");
          }}
          width="95px"
          height="40px"
          fontSize="18px"
        >
          소원빌기
        </CustomBtn>
      )}
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  box-sizing: border-box;
  display: flex;
  padding: 35px 40px 25px;
  background-color: #35353f;
  border: 1px solid #fff;
  border-radius: 66px 66px 0 0;
  color: #f8f5ef;
  border: none;
  width: 531px;
  height: 100px;
  overflow: hidden;
  font-size: 30px;
  align-items: center;
  justify-content: space-between;
`;

const LogoDiv = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export default Nav;
