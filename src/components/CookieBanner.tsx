"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const STORAGE_KEY = "cookie-consent";

type ConsentValue = "accepted" | "rejected";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  // Must use useEffect so the server always renders nothing (visible=false),
  // and only the client reads localStorage — prevents SSR hydration mismatch.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
  }, []);

  function handleConsent(value: ConsentValue) {
    localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
    // Analytics and non-essential scripts load only after acceptance.
    // Fire a custom event so other components can react if needed.
    window.dispatchEvent(new CustomEvent("cookie-consent", { detail: value }));
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="cookie-banner"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          role="dialog"
          aria-live="polite"
          aria-label="Aviso de cookies"
          className="fixed bottom-0 left-0 right-0 z-50 w-full bg-white border-t border-[#e8e2e6] shadow-md"
        >
          <div className="max-w-[1200px] mx-auto px-5 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
            <p className="text-[12px] text-brand-text leading-relaxed max-w-2xl">
              Utilizamos cookies propias y de terceros para mejorar tu experiencia de navegación.
              Puedes aceptar todas las cookies o rechazar las no esenciales.{" "}
              <Link
                href="/politica-de-cookies"
                className="underline text-brand-primary hover:text-brand-secondary transition-colors"
              >
                Más información
              </Link>
              .
            </p>

            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                onClick={() => handleConsent("rejected")}
                className="px-5 py-2 text-[11px] font-[600] tracking-[2px] uppercase border border-brand-primary text-brand-primary rounded-full hover:border-brand-secondary hover:text-brand-secondary transition-colors"
              >
                Rechazar
              </button>
              <button
                onClick={() => handleConsent("accepted")}
                className="px-5 py-2 text-[11px] font-[600] tracking-[2px] uppercase bg-brand-primary text-white rounded-full hover:bg-brand-secondary transition-colors"
              >
                Aceptar
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/**
 * Utility — read consent from localStorage anywhere in the app.
 * Returns null if the user hasn't chosen yet.
 */
export function getCookieConsent(): ConsentValue | null {
  if (typeof window === "undefined") return null;
  return (localStorage.getItem(STORAGE_KEY) as ConsentValue) ?? null;
}
