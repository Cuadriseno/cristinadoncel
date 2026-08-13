import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description: "Términos y condiciones del sitio web de Cristina Doncel.",
};

export default function TerminosYCondicionesPage() {
  return <LegalPage fileName="terminos.md" />;
}