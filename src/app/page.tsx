import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import ClientLogos from "@/components/sections/ClientLogos";
import HowIWork from "@/components/sections/HowIWork";
import ContactCTA from "@/components/sections/ContactCTA";
import Reveal from "@/components/sections/Reveal";
import { homePage } from "@/content/pages/home";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="bg-white px-5 py-20 sm:py-28">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="mt-4 font-serif font-[200] tracking-[0.03em] text-3xl leading-tight text-brand-secondary sm:text-4xl">{homePage.intro.heading}</h2>
          <div className="mt-7 space-y-5 text-base leading-8 text-brand-text/70">
            {homePage.intro.body.split("\n\n").map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </Reveal>
      </section>
      <Services />
      <ClientLogos />
      <HowIWork />
      <ContactCTA />
    </>
  );
}
