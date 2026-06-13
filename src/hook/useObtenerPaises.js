import { useEffect } from "react";

const API_KEY = import.meta.env.VITE_API_KEY;
const END_POINT = "api/v5";

export function useObtenerPaises({ setPaisesData }) {
  useEffect(() => {
    fetch(END_POINT, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPaisesData(data.data.objects);
      });
  }, []);
}

export default useObtenerPaises;
