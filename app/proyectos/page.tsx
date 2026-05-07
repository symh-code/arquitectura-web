import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Proyectos | A&S Architecture",
  description:
    "Portafolio de obras de A&S Architecture. Proyectos residenciales, culturales, comerciales y de urbanismo que definen la excelencia en diseño arquitectónico.",
};

const proyectos = [
  {
    id: 1,
    titulo: "CENTRO CULTURAL NÓRDICO",
    categoria: "Cultural",
    ubicacion: "Oslo, Noruega",
    imagen:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBTxvgDYKluAqhqWegIUvC2YCYG86UuIMsQwm4W0ANvXdeg7Q8UhpFU3yTjRrhMjCPkaL37m0lvRROosl_74o1_ZmhDqqT1cGFjXcGOKbjt0GGgLQYbMAdQbU7gjNB-Pm2nU2yafyQdfmkXpZmApnvZUleroXJVfNruuJlyWc4e9azuPqR-qC3oZJsbnrGuCjsGYMO2Amzuf4eSKqwUmVihaLajYpWwfX3Y32YK_T6dzg5xRBXQl027oHPCEQh343yx26eeZN5UJg",
    alt: "Museo de Arte Contemporáneo con ángulos de concreto",
    offset: false,
  },
  {
    id: 2,
    titulo: "SEDE CORPORATIVA SILO",
    categoria: "Comercial",
    ubicacion: "Madrid, España",
    imagen:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC7BMgpaa96Hx-o3CbuiIFyPMwMV2dmNEIvPqSQU56OXquZZ69kOd3ycK7r3VkUTZSrbw-AagCU_CvwKIYO2r27gaiyiJ8sAwiJbGmCqDJhNQFtrmRVO1ZJRRNN7EXUmiziyKGYnI7I8Uag7ooIL8_R8h_ugVVhkMANsqujMeFwf3GFfcLEvn9gqyklFmLRcLxm5WbtQY7l3GUFCUlMMdgMASn1tjPNO91IrAGp3R8tKSdYtRGE6lSohfw",
    alt: "Interior moderno de oficina con mobiliario minimalista",
    offset: true,
  },
  {
    id: 3,
    titulo: "VILLA BLANCA",
    categoria: "Residencial",
    ubicacion: "Ibiza, España",
    imagen:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDk_y407Q9crv2oIDSRyl9l8wtshqcgAevwva4QMr4gw9Y99UfTEbiisEQPEVUUI06lLCP71GmTcl1jRY0PQ9rRloACZ4zcQaUbK32CPZrQYiltvWA7ZFrtVVtS4tanVCWcv101ujITWw5HAzcgpnGOKmGA9f3tWQq9dGzsKKpmFX764w0SBdxyYWRNwpccFeghv1C-pkLu1QBIMT5jcNbF2xgiGSV-fVX5FSBbBLoe8FaI_gjOgFmqnU4ofnLdTDoY3LhYk-q59Q",
    alt: "Villa blanca moderna con piscina y líneas limpias",
    offset: false,
  },
  {
    id: 4,
    titulo: "MASTERPLAN RÍO",
    categoria: "Urbanismo",
    ubicacion: "Monterrey, México",
    imagen:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC9ytcHdPUX2NK1Z7-fAsAfR4H5nTMiIKYlEyEMhGQqAupUtOG9v92xlzGXJ9183VPJRF4ama9FmgK6azNq1wlJEjPul5SQgdRJbjZzX9bGoHjTaKM4EpSDC0-LahyTlhDz3rKg-70Vif8sqA8921lo6CLyDUguEe_zVyxxQjUKnqCpDL9rDi9zGgM5GN_IJVS9MLzUuqmc0CgAJvM7w1ZjmVfef04itJB3ApNaHx5shnYTLyECv1Ih1_5p4Ar1C8hddqFv3RTsSA",
    alt: "Plaza urbana moderna con iluminación arquitectónica",
    offset: false,
  },
  {
    id: 5,
    titulo: "BIBLIOTECA DEL BOSQUE",
    categoria: "Cultural",
    ubicacion: "Helsinki, Finlandia",
    imagen:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCFaFblCBK21oRau8W1tJVhnMjjmlizPFL7UIkLgncoYOiFgWf9bHWUO6JTSKxZc_lijk5G1x9s9ykfSWTVe6m9Aon9NWMWmHUXRbVb3tyK564n343fsQrbnQT8T6eZrTDrmz2ERBgp_sToZ9ytrhw6ELXC2yRRjLu0GgHZwmFQgAVtd7o-mk00tmcdMXBn2FgHD2mhKbfbDh7YgAP6MZvmcni6NM2r8a_RGn1Ye4B7B1lVwalUvImF3RIpVzNx4g9Z1cXCzKiYoA",
    alt: "Biblioteca moderna con elementos de madera y metal",
    offset: true,
  },
  {
    id: 6,
    titulo: "TORRE NEXUS",
    categoria: "Comercial",
    ubicacion: "Ciudad de Panamá, Panamá",
    imagen:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDwJXh-bGDBF_GSClP9Cugc-AKfZv1hVZCdfFouL56rW8sbizZ42CKfg5r7bhIxu86CZQ7HgiPJcuH4Vd0nyAaA4A8-w_41K1urasB8lgLdrDabA_EuJF_9ODDLUQ8pkBIqlr4YFtfh4NJHaAEE4fGRycRT9mqrHpBZowxoORBAKibvn9Ud4pe4EsIjEAhTM6Z_M4xGx0To-VXlaWxhxpSmwBlPn19rwFU2NrVgyM3EiDp_bzI6Zr3Bx59R_R_O0OO63rX7qKVR3g",
    alt: "Rascacielos futurista con vidrio reflectante",
    offset: false,
  },
];

const categorias = ["Todos Nuestros Proyectos"];

export default function ProyectosPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative h-[870px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-[#131313] z-10" />
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTUCrJonP2gkJn_z1eHRl7vH2tc_6xAPXioiIGgCitGDdml36BB2ANoNOVOXqmrGn1U3x3Fpq9P910mz70N7b4VcQStjzTnXMQrai7ox41lJGkEQnx78YSwdq7O7ma4U6KI-CjDVUbWthK5aXy3ar20hzBnuW9I-H746r-IgAd-xRDC2FDpYhw2dUTwuHm9QB5AhQm88HhOI2DRqLxRchhapbRxBOQkZVO99KwgF1Tat37Ut7SI7BDjfOBP_C2xrsqsS4rciYVLA"
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
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB72pPfYPClAnGpSeiKJd5Xze3dTqS9OzEiW0LqaEeEaIgCLnmPAXx432SEkdeL7OHt9dCwDMZrOBke_m4AmEt7Hw2K1GexOHFXXbS-pI5gcV-Eypl1Y2Shskl_X5aMAZ5xt6dC3AVvGaEZDyDmVsqp9eqLXHrvQdTvNgUN7WsZ6ITgF-wSKzO5DrlrD7ZiNHxm1A_Qb_jUWe1SwGMJPjhpYqJ2opP0KMcSa8D4NIqWDLR1aOIhu-QVCjaa_GIjVSXv2EZfWW1ssw"
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
              Una oda a la horizontalidad. Situada sobre el acantilado, esta residencia redefine la conexión entre el refugio privado y el horizonte infinito del Pacífico.
            </p>
            <div className="space-y-6">
              {[
                { label: "Ubicación", value: "Santa Ana" },
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
      <section className="py-24 px-6 md:px-12 bg-[#131313]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proyectos.map((p) => (
            <div
              key={p.id}
              className={`group relative aspect-[3/4] overflow-hidden bg-[#2a2a2a] ${
                p.offset ? "md:translate-y-12" : ""
              }`}
            >
              <img
                src={p.imagen}
                alt={p.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                <span className="font-sans text-[#e9c176] text-[10px] tracking-widest uppercase mb-2">
                  {p.categoria}
                </span>
                <h3 className="font-serif text-2xl mb-4 text-[#e5e2e1]">{p.titulo}</h3>
                <p className="text-sm text-[#c6c6ca] font-sans mb-6">{p.ubicacion}</p>
                <a
                  href="#"
                  className="text-white text-xs uppercase tracking-[0.2em] flex items-center gap-2 group/link w-fit"
                >
                  Ver Detalles
                  <span className="material-symbols-outlined text-sm group-hover/link:translate-x-2 transition-transform">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
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