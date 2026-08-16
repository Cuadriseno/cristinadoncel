import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/sobre-mi",
    "/marcas-y-agencias",
    "/bodas-y-eventos",
    "/branding",
    "/aviso-legal",
    "/politica-de-cookies",
    "/politica-de-devoluciones",
    "/politica-de-privacidad",
    "/terminos-y-condiciones",
  ];

  return routes.map((route) => ({
    url: new URL(route, siteUrl).toString(),
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}