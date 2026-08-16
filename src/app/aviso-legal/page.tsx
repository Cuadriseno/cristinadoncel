import LegalPage from "@/components/legal/LegalPage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata("Aviso legal", "Aviso legal del sitio web de Cristina Doncel.", "/aviso-legal");

export default function AvisoLegalPage() {
  return <LegalPage fileName="aviso-legal.md" />;
}