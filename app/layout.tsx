import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BASE_URL = "https://www.a2s3architecture.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "A&S Architecture | Renders y Arquitectos en Barranquilla",
    template: "%s | A&S Architecture Barranquilla",
  },

  description:
    "Estudio de arquitectura en Barranquilla especializado en renders 3D, diseño arquitectónico residencial y comercial, planos 2D y gestión de proyectos. Arquitectos en Barranquilla con visión contemporánea.",

  keywords: [
    "renders Barranquilla",
    "arquitectos Barranquilla",
    "renders 3D Barranquilla",
    "diseño arquitectónico Barranquilla",
    "renders arquitectónicos Colombia",
    "estudio de arquitectura Barranquilla",
    "arquitectura residencial Barranquilla",
    "arquitectura comercial Barranquilla",
    "planos 2D Barranquilla",
    "visualización arquitectónica Barranquilla",
    "diseño de interiores Barranquilla",
    "renders fotorrealistas Colombia",
    "arquitectos Colombia",
    "A&S Architecture",
  ],

  authors: [{ name: "A&S Architecture", url: BASE_URL }],
  creator: "A&S Architecture",
  publisher: "A&S Architecture",

  openGraph: {
    type: "website",
    locale: "es_CO",
    url: BASE_URL,
    siteName: "A&S Architecture",
    title: "A&S Architecture | Renders y Arquitectos en Barranquilla",
    description:
      "Estudio de arquitectura en Barranquilla especializado en renders 3D, diseño arquitectónico y planos 2D. Precisión técnica y diseño contemporáneo.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "A&S Architecture — Renders y Arquitectos en Barranquilla",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "A&S Architecture | Renders y Arquitectos en Barranquilla",
    description:
      "Estudio de arquitectura en Barranquilla especializado en renders 3D, diseño arquitectónico y planos 2D.",
    images: ["/og-image.jpg"],
  },

  alternates: {
    canonical: BASE_URL,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    // Agrega aquí tu código de Google Search Console cuando lo tengas
    // google: "xxxxxxxxxxxxxxxxxxxxxx",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,300;0,400;0,700;1,300&family=Manrope:wght@200;300;400;600;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        {/* Schema.org JSON-LD — ayuda a Google a entender el negocio */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ArchitectFirm",
              name: "A&S Architecture",
              description:
                "Estudio de arquitectura en Barranquilla especializado en renders 3D, diseño arquitectónico residencial y comercial, planos 2D y gestión de proyectos.",
              url: BASE_URL,
              logo: `${BASE_URL}/logo.png`,
              image: `${BASE_URL}/og-image.jpg`,
              telephone: "+57 310 630 9428",
              email: "as.architecture3@gmail.com",
              foundingDate: "2023",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Carrera 9G #45B-67",
                addressLocality: "Barranquilla",
                addressRegion: "Atlántico",
                addressCountry: "CO",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 10.9878,
                longitude: -74.7889,
              },
              areaServed: [
                "Barranquilla",
                "Atlántico",
                "Colombia",
              ],
              serviceType: [
                "Renders 3D",
                "Diseño Arquitectónico",
                "Planos 2D",
                "Diseño de Interiores",
                "Gestión de Proyectos",
                "Renders fotorrealistas",
              ],
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className="bg-[#131313] text-[#e5e2e1] font-body selection:bg-[#e9c176] selection:text-[#261900]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}