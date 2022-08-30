import React from "react";
import styled from "styled-components";

const Navegacion = styled.div`
  background: ${(props) =>
    props.darkMode
      ? "var(--color-secundario-dark)"
      : "var(--color-principal-light)"};
  color: ${(props) => (props.darkMode ? "#fff" : "#000")};
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 35px 5vw;
  text-transform: capitalize;
  font-size: 12px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  box-shadow: 1px 1px 10px lightgray;
  & span:nth-child(1) {
    font-weight: bold;
  }
`;

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <Navegacion darkMode={darkMode}>
      <span>donde en el mundo?</span>
      <span
        onClick={() => {
          setDarkMode(!darkMode);
        }}
      >
        i modo oscuro
      </span>
    </Navegacion>
  );
};

export default Navbar;
