export interface BodasService {
  title: string;
  description: string;
  cta?: { label: string; href: string };
  image: { src: string; alt: string };
}

export const bodasPage = {
  meta: {
    title: "Bodas y eventos — Cristina Doncel",
    description:
      "Papelería, caligrafía en vivo e ilustración artesanal para bodas y eventos cuidados, personales y llenos de significado.",
  },

  hero: {
    headline: "Caligrafía y arte hechos a mano para bodas y celebraciones con alma",
    subheadline:
      "Papelería, caligrafía en vivo e ilustración artesanal para bodas y eventos cuidados, personales y llenos de significado.",
    image: {
      src: "/images/portfolio/work_watercolor.png",
      alt: "Papelería de boda en acuarela — Cristina Doncel",
    },
  },

  intro: {
    heading: "Cada celebración cuenta una historia",
    body: "Cuando cada detalle está alineado, la experiencia se siente. La caligrafía y el arte hechos a mano aportan calidez, personalidad y coherencia visual a bodas y eventos donde nada se deja al azar.\n\nTrabajo junto a parejas y wedding planners para crear piezas únicas que acompañan cada momento.",
  },

  servicesSection: {
    heading: "Servicios",
  },

  services: [
    {
      title: "Papelería bodas",
      description:
        "Diseño y desarrollo de papelería personalizada para bodas: invitaciones, seating plan, marcasitios, minutas y detalles ilustrados. Cada pieza se crea de forma artesanal, cuidando el estilo, los materiales y la historia de cada pareja. Trabajo tanto directamente con parejas como en colaboración con wedding planners.",
      cta: { label: "Ver proyectos", href: "/bodas" },
      image: {
        src: "/images/portfolio/work_wedding_1.png",
        alt: "Papelería personalizada para boda",
      },
    },
    {
      title: "Caligrafía en vivo",
      description:
        "Caligrafía en directo aplicada a sobres, detalles de invitados o elementos del evento. Un servicio muy valorado en bodas y celebraciones que buscan ese gesto artesanal y especial en el momento. Perfecto para eventos cuidados y experiencias personalizadas.",
      image: {
        src: "/images/portfolio/work_wedding_2.png",
        alt: "Caligrafía en directo en boda",
      },
    },
    {
      title: "Arte en vivo",
      description:
        "Ilustración en directo durante la celebración: acuarelas, retratos rápidos o figurines de invitados. Una experiencia artística que se convierte en recuerdo y forma parte del propio evento. Ideal para sorprender a los invitados con algo único y emotivo.",
      image: {
        src: "/images/portfolio/work_wedding_3.png",
        alt: "Arte en vivo — ilustración en boda",
      },
    },
  ] satisfies BodasService[],

  contactCta: {
    heading: "¿Hablamos de tu evento?",
    body: "Si estás organizando una boda o evento y quieres que la caligrafía forme parte de la experiencia, estaré encantada de escucharte.",
    cta: { label: "Escríbeme", href: "mailto:hola@cristinadoncel.com" },
  },
};
