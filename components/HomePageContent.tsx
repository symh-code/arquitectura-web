"use client";

import ContactForm from "@/components/ContactForm";
import SmoothHashScroll from "@/components/SmoothHashScroll";
import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import Link from "next/link";

const easeCurve: [number, number, number, number] = [0.22, 1, 0.36, 1];

const services = [
  {
    num: "01",
    title: "Diseño Arquitectónico",
    desc: "Conceptualización y desarrollo integral de proyectos residenciales, comerciales e institucionales.",
    items: ["Master Planning", "Diseño Conceptual", "Documentación Técnica"],
  },
  {
    num: "02",
    title: "Renovación & Restauración",
    desc: "Intervención de estructuras existentes para adaptarlas a las necesidades contemporáneas.",
    items: ["Reutilización Adaptativa", "Preservación Histórica", "Mejora Energética"],
  },
  {
    num: "03",
    title: "Gestión de Proyectos",
    desc: "Administración rigurosa de tiempos, costos y calidad durante la ejecución de obra.",
    items: ["Supervisión de Obra", "Control de Costos", "Licitaciones", "Presupuesto de obra"],
  },
];

const stats = [
  { num: "21+", label: "Proyectos Completados" },
  { num: "3", label: "Premios universitarios" },
  { num: "2+", label: "Años de Trayectoria" },
];

const contactItems = [
  {
    icon: "location_on",
    title: "Estudio Principal",
    text: "Carrera 9G #45B-67. Barranquilla, Atlántico",
  },
  {
    icon: "mail",
    title: "Consultas Generales",
    text: "as.architecture3@gmail.com",
  },
  {
    icon: "call",
    title: "Consultas Directas",
    text: "+57 310 630 9428",
  },
];

const philosophyItems = [
  {
    icon: "architecture",
    title: "Precisión",
    desc: "Cada milímetro es calculado para el máximo impacto espacial y funcional.",
  },
  {
    icon: "eco",
    title: "Contemporáneo",
    desc: "Impulsamos el diseño contemporáneo arquitectónico mediante diseño preciso, funcional y atemporal.",
  },
];

const projects = [
  {
    className: "md:col-span-8 relative group overflow-hidden h-96 md:h-auto",
    image:
      "/p4.webp",
    alt: "Pabellón de vidrio moderno rodeado de agua",
    overlay: "absolute inset-0 bg-gradient-to-t from-[#131313] via-transparent to-transparent opacity-80",
    contentClass: "absolute bottom-10 left-10 bg-[#353534]/40 backdrop-blur-xl p-8 max-w-sm",
    eyebrow: "Fachada",
    title: "Casa Prisma",
    body: "Una residencia contemporánea donde la geometría, la luz y la precisión arquitectónica convergen para crear un espacio elegante, moderno y funcional.",
  },
  {
    className: "md:col-span-4 relative group overflow-hidden h-64 md:h-auto",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCX_brWcT17I57FzXxbSCBkMMxAazzIbvylps491oxfEJSDoftiiyhz7P87uXwMscPkKCwVApFkkdoeRvSe5ZptujuAeRYIjqZUaHb3V3I7w97oUFtAUnq9r1QZdgXYIot9RgU0iKT0QHp3Gz3PKNP9HTonlhzmMZUG3fs_1MTLt6BP9Ow8i8PwlVu3RxFSqhVAHGx1_ybIQDag1yIB1y9PqEw5K5nfdvnAWgdJYcqAdOWKrFng4Dnd33cz5wwrxHUkkQKkGJVtdQ",
    alt: "Interior de concreto minimalista con rayo de luz",
    overlay: "absolute inset-0 bg-gradient-to-t from-[#131313]/80 to-transparent",
    contentClass: "absolute bottom-10 left-10",
    eyebrow: "PLANOS",
    title: "Ofrecemos planos 2D",
  },
  {
    className: "md:col-span-4 relative group overflow-hidden h-64 md:h-auto",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuASYKHOzXyoNIqe6ETjpOyo8Nw17MZ4it4Qoxr4ZHGGyMNg61nfLPI0PIgadakde60Xgu7GdifE-F6oWT-G1DgP9577wY5q1SMG0F4mri7zQC5LFiQ2Ovt3tymAG9nr9sfCuvO7DUJp5r2Vz17DujTDM1RygQ0EyECdKJ-qhL1UE4jBHfmUXtqNjimBgA3nVsT-lreuDGttEsxY2GsRkKoZYHm8IGt1hmqsf-pVtXOt8vCYpZlVde7e3pCgGGowclVFyAbUGF4mVQ",
    alt: "\u00c1ngulos arquitectónicos de un edificio corporativo",
    overlay: "absolute inset-0 bg-gradient-to-t from-[#131313]/80 to-transparent",
    contentClass: "absolute bottom-10 left-10",
    eyebrow: "VideoRenders",
    title: "Ofrecemos videos",
  },
  {
    className: "md:col-span-8 relative group overflow-hidden h-96 md:h-auto",
    image:
      "/interior.webp",
    alt: "Modelo de masterplan de desarrollo urbano",
    overlay: "absolute inset-0 bg-gradient-to-t from-[#131313] via-transparent to-transparent opacity-80",
    contentClass: "absolute bottom-10 left-10 bg-[#353534]/40 backdrop-blur-xl p-8 max-w-md",
    eyebrow: "Diseño de Interiores",
    title: "Cocina Ortiz",
    body: "Un espacio contemporáneo donde la calidez, el minimalismo y la elegancia convergen en perfecta armonía.",
  },
];

const rise: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeCurve },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
};

const slowFade: Variants = {
  hidden: { opacity: 0, scale: 1.04 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, ease: easeCurve },
  },
};

function AnimatedSection({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      className={className}
      initial={reduceMotion ? undefined : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.2 }}
      variants={stagger}
    >
      {children}
    </motion.section>
  );
}

function AnimatedItem({
  children,
  className,
  variants = rise,
}: {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  );
}

export default function HomePageContent() {
  const reduceMotion = useReducedMotion();

  return (
    <main>
      <SmoothHashScroll />

      <motion.section
        className="relative h-screen flex items-end overflow-hidden"
        initial={reduceMotion ? undefined : "hidden"}
        animate={reduceMotion ? undefined : "visible"}
        variants={stagger}
      >
        <motion.div className="absolute inset-0 z-0" variants={slowFade}>
          <motion.img
            src="/Hero.webp"
            alt="Rascacielos moderno minimalista reflejando un atardecer"
            className="w-full h-full object-cover opacity-60"
            initial={reduceMotion ? undefined : { scale: 1.08 }}
            animate={reduceMotion ? undefined : { scale: 1 }}
            transition={reduceMotion ? undefined : { duration: 1.8, ease: easeCurve }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-[#131313]/40 to-transparent" />
        </motion.div>

        <div className="relative z-10 w-full px-6 md:px-12 pb-24 md:pb-32">
          <motion.div className="max-w-6xl" variants={stagger}>
            <motion.span
              className="block font-sans text-sm uppercase tracking-[0.4em] text-[#e9c176] mb-6"
              variants={rise}
            >
              Estableciendo el Estándar
            </motion.span>
            <motion.h1
              className="font-serif text-5xl md:text-8xl leading-none mb-8 tracking-tighter text-[#e5e2e1]"
              variants={rise}
            >
              DISEÑO CON PRECISIÓN.
              <br />
              <span className="italic font-light opacity-80">ESPACIOS CON IDENTIDAD.</span>
            </motion.h1>
            <motion.div className="flex flex-col md:flex-row gap-6 items-start" variants={stagger}>
              <motion.div variants={rise}>
                <Link
                  href="/proyectos"
                  className="group flex items-center gap-4 px-10 py-5 bg-gradient-to-br from-[#c3c7cd] to-[#8f9194] text-[#2c3136] text-sm font-bold tracking-widest uppercase active:scale-95 transition-all"
                >
                  Ver Nuestros Proyectos
                  <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
                    arrow_right_alt
                  </span>
                </Link>
              </motion.div>
              <motion.div className="max-w-sm pt-4 md:pt-0" variants={rise}>
                <p className="text-[#c6c6ca] text-sm leading-relaxed border-l border-[#45474a] pl-6">
                  Redefiniendo el paisaje urbano a través de la armonía estructural y la innovación material.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <AnimatedSection className="py-32 px-6 md:px-12 bg-[#131313]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <AnimatedItem className="relative" variants={slowFade}>
            <img
              src="/Hero.webp"
              alt="Muro de concreto monolítico con sombras geométricas"
              className="w-full aspect-[4/5] object-cover grayscale"
            />
            <motion.div
              className="absolute -bottom-10 -right-10 hidden lg:block w-64 h-64 border border-[#45474a]/20 p-8 bg-[#1c1b1b]"
              initial={reduceMotion ? undefined : { opacity: 0, y: 24, x: 24 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={reduceMotion ? undefined : { duration: 0.9, delay: 0.2, ease: easeCurve }}
            >
              <p className="font-serif text-3xl text-[#e9c176]">2+</p>
              <p className="font-sans text-xs uppercase tracking-widest text-[#c6c6ca] mt-2">
                Años de Excelencia
              </p>
            </motion.div>
          </AnimatedItem>

          <motion.div className="space-y-12" variants={stagger}>
            <AnimatedItem className="space-y-6">
              <span className="text-[#e9c176] font-sans text-xs tracking-[0.5em] uppercase">
                Misión &amp; Visión
              </span>
              <h2 className="font-serif text-4xl md:text-6xl leading-tight text-[#e5e2e1]">
                Filosofía del Silencio Estructural
              </h2>
              <p className="text-[#c6c6ca] text-lg leading-relaxed font-light">
                Creemos que la arquitectura exitosa no grita por atención; se integra perfectamente con su entorno,
                proporcionando un vacío fértil para que florezca la identidad humana. Nuestra visión se centra en la
                precisión técnica y la pureza estética.
              </p>
            </AnimatedItem>
            <motion.div className="grid grid-cols-2 gap-8" variants={stagger}>
              {philosophyItems.map((item) => (
                <AnimatedItem key={item.title} className="space-y-4">
                  <span
                    className="material-symbols-outlined text-[#e9c176]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {item.icon}
                  </span>
                  <h4 className="font-serif text-xl text-[#e5e2e1]">{item.title}</h4>
                  <p className="text-sm text-[#c6c6ca] font-light">{item.desc}</p>
                </AnimatedItem>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-32 bg-[#0e0e0e]">
        <motion.div
          className="px-6 md:px-12 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8"
          variants={stagger}
        >
          <AnimatedItem className="max-w-2xl">
            <span className="text-[#e9c176] font-sans text-xs tracking-[0.5em] uppercase mb-4 block">
              Portafolio Seleccionado
            </span>
            <h2 className="font-serif text-5xl text-[#e5e2e1]">Obras Maestras</h2>
          </AnimatedItem>
          <AnimatedItem>
            <Link
              href="/proyectos"
              className="text-[#e9c176] font-bold tracking-widest uppercase text-sm border-b-2 border-[#e9c176]/20 pb-2 hover:border-[#e9c176] transition-colors"
            >
              Ver todos los proyectos
            </Link>
          </AnimatedItem>
        </motion.div>

        <motion.div className="px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-6 md:h-[1200px]" variants={stagger}>
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className={project.className}
              variants={rise}
              whileHover={reduceMotion ? undefined : { y: -6 }}
              transition={reduceMotion ? undefined : { duration: 0.35, ease: "easeOut" }}
            >
              <motion.img
                src={project.image}
                alt={project.alt}
                className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700"
                whileHover={reduceMotion ? undefined : { scale: 1.04 }}
                transition={reduceMotion ? undefined : { duration: 0.7, ease: easeCurve }}
              />
              <div className={project.overlay} />
              <motion.div className={project.contentClass} variants={rise}>
                <span className="text-xs uppercase tracking-widest text-[#e9c176] font-bold mb-2 block">
                  {project.eyebrow}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl text-[#e5e2e1] mb-4">{project.title}</h3>
                {project.body ? (
                  <p className="text-sm text-[#c6c6ca] leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {project.body}
                  </p>
                ) : null}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatedSection>

      <AnimatedSection className="py-32 px-6 md:px-12 bg-[#131313]">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <AnimatedItem className="text-center">
            <span className="text-[#e9c176] font-sans text-xs tracking-[0.5em] uppercase mb-4 block">
              Nuestra Experiencia
            </span>
            <h2 className="font-serif text-5xl md:text-7xl mb-20 text-[#e5e2e1]">Servicios Técnicos</h2>
          </AnimatedItem>
          <motion.div
            className="w-full grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#45474a]/10"
            variants={stagger}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className={`p-12 hover:bg-[#1c1b1b] transition-colors group ${
                  index < 2 ? "border-b md:border-b-0 md:border-r border-[#45474a]/10" : ""
                }`}
                variants={rise}
                whileHover={reduceMotion ? undefined : { y: -8 }}
                transition={reduceMotion ? undefined : { duration: 0.3, ease: "easeOut" }}
              >
                <span className="text-[#e9c176] font-serif text-5xl mb-8 block opacity-20 group-hover:opacity-100 transition-opacity">
                  {service.num}
                </span>
                <h3 className="font-serif text-2xl mb-6 text-[#e5e2e1]">{service.title}</h3>
                <p className="text-[#c6c6ca] font-light mb-8">{service.desc}</p>
                <ul className="space-y-3 text-xs uppercase tracking-widest text-[#c6c6ca]">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#e9c176] inline-block" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-32 bg-[#1c1b1b] overflow-hidden">
        <div className="px-6 md:px-12 flex flex-col lg:flex-row gap-20 items-center">
          <motion.div className="w-full lg:w-1/3 space-y-16" variants={stagger}>
            {stats.map((stat) => (
              <AnimatedItem key={stat.label} className="space-y-4">
                <p className="font-serif text-6xl text-[#c3c7cd] tracking-tighter">{stat.num}</p>
                <p className="font-sans text-sm uppercase tracking-widest text-[#c6c6ca]">{stat.label}</p>
              </AnimatedItem>
            ))}
          </motion.div>

          <motion.div className="w-full lg:w-2/3 space-y-12" variants={stagger}>
            <AnimatedItem className="bg-[#353534]/40 backdrop-blur-xl p-12 relative">
              <span className="material-symbols-outlined text-[#e9c176] absolute top-8 left-8 text-5xl opacity-20">
                format_quote
              </span>
              <p className="font-serif text-2xl md:text-3xl leading-relaxed italic text-[#e5e2e1] mb-8">
                &ldquo;La capacidad de A&amp;S para interpretar nuestra visión corporativa y traducirla en una estructura
                funcional pero estéticamente imponente superó todas nuestras expectativas.&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#353534] flex items-center justify-center">
                  <img src="/luisortiz.webp" alt="Person" className="material-symbols-outlined text-[#e9c176]" />
                </div>
                <div>
                  <p className="font-bold text-sm uppercase tracking-wider text-[#e5e2e1]">Luis Ortiz</p>
                  <p className="text-xs text-[#c6c6ca]">CEO, O&amp;G</p>
                </div>
              </div>
            </AnimatedItem>
          </motion.div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="contacto" className="py-32 px-6 md:px-12 bg-[#131313]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <motion.div className="space-y-12" variants={stagger}>
              <AnimatedItem className="space-y-4">
                <span className="text-[#e9c176] font-sans text-xs tracking-[0.5em] uppercase block">
                  Contáctanos
                </span>
                <h2 className="font-serif text-5xl md:text-6xl text-[#e5e2e1]">Comencemos el diálogo.</h2>
              </AnimatedItem>
              <motion.div className="space-y-8" variants={stagger}>
                {contactItems.map((item) => (
                  <AnimatedItem key={item.title} className="flex gap-6 items-start">
                    <span className="material-symbols-outlined text-[#e9c176] mt-1">{item.icon}</span>
                    <div>
                      <p className="font-bold uppercase tracking-widest text-sm mb-2 text-[#e5e2e1]">{item.title}</p>
                      <p className="text-[#c6c6ca] font-light whitespace-pre-line">{item.text}</p>
                    </div>
                  </AnimatedItem>
                ))}
              </motion.div>
            </motion.div>

            <AnimatedItem variants={slowFade}>
              <ContactForm />
            </AnimatedItem>
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}
