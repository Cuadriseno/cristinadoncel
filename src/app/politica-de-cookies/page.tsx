import LegalPage from "@/components/legal/LegalPage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata("Política de cookies", "Política de cookies del sitio web de Cristina Doncel.", "/politica-de-cookies");

export default function PoliticaDeCookiesPage() {
  return <LegalPage fileName="cookies.md" />;
}