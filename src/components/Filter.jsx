import React from "react";
import styled from "styled-components";

const Selector = styled.select`
  width: 150px;
  padding: 10px;
  text-transform: capitalize;
  outline-color: lightgray;
  margin-bottom: 50px;
`;

const Filter = () => {
  return <Selector></Selector>;
};

export default Filter;
