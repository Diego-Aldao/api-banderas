import React from "react";
import styled from "styled-components";
import Filter from "./Filter";
import Searchbar from "./Searchbar";
import { useState, useEffect } from "react";
import Card from "./Card";

const ContenedorCards = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  min-height: 100vh;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 25px;
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
  }
`;

const Contenedor = ({ setPais, darkMode }) => {
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
    <>
      <Searchbar
        setIsLoading={setIsLoading}
        setDataPaises={setDataPaises}
        darkMode={darkMode}
      />
      <Filter
        setIsLoading={setIsLoading}
        setDataPaises={setDataPaises}
        darkMode={darkMode}
      />
      <ContenedorCards darkMode={darkMode}>
        {isLoading ? (
          <></>
        ) : (
          <Card
            dataPaises={dataPaises}
            setPais={setPais}
            darkMode={darkMode}
          ></Card>
        )}
      </ContenedorCards>
    </>
  );
};

export default Contenedor;
