import React from "react";
import styled from "styled-components";
import { useState } from "react";

const InputBuscar = styled.input`
  width: 100%;
  margin-bottom: 50px;
  border: none;
  box-shadow: 1px 2px 5px lightgray;
  padding: 20px;
  outline-color: gray;
  background: ${(props) =>
    props.darkMode
      ? "var(--color-secundario-dark)"
      : "var(--color-principal-light)"};
  color: ${(props) => (props.darkMode ? "#fff" : "#000")};
`;

const Searchbar = ({ setDataPaises, setIsLoading, darkMode }) => {
  let valor = "";

  const fetchPais = (nombre) => {
    setIsLoading(true);
    fetch(`https://restcountries.com/v3.1/name/${nombre}`)
      .then((response) => response.json())
      .then((nombre) => {
        console.log(nombre);
        setDataPaises(nombre);
        setIsLoading(false);
      });
  };

  const handleChange = (e) => {
    valor = e.target.value;
  };
  const handleClick = () => {
    fetchPais(valor);
  };

  return (
    <>
      <InputBuscar
        placeholder="buscar un pais"
        onChange={handleChange}
        darkMode={darkMode}
      ></InputBuscar>
      <button onClick={handleClick}>buscar pais</button>
    </>
  );
};

export default Searchbar;
