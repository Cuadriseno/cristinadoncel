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
    name: "Cliente 1",
    logo: "/images/clients/Frame-57.png",
    alt: "Logo cliente 1",
  },
  {
    name: "Cliente 2",
    logo: "/images/clients/Frame-58.png",
    alt: "Logo cliente 2",
  },
  {
    name: "Cliente 3",
    logo: "/images/clients/Frame-59.png",
    alt: "Logo cliente 3",
  },
  {
    name: "Cliente 4",
    logo: "/images/clients/Frame-60.png",
    alt: "Logo cliente 4",
  },
  {
    name: "Cliente 5",
    logo: "/images/clients/Frame-61.png",
    alt: "Logo cliente 5",
  },
  {
    name: "Cliente 6",
    logo: "/images/clients/Frame-62.png",
    alt: "Logo cliente 6",
  },
  {
    name: "Cliente 7",
    logo: "/images/clients/Frame-63.png",
    alt: "Logo cliente 7",
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
