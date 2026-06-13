export function BarraBusqueda({ busqueda, setBusqueda }) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="Buscar un país"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="mt-0.5 w-full h-8 border-2 px-4 py-2 border-black bg-white shadow-[4px_4px_0_0] shadow-black sm:text-sm focus:outline-none"
      />
    </form>
  );
}
