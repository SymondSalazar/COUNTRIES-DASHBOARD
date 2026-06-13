import { useState, useMemo } from "react";
import "./App.css";
import paises from "./data/paises.json";
import { Barra_Busqueda } from "./components/barra_busqueda.jsx";
import { Dropdown_Region } from "./components/dropdown_region.jsx";
import { Paises } from "./components/paises_lista.jsx";
import { Titulo } from "./components/titulo.jsx";

function App() {
  //Consegui todos los datos de los paises
  const paises_data = paises.data.objects;
  const [busqueda, setBusqueda] = useState("");
  const [region, setRegion] = useState("");

  const paises_filtrados = useMemo(() => {
    return paises_data.filter((pais) => {
      // Condición 1: Comprobar el nombre
      const busqueda_lower = busqueda.toLowerCase();
      const coincideNombre =
        busqueda_lower === "" ||
        pais.names.common.toLowerCase().startsWith(busqueda_lower);

      // Condición 2: Comprobar la región
      const coincideRegion =
        region === "" || pais.region.toLowerCase() === region.toLowerCase();

      // El país solo se mostrará si cumple AMBAS condiciones
      return coincideNombre && coincideRegion;
    });
  }, [busqueda, region, paises_data]);

  return (
    <>
      <div className="flex flex-col min-h-screen bg-[#fafafa] p-4 gap-6 font-sans text-black items-center">
        
      
        <Titulo titulo="Dashboard de países" />
        <main className="w-full md:w-3/4 lg:w-4/5 flex flex-col gap-10 items-center">
        
          <header className="flex flex-row gap-6 w-full max-w-2xl items-center">
            <Barra_Busqueda busqueda={busqueda} setBusqueda={setBusqueda} />
            <Dropdown_Region region={region} setRegion={setRegion} />
          </header>

          <section className="w-full">
            <Paises paises_mostrar={paises_filtrados} />
          </section>

        </main>
        
      </div>
    </>
  );
}

export default App;
