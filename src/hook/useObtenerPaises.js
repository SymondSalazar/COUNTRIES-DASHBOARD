import { useEffect } from "react";

const API_KEY = import.meta.env.VITE_API_KEY;
const END_POINT = "api/v5?limit=100";

function fetching() {}

export function useObtenerPaises({
  setPaisesData,
  pais = null,
  setLoading,
  setPorcentaje,
}) {
  let ROUTE = END_POINT;

  if (pais) {
    ROUTE = `/api/v5?q=${pais}`;
  }

  const fetching = (route) => {
    return fetch(route, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPaisesData((prev) => {
          const unidos = [...prev, ...(data.data.objects ?? [])];
          const sinRepetidos = unidos.filter(
            (pais, index, self) =>
              index ===
              self.findIndex((p) => p.names.common === pais.names.common),
          );
          return sinRepetidos;
        });
        setPorcentaje?.(60);
      });
  };

  useEffect(() => {
    setLoading(true);
    setPorcentaje?.(10);

    const routes = [
      END_POINT,
      `${END_POINT}&offset=100`,
      `${END_POINT}&offset=200`,
    ];

    if (!pais) {
      Promise.all(routes.map((route) => fetching(route))).finally(() => {
        setLoading(false);
        setPorcentaje?.(100);
      });
    } else {
      fetching(ROUTE).finally(() => {
        setLoading(false);
        setPorcentaje?.(100);
      });
    }
  }, [ROUTE, setLoading, setPaisesData, setPorcentaje]);
}

export default useObtenerPaises;
