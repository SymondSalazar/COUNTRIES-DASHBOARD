import { Link } from "react-router-dom";
import { Titulo } from "./components/Titulo.jsx";
import "./App.css";
import { Boton } from "./components/Boton.jsx";

export function NotFound() {
  return (
    <>
      <div className="theme-page flex min-h-screen flex-col items-center gap-6 p-4 font-sans">
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
