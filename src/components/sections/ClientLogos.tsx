import Image from "next/image";
import Link from "next/link";
import { clients, clientsBanner } from "@/content/clients";
import { homePage } from "@/content/pages/home";
import Reveal from "./Reveal";

export default function ClientLogos() {
  return (
    <section className="bg-brand-base-2 px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="text-center">
          <p className="font-serif text-[11px] uppercase tracking-[0.28em] text-brand-primary">{homePage.clientsSection.eyebrow}</p>
          <h2 className="mt-4 font-serif font-[200] tracking-[0.03em] text-3xl text-brand-secondary sm:text-4xl">{homePage.clientsSection.heading}</h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-12 grid grid-cols-2 items-center gap-x-8 gap-y-9 sm:grid-cols-4 lg:grid-cols-7">
          {clients.map((client) => (
            <div key={client.logo} className="relative h-12 grayscale opacity-60 transition duration-300 hover:grayscale-0 hover:opacity-100">
              <Image src={client.logo} alt={client.alt} fill sizes="(min-width: 1024px) 14vw, 25vw" className="object-contain" />
            </div>
          ))}
        </Reveal>
        <Reveal delay={0.15} className="mt-14 grid gap-8 lg:grid-cols-[1.5fr_0.5fr] lg:items-end">
          <div className="relative aspect-[2/1] overflow-hidden">
            <Image src={clientsBanner.home.src} alt={clientsBanner.home.alt} fill sizes="(min-width: 1024px) 75vw, 100vw" className="object-cover" />
          </div>
          <Link href={homePage.clientsSection.cta.href} className="text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-primary hover:text-brand-secondary lg:pb-3">
            {homePage.clientsSection.cta.label} <span aria-hidden="true" className="ml-2 text-base">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}