import "./App.css";
import { useState, useEffect } from "react";
import {Titulo} from "./components/titulo.jsx";
import {Boton} from "./components/boton.jsx";
import {useParams} from "react-router-dom";
import {useObtenerPaises} from "./hook/useObtenerPaises.js";

export function PaginaPais(){
    const {pais} = useParams();

    const [pais_data, setPaisesData] = useState([]);

    useObtenerPaises({setPaisesData, pais});
    
    useEffect(() => {
        console.log(pais_data);
    }, [pais_data]);


    return (
        <>
        <div className = " flex flex-col min-h-screen bg-[#fafafa] p-4 gap-6 font-sans text-black items-center">
            <Titulo titulo={pais} />

        <Boton texto="Volver a la página principal" to="/" />

        </div>
        </>
    )
}