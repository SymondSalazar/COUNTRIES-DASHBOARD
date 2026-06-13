import { Link } from "react-router-dom";
import { Titulo } from "./components/Titulo.jsx";
import "./App.css";
import { Boton } from "./components/Boton.jsx";

export function NotFound() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-[#fafafa] p-4 gap-6 font-sans text-black items-center">
        <Titulo titulo="404 - Página no encontrada" />

        <img src="https://midu.dev/images/this-is-fine-404.gif" alt="" />

        <h2 className="text-3xl font-bold text-center">
          No hay contenido que mostrar
        </h2>

        <Boton texto="Volver a la página principal" to="/" />
      </div>
    </>
  );
}
