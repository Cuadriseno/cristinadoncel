import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Aviso legal",
  description: "Aviso legal del sitio web de Cristina Doncel.",
};

export default function AvisoLegalPage() {
  return <LegalPage fileName="aviso-legal.md" />;
}