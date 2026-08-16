import type { Metadata } from "next";

export const siteUrl = "https://cristinadoncel.vercel.app";
const socialImage = "/images/portfolio/work_jo_malone.png";

export function createPageMetadata(
  title: string,
  description: string,
  path = "/",
): Metadata {
  const url = new URL(path, siteUrl).toString();

  return {
    title,
    description,
    openGraph: {
      type: "website",
      locale: "es_ES",
      url,
      siteName: "Cristina Doncel",
      title,
      description,
      images: [{ url: socialImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
    alternates: { canonical: url },
  };
}