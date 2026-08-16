import LegalPage from "@/components/legal/LegalPage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata("Términos y condiciones", "Términos y condiciones del sitio web de Cristina Doncel.", "/terminos-y-condiciones");

export default function TerminosYCondicionesPage() {
  return <LegalPage fileName="terminos.md" />;
}