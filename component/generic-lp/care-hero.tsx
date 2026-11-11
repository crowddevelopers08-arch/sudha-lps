"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Roboto, Sora } from "next/font/google";

const head = Sora({ subsets: ["latin"], weight: ["600", "700"] });
const body = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

/* Sudha logo palette: sage green + rose pink */
const GREEN = "bg-[#3f7455]";

const SLIDES = [
  { src: "/care-slide-1.jpg", alt: "Close skin examination with a magnifier", pos: "50% 45%" },
  { src: "/care-slide-2.jpg", alt: "Dermatoscope skin examination", pos: "50% 50%" },
  { src: "/care-slide-3.jpg", alt: "Doctor consultation explaining the treatment plan", pos: "50% 40%" },
];

const ArrowIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

function Heading() {
  return (
    <div
      role="heading"
      aria-level={1}
      className={`${head.className} text-[32px] font-bold leading-[1.2] tracking-[-0.015em] text-[#1f2a24] sm:text-[46px] lg:text-[3.2vw]`}
    >
      Prathi treatment tarvatha
      <br className="hidden lg:block" /> mee skin or hair infections
      <br className="hidden lg:block" />{" "}
      <span className="text-[#3f7455] max-lg:underline max-lg:decoration-[#c86b9b] max-lg:decoration-[3px] max-lg:underline-offset-[7px] lg:mt-[0.18em] lg:inline-block lg:rounded-[0.3em] lg:bg-gradient-to-r lg:from-[#3f7455] lg:to-[#5e9a71] lg:px-[0.35em] lg:py-[0.05em] lg:text-white lg:shadow-[0_10px_26px_rgba(63,116,85,0.28)]">
        malli malli vastunnaya?
      </span>
    </div>
  );
}

function Badge() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[#3f7455]/25 bg-white py-1.5 pl-1.5 pr-4 text-[11px] font-bold uppercase leading-none tracking-[0.1em] text-[#3f7455] shadow-[0_6px_20px_rgba(63,116,85,0.15)] lg:gap-[0.6vw] lg:py-[0.35vw] lg:pl-[0.35vw] lg:pr-[1.1vw] lg:text-[0.78vw]">
      <span className="grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-[#3f7455] to-[#7fb591] text-white lg:h-[1.75vw] lg:w-[1.75vw]">
        <svg viewBox="0 0 24 24" className="h-3 w-3 lg:h-[0.9vw] lg:w-[0.9vw]" fill="currentColor">
          <path d="M9.5 3h5v6.5H21v5h-6.5V21h-5v-6.5H3v-5h6.5V3Z" />
        </svg>
      </span>
      Asalu problem cure avtundaa?
    </div>
  );
}

function Copy({ className = "" }: { className?: string }) {
  const text = "text-[16px] leading-[1.7] text-[#4a5550] [text-wrap:pretty] lg:text-[1.18vw] lg:leading-[1.6]";
  return (
    <div className={`space-y-3 lg:space-y-[0.8vw] ${className}`}>
      <div className={text}>
        Konni infections ki underlying cause sarigga identify cheyyakapothe, avi malli malli recur avvachu.
      </div>
      <div className={text}>
        Problem ki actual cause enti ani identify chesi, correct treatment approach follow avvadam important. Same symptoms ni malli
        malli treat cheyyadam kanna, root cause ni understand cheyyadam mukhyam.
      </div>
    </div>
  );
}

function DiscoverButton({ className = "" }: { className?: string }) {
  return (
    <a
      href="#contact"
      className={`${GREEN} flex items-center justify-between rounded-full pl-[34px] pr-[9px] text-[15px] font-bold text-white transition hover:brightness-110 lg:pl-[1.8vw] lg:pr-[0.47vw] lg:text-[0.96vw] ${className}`}
    >
      <span className="whitespace-nowrap">Discover More</span>
      <span className="grid h-[44px] w-[44px] place-items-center rounded-full bg-[#1f3a2b] lg:h-[2.73vw] lg:w-[2.73vw]">
        <ArrowIcon className="h-[18px] w-[18px] lg:h-[1.2vw] lg:w-[1.2vw]" />
      </span>
    </a>
  );
}

function SlideStack({ index, sizes }: { index: number; sizes: string }) {
  return (
    <>
      {SLIDES.map((s, i) => (
        <Image
          key={s.src}
          src={s.src}
          alt={s.alt}
          fill
          priority={i === 0}
          sizes={sizes}
          style={{ objectPosition: s.pos }}
          className={`object-cover transition-[opacity,transform] duration-[1400ms] ease-out ${
            i === index ? "scale-100 opacity-100" : "scale-[1.06] opacity-0"
          }`}
        />
      ))}
    </>
  );
}

export default function CareHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), 5500);
    return () => clearInterval(t);
  }, [index]);

  const fade = "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.35) 22%, #000 58%)";

  return (
    <section
      className={`${body.className} relative w-full overflow-hidden bg-[#f4f7fb] bg-[radial-gradient(circle_at_8%_18%,rgba(94,154,113,0.10),transparent_42%),radial-gradient(circle_at_30%_95%,rgba(200,107,155,0.07),transparent_40%)] lg:flex lg:h-[calc(100svh-7.6rem)] lg:max-h-[58rem] lg:min-h-[32rem] lg:items-center`}
    >
      {/* photo slider – desktop (right side, fades into the page) */}
      <div
        className="absolute right-0 top-0 hidden h-full w-[60%] lg:block"
        style={{ WebkitMaskImage: fade, maskImage: fade }}
      >
        <SlideStack index={index} sizes="60vw" />
      </div>

      {/* soft fade behind the text */}
      <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-[62%] bg-gradient-to-r from-[#f4f7fb] via-[#f4f7fb]/80 to-transparent lg:block" />

      {/* photo slider – mobile (behind the text) */}
      <div className="absolute inset-0 lg:hidden">
        <SlideStack index={index} sizes="100vw" />
        <div className="absolute inset-0 bg-[#f4f7fb]/80" />
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="relative z-10 hidden w-full lg:block">
        <div className="ml-[11.1%] flex w-[52%] flex-col items-start">
          <Badge />
          <div className="mt-[1.4vw]">
            <Heading />
          </div>
          <Copy className="mt-[1.6vw] w-[50vw]" />
          <div className="mt-[1.9vw]">
            <DiscoverButton className="h-[3.26vw] w-[11.94vw]" />
          </div>
        </div>

        {/* slider numbers */}
        {[
          { top: "calc(50% - 4.2vw)" },
          { top: "calc(50% - 1.18vw)" },
          { top: "calc(50% + 1.87vw)" },
        ].map((d, i) => {
          const active = i === index;
          return (
            <div
              key={i}
              role="button"
              tabIndex={0}
              aria-label={`Show image ${i + 1}`}
              aria-current={active}
              onClick={() => setIndex(i)}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setIndex(i)}
              className="absolute left-[95.3%] cursor-pointer outline-none transition-transform duration-500"
              style={{ top: d.top, transform: active ? "translateX(-1.24vw)" : "none" }}
            >
              <span
                className={`grid h-[2.37vw] w-[2.37vw] place-items-center rounded-full text-[0.95vw] font-bold text-white transition-colors duration-500 ${
                  active ? GREEN : "bg-[#6f7683]/60 backdrop-blur-sm"
                }`}
              >
                {i + 1}
              </span>
              <span
                className={`absolute left-full top-1/2 h-px transition-all duration-500 ${
                  active ? "w-[3.6vw] bg-[#3f7455]" : "w-[2.4vw] bg-white/80"
                }`}
              />
            </div>
          );
        })}
      </div>

      {/* ================= MOBILE / TABLET ================= */}
      <div className="relative z-10 px-6 pb-10 pt-10 lg:hidden">
        <Badge />
        <div className="mt-4">
          <Heading />
        </div>
        <Copy className="mt-5 max-w-[540px]" />
        <div className="mt-7">
          <DiscoverButton className="h-[56px] w-[210px]" />
        </div>
        <div className="mt-8 flex gap-2">
          {SLIDES.map((_, i) => (
            <div
              key={i}
              role="button"
              tabIndex={0}
              aria-label={`Show image ${i + 1}`}
              onClick={() => setIndex(i)}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setIndex(i)}
              className={`h-2.5 cursor-pointer rounded-full transition-all ${i === index ? "w-8 bg-[#3f7455]" : "w-2.5 bg-[#3f7455]/30"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
