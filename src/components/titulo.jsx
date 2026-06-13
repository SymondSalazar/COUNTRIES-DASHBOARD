export function Titulo({titulo}){
    return(
         <aside className="w-full bg-[#fde047] border-4 border-black p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-center items-center">
        <h1 className="text-4xl font-black uppercase tracking-tighter leading-none text-center break-words">
          {titulo}
        </h1>
      </aside>
    )
}