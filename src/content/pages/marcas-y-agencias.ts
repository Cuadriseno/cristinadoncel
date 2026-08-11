export interface MarcasService {
  title: string;
  description: string;
  cta?: { label: string; href: string };
  image: { src: string; alt: string };
}

export const marcasPage = {
  meta: {
    title: "Marcas y agencias — Cristina Doncel",
    description:
      "Personalización en vivo, ilustración y branding hechos a mano para crear experiencias memorables y coherentes con la identidad de cada marca.",
  },

  hero: {
    headline: "Caligrafía hecha a mano para marcas que buscan diferenciarse",
    subheadline:
      "Personalización en vivo, ilustración y branding hechos a mano para crear experiencias memorables y coherentes con la identidad de cada marca.",
  },

  intro: {
    heading: "No todas las experiencias se recuerdan.",
    body: "En un entorno saturado de estímulos, las marcas que dejan huella son aquellas que cuidan el detalle y apuestan por lo auténtico.\n\nLa caligrafía hecha a mano aporta ese gesto humano que transforma una acción en una experiencia.",
  },

  servicesSection: {
    heading: "Servicios",
  },

  services: [
    {
      title: "Activación de marca",
      description:
        "Caligrafía en directo para eventos, pop-ups y activaciones de marca. Personalización sobre diferentes soportes como papel, cartón, cuero, tela, cristal, vidrio, grabado o foil, adaptando cada trazo a la identidad de la marca. Ideal para crear experiencias únicas, contenido memorable y conexión real con el público.",
      image: {
        src: "/images/portfolio/work_invitation.png",
        alt: "Activación de marca — caligrafía en directo",
      },
    },
    {
      title: "Ilustración en vivo",
      description:
        "Acuarelas e ilustraciones realizadas en directo durante eventos de marca. Desde ilustración rápida hasta figurines personalizados de invitados, una experiencia artística muy visual y altamente compartible. Perfecto para acciones exclusivas y eventos premium.",
      image: {
        src: "/images/portfolio/work_hoff_2.png",
        alt: "Ilustración en vivo para evento de marca",
      },
    },
    {
      title: "Branding",
      description:
        "Desarrollo de identidades visuales con un enfoque artesanal y sensible al detalle. Trabajo el lettering, la ilustración y los elementos gráficos para construir marcas con carácter, coherencia y personalidad propia. Pensado para marcas que valoran lo hecho a mano como parte de su lenguaje.",
      cta: { label: "Ver proyectos", href: "/branding" },
      image: {
        src: "/images/portfolio/work_branding_noyeri.png",
        alt: "Branding artesanal — proyecto Noyeri",
      },
    },
  ] satisfies MarcasService[],

  clientsSection: {
    eyebrow: "Marcas",
    heading: "Que han confiado en mi trabajo",
  },

  contactCta: {
    heading: "¿Hablamos de tu evento?",
    body: "Si estás organizando un evento y quieres que la caligrafía forme parte de la experiencia, estaré encantada de escucharte.",
    cta: { label: "Escríbeme", href: "mailto:hola@cristinadoncel.com" },
  },
};
