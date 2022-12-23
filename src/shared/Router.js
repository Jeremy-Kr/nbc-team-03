import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Lending from "../components/comments/Lending/Lending";
import GlobalStyle from "../components/common/GlobalStyle";
import Layout from "../components/common/Layout";
import ContentItem from "../components/comments/ContentItem";

const Router = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Lending />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
