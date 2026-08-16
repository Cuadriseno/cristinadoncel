import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/sections/Reveal";
import { sobreMiPage } from "@/content/pages/sobre-mi";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(sobreMiPage.meta.title, sobreMiPage.meta.description, "/sobre-mi");

export default function SobreMiPage() {
  return (
    <>
      <section className="bg-brand-base-2 px-5 py-20 sm:py-28">
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
          <Reveal>
            <h1 className="font-serif font-[200] tracking-[0.03em] text-4xl leading-tight text-brand-secondary sm:text-5xl">
              {sobreMiPage.hero.heading}
            </h1>
          </Reveal>
          <Reveal delay={0.1} className="relative aspect-[4/5] min-h-[420px] overflow-hidden sm:min-h-[560px] lg:min-h-0">
            <Image
              src={sobreMiPage.hero.image.src}
              alt={sobreMiPage.hero.image.alt}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:py-24">
        <Reveal className="mx-auto max-w-4xl space-y-5 text-base leading-8 text-brand-text/75">
          {sobreMiPage.bio.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Reveal>
      </section>

      <section className="bg-brand-base-2 px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-[1000px] text-center">
          <Reveal>
            <h2 className="font-serif font-[200] tracking-[0.03em] text-3xl text-brand-secondary sm:text-4xl">
              {sobreMiPage.valuesSection.heading}
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="mt-10 grid gap-4 sm:grid-cols-2">
            {sobreMiPage.valuesSection.values.map((value) => (
              <div key={value} className="border border-[#e8e2e6] bg-white p-5 text-sm uppercase tracking-[0.16em] text-brand-primary">
                {value}
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.15} className="mt-10 space-y-5 text-base leading-8 text-brand-text/75">
            {sobreMiPage.valuesSection.closing.split("\n\n").map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Reveal>

          <Reveal delay={0.2}>
            <Link
              href={sobreMiPage.valuesSection.cta.href}
              className="mt-8 inline-flex items-center border-b border-brand-primary pb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-primary hover:text-brand-secondary"
            >
              {sobreMiPage.valuesSection.cta.label} <span aria-hidden="true" className="ml-3 text-base">→</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
