import React from "react";
import Men from "../pages/Men";
import Women from "../pages/Women";
import New from "../pages/New";
import Home from "../pages/Home";
import Header from "../compenents/Header";
import Footer from "../compenents/Footer";
import ScrollToTop from "../pages/ScrollToTop";

import { Route, BrowserRouter, Routes } from "react-router-dom";

const RootRoutes = () => {
  return (
    <BrowserRouter >
      <ScrollToTop/>
      <div className="all">
      <Header/>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/men" exact element={<Men />} />
        <Route path="/new" exact element={<New/>} />
        <Route path="/women" exact element={<Women/>} />
      </Routes>
      <Footer/>
      </div>
      
    </BrowserRouter>
  );
};

export default RootRoutes;
