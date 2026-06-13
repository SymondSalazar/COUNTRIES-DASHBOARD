import { Pais_Tarjeta } from "./PaisTarjeta.jsx";

export function Vista_Paises({ paises_mostrar }) {
  return (
    <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {paises_mostrar.map((pais) => (
        <Pais_Tarjeta
          key={pais.names.common}
          nombre={pais.names.common}
          bandera={pais.flag.url_png}
          poblacion={pais.population}
          region={pais.region}
          capital={pais.capitals?.[0]?.name ?? "No tiene capital"}
        />
      ))}
    </div>
  );
}

export function Vista_Paises_Backup({ paises_mostrar }) {
  return paises_mostrar.map((pais) => (
    <a
      href={`/${pais.names.common}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <div key={pais.names.common}>
        <img
          src={pais.flag.url_png ?? null}
          alt={`Bandera de ${pais.names.common}`}
        />

        <h2>{pais.names.common}</h2>

        {pais.capitals?.[0]?.name ? (
          <p>Capital: {pais.capitals[0].name}</p>
        ) : (
          <p style={{ color: "red" }}>No tiene capital</p>
        )}

        <p>Poblacion: {pais.population}</p>
        <p>Region: {pais.region}</p>
      </div>
    </a>
  ));
}

export function Paises({ paises_mostrar }) {
  if (paises_mostrar.length != 0) {
    return <Vista_Paises paises_mostrar={paises_mostrar} />;
  } else {
    return <p style={{ color: "red" }}>No se encontraron paises</p>;
  }
}
