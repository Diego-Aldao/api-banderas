import React from "react";
import styled from "styled-components";

const ContenedorSelector = styled.div`
  width: 150px;
  padding: 0px 20px;
  box-shadow: 1px 1px 15px #212e3714;
  border-radius: 10px;
  margin-bottom: 50px;
  background: ${(props) =>
    props.darkMode
      ? "var(--color-secundario-dark)"
      : "var(--color-principal-light)"};
  color: ${(props) => (props.darkMode ? "#fff" : "#000")};
`;

const Selector = styled.select`
  color: ${(props) => (props.darkMode ? "#fff" : "#000")};
  width: 100%;
  height: 50px;
  text-transform: capitalize;
  border: none;
  background: none;
`;

const Filter = ({ setDataPaises, setIsLoading, darkMode }) => {
  const fetchRegiones = (region) => {
    setIsLoading(true);
    fetch(`https://restcountries.com/v3.1/region/${region}`)
      .then((response) => response.json())
      .then((region) => {
        setDataPaises(region.slice(0, 20));
        setIsLoading(false);
      });
  };
  const obtenerValue = (e) => {
    const regionSeleccionada = e.target.value;
    fetchRegiones(regionSeleccionada);
  };

  return (
    <ContenedorSelector darkMode={darkMode}>
      <Selector onChange={obtenerValue} darkMode={darkMode}>
        <option disabled selected>
          Region
        </option>
        <option value="americas">america</option>
        <option value="europe">europa</option>
        <option value="asia">asia</option>
        <option value="africa">africa</option>
        <option value="oceania">oceania</option>
      </Selector>
    </ContenedorSelector>
  );
};

export default Filter;
