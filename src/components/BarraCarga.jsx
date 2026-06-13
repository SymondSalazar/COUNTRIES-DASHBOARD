export function BarraCarga({porcentaje}) {
  return (
    <>
    <p className="text-center mb-2 m-1">Cargando... {porcentaje}%</p>
      <div
        role="progressbar"
        aria-valuenow={porcentaje}
        aria-valuemin="0"
        aria-valuemax="100"
        className= "w-full max-w-md"
      >
        <div className="w-full border-2 border-black bg-white p-1 shadow-[2px_2px_0_0] shadow-black">
          <div className="h-3 bg-black" style={{ width: `${porcentaje}%` }}></div>
        </div>
      </div>
    </>
  );
}
