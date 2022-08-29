import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";

const Selector = styled.select`
  width: 150px;
  padding: 10px;
  text-transform: capitalize;
  outline-color: lightgray;
  margin-bottom: 50px;
`;

const Filter = ({ obtenerValue }) => {
  return (
    <Selector onChange={obtenerValue}>
      <option value="americas">america</option>
      <option value="europe">europa</option>
      <option value="asia">asia</option>
      <option value="africa">africa</option>
      <option value="oceania">oceania</option>
    </Selector>
  );
};

export default Filter;
