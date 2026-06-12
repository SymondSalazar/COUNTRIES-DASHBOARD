export function Barra_Busqueda({busqueda, setBusqueda}){
    return (
      <form onSubmit={(e) => e.preventDefault()}>
        <input 
          type="text" 
          placeholder="Buscar un país" 
          value={busqueda} 
          onChange={(e) => setBusqueda(e.target.value)} 
        />
      </form>
      )
}