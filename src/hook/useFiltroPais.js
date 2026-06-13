import { useMemo } from "react";

export function useFiltroPais({ busqueda, region, paises_data}) {
  const filtrar = useMemo(() => {
    if (paises_data) {
      return paises_data.filter((pais) => {

        const busqueda_lower = busqueda.toLowerCase();
        const coincideNombre =
          busqueda_lower === "" ||
          pais.names.common.toLowerCase().startsWith(busqueda_lower);


        const coincideRegion = region === "" || pais.region.toLowerCase() === region.toLowerCase();


        return coincideNombre && coincideRegion;
      });
    }
  }, [busqueda, region, paises_data]);

  return filtrar;
}
export default useFiltroPais;
