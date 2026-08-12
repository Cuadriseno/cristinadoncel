import Image from "next/image";
import { homePage } from "@/content/pages/home";
import { howIWork } from "@/content/portfolio";
import Reveal from "./Reveal";

export default function HowIWork() {
  return (
    <section className="overflow-hidden bg-white px-5 py-20 sm:py-28">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <Reveal className="relative grid grid-cols-2 gap-4 sm:mx-auto sm:max-w-lg lg:mx-0">
          <div className="relative mt-10 aspect-[3/4] overflow-hidden">
            <Image src={howIWork.frameLeft.src} alt={howIWork.frameLeft.alt} fill priority sizes="25vw" className="object-cover" />
          </div>
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image src={howIWork.frameRight.src} alt={howIWork.frameRight.alt} fill sizes="25vw" className="object-cover" />
          </div>
          <div className="absolute bottom-8 left-1/2 w-36 -translate-x-1/2 bg-white/90 p-4 backdrop-blur-sm">
            <Image src={howIWork.logo.src} alt={howIWork.logo.alt} width={160} height={80} className="h-auto w-full" />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mb-4 font-serif text-[11px] uppercase tracking-[0.28em] text-brand-primary">El proceso</p>
          <h2 className="font-serif font-[200] tracking-[0.03em] text-3xl text-brand-secondary sm:text-4xl">{homePage.howIWork.heading}</h2>
          <div className="mt-7 space-y-5 text-base leading-8 text-brand-text/75">
            {homePage.howIWork.body.split("\n\n").map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </Reveal>
      </div>
    </section>
  );
}