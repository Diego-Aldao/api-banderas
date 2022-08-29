import React from "react";
import styled from "styled-components";
import Filter from "./Filter";
import Searchbar from "./Searchbar";
import { useState, useEffect } from "react";
import Card from "./Card";

const Contenido = styled.section`
  width: 100%;
  padding: 30px 20px;
`;

const Contenedor = () => {
  let [dataPaises, setDataPaises] = useState([]);
  let [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setIsLoading(true);
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setDataPaises(data.slice(0, 20));
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  console.log(dataPaises);

  return (
    <Contenido>
      <Searchbar />
      <Filter />
      {isLoading ? <></> : <Card dataPaises={dataPaises}></Card>}
    </Contenido>
  );
};

export default Contenedor;
