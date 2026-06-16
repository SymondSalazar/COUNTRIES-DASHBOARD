import { useState } from "react";
import "./App.css";
import { BarraBusqueda } from "./components/BarraBusqueda.jsx";
import { Dropdown_Region } from "./components/DropdownRegion.jsx";
import { Paises } from "./components/PaisesLista.jsx";
import { Titulo } from "./components/Titulo.jsx";
import { useObtenerPaises } from "./hook/useObtenerPaises.js";
import { useFiltroPais } from "./hook/useFiltroPais.js";
import { BarraCarga } from "./components/BarraCarga.jsx";
import { Boton } from "./components/Boton.jsx";
import { ThemeButton } from "./components/ThemeButton.jsx";
import { Analytics } from "@vercel/analytics/react";

function App() {
  const [paises_data, setPaisesData] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [porcentaje, setPorcentaje] = useState(0);
  const [region, setRegion] = useState("");
  const [error, setError] = useState(null);
  const loading = porcentaje < 100;

  useObtenerPaises({
    setPaisesData,
    pais: null,
    setPorcentaje,
    setError,
  });
  const filtro = useFiltroPais({ busqueda, region, paises_data });

  return (
    <>
      <div className="theme-page flex min-h-screen flex-col items-center gap-6 p-4 font-sans">
        <Titulo titulo="Dashboard de países" />
        <main className="w-full md:w-3/4 lg:w-4/5 flex flex-col gap-10 items-center">
          <header className="flex flex-row gap-6 w-full max-w-2xl items-center">
            <BarraBusqueda busqueda={busqueda} setBusqueda={setBusqueda} />
            <Dropdown_Region region={region} setRegion={setRegion} />
            <ThemeButton />
          </header>

          {error ? (
            <p className="w-full text-center text-red-600">{error}</p>
          ) : loading ? (
            <div className="w-full flex justify-center items-center">
              <BarraCarga porcentaje={porcentaje} />
            </div>
          ) : null}
          <section className="w-full">
            <Paises paises_mostrar={filtro} loading={loading} error={error} />
          </section>
        </main>
      </div>
      <Analytics />
    </>
  );
}

export default App;
