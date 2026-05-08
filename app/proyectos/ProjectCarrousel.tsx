"use client";
import { useState } from "react";

const proyectos = [
  {
    id: 1,
    titulo: "CASA ÉBANO",
    categoria: "Residencial",
    ubicacion: "Barranquilla, Colombia",
    descripcion: "Vivienda contemporánea de líneas puras, iluminación perimetral y acabados pétreos que enfatizan elegancia y sobriedad.",
    imagen: "/p1.webp",
    alt: "Casa moderna de dos niveles con iluminación cálida exterior",
  },
  {
    id: 2,
    titulo: "LÚMINA INTERIOR",
    categoria: "Interiorismo",
    ubicacion: "Santa Marta, Colombia",
    descripcion: "Cocina minimalista integrada con materiales cálidos, geometrías limpias y composición funcional de concepto abierto.",
    imagen: "/p3.webp",
    alt: "Cocina moderna minimalista con acabados en madera y mármol",
  },
  {
    id: 3,
    titulo: "AUREA FACHADA",
    categoria: "Comercial",
    ubicacion: "Cartagena, Colombia",
    descripcion: "Diseño arquitectónico de presencia nocturna, con iluminación lineal y textura mineral de carácter contemporáneo.",
    imagen: "/p2.webp",
    alt: "Fachada comercial moderna iluminada en la noche",
  },
  {
    id: 4,
    titulo: "CASA PRISMA",
    categoria: "Residencial",
    ubicacion: "Riohacha, Colombia",
    descripcion: "Residencia compacta de estética cálida y tropical, concebida para maximizar iluminación natural y confort visual.",
    imagen: "/p4.webp",
    alt: "Casa de un nivel con patio frontal y vegetación",
  },
];

const meta = [
  [{ label: "Ubicación", value: "Barranquilla" }, { label: "Área", value: "980 m²" }, { label: "Año", value: "2024" }],
  [{ label: "Ubicación", value: "Santa Marta" }, { label: "Área", value: "320 m²" }, { label: "Año", value: "2024" }],
  [{ label: "Ubicación", value: "Cartagena" }, { label: "Área", value: "1,450 m²" }, { label: "Año", value: "2025" }],
  [{ label: "Ubicación", value: "Riohacha" }, { label: "Área", value: "1,250 m²" }, { label: "Año", value: "2025" }],
];

export default function ProjectCarousel() {
  const [cur, setCur] = useState(0);
  const total = proyectos.length;
  const go = (n: number) => setCur(((n % total) + total) % total);
  const p = proyectos[cur];

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-[600px]">
        <div className="relative overflow-hidden">
          <img
            src={p.imagen}
            alt={p.alt}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#201f1f]" />
        </div>

        <div className="bg-[#201f1f] relative flex flex-col justify-center px-14 py-16 overflow-hidden">
          <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-[#e9c176]/40 to-transparent" />
          <span className="absolute top-10 right-10 font-serif text-[5rem] font-light leading-none text-[#45474a]/20 select-none">
            {String(cur + 1).padStart(2, "0")}
          </span>

          <span className="font-sans text-[#e9c176] text-[10px] tracking-[0.35em] uppercase mb-5 block">
            {p.categoria}
          </span>
          <h3 className="font-serif text-4xl lg:text-5xl font-normal leading-tight text-[#e5e2e1] mb-5 tracking-tight">
            {p.titulo}
          </h3>
          <p className="font-sans text-[#8f9194] text-sm leading-relaxed mb-8 max-w-sm font-light">
            {p.descripcion}
          </p>

          <div className="space-y-3 mb-8">
            {meta[cur].map(({ label, value }) => (
              <div key={label} className="flex justify-between items-center border-b border-[#45474a]/20 pb-3">
                <span className="font-sans text-[9px] uppercase tracking-widest text-[#8f9194]">{label}</span>
                <span className="font-sans text-[#e5e2e1] text-sm">{value}</span>
              </div>
            ))}
          </div>

          <a href="#" className="group/link inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-[#e5e2e1] w-fit">
            <div className="w-10 h-px bg-[#e9c176] transition-all duration-300 group-hover/link:w-16" />
            <span>Ver Detalles</span>
            <span className="transition-transform duration-300 group-hover/link:translate-x-1 text-[#e9c176]">→</span>
          </a>
        </div>
      </div>

      <div className="flex items-center gap-6 px-6 md:px-0 pt-6">
        <div className="flex gap-3">
          <button
            onClick={() => go(cur - 1)}
            className="w-12 h-12 border border-[#45474a]/30 text-[#e5e2e1] hover:border-[#e9c176] hover:text-[#e9c176] transition-all flex items-center justify-center text-lg"
          >
            ←
          </button>
          <button
            onClick={() => go(cur + 1)}
            className="w-12 h-12 border border-[#45474a]/30 text-[#e5e2e1] hover:border-[#e9c176] hover:text-[#e9c176] transition-all flex items-center justify-center text-lg"
          >
            →
          </button>
        </div>

        <div className="flex-1 h-px bg-[#45474a]/20 relative">
          <div
            className="absolute h-full bg-[#e9c176] transition-all duration-700"
            style={{ width: "25%", left: `${cur * 25}%` }}
          />
        </div>

        <div className="flex gap-2 items-center">
          {proyectos.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className={`h-px transition-all duration-300 ${i === cur ? "w-12 bg-[#e9c176]" : "w-6 bg-[#45474a]/40"}`}
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2 mt-4">
        {proyectos.map((proj, i) => (
          <button key={i} onClick={() => go(i)} className="group text-left">
            <div className={`h-px w-full mb-2 transition-colors duration-300 ${i === cur ? "bg-[#e9c176]" : "bg-[#45474a]/30"}`} />
            <span className={`font-sans text-[9px] uppercase tracking-[0.2em] transition-colors duration-300 ${i === cur ? "text-[#e5e2e1]" : "text-[#8f9194]"}`}>
              {proj.titulo}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}