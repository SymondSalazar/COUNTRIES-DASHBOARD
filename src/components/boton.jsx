import {Link} from "react-router-dom";

export function Boton({to, texto}){
    return(
        <Link to={to} className="mt-4 inline-block rounded bg-[#fde047] hover:text-white hover:bg-[#f5170b] border-4 border-black px-6 py-3 text-sm font-bold uppercase tracking-tighter shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            {texto}
        </Link>
    )
}