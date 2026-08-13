import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Política de cookies",
  description: "Política de cookies del sitio web de Cristina Doncel.",
};

export default function PoliticaDeCookiesPage() {
  return <LegalPage fileName="cookies.md" />;
}