import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const ContenedorInput = styled.div`
  width: 100%;
  max-width: 500px;
  height: 55px;
  background: ${(props) =>
    props.darkMode
      ? "var(--color-secundario-dark)"
      : "var(--color-principal-light)"};
  color: ${(props) => (props.darkMode ? "#fff" : "#000")};
  display: flex;
  margin-bottom: 50px;
  box-shadow: 1px 1px 15px #212e3714;
  border-radius: 10px;
  button {
    min-width: 60px;
    background: none;
    border: none;
    font-size: 20px;
    color: ${(props) => (props.darkMode ? "#fff" : "#000")};
    cursor: pointer;
    border-radius: 15px 0px 0px 15px;
    transition: all 0.1s ease-in-out;
  }
  button:hover {
    background: ${(props) => (props.darkMode ? "#fff" : "#000")};
    color: ${(props) => (props.darkMode ? "#000" : "#fff")};
  }
`;

const InputBuscar = styled.input`
  width: 100%;
  background: none;
  border: none;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 20px;
  outline: solid 1px
    ${(props) =>
      props.darkMode
        ? "var(-color-principal-dark)"
        : "var(-color-principal-light)"};
  color: ${(props) => (props.darkMode ? "#fff" : "#000")};
  &::placeholder {
    color: ${(props) => (props.darkMode ? "#e0e0e0" : "#2e2e2e")};
    text-transform: capitalize;
  }
  &:focus {
    outline: solid 1px var(--color-secundario-dark);
  }
`;

const Searchbar = ({ setDataPaises, setIsLoading, darkMode }) => {
  let [paisBuscado, setPaisBuscado] = useState("");

  const fetchPais = (nombre) => {
    setIsLoading(true);
    fetch(`https://restcountries.com/v3.1/name/${nombre}`)
      .then((response) => response.json())
      .then((nombre) => {
        setDataPaises(nombre);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setPaisBuscado(e.target.value);
  };
  const handleClick = () => {
    fetchPais(paisBuscado);
  };

  return (
    <ContenedorInput darkMode={darkMode}>
      <button onClick={handleClick}>
        <AiOutlineSearch></AiOutlineSearch>
      </button>
      <InputBuscar
        darkMode={darkMode}
        placeholder="buscar un pais"
        onChange={handleChange}
      ></InputBuscar>
    </ContenedorInput>
  );
};

export default Searchbar;
