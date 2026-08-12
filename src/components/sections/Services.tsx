import Image from "next/image";
import Link from "next/link";
import { homePage } from "@/content/pages/home";
import { homeServices } from "@/content/services";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section id="servicios" className="bg-white px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="max-w-2xl">
          <p className="mb-4 font-serif text-[11px] uppercase tracking-[0.28em] text-brand-primary">Servicios</p>
          <h2 className="font-serif font-[200] tracking-[0.03em] text-3xl leading-tight text-brand-secondary sm:text-4xl">
            {homePage.servicesSection.heading}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {homeServices.map((service, index) => (
            <Reveal key={service.href} delay={index * 0.08} className="group">
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
                <div className="flex min-h-[230px] flex-col p-7">
                  <h3 className="font-serif font-[200] tracking-[0.03em] text-2xl text-brand-secondary">{service.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-brand-text/70">{service.description}</p>
                  <Link href={service.href} className="mt-auto pt-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-primary hover:text-brand-secondary">
                    {service.cta} <span aria-hidden="true" className="ml-2 text-base">→</span>
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}