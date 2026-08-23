import Link from "next/link";
import { homePage } from "@/content/pages/home";
import Reveal from "./Reveal";

export default function ContactCTA() {
  return (
    <section className="bg-white px-5 py-20 sm:py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-serif font-[200] tracking-[0.03em] text-3xl leading-tight text-brand-secondary sm:text-4xl">
          {homePage.contactCta.heading}
        </h2>
        <p className="mt-6 text-base leading-8 text-brand-text/70">
          {homePage.contactCta.body}
        </p>
        <Link
          href={homePage.contactCta.cta.href}
          className="mt-8 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-primary transition-colors hover:text-brand-secondary"
        >
          {homePage.contactCta.cta.label}
          <span aria-hidden="true">→</span>
        </Link>
      </Reveal>
    </section>
  );
}