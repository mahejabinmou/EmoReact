// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./common/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./common/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>

      <Footer></Footer>
    </div>
  );
};

export default Main;
