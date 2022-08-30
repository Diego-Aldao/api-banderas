import { Route, Routes } from "react-router-dom";
import "./App.css";
import Contenedor from "./components/Contenedor";
import Detalle from "./components/Detalle";
import Layout from "./layouts/Layout";
import { useState } from "react";
import styled from "styled-components";

const ContenedorApp = styled.div`
  background: ${(props) =>
    props.darkMode
      ? "var(--color-principal-dark)"
      : "var(--color-principal-light)"};
  color: ${(props) => (props.darkMode ? "#fff" : "#000")};
`;

function App() {
  const [pais, setPais] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ContenedorApp darkMode={darkMode}>
      <Routes>
        <Route
          path="/"
          element={
            <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
              <Contenedor darkMode={darkMode} setPais={setPais} />
            </Layout>
          }
        />
        <Route
          path="/detalle"
          element={
            <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
              <Detalle darkMode={darkMode} pais={pais} />
            </Layout>
          }
        />
      </Routes>
    </ContenedorApp>
  );
}

export default App;
