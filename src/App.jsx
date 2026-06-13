import { useState } from "react";
import "./App.css";
import { BarraBusqueda } from "./components/BarraBusqueda.jsx";
import { Dropdown_Region } from "./components/DropdownRegion.jsx";
import { Paises } from "./components/PaisesLista.jsx";
import { Titulo } from "./components/Titulo.jsx";
import { useObtenerPaises } from "./hook/useObtenerPaises.js";
import { useFiltroPais } from "./hook/useFiltroPais.js";

function App() {
  const [paises_data, setPaisesData] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [region, setRegion] = useState("");
  useObtenerPaises({ setPaisesData });
  const filtro = useFiltroPais({ busqueda, region, paises_data });

  return (
    <>
      <div className="flex flex-col min-h-screen bg-[#fafafa] p-4 gap-6 font-sans text-black items-center">
        <Titulo titulo="Dashboard de países" />
        <main className="w-full md:w-3/4 lg:w-4/5 flex flex-col gap-10 items-center">
          <header className="flex flex-row gap-6 w-full max-w-2xl items-center">
            <BarraBusqueda busqueda={busqueda} setBusqueda={setBusqueda} />
            <Dropdown_Region region={region} setRegion={setRegion} />
          </header>

          <section className="w-full">
            <Paises paises_mostrar={filtro} />
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
