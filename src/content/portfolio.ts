export interface PortfolioImage {
  src: string;
  alt: string;
}

/**
 * Homepage — "Cómo trabajo" section side images + full-name logo
 */
export const howIWork = {
  frameLeft: {
    src: "/images/portfolio/work_event_frame_1.png",
    alt: "Caligrafía en evento — Cristina Doncel",
  },
  logo: {
    src: "/images/brand/logo_full_name_black_letters_transparent_background.png",
    alt: "Cristina Doncel — caligrafía",
  },
  frameRight: {
    src: "/images/portfolio/work_event_frame_2.png",
    alt: "Arte en directo en evento — Cristina Doncel",
  },
};

/**
 * Homepage — hero section
 */
export const hero = {
  src: "/images/portfolio/hero_caligrafia.jpg",
  alt: "Caligrafía hecha a mano — Cristina Doncel",
};

/**
 * Homepage service card images (3 cards)
 */
export const homeServiceImages = {
  marcas: {
    src: "/images/portfolio/work_jo_malone.png",
    alt: "Trabajo para marcas — Jo Malone",
  },
  bodas: {
    src: "/images/portfolio/work_lacres_names.png",
    alt: "Lacres con nombres para bodas y eventos",
  },
  talleres: {
    src: "/images/portfolio/work_workshop_1.png",
    alt: "Taller de caligrafía",
  },
};

/**
 * /marcas-y-agencias — service section images
 */
export const marcasServiceImages = {
  activacion: {
    src: "/images/portfolio/work_invitation.png",
    alt: "Activación de marca — caligrafía en directo",
  },
  ilustracion: {
    src: "/images/portfolio/work_hoff_2.png",
    alt: "Ilustración en vivo para evento de marca",
  },
  ilustracionVivo: {
    src: "/images/portfolio/work_wedding_3.png",
    alt: "Ilustración en vivo — detalle",
  },
  branding: {
    src: "/images/portfolio/work_branding_noyeri.png",
    alt: "Branding artesanal — proyecto Noyeri",
  },
};

/**
 * /bodas-y-eventos — service section images
 */
export const bodasServiceImages = {
  papeleria: {
    src: "/images/portfolio/work_watercolor.png",
    alt: "Papelería de boda en acuarela",
  },
  caligrafiaVivo: {
    src: "/images/portfolio/work_wedding_1.png",
    alt: "Caligrafía en directo en boda",
  },
  arteVivo: {
    src: "/images/portfolio/work_wedding_2.png",
    alt: "Arte en vivo en celebración",
  },
  arteVivo2: {
    src: "/images/portfolio/work_wedding_3.png",
    alt: "Ilustración en vivo en boda",
  },
};

/**
 * /branding — placeholders until real images are provided
 */
export const brandingImages: PortfolioImage[] = [
  { src: "/images/portfolio/placeholder.png", alt: "Proyecto de branding — próximamente" },
];

/**
 * /sobre-mi — placeholders until real images are provided
 */
export const sobreMiImages: PortfolioImage[] = [
  { src: "/images/about/placeholder.png", alt: "Cristina Doncel — próximamente" },
];
