export function Pais_Tarjeta({nombre, bandera, poblacion, region, capital}) {
  return (
    <a href={`/${nombre}`} className="group relative block h-64 sm:h-80 lg:h-96 shadow-[4px_4px_0_0] shadow-black">
      <span className="absolute inset-0 border-2 border-dashed border-black"></span>

      <div className="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
        <div className="px-4 pb-4 transition-opacity group-hover:absolute group-hover:opacity-0 sm:px-6 sm:pb-4 lg:px-8 lg:pb-8">
            {bandera ? (
            <img
              src={bandera}
              alt={`Bandera de ${nombre}`}
              className="mb-4 h-20 w-auto object-contain"
            />
          ) : null}
          

          <h2 className="mt-4 text-xl font-medium sm:text-2xl">
            {nombre}
          </h2>
        </div>

        <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
       

          <h3 className="mt-4 text-xl font-medium sm:text-2xl">{nombre}</h3>

          <p className="mt-4 text-sm sm:text-base">
            Capital: {capital}
          </p>

          <p className="mt-2 text-sm sm:text-base">Poblacion: {poblacion}</p>
          <p className="mt-2 text-sm sm:text-base">Region: {region}</p>
        </div>
      </div>
    </a>
  );
}
