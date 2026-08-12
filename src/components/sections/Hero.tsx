"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { homePage } from "@/content/pages/home";
import { hero } from "@/content/portfolio";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-base-2">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 py-16 sm:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:py-28">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          <p className="mb-5 font-serif text-[11px] uppercase tracking-[0.28em] text-brand-primary">
            Caligrafía artesanal · Málaga
          </p>
          <h1 className="max-w-xl font-serif font-[100] uppercase tracking-[0.04em] text-4xl leading-[1.2] text-brand-secondary sm:text-5xl lg:text-[4.25rem]">
            {homePage.hero.headline}
          </h1>
          <p className="mt-7 max-w-lg text-base leading-8 text-brand-text/75 sm:text-lg">
            {homePage.hero.subheadline}
          </p>
          <Link
            href={homePage.hero.cta.href}
            className="mt-9 inline-flex items-center rounded-full bg-brand-primary px-7 py-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-brand-secondary"
          >
            {homePage.hero.cta.label}
            <span aria-hidden="true" className="ml-3 text-base">→</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[4/5] min-h-[420px] overflow-hidden sm:min-h-[560px] lg:min-h-0"
        >
          <Image
            src={hero.src}
            alt={hero.alt}
            fill
            priority
            sizes="(min-width: 1024px) 52vw, 100vw"
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}