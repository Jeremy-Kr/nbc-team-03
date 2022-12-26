import styled from "styled-components";

export default styled.button`
  background-color: #bb2649;
  color: #f8f5ef;
  border: none;
  border-radius: 10px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: ${(props) => props.fontSize};
  &:hover {
    cursor: pointer;
  }
  &:disabled {
    opacity: 0.5;
    cursor: no-drop;
  }
`;
