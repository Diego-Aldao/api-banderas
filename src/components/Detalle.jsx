import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Contenedor = styled.section`
  width: 100%;
  padding: 30px 20px;
`;

const Card = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: 150px;
  }
`;

const Info = styled.div`
  width: 100%;
  padding: 20px 0px;
  margin-bottom: 20px;
  h1 {
    margin-bottom: 20px;
  }
  p {
    margin-bottom: 10px;
  }
`;

const Fronteras = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  h2 {
    width: 100%;
  }
`;
const ItemFrontera = styled.p`
  padding: 5px 10px;
  text-align: center;
  flex: 1, 1, 3333%;
`;

const Detalle = ({ pais }) => {
  let [paisActual, setPaisActual] = useState([]);
  useEffect(() => {
    fetchPais(pais);
  }, []);

  const fetchPais = (nombrePais) => {
    fetch(
      `https://restcountries.com/v3.1/name/${
        nombrePais ? nombrePais : "argentina"
      }`
    )
      .then((response) => response.json())
      .then((nombre) => {
        setPaisActual(nombre);
      });
  };

  const item = paisActual.map((valor, i) => {
    return (
      <Card key={i}>
        <img src={valor.flags.png} alt="" />
        <Info>
          <h1>{valor.name.common}</h1>
          <p>poblacion: {valor.population}</p>
          <p>region: {valor.region}</p>
          <p>sub region: {valor.subregion}</p>
          <p>capital: {valor.capital}</p>
        </Info>
        <Info>
          <p>dominio: {valor.tld}</p>
          <p>
            currencies:
            {Object.values(valor.currencies).map((currencie, i) => {
              return <span key={i}>{currencie.name} </span>;
            })}
          </p>
          <p>
            lenguajes:
            {Object.values(valor.languages).map((lenguaje, i) => {
              return <span key={i}>{lenguaje} </span>;
            })}
          </p>
        </Info>
        <Fronteras>
          <h2>fronteras</h2>
          {valor.borders.map((border, i) => {
            return <ItemFrontera key={i}>{border}</ItemFrontera>;
          })}
        </Fronteras>
      </Card>
    );
  });

  return (
    <Contenedor>
      <Link to={"/"}>atras</Link>
      {item}
    </Contenedor>
  );
};

export default Detalle;
