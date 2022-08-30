import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Item = styled.div`
  width: 100%;
  border-radius: 10px;
  box-shadow: 1px 1px 5px lightgray;
  margin-bottom: 20px;
  img {
    width: 100%;
    height: 150px;
  }
`;
const ContenidoItem = styled.div`
  width: 100%;
  padding: 30px 20px;
  text-transform: capitalize;
  h1 {
    font-weight: 700;
    margin: 0 0 20px;
  }
  p {
    margin: 0 0 10px;
    font-weight: 500;
  }
`;

const Card = ({ dataPaises, setPais }) => {
  const handleClick = (e) => {
    let paisSeleccionado = e.target
      .closest(`[data-pais]`)
      .getAttribute("data-pais");
    setPais(paisSeleccionado);
  };

  const [data, setData] = useState(dataPaises);

  const item = data.map((pais) => {
    return (
      <Link to={"/detalle"}>
        <Item
          key={pais.population}
          data-pais={pais.name.common}
          onClick={handleClick}
        >
          <img src={pais.flags.png} alt="" />
          <ContenidoItem>
            <h1>{pais.name.common}</h1>
            <p>poblacion:{pais.population}</p>
            <p>region:{pais.region}</p>
            <p>capital:{pais.capital[0]}</p>
          </ContenidoItem>
        </Item>
      </Link>
    );
  });

  return item;
};

export default Card;
