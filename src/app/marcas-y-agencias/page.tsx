import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/sections/Reveal";
import { marcasPage } from "@/content/pages/marcas-y-agencias";
import { clients, clientsBanner } from "@/content/clients";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(marcasPage.meta.title, marcasPage.meta.description, "/marcas-y-agencias");

export default function MarcasYAgenciasPage() {
  return (
    <>
      <section className="bg-brand-base-2 px-5 py-20 sm:py-28">
        <div className="mx-auto max-w-[900px] text-center">
          <Reveal>
            <h1 className="font-serif font-[200] tracking-[0.03em] text-4xl leading-tight text-brand-secondary sm:text-5xl">
              {marcasPage.hero.headline}
            </h1>
            <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-brand-text/75 sm:text-lg">
              {marcasPage.hero.subheadline}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:py-24">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif font-[200] tracking-[0.03em] text-3xl text-brand-secondary sm:text-4xl">
            {marcasPage.intro.heading}
          </h2>
          <div className="mt-6 space-y-5 text-base leading-8 text-brand-text/70">
            {marcasPage.intro.body.split("\n\n").map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="bg-white px-5 pb-20 sm:pb-28">
        <div className="mx-auto max-w-[1200px]">
          <Reveal className="mb-12">
            <p className="mb-4 font-serif text-[11px] uppercase tracking-[0.28em] text-brand-primary">Servicios</p>
            <h2 className="font-serif font-[200] tracking-[0.03em] text-3xl text-brand-secondary sm:text-4xl">
              {marcasPage.servicesSection.heading}
            </h2>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-3">
            {marcasPage.services.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.08} className="group">
                <article className="h-full border border-[#e8e2e6] bg-white transition-shadow duration-300 group-hover:shadow-[0_18px_45px_rgba(53,45,51,0.1)]">
                  <div className="relative aspect-[4/3] overflow-hidden bg-brand-base">
                    <Image
                      src={service.image.src}
                      alt={service.image.alt}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex min-h-[260px] flex-col p-7">
                    <h3 className="font-serif font-[200] tracking-[0.03em] text-2xl text-brand-secondary">{service.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-brand-text/70">{service.description}</p>
                    {service.cta && (
                      <Link
                        href={service.cta.href}
                        className="mt-auto pt-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-primary hover:text-brand-secondary"
                      >
                        {service.cta.label} <span aria-hidden="true" className="ml-2 text-base">→</span>
                      </Link>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-base-2 px-5 py-20 sm:py-28">
        <div className="mx-auto max-w-[1200px]">
          <Reveal className="text-center">
            <p className="font-serif text-[11px] uppercase tracking-[0.28em] text-brand-primary">{marcasPage.clientsSection.eyebrow}</p>
            <h2 className="mt-4 font-serif font-[200] tracking-[0.03em] text-3xl text-brand-secondary sm:text-4xl">
              {marcasPage.clientsSection.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-12 grid grid-cols-2 items-center gap-x-8 gap-y-9 sm:grid-cols-4 lg:grid-cols-7">
            {clients.map((client) => (
              <div key={client.logo} className="relative h-12 grayscale opacity-60 transition duration-300 hover:grayscale-0 hover:opacity-100">
                <Image src={client.logo} alt={client.alt} fill sizes="(min-width: 1024px) 14vw, 25vw" className="object-contain" />
              </div>
            ))}
          </Reveal>
          <Reveal delay={0.15} className="mt-14">
            <div className="relative aspect-[3/1] overflow-hidden">
              <Image src={clientsBanner.marcas.src} alt={clientsBanner.marcas.alt} fill sizes="100vw" className="object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-brand-secondary px-5 py-20 text-white sm:py-24">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif font-[200] tracking-[0.03em] text-4xl leading-tight sm:text-5xl">
            {marcasPage.contactCta.heading}
          </h2>
          <p className="mt-6 text-base leading-8 text-white/70">{marcasPage.contactCta.body}</p>
          <Link
            href={marcasPage.contactCta.cta.href}
            className="mt-8 inline-flex items-center border-b border-brand-soft pb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-soft hover:text-white"
          >
            {marcasPage.contactCta.cta.label} <span aria-hidden="true" className="ml-3 text-base">→</span>
          </Link>
        </Reveal>
      </section>
    </>
  );
}
