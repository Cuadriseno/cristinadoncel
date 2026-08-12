"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const legalLinks = [
  { label: "Aviso legal", href: "/aviso-legal" },
  { label: "Política de privacidad", href: "/politica-de-privacidad" },
  { label: "Política de cookies", href: "/politica-de-cookies" },
  { label: "Términos y condiciones", href: "/terminos-y-condiciones" },
  { label: "Política de devoluciones", href: "/politica-de-devoluciones" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubscribe(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email.trim()) {
      setStatus("error");
      setMessage("Por favor, introduce tu correo electrónico.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus("error");
      setMessage("Por favor, introduce un correo electrónico válido.");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setMessage("¡Gracias! Te has suscrito correctamente.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.message ?? "Ha ocurrido un error. Inténtalo de nuevo.");
      }
    } catch {
      setStatus("error");
      setMessage("Ha ocurrido un error. Inténtalo de nuevo.");
    }
  }

  return (
    <footer className="w-full border-t border-[#e8e2e6] bg-white mt-auto">
      <div className="max-w-[1200px] mx-auto px-5 py-12 flex flex-col items-center gap-10">

        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/brand/logo_with_initials_black_letters_transparent_background.png"
            alt="Cristina Doncel"
            width={120}
            height={48}
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Newsletter */}
        <div className="flex flex-col items-center gap-3 w-full max-w-sm">
          <form
            onSubmit={handleSubscribe}
            className="flex w-full border border-brand-primary rounded-full overflow-hidden"
            noValidate
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Correo electrónico"
              required={false}
              disabled={status === "loading" || status === "success"}
              className="flex-1 px-5 py-2 text-[13px] text-brand-text placeholder:text-[#aaa] bg-white outline-none disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="px-5 py-2 text-[12px] font-[600] tracking-[2px] uppercase text-brand-primary hover:text-brand-secondary transition-colors disabled:opacity-50 whitespace-nowrap"
            >
              {status === "loading" ? "..." : "Enviar"}
            </button>
          </form>

          {message && (
            <p
              className={`text-[12px] text-center tracking-wide ${
                status === "success" ? "text-brand-primary" : "text-red-500"
              }`}
            >
              {message}
            </p>
          )}
        </div>

        {/* Contact email */}
        <a
          href="mailto:hola@cristinadoncel.com"
          className="text-[13px] tracking-[1px] text-brand-text hover:text-brand-primary transition-colors"
        >
          hola@cristinadoncel.com
        </a>

        {/* Legal links */}
        <nav aria-label="Legal">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[11px] tracking-[1px] uppercase text-[#786674] hover:text-brand-secondary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Copyright */}
        <p className="text-[11px] tracking-[1px] uppercase text-[#aaa] text-center">
          Copyright &copy;{new Date().getFullYear()} Cristina Doncel — Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
}
