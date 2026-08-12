export interface Client {
  name: string;
  logo: string;
  alt: string;
}

/**
 * Client logos shown in the "Marcas que han confiado en mi trabajo" section.
 * Used on: homepage, /marcas-y-agencias
 * Images live in /public/images/clients/
 * Order is not significant — displayed in a grid/marquee.
 */
export const clients: Client[] = [
  {
    name: "Hermès",
    logo: "/images/clients/hermes_logo.png",
    alt: "Logo de Hermès",
  },
  {
    name: "Hoff",
    logo: "/images/clients/hoff_logo.png",
    alt: "Logo de Hoff",
  },
  {
    name: "Jo Malone",
    logo: "/images/clients/jo_malone_logo.png",
    alt: "Logo de Jo Malone",
  },
  {
    name: "Rituals",
    logo: "/images/clients/rituals_logo.png",
    alt: "Logo de Rituals",
  },
  {
    name: "Sephora",
    logo: "/images/clients/sephora_logo.png",
    alt: "Logo de Sephora",
  },
  {
    name: "Swarovski",
    logo: "/images/clients/swarovski_logo.png",
    alt: "Logo de Swarovski",
  },
  {
    name: "Tom Ford",
    logo: "/images/clients/tom_ford_logo.png",
    alt: "Logo de Tom Ford",
  },
];

/**
 * Wide banner image showing a collage of client work.
 * Used below the individual client logos grid.
 */
export const clientsBanner = {
  home: {
    src: "/images/portfolio/work_mix.png",
    alt: "Selección de trabajos para marcas — Cristina Doncel",
  },
  marcas: {
    src: "/images/portfolio/work_mix_2.png",
    alt: "Proyectos para marcas y agencias — Cristina Doncel",
  },
};
