import { Route, Routes } from "react-router-dom";
import "./App.css";
import Contenedor from "./components/Contenedor";
import Detalle from "./components/Detalle";
import Layout from "./layouts/Layout";
import { useState } from "react";

function App() {
  const [pais, setPais] = useState("");
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Contenedor setPais={setPais} />
            </Layout>
          }
        />
        <Route
          path="/detalle"
          element={
            <Layout>
              <Detalle pais={pais} />
            </Layout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
