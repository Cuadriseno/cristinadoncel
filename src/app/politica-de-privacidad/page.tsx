import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: "Política de privacidad del sitio web de Cristina Doncel.",
};

export default function PoliticaDePrivacidadPage() {
  return <LegalPage fileName="privacidad.md" />;
}