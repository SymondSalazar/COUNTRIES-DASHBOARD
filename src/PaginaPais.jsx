import "./App.css";
import { useState, useEffect } from "react";
import { Titulo } from "./components/titulo.jsx";
import { Boton } from "./components/boton.jsx";
import { useParams } from "react-router-dom";
import { useObtenerPaises } from "./hook/useObtenerPaises.js";
import { PanelPropiedades } from "./components/panel_propiedades.jsx";
import { TAB_INFO } from "./components/tab_info.jsx";

export function PaginaPais() {
  const { pais } = useParams();

  const [pais_data, setPaisesData] = useState([]);
  const [activeTab, setTab] = useState(0);

  useObtenerPaises({ setPaisesData, pais });

  useEffect(() => {
    console.log(pais_data);
  }, [pais_data]);

  return (
    <>
      <div className=" flex flex-col min-h-screen bg-[#fafafa] p-4 gap-6 font-sans text-black items-center">
        <Titulo titulo={pais} />

        <main className="gap-0">
          {pais_data.length > 0 ? (
            <PanelPropiedades activeTab={activeTab} setTab={setTab}>
              <TAB_INFO activeTab={activeTab} pais_data={pais_data} />
            </PanelPropiedades>
          ) : (
            <p>No se encontró información sobre este país</p>
          )}
        </main>

        <Boton texto="Volver" to="/" />
      </div>
    </>
  );
}
