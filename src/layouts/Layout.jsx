import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import styled from "styled-components";

const ContenedorPrincipal = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1800px;
  margin: 0 auto;
  width: 100%;
  padding: 30px 20px;
  background: none;
  @media (min-width: 1024px) {
    padding: 30px 50px;
  }
`;

const Layout = ({ children, setDarkMode, darkMode }) => {
  return (
    <>
      <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
      <ContenedorPrincipal>{children}</ContenedorPrincipal>
    </>
  );
};

export default Layout;
