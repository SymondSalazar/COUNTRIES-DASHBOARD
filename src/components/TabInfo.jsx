export function TAB_INFO({ activeTab, pais_data }) {
  return (
    <>
      {activeTab === 0 && (
        <>
          <p>Nombres nativos: </p>
          <ul>
            {Object.values(pais_data[0].names.native).map((objeto) => {
              return <li key={objeto.official}>{objeto.official}</li>;
            })}
          </ul>
        </>
      )}
      {activeTab === 1 && (
        <>
          <p> Lenguajes: </p>
          <ul>
            {pais_data[0].languages.map((objeto) => {
              return <li key={objeto.iso639_1}>{objeto.name}</li>;
            })}
          </ul>
        </>
      )}

      {activeTab === 2 && (
        <>
          <p>Monedas: </p>
          <ul>
            {pais_data[0].currencies.map((objeto) => {
              return <li key={objeto.code}>{objeto.name}</li>;
            })}
          </ul>
        </>
      )}

      {activeTab === 3 && (
        <>
          <p>Subregion: {pais_data[0].subregion ?? "No tiene subregion"}</p>
        </>
      )}

      {activeTab === 4 && (
        <>
          {" "}
          <p>Fronteras: </p>
          <ul>
            {pais_data[0].borders.map((objeto) => {
              return <li key={objeto}>{objeto}</li>;
            })}
          </ul>
        </>
      )}
    </>
  );
}
