import LegalPage from "@/components/legal/LegalPage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata("Política de privacidad", "Política de privacidad del sitio web de Cristina Doncel.", "/politica-de-privacidad");

export default function PoliticaDePrivacidadPage() {
  return <LegalPage fileName="privacidad.md" />;
}