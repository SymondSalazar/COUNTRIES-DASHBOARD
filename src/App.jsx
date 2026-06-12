import { useState, useMemo } from 'react'
import './App.css'
import paises from './data/paises.json'
import { Barra_Busqueda } from './components/barra_busqueda.jsx'
import {Dropdown_Region} from './components/dropdown_region.jsx'
import { Paises } from './components/paises.jsx'


function App() {
  
  //Consegui todos los datos de los paises
  const paises_data = paises.data.objects
  const [busqueda, setBusqueda] = useState('')
  const [region, setRegion] = useState('')

  const paises_filtrados = useMemo(() => {
    return paises_data.filter((pais) => {
      // Condición 1: Comprobar el nombre
      const busqueda_lower = busqueda.toLowerCase()
      const coincideNombre = busqueda_lower === '' || pais.names.common.toLowerCase().startsWith(busqueda_lower)

      // Condición 2: Comprobar la región
      const coincideRegion = region === '' || pais.region.toLowerCase() === region.toLowerCase()

      // El país solo se mostrará si cumple AMBAS condiciones
      return coincideNombre && coincideRegion
    })
  }, [busqueda, region, paises_data])

  return (
    <>


      <h1>Country Dashboard</h1>
      <Barra_Busqueda busqueda={busqueda} setBusqueda={setBusqueda} />
      <Dropdown_Region region={region} setRegion={setRegion} />

    
      <Paises paises_mostrar = {paises_filtrados} />

    </>
  )
}

export default App
