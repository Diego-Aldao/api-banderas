import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = ({ children, setDarkMode, darkMode }) => {
  return (
    <>
      <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
      {children}
    </>
  );
};

export default Layout;
