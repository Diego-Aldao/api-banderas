import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
const Contenedor = styled.section`
  width: 100%;
  min-height: 100vh;
  a {
    width: 100px;
    padding: 7px 0px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: capitalize;
    margin-bottom: 50px;
    box-shadow: 1px 1px 15px #212e3714;
    background: ${(props) =>
      props.darkMode
        ? "var(--color-secundario-dark)"
        : "var(--color-principal-light)"};
    span {
      margin-left: 5px;
      font-size: 14px;
      font-weight: 300;
    }
  }
`;

const Card = styled.div`
  width: 100%;
  max-width: 450px;
  margin: 0 auto;
  img {
    width: 100%;
    height: 55vw;
    max-height: 280px;
  }
  h1 {
    margin: 20px 0px 30px;
    width: 100%;
  }
  @media (min-width: 992px) {
    max-width: 100%;
    display: flex;
    justify-content: space-between;
    img {
      height: 35vw;
      max-width: 520px;
      max-height: 350px;
      width: 50%;
    }
  }
`;

const ContenidoCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  @media (min-width: 992px) {
    width: 45%;
  }
`;

const Info = styled.div`
  width: 100%;
  margin-bottom: 40px;
  p {
    margin-bottom: 15px;
    font-size: 14px;
    text-transform: capitalize;
    font-weight: 500;
  }
  span {
    font-weight: 300;
  }
  @media (min-width: 580px) {
    width: 50%;
  }
`;

const Fronteras = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  p {
    width: 100%;
    font-weight: 500;
    text-transform: capitalize;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  }
  @media (min-width: 580px) {
    p {
      width: auto;
      height: 30px;
    }
  }
`;
const ItemFrontera = styled.span`
  padding: 5px 10px;
  text-align: center;
  flex: 1, 1, 3333%;
  height: 30px;
  font-weight: 300;
  box-shadow: 1px 1px 15px #212e3714;
  margin: 0px 10px;
`;

const Detalle = ({ pais, darkMode }) => {
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
        <ContenidoCard>
          <h1>{valor.name.common}</h1>
          <Info grid={"2 / 3"}>
            <p>
              poblacion: <span>{valor.population}</span>
            </p>
            <p>
              region: <span>{valor.region}</span>
            </p>
            <p>
              sub region: <span>{valor.subregion}</span>
            </p>
            <p>
              capital: <span>{valor.capital}</span>
            </p>
          </Info>
          <Info grid={"3 / 4"}>
            <p>
              dominio: <span>{valor.tld}</span>
            </p>
            <p>
              currencies:{" "}
              {Object.values(valor.currencies).map((currencie, i) => {
                return <span key={i}>{currencie.name} </span>;
              })}
            </p>
            <p>
              lenguajes:{" "}
              {Object.values(valor.languages).map((lenguaje, i) => {
                return <span key={i}>{lenguaje}. </span>;
              })}
            </p>
          </Info>
          <Fronteras>
            <p>paises limítrofes:</p>
            {valor.borders.map((border, i) => {
              return <ItemFrontera key={i}>{border}</ItemFrontera>;
            })}
          </Fronteras>
        </ContenidoCard>
      </Card>
    );
  });

  return (
    <Contenedor darkMode={darkMode}>
      <Link to={"/"}>
        <HiOutlineArrowNarrowLeft></HiOutlineArrowNarrowLeft>
        <span>atras</span>
      </Link>
      {item}
    </Contenedor>
  );
};

export default Detalle;
