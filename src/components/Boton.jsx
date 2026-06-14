import { Link } from "react-router-dom";

export function Boton({ to, texto }) {
  return (
    <Link
      to={to}
      className="theme-button border-2 px-5 py-3 font-semibold transition-transform hover:translate-1 focus:outline-0 focus:ring-2 focus:ring-yellow-300"
    >
      {texto}
    </Link>
  );
}
