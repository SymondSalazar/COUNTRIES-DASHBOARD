export function Dropdown_Region({ region, setRegion }) {
  return (
    <select
      value={region}
      onChange={(e) => setRegion(e.target.value)}
      className="tmt-0.5 w-full h-8 border-2 border-black bg-white placeholder-black shadow-[4px_4px_0_0] shadow-black focus:ring-2  sm:text-sm"
    >
      <option value="">Seleccionar region</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
}
