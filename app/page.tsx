import HomePageContent from "@/components/HomePageContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "A&S Architecture | Diseño con Precisión",
  description:
    "Estudio de arquitectura especializado en diseño residencial, comercial y planeación urbana. Precisión técnica y pureza estética en cada proyecto.",
};

export default function HomePage() {
  return <HomePageContent />;
}
