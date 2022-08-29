import React from "react";
import styled from "styled-components";

const InputBuscar = styled.input`
  width: 100%;
  margin-bottom: 50px;
  border: none;
  box-shadow: 1px 2px 5px lightgray;
  padding: 20px;
  outline-color: gray;
`;

const Searchbar = () => {
  return <InputBuscar placeholder="buscar un pais"></InputBuscar>;
};

export default Searchbar;
