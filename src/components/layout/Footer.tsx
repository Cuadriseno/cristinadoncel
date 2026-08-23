"use client";

import Link from "next/link";
import Image from "next/image";

const legalLinks = [
  { label: "Aviso legal", href: "/aviso-legal" },
  { label: "Política de privacidad", href: "/politica-de-privacidad" },
  { label: "Política de cookies", href: "/politica-de-cookies" },
  { label: "Términos y condiciones", href: "/terminos-y-condiciones" },
  { label: "Política de devoluciones y reembolsos", href: "/politica-de-devoluciones" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-white">
      <div className="mx-auto max-w-[1200px] px-5 pb-10 pt-14">

        {/* Two-column: legal links | social + email */}
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <nav aria-label="Legal">
            <ul className="flex flex-col gap-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-brand-text/80 transition-colors hover:text-brand-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col items-start gap-4 sm:items-end">
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/cristinadoncel/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-brand-text transition-colors hover:text-brand-primary"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/cristinadoncel/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-brand-text transition-colors hover:text-brand-primary"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>
            </div>
            <a
              href="mailto:hola@cristinadoncel.com"
              className="text-[13px] text-brand-text/80 transition-colors hover:text-brand-primary"
            >
              hola@cristinadoncel.com
            </a>
          </div>
        </div>

        {/* Large centered logo */}
        <div className="mt-12 flex flex-col items-center border-t border-[#e8e2e6] pt-12">
          <Link href="/">
            <Image
              src="/images/brand/logo_full_name_black_letters_transparent_background.png"
              alt="Cristina Doncel"
              width={220}
              height={110}
              className="h-auto w-44 object-contain"
            />
          </Link>
        </div>

        {/* Copyright */}
        <p className="mt-6 text-center text-[10px] uppercase tracking-[0.15em] text-[#aaa]">
          Copyright &copy;{new Date().getFullYear()} Cristina Doncel &mdash; Todos los derechos se reservan a Cristina Doncel
        </p>
      </div>
    </footer>
  );
}
