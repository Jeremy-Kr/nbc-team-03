import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Layout = () => {
  return (
    <LayoutContainer>
      <IphoneFrame
        draggable={false}
        src="/assets/iphone-frame-purple.png"
        alt="프레임"
      />
      <ComponentsContainer>
        <Outlet></Outlet>
      </ComponentsContainer>
    </LayoutContainer>
  );
};

const LayoutContainer = styled.main`
  display: flex;
  justify-content: center;
`;

const IphoneFrame = styled.img`
  position: absolute;
  height: 1200px;
  top: 50px;
  margin: auto;
`;

const ComponentsContainer = styled.div`
  position: absolute;
  height: 1150px;
  width: 540px;
  top: 55.5px;
`;

export default Layout;
