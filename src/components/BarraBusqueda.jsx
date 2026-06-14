export function BarraBusqueda({ busqueda, setBusqueda }) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="Buscar un país"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="theme-field mt-0.5 h-8 w-full px-4 py-2 sm:text-sm focus:outline-none"
      />
    </form>
  );
}
