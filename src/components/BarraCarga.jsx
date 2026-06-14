export function BarraCarga({ porcentaje }) {
  return (
    <>
    <p className="text-center mb-2 m-1">Cargando... {porcentaje}%</p>
      <div
        role="progressbar"
        aria-valuenow={porcentaje}
        aria-valuemin="0"
        aria-valuemax="100"
        className="w-full max-w-md"
      >
        <div className="theme-field w-full border-2 p-1">
          <div className="theme-progress h-3" style={{ width: `${porcentaje}%` }}></div>
        </div>
      </div>
    </>
  );
}
