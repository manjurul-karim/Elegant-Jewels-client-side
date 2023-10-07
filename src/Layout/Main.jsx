/* eslint-disable no-unused-vars */
import React from "react";
import NavBar from "../pages/Shared/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer";

const Main = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="min-h-[calc(100vh-136px)] max-w-screen-xl mx-auto ">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
