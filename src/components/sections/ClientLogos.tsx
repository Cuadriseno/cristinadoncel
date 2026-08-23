import Image from "next/image";
import Link from "next/link";
import { clients, clientsBanner } from "@/content/clients";
import { homePage } from "@/content/pages/home";
import Reveal from "./Reveal";

export default function ClientLogos() {
  return (
    <section className="bg-white px-5 pb-20 pt-0 sm:pb-28">
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="text-center">
          <p className="font-serif text-[11px] uppercase tracking-[0.28em] text-brand-primary">{homePage.clientsSection.eyebrow}</p>
          <h2 className="mt-3 font-serif font-[200] tracking-[0.03em] text-3xl text-brand-secondary sm:text-4xl">{homePage.clientsSection.heading}</h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-8">
          <div className="border-t border-[#e8e2e6]" />
          <div className="mt-10 flex items-center justify-center gap-x-8 overflow-x-auto">
            {clients.map((client) => (
              <Image
                key={client.logo}
                src={client.logo}
                alt={client.alt}
                width={132}
                height={125}
                className="h-auto w-auto shrink-0 object-contain grayscale transition duration-300 hover:grayscale-0"
              />
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.15} className="mt-14">
          <Image src={clientsBanner.home.src} alt={clientsBanner.home.alt} width={1200} height={600} sizes="(min-width: 1200px) 1200px, 100vw" className="w-full h-auto" />
          <div className="mt-8 text-center">
            <Link href={homePage.clientsSection.cta.href} className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-primary hover:text-brand-secondary">
              {homePage.clientsSection.cta.label} <span aria-hidden="true" className="ml-2">→</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}