import React from "react";
import styled from "styled-components";
import Filter from "./Filter";
import Searchbar from "./Searchbar";
import Card from "./Card";

const Contenido = styled.section`
  width: 100%;
  padding: 30px 20px;
`;

const Contenedor = () => {
  console.log(dataPaises);

  return (
    <Contenido>
      <Searchbar />
      <Filter />
      <Card />
    </Contenido>
  );
};

export default Contenedor;
