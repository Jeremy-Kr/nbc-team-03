import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CustomBtn from "./CustomBtn";

const Nav = () => {
  const navigate = useNavigate();
  return (
    <NavWrapper>
      <LogoDiv
        onClick={() => {
          navigate("/");
        }}
      >
        作心
        <br />
        一年
      </LogoDiv>
      <CustomBtn
        onClick={() => {
          navigate("/content/input");
        }}
        width="78px"
        height="35px"
        fontSize="15px"
      >
        소원빌기
      </CustomBtn>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  margin-top: 12px;
  display: flex;
  padding-left: 25px;
  padding-top: 15px;
  background-color: #35353f;
  border: 1px solid #fff;
  color: #f8f5ef;
  border: none;
  width: 505px;
  height: 70px;
  overflow: hidden;
  font-size: 25px;
  align-items: center;
  justify-content: space-between;
`;

const LogoDiv = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export default Nav;
