"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Roboto, Sora } from "next/font/google";
import Image from "next/image";

const head = Sora({ subsets: ["latin"], weight: ["600", "700"] });
const body = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

const CONDITIONS = [
  {
    condition: "Psoriasis",
    headline: "Skin Meeda Red Patches & Scaling Unda?",
    description: "Itching, redness or scaling unte expert skin guidance pondandi.",
  },
  {
    condition: "Vitiligo",
    headline: "Skin Meeda White Patches Kanipistunnaya?",
    description: "White patches ki correct diagnosis and suitable treatment guidance pondandi.",
  },
  {
    condition: "Pemphigus",
    headline: "Skin Meeda Repeated Blisters Vastunnaya?",
    description: "Repeated blisters or painful sores unte dermatologist guidance teesukondi.",
  },
  {
    condition: "Nail Fungus",
    headline: "Nails Yellow Ga, Thick Ga Avtunnaya?",
    description: "Nail colour or texture changes unte expert evaluation pondandi.",
  },
  {
    condition: "Fungal Infections",
    headline: "Skin Meeda Itching & Round Patches Unnaya?",
    description: "Itching, redness or recurring patches ki expert skin guidance pondandi.",
  },
  {
    condition: "Lichenoid Melanosis",
    headline: "Face or Neck Meeda Dark Patches Unnaya?",
    description: "Dark pigmentation ki reason identify chesi suitable treatment guidance pondandi.",
  },
  {
    condition: "Urticaria",
    headline: "Sudden Ga Itching & Red Raised Patches Vastunnaya?",
    description: "Hives malli malli vastunte expert dermatology guidance pondandi.",
  },
  {
    condition: "Melasma",
    headline: "Face Meeda Dark Patches Motham Spread Avtunnaya?",
    description: "Facial pigmentation ki personalised treatment guidance pondandi.",
  },
  {
    condition: "Drug Reactions",
    headline: "Medicine Teesukunna Tarvata Skin Rash Vachinda?",
    description: "New rash or skin changes unte medical guidance teesukondi.",
  },
  {
    condition: "Pityriasis Versicolor",
    headline: "Body Meeda Light or Dark Patches Vastunnaya?",
    description: "Chest, back or neck patches ki correct skin evaluation pondandi.",
  },
];

const CTA = "Submit Your Details";

/* images already in /public */
const IMAGES: Record<string, { src: string; pos?: string }> = {
  Psoriasis: { src: "/Psoriasis-1.webp" },
  Vitiligo: { src: "/Vitiligo-1.jpg" },
  Pemphigus: { src: "/Pemphigus-1.jpg" },
  "Nail Fungus": { src: "/Nail-Fungus-1.jpg" },
  "Fungal Infections": { src: "/Fungal-Infections-1.jpg" },
  "Lichenoid Melanosis": { src: "/Oral-Lichenoid-Lesion-1.webp" },
  Urticaria: { src: "/Urticaria-1.jpg" },
  Melasma: { src: "/Melasm-1.webp" },
  "Drug Reactions": { src: "/Drug-Reactions-1.jpg" },
  "Pityriasis Versicolor": { src: "/Pityriasis-Versicolor.jpg" },
};

const ArrowIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export default function ConditionsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft >= max - 4);
    setProgress(Math.min(1, (el.scrollLeft + el.clientWidth) / el.scrollWidth));
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = (card?.offsetWidth ?? 320) + 20;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const arrowBase =
    "grid h-11 w-11 cursor-pointer select-none place-items-center rounded-full border border-white/40 bg-white text-[#3f7455] shadow-[0_8px_22px_rgba(0,0,0,0.18)] transition outline-none hover:bg-[#c86b9b] hover:text-white focus-visible:ring-2 focus-visible:ring-white/70 lg:h-[3vw] lg:min-h-11 lg:w-[3vw] lg:min-w-11";

  return (
    <section
      id="treatments"
      className={`${body.className} relative w-full overflow-hidden bg-[#3f7455] bg-[linear-gradient(135deg,#4a8462_0%,#3f7455_45%,#2f5c43_100%)] py-10 sm:py-20`}
    >
      <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/[0.06]" />
      <div aria-hidden className="pointer-events-none absolute -bottom-28 -left-20 h-80 w-80 rounded-full bg-[#c86b9b]/[0.12]" />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-8 lg:px-[11.1%]">
        {/* top row: label + arrows */}
        <div className="mb-8 flex items-center justify-between gap-4 sm:mb-10">
          <div className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-[#3f7455]/25 bg-white py-1.5 pl-1.5 pr-4 text-[11px] font-bold uppercase leading-none tracking-[0.1em] text-[#3f7455] shadow-[0_6px_20px_rgba(63,116,85,0.15)]">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-[#3f7455] to-[#7fb591] text-white">
              <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor">
                <path d="M9.5 3h5v6.5H21v5h-6.5V21h-5v-6.5H3v-5h6.5V3Z" />
              </svg>
            </span>
            Skin Conditions We Treat
          </div>

          {/* div role=button (not <button>) so the global button:hover rule doesn't repaint them */}
          <div className="hidden gap-3 min-[375px]:flex">
            <div
              role="button"
              tabIndex={0}
              aria-label="Previous"
              aria-disabled={atStart}
              onClick={() => !atStart && scrollByCard(-1)}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && !atStart && scrollByCard(-1)}
              className={`${arrowBase} ${atStart ? "pointer-events-none opacity-40" : ""}`}
            >
              <ArrowIcon className="h-5 w-5 rotate-180" />
            </div>
            <div
              role="button"
              tabIndex={0}
              aria-label="Next"
              aria-disabled={atEnd}
              onClick={() => !atEnd && scrollByCard(1)}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && !atEnd && scrollByCard(1)}
              className={`${arrowBase} ${atEnd ? "pointer-events-none opacity-40" : ""}`}
            >
              <ArrowIcon className="h-5 w-5" />
            </div>
          </div>
        </div>

        {/* track */}
        <div
          ref={trackRef}
          onScroll={update}
          className="-mx-4 flex snap-x snap-mandatory scroll-pl-4 gap-5 overflow-x-auto scroll-smooth px-4 pb-6 sm:scroll-pl-8 lg:scroll-pl-0 [scrollbar-width:none] sm:-mx-8 sm:px-8 lg:-mx-0 lg:px-0 [&::-webkit-scrollbar]:hidden"
        >
          {CONDITIONS.map((c, i) => (
            <article
              key={c.condition}
              data-card
              className="group relative flex shrink-0 basis-[88%] snap-start flex-col overflow-hidden rounded-[22px] border border-white/60 bg-white shadow-[0_18px_44px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_26px_56px_rgba(0,0,0,0.32)] sm:basis-[calc((100%-1.25rem)/2)] lg:basis-[calc((100%-2.5rem)/3)]"
            >
              {/* illustration */}
              <div className="relative h-[200px] w-full shrink-0 overflow-hidden max-[360px]:h-[170px]">
                <Image
                  src={IMAGES[c.condition].src}
                  alt={`${c.condition} skin example`}
                  fill
                  sizes="(min-width:1024px) 30vw, (min-width:640px) 45vw, 84vw"
                  style={{ objectPosition: IMAGES[c.condition].pos ?? "50% 50%" }}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/10" />
                <span className="absolute left-4 top-4 inline-flex w-fit items-center gap-2 rounded-full bg-white/90 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-[#3f7455] shadow-[0_4px_14px_rgba(63,116,85,0.15)] backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#c86b9b]" />
                  {c.condition}
                </span>
                <span
                  aria-hidden
                  className={`${head.className} absolute bottom-2 right-4 text-[44px] font-bold leading-none text-white/80 max-[360px]:text-[36px]`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#3f7455] via-[#7fb591] to-[#c86b9b] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              <div className="flex flex-1 flex-col p-5 min-[400px]:p-6 sm:p-7">
              <div
                role="heading"
                aria-level={3}
                className={`${head.className} text-[19px] font-bold leading-[1.25] tracking-[-0.01em] text-[#1f2a24] min-[400px]:text-[21px] sm:text-[22px]`}
              >
                {c.headline}
              </div>

              <div className="mb-6 mt-3 text-[14.5px] leading-[1.6] min-[400px]:text-[15px] text-[#4a5550]">{c.description}</div>

              <a
                href="#contact"
                className="mt-auto flex h-[52px] w-full items-center justify-between rounded-full bg-[#3f7455] pl-6 pr-[6px] text-[15px] font-bold text-white shadow-[0_8px_22px_rgba(63,116,85,0.25)] transition hover:brightness-110"
              >
                <span className="whitespace-nowrap">{CTA}</span>
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[#1f3a2b] transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowIcon className="h-[18px] w-[18px]" />
                </span>
              </a>
              </div>
            </article>
          ))}
        </div>

        {/* progress */}
        <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-white/20">
          <div
            className="h-full rounded-full bg-gradient-to-r from-white to-[#f3b6d3] transition-[width] duration-300"
            style={{ width: `${Math.round(progress * 100)}%` }}
          />
        </div>
      </div>
    </section>
  );
}
