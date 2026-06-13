import { useEffect } from "react";

const API_KEY = import.meta.env.VITE_API_KEY;
const END_POINT = "api/v5";

export function useObtenerPaises({ setPaisesData, pais = null }) {
  let ROUTE = END_POINT;

  if (pais) {
    ROUTE = `/api/v5?q=${pais}`;
  }

  useEffect(() => {
    fetch(ROUTE, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPaisesData(data.data.objects);
      });
  }, [pais,ROUTE]);
}

export default useObtenerPaises;
