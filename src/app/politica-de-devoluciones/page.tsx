import LegalPage from "@/components/legal/LegalPage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata("Política de devoluciones", "Política de devoluciones del sitio web de Cristina Doncel.", "/politica-de-devoluciones");

export default function PoliticaDevolucionesPage() {
  return <LegalPage fileName="devoluciones.md" />;
}