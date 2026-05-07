import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://as-architecture.com"),
  title: {
    default: "A&S Architecture | Diseño con Precisión",
    template: "%s | A&S Architecture",
  },
  description:
    "Estudio de arquitectura especializado en diseño residencial, comercial y planeación urbana. Precisión técnica y pureza estética en cada proyecto.",
  keywords: ["arquitectura", "diseño arquitectónico", "arquitectura residencial", "planeación urbana", "A&S Architecture"],
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://as-architecture.com",
    siteName: "A&S Architecture",
    title: "A&S Architecture | Diseño con Precisión",
    description:
      "Estudio de arquitectura especializado en diseño residencial, comercial y planeación urbana.",
  },
  twitter: {
    card: "summary_large_image",
    title: "A&S Architecture | Diseño con Precisión",
    description:
      "Estudio de arquitectura especializado en diseño residencial, comercial y planeación urbana.",
  },
  robots: {
    index: true,
    follow: true,
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
          href="https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;700&family=Manrope:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
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