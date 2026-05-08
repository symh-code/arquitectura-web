import type { Metadata } from "next";
import Link from "next/link";
import ProjectCarousel from "./ProjectCarrousel";

export const metadata: Metadata = {
  title: "Proyectos | A&S Architecture",
  description: "Portafolio de obras de A&S Architecture...",
};

const categorias = ["Todos Nuestros Proyectos"];

export default function ProyectosPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative h-[870px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-[#131313] z-10" />
          <img
            src="/ProyectosHero.webp"
            alt="Obra arquitectónica monolítica"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 text-center px-6">
          <span className="block font-sans text-[#e9c176] text-xs tracking-[0.4em] uppercase mb-6">
            Excelencia en Diseño
          </span>
          <h1 className="font-serif text-5xl md:text-8xl font-bold tracking-tighter mb-8 max-w-5xl leading-[1.1] text-[#e5e2e1]">
            PORTAFOLIO DE OBRAS
          </h1>
          <p className="max-w-xl mx-auto font-sans text-[#8f9194] text-lg md:text-xl leading-relaxed">
            La convergencia de la precisión técnica y la visión poética. Cada estructura es un diálogo entre el espacio, la luz y el silencio.
          </p>
        </div>
      </section>

      {/* ── Filtros ── */}
      <section className="py-12 bg-[#0e0e0e] border-b border-[#45474a]/10">
        <div className="container mx-auto px-12">
          <div className="flex flex-wrap items-center justify-center gap-12 font-sans text-[10px] uppercase tracking-[0.3em] text-[#8f9194]">
            {categorias.map((cat, i) => (
              <button
                key={cat}
                className={`transition-colors hover:text-[#e5e2e1] ${
                  i === 0
                    ? "text-[#e9c176] border-b border-[#e9c176] pb-1"
                    : ""
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Proyecto Destacado ── */}
      <section className="py-24 bg-[#131313]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
          <div className="lg:col-span-7 relative h-[600px] lg:h-[716px]">
            <img
              src="/p4.webp"
              alt="Casa Mirador — arquitectura de lujo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:col-span-5 p-12 lg:p-24 bg-[#201f1f]">
            <span className="block font-sans text-[#e9c176] text-xs tracking-widest uppercase mb-4">
              Proyecto Destacado
            </span>
            <h2 className="font-serif text-4xl lg:text-6xl font-bold mb-8 leading-tight text-[#e5e2e1]">
              Casa Prisma
            </h2>
            <p className="font-sans text-[#8f9194] mb-12 text-lg leading-relaxed">
              Una residencia contemporánea donde la geometría, la luz y la precisión arquitectónica convergen para crear un espacio elegante, moderno y funcional.
            </p>
            <div className="space-y-6">
              {[
                { label: "Ubicación", value: "Riohacha, La Guajira" },
                { label: "Área", value: "1,250 m²" },
                { label: "Año", value: "2025" },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="flex justify-between items-center border-b border-[#45474a]/20 pb-4"
                >
                  <span className="font-sans text-[10px] uppercase tracking-widest text-[#8f9194]">
                    {label}
                  </span>
                  <span className="font-sans text-[#e5e2e1]">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Grilla de Proyectos ── */}
      <section className="py-24 bg-[#131313]">
        <div className="text-center mb-16 px-6">
          <span className="block font-sans text-[#e9c176] text-[10px] tracking-[0.4em] uppercase mb-4">
            Portafolio de Obras
          </span>
          <h2 className="font-serif text-5xl md:text-7xl font-light tracking-tight text-[#e5e2e1]">
            NUESTROS PROYECTOS
          </h2>
        </div>
        <ProjectCarousel />
      </section>

      {/* ── CTA ── */}
      <section className="py-40 bg-[#1c1b1b] text-center overflow-hidden relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-[#e9c176]" />
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="font-serif text-4xl md:text-6xl font-bold mb-12 max-w-4xl mx-auto leading-tight text-[#e5e2e1]">
            ¿TIENE UNA VISIÓN? NOSOTROS LA CONVERTIMOS EN ESTRUCTURA.
          </h2>
          <div className="flex flex-col items-center gap-8">
            <p className="font-sans text-[#8f9194] max-w-lg mx-auto text-lg">
              Hablemos de su próximo proyecto y descubra cómo la arquitectura de vanguardia puede transformar su realidad.
            </p>
            <Link
              href="/#contacto"
              className="inline-flex items-center gap-4 group"
            >
              <span className="bg-[#e9c176] text-[#261900] px-10 py-5 font-bold uppercase tracking-widest text-xs transition-all group-hover:bg-[#c3c7cd] group-hover:text-[#2c3136] active:scale-95">
                CONTÁCTENOS
              </span>
              <div className="w-16 h-px bg-[#e9c176] transition-all group-hover:w-24" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}