import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#131313] w-full border-t border-[#c3c7cd]/10 grid grid-cols-1 md:grid-cols-4 gap-12 px-12 py-20">
      <div className="md:col-span-1">
        <div className="font-serif text-3xl text-[#c3c7cd] mb-8">A&amp;S Architecture</div>
        <p className="text-xs tracking-[0.2em] text-[#c7c6c6] uppercase leading-loose">
          Excelencia en cada línea.
          <br />
          Innovación en cada espacio.
        </p>
      </div>

      <div>
        <h4 className="font-sans text-sm tracking-widest uppercase text-[#c3c7cd] mb-8">Menú</h4>
        <ul className="space-y-4 font-sans text-sm tracking-widest uppercase text-[#c7c6c6]">
          <li><Link href="/" className="hover:text-[#e9c176] transition-colors">Inicio</Link></li>
          <li><Link href="/proyectos" className="hover:text-[#e9c176] transition-colors">Proyectos</Link></li>
          <li><Link href="/sobre-nosotros" className="hover:text-[#e9c176] transition-colors">Nosotros</Link></li>
          <li><Link href="/#contacto" className="hover:text-[#e9c176] transition-colors">Contacto</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="font-sans text-sm tracking-widest uppercase text-[#c3c7cd] mb-8">Legal</h4>
        <ul className="space-y-4 font-sans text-sm tracking-widest uppercase text-[#c7c6c6]">
          <li><Link href="#" className="hover:text-[#e9c176] transition-colors">Política de Privacidad</Link></li>
          <li><Link href="#" className="hover:text-[#e9c176] transition-colors">Términos de Servicio</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="font-sans text-sm tracking-widest uppercase text-[#c3c7cd] mb-8">Boletín</h4>
        <p className="text-xs text-[#c7c6c6] mb-6 tracking-wider uppercase">
          Recibe nuestras últimas publicaciones.
        </p>
        <div className="flex gap-2">
          <input
            type="email"
            placeholder="Correo"
            className="bg-transparent border border-[#45474a] text-xs py-2 px-4 focus:outline-none focus:ring-1 focus:ring-[#e9c176] w-full text-[#c7c6c6] placeholder:text-[#8f9194]"
          />
          <button className="bg-[#e9c176] text-[#261900] p-2 hover:bg-[#c9a45c] transition-colors">
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
        <div className="mt-8">
          <p className="text-[10px] text-[#c7c6c6] uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} A&amp;S Architecture. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
