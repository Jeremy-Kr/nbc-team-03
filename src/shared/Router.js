import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Lending from "../components/Lending/Lending";
import GlobalStyle from "../components/common/GlobalStyle";
import Layout from "../components/common/Layout";
import ContentInput from "../components/contents/ContentInput";
import ContentsList from "../components/contents/ContentsList";
import ContentDetail from "../components/contents/ContentDetail";

const Router = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Lending />} />
            <Route path="/home" element={<ContentsList />} />
            <Route path="/input" element={<ContentInput />} />
            <Route path="/content/:id" element={<ContentDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
