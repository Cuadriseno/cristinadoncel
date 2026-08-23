import Image from "next/image";
import Link from "next/link";
import { homePage } from "@/content/pages/home";
import { homeServices } from "@/content/services";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section id="servicios" className="bg-white px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="text-center">
          <h2 className="font-serif font-[200] tracking-[0.03em] text-3xl leading-tight text-brand-secondary sm:text-4xl">
            {homePage.servicesSection.heading}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {homeServices.map((service, index) => (
            <Reveal key={service.href} delay={index * 0.08} className="group">
              <article className="flex h-full flex-col">
                <div className="overflow-hidden">
                  <Image
                    src={service.image.src}
                    alt={service.image.alt}
                    width={800}
                    height={600}
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col pt-6">
                  <h3 className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-secondary">{service.title}</h3>
                  <div className="mt-3 border-t border-[#e8e2e6]" />
                  <p className="mt-4 text-sm leading-7 text-brand-text/70">{service.description}</p>
                  <Link href={service.href} className="mt-auto pt-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-primary hover:text-brand-secondary">
                    {service.cta} <span aria-hidden="true" className="ml-2">→</span>
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