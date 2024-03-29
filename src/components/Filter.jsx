import React from "react";
import styled from "styled-components";
import Select from "react-select";

const options = [
  { value: "americas", label: "América" },
  { value: "europe", label: "Europa" },
  { value: "oceania", label: "Oceanía" },
  { value: "africa", label: "Africa" },
];

const customStyles = {
  option: (base, state, darkMode) => ({
    ...base,
    backgroundColor: state.isSelected ? "#000000" : "white",
    color: state.isSelected ? "white" : "black",
    "&:hover": {
      backgroundColor: "var(--color-secundario-dark)",
      color: "var(--color-principal-light)",
    },
  }),
  singleValue: (base) => ({
    ...base,
    color: "gray",
  }),

  control: (base) => ({
    ...base,
    border: "none",
    boxShadow: "1px 1px 15px #212e3714",
    padding: "5px 10px",
  }),
};

const ContenedorFilter = styled.div`
  margin-bottom: 110px;
  height: auto;
  div {
    cursor: pointer;
  }
`;

const Filter = ({ setDataPaises, setIsLoading, darkMode }) => {
  const fetchRegiones = (region) => {
    setIsLoading(true);
    fetch(`https://restcountries.com/v3.1/region/${region}`)
      .then((response) => response.json())
      .then((region) => {
        setDataPaises(region.slice(0, 20));
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };
  const obtenerValue = (e) => {
    console.log(e.value);
    const regionSeleccionada = e.value;
    fetchRegiones(regionSeleccionada);
  };

  return (
    <ContenedorFilter>
      <Select
        options={options}
        placeholder={"Seleccionar Region"}
        darkMode={darkMode}
        styles={customStyles}
        onChange={obtenerValue}
      />
    </ContenedorFilter>
  );
};

export default Filter;
