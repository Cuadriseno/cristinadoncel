const siteUrl = "https://cristinadoncel.vercel.app";

const structuredData = [
  {
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: "Cristina Doncel",
    url: siteUrl,
    image: `${siteUrl}/images/brand/logo_full_name_black_letters_transparent_background.png`,
    jobTitle: "Calígrafa y diseñadora",
    email: "hola@cristinadoncel.com",
    knowsAbout: ["Caligrafía", "Lettering", "Branding artesanal", "Ilustración"],
  },
  {
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#business`,
    name: "Cristina Doncel",
    url: siteUrl,
    image: `${siteUrl}/images/brand/logo_full_name_black_letters_transparent_background.png`,
    description:
      "Caligrafía hecha a mano para marcas, bodas, eventos y proyectos de branding.",
    email: "hola@cristinadoncel.com",
    founder: { "@id": `${siteUrl}/#person` },
    priceRange: "€€",
  },
];

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": structuredData }) }}
    />
  );
}