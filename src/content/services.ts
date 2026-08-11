export interface ServiceCard {
  title: string;
  description: string;
  cta: string;
  href: string;
  image: {
    src: string;
    alt: string;
  };
}

/**
 * Homepage — "La caligrafía aplicada a marcas, eventos y formación"
 * Three service cards displayed in a row.
 */
export const homeServices: ServiceCard[] = [
  {
    title: "Marcas y agencias",
    description:
      "Personalización en vivo, lettering e ilustración para marcas que buscan diferenciarse y crear experiencias inolvidables.",
    cta: "Ver proyectos",
    href: "/marcas-y-agencias",
    image: {
      src: "/images/portfolio/work_jo_malone.png",
      alt: "Trabajo para marcas — Jo Malone",
    },
  },
  {
    title: "Eventos y bodas",
    description:
      "Papelería, detalles personalizados y caligrafía o acuarela en directo para celebraciones y momentos especiales con identidad propia.",
    cta: "Descubrir servicios",
    href: "/bodas-y-eventos",
    image: {
      src: "/images/portfolio/work_lacres_names.png",
      alt: "Lacres con nombres para bodas y eventos",
    },
  },
  {
    title: "Aprender caligrafía",
    description:
      "Talleres presenciales y online para conectar con la escritura a mano, disfrutar del proceso y desarrollar tu propio estilo.",
    cta: "Ver talleres",
    href: "https://www.cristinadoncel.com/talleres-online/",
    image: {
      src: "/images/portfolio/work_workshop_1.png",
      alt: "Taller de caligrafía",
    },
  },
];
