import { Link } from "react-router-dom";

export function Boton({ to, texto }) {
  return (
    <Link
      to={to}
      className="border-2 border-black bg-white px-5 py-3 font-semibold text-black shadow-[4px_4px_0_0] shadow-black hover:translate-1 hover:shadow-[-1px_-1px_0_0] focus:ring-2 focus:ring-yellow-300 focus:outline-0"
    >
      {texto}
    </Link>
  );
}
