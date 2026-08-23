import Image from "next/image";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import ClientLogos from "@/components/sections/ClientLogos";
import HowIWork from "@/components/sections/HowIWork";
import ContactCTA from "@/components/sections/ContactCTA";
import Reveal from "@/components/sections/Reveal";
import { homePage } from "@/content/pages/home";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(homePage.meta.title, homePage.meta.description);

export default function Home() {
  return (
    <>
      <Hero />
      <section className="bg-white px-5 py-20 sm:py-28 border-t border-b border-[#e8e2e6]">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif font-[200] tracking-[0.03em] text-3xl leading-tight text-brand-secondary sm:text-4xl">{homePage.intro.heading}</h2>
          <div className="mt-7 space-y-5 text-sm leading-8 text-brand-text/70">
            {homePage.intro.body.split("\n\n").map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </Reveal>
      </section>
      <Services />
      <ClientLogos />
      <div className="w-full overflow-hidden bg-white">
        <Image src="/images/vector_5.png" alt="" width={1440} height={200} className="w-full h-auto" aria-hidden />
      </div>
      <HowIWork />
      <ContactCTA />
      <div className="w-full overflow-hidden bg-white">
        <Image src="/images/vector_6.png" alt="" width={1440} height={200} className="w-full h-auto" aria-hidden />
      </div>
    </>
  );
}
