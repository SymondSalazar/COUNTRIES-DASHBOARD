import { useMemo } from "react";

export function useFiltroPais({busqueda, region, paises_data}) {
const filtrar = useMemo(() => {
    if (paises_data) { 
      return paises_data.filter((pais) => {
        // Condición 1: Comprobar el nombre
        const busqueda_lower = busqueda.toLowerCase();
        const coincideNombre =
          busqueda_lower === "" ||
          pais.names.common.toLowerCase().startsWith(busqueda_lower);
  
        // Condición 2: Comprobar la región
        const coincideRegion =
          region === "" || pais.region.toLowerCase() === region.toLowerCase();
  
        // El país solo se mostrará si cumple AMBAS condiciones
        return coincideNombre && coincideRegion;
      });
    }

  }, [busqueda, region, paises_data]);

  return filtrar;
}
  export default useFiltroPais;