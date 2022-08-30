import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Item = styled.div`
  width: 100%;
  box-shadow: 1px 1px 15px #212e3714;
  border-radius: 10px;
  max-width: 400px;
  margin: 0 auto;
  background: ${(props) =>
    props.darkMode
      ? "var(--color-secundario-dark)"
      : "var(--color-principal-light)"};
  color: ${(props) => (props.darkMode ? "#fff" : "#000")};
  img {
    width: 100%;
    height: 55vw;
    max-height: 240px;
  }

  @media (min-width: 1024px) {
    img {
      height: 12vw;
    }
  }
`;
const ContenidoItem = styled.div`
  width: 100%;
  padding: 30px 20px;
  text-transform: capitalize;
  h1 {
    font-weight: 600;
    margin: 0 0 20px;
  }
  p {
    margin: 0 0 10px;
    font-weight: 500;
  }
  span {
    font-weight: 300;
  }
`;

const Card = ({ dataPaises, setPais, darkMode }) => {
  const handleClick = (e) => {
    let paisSeleccionado = e.target
      .closest(`[data-pais]`)
      .getAttribute("data-pais");
    setPais(paisSeleccionado);
  };

  const [data, setData] = useState(dataPaises);

  const item = data.map((pais) => {
    return (
      <Item
        darkMode={darkMode}
        key={pais.population}
        data-pais={pais.name.common}
        onClick={handleClick}
      >
        <Link to={"/detalle"}>
          <img src={pais.flags.png} alt="" />
          <ContenidoItem>
            <h1>{pais.name.common}</h1>
            <p>
              población: <span>{pais.population}</span>
            </p>
            <p>
              región: <span>{pais.region}</span>
            </p>
            <p>
              capital: <span>{pais.capital[0]}</span>
            </p>
          </ContenidoItem>
        </Link>
      </Item>
    );
  });

  return item;
};

export default Card;
