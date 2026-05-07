import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nosotros | A&S Architecture",
  description:
    "Conoce el equipo y la filosofía detrás de A&S Architecture. Un estudio dedicado a la precisión técnica, la atemporalidad y la integridad en cada proyecto.",
};

const valores = [
  {
    icon: "architecture",
    titulo: "Precisión",
    desc: "Cada milímetro cuenta. La exactitud técnica es el cimiento de nuestra estética de lujo.",
  },
  {
    icon: "history_edu",
    titulo: "Atemporalidad",
    desc: "Diseñamos para las décadas, no para las tendencias. Nuestra arquitectura perdura.",
  },
  {
    icon: "shield",
    titulo: "Integridad",
    desc: "Honestidad en los materiales y transparencia en cada fase del desarrollo estructural.",
  },
];

const equipo = [
  {
    nombre: "Arq. Sebastian Barros",
    cargo: "Modelador BIM",
    desc: "Arquitecto especializado en diseño y modelado BIM, Transformando ideas en espacios precisos, funcionales y técnicamente armoniosos.",
    imagen: "/sebastian.webp",
  },
  {
    nombre: "Arq. Abraham Tapia",
    cargo: "Renderista 3D",
    desc: "Arquitecto con experiencia en diseño arquitectónico, levantamientos, modelado 3D y apoyo técnico en proyectos urbanos y de infraestructura pública",
    imagen: "/abraham.webp",
  },
  {
    nombre: "Arq. Ali Meza",
    cargo: "Dibujante Arquitectónico",
    desc: "Arquitecto enfocado en diseño arquitectónico, elaboración de planos y apoyo técnico en el desarrollo de proyectos.",
    imagen: "/ali.webp",
  },
  {
    nombre: "Arq. Sergio Ortiz",
    cargo: "Arquitecto Principal",
    desc: "Arquitecto con enfoque en diseño arquitectónico y desarrollo proyectual, destacado por la precisión técnica, creatividad y trabajo interdisciplinario.",
    imagen: "/sergio.webp",
  },
  {
    nombre: "Ing. Simon Bobadilla",
    cargo: "Ing Sistemas, Marketing",
    desc: "Impulsando la innovación digital y la presencia estratégica de la marca a través de tecnología y marketing creativo.",
    imagen: "/simon.webp",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <header className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvs90hC4KMjzkHcKrk_Vx64IlXvY2eMQCtC9teCiuFmrHg6yar7Hzd_vIgTujp6CB-Djqjvi09WLs24R91HvaU6VV6OeU03k9m_uvGFzvjB8ptNzR0B3YcVJTQgpFR5mNLp14jOVBYm8xGB8FRS-hVZhjJhPV57YS24Cpo-EmUNALwtCMPIbgckZBg6tWJGv340Lx1O0M0LNIuJfV28zDL2-UTqfSSt-xQZJfPLqWua0evMBTQzX8EPG8gwgk0iDdOZxLG30i4FQ"
            alt="Fachada de rascacielos brutalista"
            className="w-full h-full object-cover opacity-60 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#131313]/40 to-[#131313]" />
        </div>
        <div className="relative z-10 text-center px-6">
          <p className="font-sans text-xs tracking-[0.5em] uppercase text-[#e9c176] mb-6">
            Fundado en 2023
          </p>
          <h1 className="font-serif text-6xl md:text-9xl font-light tracking-tighter text-[#e5e2e1]">
            Sobre el Estudio
          </h1>
          <div className="mt-12 flex justify-center">
            <div className="w-px h-24 bg-gradient-to-b from-[#e9c176] to-transparent" />
          </div>
        </div>
      </header>

      {/* ── Misión & Visión ── */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-[#131313] grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Columna izquierda */}
        <div className="space-y-12">
          <div className="space-y-4">
            <span className="font-sans text-xs tracking-widest text-[#8f9194] uppercase">
              Misión
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight text-[#e5e2e1]">
              Elevando la esencia del vacío a través de la forma.
            </h2>
          </div>
          <p className="font-sans text-lg text-[#c6c6ca] max-w-xl leading-relaxed">
            En A&S Architecture no construimos estructuras; tallamos el silencio. Nuestra misión es destilar la complejidad arquitectónica hasta alcanzar una pureza monolítica que dialogue con su entorno de manera atemporal y precisa.
          </p>
          <div className="pt-8">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB78yE9SyHiEkC1Ak-6s2fe9pnRSQeb3L7-5Sauyx6o6OGr2j3OD6iBROkw0tUXU4n5h0iZ7K6REnPXmV3c-GqRAWFYIDlXo7bh8iEzoEUYv7-VhbhaVlTul2fpcaDFJ2vy4fGf7AhGreCP4JJhQlIbaE3DP_diCEhqvQ0zHsIycx4Bds3WC6S0tYcIlteG9n1fXxvlnghcctdla2HRQrTULySthCGKPSFM7A5UBBsWudsH2pvHuCs-NI9141I9uW6SnyWS_a1EWw"
              alt="Detalle arquitectónico geométrico minimalista"
              className="w-full aspect-video object-cover grayscale brightness-75"
            />
          </div>
        </div>

        {/* Columna derecha */}
        <div className="flex flex-col space-y-20 lg:pt-40">
          <div className="bg-[#1c1b1b] p-12 space-y-8 relative">
            {/* letra decorativa */}
            <div className="absolute -top-10 -right-10 hidden xl:block select-none pointer-events-none">
              <span className="font-serif text-[12rem] leading-none text-[#353534]/30">V</span>
            </div>
            <div className="space-y-4 relative z-10">
              <span className="font-sans text-xs tracking-widest text-[#8f9194] uppercase">
                Visión
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight text-[#e5e2e1]">
                Definir el horizonte de la arquitectura contemporanea.
              </h2>
              <p className="font-sans text-lg text-[#c6c6ca] leading-relaxed pt-4">
                Aspiramos a ser el referente global de la arquitectura de alta gama, donde cada proyecto sea un testimonio de precisión técnica y equilibrio estético, fusionando el acero, la piedra y la luz.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8">
            <div className="aspect-square bg-[#2a2a2a] flex flex-col items-center justify-center p-8 gap-3">
              <span className="font-serif text-5xl text-[#e9c176]">21+</span>
              <p className="font-sans text-[10px] uppercase tracking-widest text-[#c6c6ca]">
                Proyectos
              </p>
            </div>
            <div className="aspect-square bg-[#353534] flex flex-col items-center justify-center p-8 gap-3">
              <span className="font-serif text-5xl text-[#c3c7cd]">3</span>
              <p className="font-sans text-[10px] uppercase tracking-widest text-[#c6c6ca]">
                Premios
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Valores ── */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-[#0e0e0e]">
        <div className="mb-20 text-center">
          <h2 className="font-serif text-4xl font-light tracking-tight text-[#e5e2e1]">
            Nuestros Valores
          </h2>
          <div className="w-16 h-px bg-[#e9c176] mx-auto mt-6" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {valores.map((v) => (
            <div
              key={v.titulo}
              className="bg-[#1c1b1b] p-16 flex flex-col items-center text-center space-y-6 hover:bg-[#201f1f] transition-colors duration-500"
            >
              <span
                className="material-symbols-outlined text-4xl text-[#e9c176]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                {v.icon}
              </span>
              <h3 className="font-serif text-2xl text-[#e5e2e1]">{v.titulo}</h3>
              <p className="font-sans text-sm text-[#c6c6ca] leading-loose">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Equipo ── */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-[#131313]">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-xl">
            <span className="font-sans text-xs tracking-widest text-[#e9c176] uppercase mb-4 block">
              El Equipo
            </span>
            <h2 className="font-serif text-5xl font-light tracking-tight text-[#e5e2e1]">
              Mentes tras el Estudio.
            </h2>
          </div>
          <p className="font-sans text-[#c6c6ca] max-w-sm">
            Un colectivo multidisciplinario dedicado a la excelencia constructiva y el diseño editorial.
          </p>
        </div>

        {/* Primeros 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {equipo.slice(0, 3).map((m) => (
            <MemberCard key={m.nombre} {...m} />
          ))}
        </div>

        {/* Últimos 2 centrados */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 lg:max-w-4xl lg:mx-auto">
          {equipo.slice(3).map((m) => (
            <MemberCard key={m.nombre} {...m} />
          ))}
        </div>
      </section>

      {/* ── CTA Final ── */}
      <section className="relative py-40 px-6 md:px-12 text-center bg-[#0e0e0e] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBW5XeW5u_G6XyzYaWeAg-NKxlfKG-cWGtSJuKUQCnbMp2b-NothP_Y8ewsJTHw7NQoZ-kdlCMy4HaLS2665Wf00uCIiGDkGKvXFIY9_9czXt6y0uBxhbURYTMXED16A8P7zH6b-a_LTaLhxq1kev9OPZtMTPSKK5IHKHL01-WZnswR1koRr-lXaqvrOwI81JF71yNjGmUKHkmMpCOs_68x1tI7MN_hP7WF3ANlRiun5jIO-Dl4JEazzdAlprvpAhr8faNA4zEBAw"
            alt="Textura de concreto oscuro"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto space-y-12">
          <h2 className="font-serif text-5xl md:text-7xl font-light tracking-tight text-[#e5e2e1]">
            ¿Listo para construir su visión?
          </h2>
          <p className="font-sans text-xl text-[#c6c6ca]">
            Permítanos transformar sus ideas en un legado de piedra y acero.
          </p>
          <div className="pt-8">
            <Link
              href="/#contacto"
              className="inline-block bg-gradient-to-br from-[#c3c7cd] to-[#a5aaaf] text-[#2c3136] px-16 py-5 font-sans text-sm tracking-[0.3em] uppercase font-bold hover:brightness-110 transition-all duration-300 active:scale-95"
            >
              Contactar Ahora
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function MemberCard({
  nombre,
  cargo,
  desc,
  imagen,
}: {
  nombre: string;
  cargo: string;
  desc: string;
  imagen: string;
}) {
  return (
    <div className="group">
      <div className="aspect-[3/4] overflow-hidden bg-[#2a2a2a] mb-6">
        <img
          src={imagen}
          alt={`Retrato de ${nombre}`}
          className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700"
        />
      </div>
      <h4 className="font-serif text-xl mb-1 text-[#e5e2e1]">{nombre}</h4>
      <p className="font-sans text-[10px] uppercase tracking-widest text-[#e9c176] mb-4">
        {cargo}
      </p>
      <p className="font-sans text-sm text-[#c6c6ca]">{desc}</p>
    </div>
  );
}