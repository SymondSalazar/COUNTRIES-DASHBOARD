

export function Titulo({ titulo }) {
  return (
    <aside className="theme-title flex w-full flex-col items-center justify-center gap-4 border-4 p-5 sm:flex-row sm:justify-between">
      <h1 className="text-4xl font-black uppercase tracking-tighter leading-none text-center sm:text-left">
        {titulo}
      </h1>
    </aside>
  );
}
