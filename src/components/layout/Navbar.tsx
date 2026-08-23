"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { AnimatePresence, motion } from "framer-motion";

const serviciosLinks = [
  { label: "Marcas y agencias", href: "/marcas-y-agencias" },
  { label: "Bodas y eventos", href: "/bodas-y-eventos" },
  { label: "Branding", href: "/branding" },
];

const topLinks = [
  { label: "Sobre mí", href: "/sobre-mi" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServiciosOpen, setMobileServiciosOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      {/* Announcement bar — disabled for launch, re-enable when needed (e.g. 2027 agenda) */}
      {/* <div className="w-full bg-[#636363] text-white text-center text-xs tracking-widest uppercase py-2 px-4">
        Agenda 2026 abierta
      </div> */}

      {/* Main nav */}
      <div className="border-b border-[#e8e2e6]">
        <div className="max-w-[1200px] mx-auto px-5 flex items-center justify-between h-24">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/brand/logo_full_name_black_letters_transparent_background.png"
              alt="Cristina Doncel"
              width={160}
              height={80}
              className="h-16 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <NavigationMenu.Root className="hidden md:flex items-center gap-8 relative">
            <NavigationMenu.List className="flex items-center gap-8 list-none">

              {/* Servicios dropdown */}
              <NavigationMenu.Item className="relative">
                <NavigationMenu.Trigger className="group flex items-center gap-1 text-[13px] font-[600] tracking-[2px] uppercase text-brand-text hover:text-brand-primary transition-colors cursor-pointer bg-transparent border-none outline-none">
                  Servicios
                  <svg
                    className="w-3 h-3 transition-transform duration-200 group-data-[state=open]:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </NavigationMenu.Trigger>

                <NavigationMenu.Content className="absolute top-full left-0 w-56 bg-white border border-[#e8e2e6] shadow-sm mt-1 z-50">
                  <ul className="py-2">
                    {serviciosLinks.map((link) => (
                      <li key={link.href}>
                        <NavigationMenu.Link asChild>
                          <Link
                            href={link.href}
                            className="block px-5 py-3 text-[12px] tracking-[2px] uppercase text-brand-text hover:text-brand-primary hover:bg-brand-base transition-colors"
                          >
                            {link.label}
                          </Link>
                        </NavigationMenu.Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenu.Content>
              </NavigationMenu.Item>

              {/* Top-level links */}
              {topLinks.map((link) => (
                <NavigationMenu.Item key={link.href}>
                  <NavigationMenu.Link asChild>
                    <Link
                      href={link.href}
                      className="text-[13px] font-[600] tracking-[2px] uppercase text-brand-text hover:text-brand-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </NavigationMenu.Link>
                </NavigationMenu.Item>
              ))}
            </NavigationMenu.List>
          </NavigationMenu.Root>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-4">
            <Link
              href="mailto:hola@cristinadoncel.com"
              className="hidden md:inline-flex items-center px-5 py-2 text-[12px] font-[600] tracking-[2px] uppercase border border-brand-primary text-brand-primary rounded-full hover:border-brand-secondary hover:text-brand-secondary transition-colors"
            >
              ¿Hablamos?
            </Link>

            {/* Hamburger — mobile only */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px]"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={mobileOpen}
            >
              <span
                className={`block w-6 h-[1.5px] bg-brand-text transition-transform duration-300 ${mobileOpen ? "translate-y-[6.5px] rotate-45" : ""}`}
              />
              <span
                className={`block w-6 h-[1.5px] bg-brand-text transition-opacity duration-300 ${mobileOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-6 h-[1.5px] bg-brand-text transition-transform duration-300 ${mobileOpen ? "-translate-y-[6.5px] -rotate-45" : ""}`}
              />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              key="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="md:hidden overflow-hidden border-t border-[#e8e2e6] bg-white"
            >
              <ul className="flex flex-col py-2">

                {/* Servicios accordion */}
                <li>
                  <button
                    onClick={() => setMobileServiciosOpen((v) => !v)}
                    className="w-full flex items-center justify-between px-5 py-4 text-[12px] font-[600] tracking-[2px] uppercase text-brand-text hover:text-brand-primary transition-colors"
                    aria-expanded={mobileServiciosOpen}
                  >
                    Servicios
                    <svg
                      className={`w-3 h-3 transition-transform duration-200 ${mobileServiciosOpen ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <AnimatePresence>
                    {mobileServiciosOpen && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden bg-brand-base"
                      >
                        {serviciosLinks.map((link) => (
                          <li key={link.href}>
                            <Link
                              href={link.href}
                              onClick={() => setMobileOpen(false)}
                              className="block px-8 py-3 text-[12px] tracking-[2px] uppercase text-brand-text hover:text-brand-primary transition-colors"
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>

                {/* Top-level links */}
                {topLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-5 py-4 text-[12px] font-[600] tracking-[2px] uppercase text-brand-text hover:text-brand-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}

                {/* Mobile CTA */}
                <li className="px-5 py-4">
                  <Link
                    href="mailto:hola@cristinadoncel.com"
                    onClick={() => setMobileOpen(false)}
                    className="inline-flex items-center px-5 py-2 text-[12px] font-[600] tracking-[2px] uppercase border border-brand-primary text-brand-primary rounded-full hover:border-brand-secondary hover:text-brand-secondary transition-colors"
                  >
                    ¿Hablamos?
                  </Link>
                </li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
