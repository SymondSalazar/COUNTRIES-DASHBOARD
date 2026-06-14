import "./App.css";
import { useState, useEffect } from "react";
import { Titulo } from "./components/Titulo.jsx";
import { Boton } from "./components/Boton.jsx";
import { useParams } from "react-router-dom";
import { useObtenerPaises } from "./hook/useObtenerPaises.js";
import { PanelPropiedades } from "./components/PanelPropiedades.jsx";
import { TAB_INFO } from "./components/TabInfo.jsx";
import { BarraCarga } from "./components/BarraCarga.jsx";

export function PaginaPais() {
  const { pais } = useParams();

  const [pais_data, setPaisesData] = useState([]);
  const [activeTab, setTab] = useState(0);
  const [loading, setLoading] = useState(true);
  const [porcentaje, setPorcentaje] = useState(0);

  useObtenerPaises({ setPaisesData, pais, setLoading, setPorcentaje });

  return (
    <>
      <div className="theme-page flex min-h-screen flex-col items-center gap-6 p-4 font-sans">
        <Titulo titulo={pais} />

        <main className="gap-0 w-full max-w-3xl flex flex-col items-center">
          {pais_data.length > 0 && (
            <>
            <PanelPropiedades activeTab={activeTab} setTab={setTab}>
              <TAB_INFO activeTab={activeTab} pais_data={pais_data} />
            </PanelPropiedades>
            </>
          )}

          {loading && (
            <div className="w-full flex justify-center items-center">
              <BarraCarga porcentaje={porcentaje} />
            </div>
            )}

          {pais_data.length === 0 && !loading && (
            <p>No se encontró información sobre este país</p>
          )}

        </main>

        <Boton texto="Volver" to="/" />
      </div>
    </>
  );
}
