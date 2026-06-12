import { useState } from 'react'
import './App.css'
import paises from './data/paises.json'
import pais_solo from './data/pais_solitario.json'
import pais_nulo from './data/recibo_nulo.json'


function App() {
  
  //Consegui todos los datos de los paises
  const paises_data = paises.data.objects

  const [busqueda, setBusqueda] = useState('')

  let paises_mostrar = paises_data.slice()
  
  const filtrar = (e) => {


    if (e.target.value == '') {
      paises_mostrar = paises_data.slice()  
      setBusqueda('')
      return
    }

    const busqueda_lower = busqueda.toLowerCase()
    paises_mostrar = paises_data.filter((pais) => 
      pais.names.common.toLowerCase().includes(busqueda_lower)
    )

    setBusqueda(e.target.value)
  }

  return (
    <>


      <h1>Country Dashboard</h1>
      <form>
        <input type="text" placeholder="Buscar un pais" value = {busqueda} 
        onChange={filtrar} 
        />
      </form>

 




      {
        //Tarjeta de los paises.
        paises_mostrar.map((pais) => (
          <div key={pais.names.common}>

          
            <img src={pais.flag.url_png?? null} alt={`Bandera de ${pais.names.common}`} />
            
            <h2>{pais.names.common}</h2>
            
            {pais.capitals?.[0]?.name ? (
              <p>Capital: {pais.capitals[0].name}</p>
            ) : (
              <p style = {{ color: 'red' }}>No tiene capital</p>
            )}

            <p>Poblacion: {pais.population}</p>
            <p>Region: {pais.region}</p>

          </div>
        ))
      }
    </>
  )
}

export default App
