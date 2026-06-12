export function Vista_Paises({ paises_mostrar }) {
    return (
        paises_mostrar.map((pais) => (
          <a href = {`/${pais.names.common}`} style = {{ textDecoration: 'none', color: 'black' }}>
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
          </a>
        ))

      )

      }

    
    


export function Paises({ paises_mostrar }) {
   if (paises_mostrar.length != 0) {
    return <Vista_Paises paises_mostrar={paises_mostrar} />
   } else {
    return <p style = {{ color: 'red' }}>No se encontraron paises</p>
   }

}