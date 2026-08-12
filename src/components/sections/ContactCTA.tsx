import Link from "next/link";
import { homePage } from "@/content/pages/home";
import NewsletterForm from "@/components/NewsletterForm";
import Reveal from "./Reveal";

export default function ContactCTA() {
  return (
    <section className="bg-brand-secondary px-5 py-20 text-white sm:py-28">
      <div className="mx-auto grid max-w-[1200px] gap-14 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:gap-24">
        <Reveal>
          <p className="mb-4 font-serif text-[11px] uppercase tracking-[0.28em] text-brand-soft">Hablemos</p>
          <h2 className="max-w-xl font-serif font-[200] tracking-[0.03em] text-4xl leading-tight sm:text-5xl">{homePage.contactCta.heading}</h2>
          <p className="mt-6 max-w-lg text-base leading-8 text-white/70">{homePage.contactCta.body}</p>
          <Link href={homePage.contactCta.cta.href} className="mt-8 inline-flex items-center border-b border-brand-soft pb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-soft hover:text-white">
            {homePage.contactCta.cta.label} <span aria-hidden="true" className="ml-3 text-base">→</span>
          </Link>
        </Reveal>
        <Reveal delay={0.1} className="relative">
          <div className="border border-white/20 p-7 sm:p-9">
            <p className="font-serif text-2xl text-white">Una carta de inspiración</p>
            <p className="mt-3 text-sm leading-7 text-white/65">Ideas, procesos y novedades de caligrafía directamente en tu bandeja de entrada.</p>
            <div className="relative mt-8"><NewsletterForm /></div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}