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
  const [region, setRegion] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchRegiones();
  }, [region]);

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

  const fetchRegiones = () => {
    setIsLoading(true);
    fetch(`https://restcountries.com/v3.1/region/${region}`)
      .then((response) => response.json())
      .then((region) => {
        setDataPaises(region.slice(0, 20));
        console.log(dataPaises);
        setIsLoading(false);
      });
  };

  const obtenerValue = (e) => {
    const region = e.target.value;
    setRegion(region);
  };

  return (
    <Contenido>
      <Searchbar />
      <Filter obtenerValue={obtenerValue} />
      {isLoading ? <></> : <Card dataPaises={dataPaises}></Card>}
    </Contenido>
  );
};

export default Contenedor;
