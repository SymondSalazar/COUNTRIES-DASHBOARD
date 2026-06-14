export function Dropdown_Region({ region, setRegion }) {
  return (
    <select
      value={region}
      onChange={(e) => setRegion(e.target.value)}
      className="theme-field tmt-0.5 h-8 w-full sm:text-sm focus:ring-2"
    >
      <option value="">Seleccionar region</option>
      <option value="Africa">Africa</option>
      <option value="Americas">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europa</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
}
