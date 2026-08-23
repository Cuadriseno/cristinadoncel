"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { homePage } from "@/content/pages/home";
import { hero } from "@/content/portfolio";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden">
      <Image
        src={hero.src}
        alt={hero.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-top"
      />
      <div className="absolute inset-0 bg-black/25" />
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto w-full max-w-[1200px] px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <h1 className="font-serif font-[100] uppercase tracking-[0.04em] text-4xl leading-[1.25] text-white sm:text-5xl lg:text-[3.75rem]">
              {homePage.hero.headline}
            </h1>
            <p className="mt-7 max-w-md text-base leading-8 text-white/75">
              {homePage.hero.subheadline}
            </p>
            <Link
              href={homePage.hero.cta.href}
              className="mt-9 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/90 transition-colors hover:text-white"
            >
              {homePage.hero.cta.label}
              <span aria-hidden="true" className="text-sm">→</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}