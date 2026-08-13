import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Política de devoluciones",
  description: "Política de devoluciones del sitio web de Cristina Doncel.",
};

export default function PoliticaDevolucionesPage() {
  return <LegalPage fileName="devoluciones.md" />;
}