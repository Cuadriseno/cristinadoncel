import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/sections/Reveal";
import { brandingPage } from "@/content/pages/branding";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(brandingPage.meta.title, brandingPage.meta.description, "/branding");

export default function BrandingPage() {
  return (
    <>
      <section className="bg-brand-base-2 px-5 py-20 sm:py-28">
        <Reveal className="mx-auto max-w-4xl text-center">
          <h1 className="font-serif font-[200] tracking-[0.03em] text-4xl leading-tight text-brand-secondary sm:text-5xl">
            {brandingPage.hero.headline}
          </h1>
          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-brand-text/75 sm:text-lg">
            {brandingPage.hero.subheadline}
          </p>
        </Reveal>
      </section>

      <section className="bg-white px-5 py-20 sm:py-24">
        <Reveal className="mx-auto max-w-4xl text-center">
          <h2 className="font-serif font-[200] tracking-[0.03em] text-3xl text-brand-secondary sm:text-4xl">
            {brandingPage.intro.heading}
          </h2>
          <div className="mt-6 space-y-5 text-base leading-8 text-brand-text/70">
            {brandingPage.intro.body.split("\n\n").map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="bg-white px-5 pb-20 sm:pb-28">
        <div className="mx-auto max-w-[1200px]">
          <Reveal className="text-center">
            <p className="font-serif text-[11px] uppercase tracking-[0.28em] text-brand-primary">{brandingPage.portfolioSection.eyebrow}</p>
            <h2 className="mt-4 font-serif font-[200] tracking-[0.03em] text-3xl text-brand-secondary sm:text-4xl">
              {brandingPage.portfolioSection.heading}
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {brandingPage.portfolioSection.images.map((image) => (
              <div key={image.src} className="relative aspect-[4/3] overflow-hidden bg-brand-base">
                <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="bg-brand-base-2 px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-[1200px]">
          <Reveal className="text-center">
            <p className="font-serif text-[11px] uppercase tracking-[0.28em] text-brand-primary">{brandingPage.whySection.eyebrow}</p>
            <h2 className="mt-4 font-serif font-[200] tracking-[0.03em] text-3xl text-brand-secondary sm:text-4xl">
              {brandingPage.whySection.heading}
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {brandingPage.whySection.reasons.map((reason, index) => (
              <Reveal key={reason.title} delay={index * 0.08} className="border border-[#e8e2e6] bg-white p-7">
                <h3 className="font-serif font-[200] tracking-[0.03em] text-2xl text-brand-secondary">{reason.title}</h3>
                <p className="mt-4 text-sm leading-7 text-brand-text/70">{reason.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-[1200px]">
          <Reveal className="text-center">
            <p className="font-serif text-[11px] uppercase tracking-[0.28em] text-brand-primary">{brandingPage.processSection.eyebrow}</p>
            <h2 className="mt-4 font-serif font-[200] tracking-[0.03em] text-3xl text-brand-secondary sm:text-4xl">
              {brandingPage.processSection.heading}
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {brandingPage.processSection.steps.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.06} className="border border-[#e8e2e6] p-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-primary">{step.number}</p>
                <h3 className="mt-3 font-serif font-[200] tracking-[0.03em] text-2xl text-brand-secondary">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-brand-text/70">{step.body}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 text-center">
            <Link
              href={brandingPage.processSection.cta.href}
              className="inline-flex items-center border-b border-brand-primary pb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-primary hover:text-brand-secondary"
            >
              {brandingPage.processSection.cta.label} <span aria-hidden="true" className="ml-3 text-base">→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-brand-base-2 px-5 py-20 sm:py-24">
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <Reveal>
            <p className="font-serif text-[11px] uppercase tracking-[0.28em] text-brand-primary">{brandingPage.packagesSection.eyebrow}</p>
            <h2 className="mt-4 font-serif font-[200] tracking-[0.03em] text-3xl text-brand-secondary sm:text-4xl">
              {brandingPage.packagesSection.heading}
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-brand-text/70">
              {brandingPage.packagesSection.intro.split("\n\n").map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <ul className="mt-8 grid gap-2 text-sm leading-7 text-brand-text/80 sm:grid-cols-2">
              {brandingPage.packagesSection.commonFeatures.map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-brand-primary">
              {brandingPage.packagesSection.duration}
            </p>
          </Reveal>

          <Reveal delay={0.1} className="relative aspect-[4/5] overflow-hidden bg-brand-base">
            <Image
              src={brandingPage.packagesSection.image.src}
              alt={brandingPage.packagesSection.image.alt}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-[1000px]">
          <Reveal className="text-center">
            <p className="font-serif text-[11px] uppercase tracking-[0.28em] text-brand-primary">Preguntas frecuentes</p>
            <h2 className="mt-4 font-serif font-[200] tracking-[0.03em] text-3xl text-brand-secondary sm:text-4xl">FAQ</h2>
          </Reveal>

          <div className="mt-12 space-y-5">
            {brandingPage.faq.map((item, index) => (
              <Reveal key={item.question} delay={index * 0.05} className="border border-[#e8e2e6] p-6 sm:p-7">
                <h3 className="font-serif font-[200] tracking-[0.03em] text-2xl text-brand-secondary">{item.question}</h3>
                <p className="mt-4 text-sm leading-7 text-brand-text/70">{item.answer}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-secondary px-5 py-20 text-white sm:py-24">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif font-[200] tracking-[0.03em] text-4xl leading-tight sm:text-5xl">
            {brandingPage.contactCta.heading}
          </h2>
          <p className="mt-6 text-base leading-8 text-white/70">{brandingPage.contactCta.body}</p>
          <Link
            href={brandingPage.contactCta.cta.href}
            className="mt-8 inline-flex items-center border-b border-brand-soft pb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-soft hover:text-white"
          >
            {brandingPage.contactCta.cta.label} <span aria-hidden="true" className="ml-3 text-base">→</span>
          </Link>
        </Reveal>
      </section>
    </>
  );
}
