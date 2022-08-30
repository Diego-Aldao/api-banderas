import { Route, Routes } from "react-router-dom";
import "./App.css";
import Contenedor from "./components/Contenedor";
import Detalle from "./components/Detalle";
import Layout from "./layouts/Layout";
import { useState } from "react";

function App() {
  const [pais, setPais] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
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
    </>
  );
}

export default App;
