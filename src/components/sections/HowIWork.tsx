import Image from "next/image";
import { homePage } from "@/content/pages/home";
import { howIWork } from "@/content/portfolio";
import Reveal from "./Reveal";

export default function HowIWork() {
  const paragraphs = homePage.howIWork.body.split("\n\n");
  return (
    <section className="overflow-hidden bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-[1400px] px-4">
        <div className="grid grid-cols-[1fr_1.5fr_1fr] gap-3">

          {/* Left photo */}
          <div className="relative aspect-[1/2] overflow-hidden">
            <Image src={howIWork.frameLeft.src} alt={howIWork.frameLeft.alt} fill sizes="25vw" className="object-cover object-center" />
          </div>

          {/* Center text panel */}
          <Reveal className="flex flex-col items-center justify-center px-10 py-12 text-center">
            <p className="font-serif text-[11px] uppercase tracking-[0.3em] text-brand-primary">{homePage.howIWork.heading}</p>
            <div className="mt-5 w-44">
              <Image src={howIWork.logo.src} alt={howIWork.logo.alt} width={200} height={100} className="h-auto w-full object-contain" />
            </div>
            <div className="mt-7 space-y-5 text-sm leading-7 text-brand-text/75">
              {paragraphs.map((p) => <p key={p}>{p}</p>)}
            </div>
          </Reveal>

          {/* Right photo */}
          <div className="relative aspect-[1/2] overflow-hidden">
            <Image src={howIWork.frameRight.src} alt={howIWork.frameRight.alt} fill sizes="25vw" className="object-cover object-center" />
          </div>

        </div>
      </div>
    </section>
  );
}