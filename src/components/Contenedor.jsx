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

const Contenedor = ({ setPais }) => {
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
      });
  };

  return (
    <Contenido>
      <Searchbar setIsLoading={setIsLoading} setDataPaises={setDataPaises} />
      <Filter setIsLoading={setIsLoading} setDataPaises={setDataPaises} />
      {isLoading ? (
        <></>
      ) : (
        <Card dataPaises={dataPaises} setPais={setPais}></Card>
      )}
    </Contenido>
  );
};

export default Contenedor;
