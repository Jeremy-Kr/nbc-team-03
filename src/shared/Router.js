import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Lending from "../components/Lending/Lending";
import GlobalStyle from "../components/common/GlobalStyle";
import Layout from "../components/common/Layout";
import ContentInput from "../components/ContentInput";

const Router = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Lending />} />
            <Route path="/content/input" element={<ContentInput />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
