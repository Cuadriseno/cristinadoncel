import type { Metadata } from "next";
import { Noto_Sans, Ms_Madi, Marcellus, Geist_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/CookieBanner";
import "./globals.css";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  display: "swap",
});

const msMadi = Ms_Madi({
  variable: "--font-ms-madi",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const marcellus = Marcellus({
  variable: "--font-marcellus",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://cristinadoncel.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Cristina Doncel — Caligrafía hecha a mano",
    template: "%s — Cristina Doncel",
  },
  description:
    "Caligrafía hecha a mano para crear experiencias con alma y marcas con identidad. Trabajo con marcas, eventos y personas que valoran la belleza de lo artesanal.",
  keywords: [
    "caligrafía",
    "caligrafía hecha a mano",
    "lettering",
    "branding artesanal",
    "bodas caligrafía",
    "eventos caligrafía",
    "caligrafía artesanal",
    "Cristina Doncel",
    "Málaga",
  ],
  authors: [{ name: "Cristina Doncel", url: siteUrl }],
  creator: "Cristina Doncel",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteUrl,
    siteName: "Cristina Doncel",
    title: "Cristina Doncel — Caligrafía hecha a mano",
    description:
      "Caligrafía hecha a mano para crear experiencias con alma y marcas con identidad.",
    images: [
      {
        url: "/images/brand/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cristina Doncel — Caligrafía hecha a mano",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cristina Doncel — Caligrafía hecha a mano",
    description:
      "Caligrafía hecha a mano para crear experiencias con alma y marcas con identidad.",
    images: ["/images/brand/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${notoSans.variable} ${msMadi.variable} ${marcellus.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
