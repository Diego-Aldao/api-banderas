import React from "react";
import styled from "styled-components";

const Selector = styled.select`
  width: 150px;
  padding: 10px;
  text-transform: capitalize;
  outline-color: lightgray;
  margin-bottom: 50px;
  background: ${(props) =>
    props.darkMode
      ? "var(--color-secundario-dark)"
      : "var(--color-principal-light)"};
  color: ${(props) => (props.darkMode ? "#fff" : "#000")};
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
    <Selector onChange={obtenerValue} darkMode={darkMode}>
      <option value=""></option>
      <option value="americas">america</option>
      <option value="europe">europa</option>
      <option value="asia">asia</option>
      <option value="africa">africa</option>
      <option value="oceania">oceania</option>
    </Selector>
  );
};

export default Filter;
