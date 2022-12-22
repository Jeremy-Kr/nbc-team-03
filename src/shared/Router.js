import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Comment from "../components/comments/Comment";
import Lending from "../components/Lending/Lending";
import GlobalStyle from "../components/common/GlobalStyle";
import Layout from "../components/common/Layout";

const Router = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Lending />} />
            <Route path="/commentTest" element={<Comment />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
