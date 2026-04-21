'use client'

import { useEffect, useState } from "react";

const GRAIN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23g)' opacity='1'/%3E%3C/svg%3E")`;

const CASE_STUDIES = [
  {
    title: "Hair Loss Treatment",
    description:
      "Targeted treatments designed to reduce hair fall, strengthen hair roots, and promote healthier, thicker hair growth.",
    before: "/bfaf.jpeg",
    after: "/bfaf1.jpeg",
  },
  {
    title: "Hair Transplant",
    description:
      "Advanced hair restoration procedure designed to permanently address hair loss by transplanting healthy hair follicles for natural-looking growth.",
    before: "/bfaf2.jpeg",
    after: "/bfaf4.jpeg",
  },
];

export default function BeforeAfterSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % CASE_STUDIES.length);
    }, 4500);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section
      id="gallery"
      className="relative overflow-hidden px-3 py-8 sm:px-5 sm:py-10 lg:px-7"
      style={{
        background:
          "linear-gradient(180deg, rgba(255,253,250,0.96) 0%, rgba(246,242,236,1) 55%, rgba(233,191,208,0.12) 100%)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: GRAIN,
          backgroundRepeat: "repeat",
          backgroundSize: "220px 220px",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#5e9a71] to-transparent opacity-50"
      />

      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#b72c78] sm:text-[12px] sm:tracking-[0.32em]">
            Before & After
          </p>
          <h2 className="mt-2 text-[clamp(25px,7vw,36px)] font-bold leading-[1.12] tracking-[-0.3px] text-[#241f21] sm:mt-3">
            Real transformation stories with visible care.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[14px] leading-[1.55] text-[#5b5558] sm:text-[15px] sm:leading-[1.6]">
            A curated look at hair treatment journeys, comparing the starting point
            with the refined result after guided sessions.
          </p>
        </div>

        <div className="mt-6 overflow-hidden sm:mt-8">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {CASE_STUDIES.map((study) => (
              <article key={study.title} className="w-full shrink-0">
                <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
                  <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
                    <div className="overflow-hidden rounded-[1.35rem] border border-[#5e9a71]/15 bg-white/75 p-2 shadow-[0_16px_38px_rgba(36,31,33,0.08)] sm:rounded-[2rem] sm:p-2.5 sm:shadow-[0_20px_50px_rgba(36,31,33,0.08)]">
                      <div className="relative overflow-hidden rounded-[1rem] sm:rounded-[1.5rem]">
                        <img
                          src={study.before}
                          alt={`${study.title} before treatment`}
                          className="h-[270px] w-full object-cover sm:h-[300px] lg:h-[320px]"
                        />
                        <div className="absolute left-3 top-3 rounded-full bg-[#241f21]/80 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white sm:left-4 sm:top-4 sm:px-4 sm:py-2 sm:text-[11px]">
                          Before
                        </div>
                      </div>
                    </div>

                    <div className="overflow-hidden rounded-[1.35rem] border border-[#c86b9b]/20 bg-white/75 p-2 shadow-[0_16px_38px_rgba(36,31,33,0.08)] sm:rounded-[2rem] sm:p-2.5 sm:shadow-[0_20px_50px_rgba(36,31,33,0.08)]">
                      <div className="relative overflow-hidden rounded-[1rem] sm:rounded-[1.5rem]">
                        <img
                          src={study.after}
                          alt={`${study.title} after treatment`}
                          className="h-[270px] w-full object-cover sm:h-[280px] lg:h-[320px]"
                        />
                        <div className="absolute left-3 top-3 rounded-full bg-[#5e9a71]/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white sm:left-4 sm:top-4 sm:px-4 sm:py-2 sm:text-[11px]">
                          After
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-full rounded-[1.35rem] border border-[#5e9a71]/12 bg-white/70 p-4 shadow-[0_16px_38px_rgba(36,31,33,0.08)] backdrop-blur sm:rounded-[2rem] sm:p-6 sm:shadow-[0_20px_50px_rgba(36,31,33,0.08)]">
                      <div className="inline-flex rounded-full bg-[#f3e1ea] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#b72c78] sm:px-4 sm:py-2 sm:text-[11px]">
                        Case Study
                      </div>
                      <h3 className="mt-3 text-[22px] font-bold leading-[1.15] text-[#241f21] sm:mt-4 sm:text-[26px]">
                        {study.title}
                      </h3>
                      <p className="mt-2 text-[14px] leading-[1.55] text-[#5b5558] sm:mt-3 sm:text-[15px] sm:leading-[1.6]">
                        {study.description}
                      </p>

                      <div className="mt-4 grid gap-3 sm:mt-5 sm:grid-cols-2">
                        <div className="rounded-2xl border border-[#5e9a71]/12 bg-[#edf6f0] px-3 py-3 sm:px-4">
                          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#3f7455] sm:text-[11px]">
                            Approach
                          </p>
                          <p className="mt-2 text-[13px] leading-[1.5] text-[#3f3a3d] sm:text-[14px]">
                            Dermatologist-led evaluation with customized treatment planning.
                          </p>
                        </div>

                        <div className="rounded-2xl border border-[#c86b9b]/12 bg-[#fbf0f5] px-3 py-3 sm:px-4">
                          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#b72c78] sm:text-[11px]">
                            Outcome
                          </p>
                          <p className="mt-2 text-[13px] leading-[1.5] text-[#3f3a3d] sm:text-[14px]">
                            Noticeably improved appearance with a more confident finish.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-5 flex items-center justify-center gap-2">
          {CASE_STUDIES.map((study, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={study.title}
                type="button"
                aria-label={`Show ${study.title}`}
                onClick={() => setActiveIndex(index)}
                className={`h-3 rounded-full transition-all ${
                  isActive ? "w-10 bg-[#5e9a71]" : "w-3 bg-[#c86b9b]/40 hover:bg-[#c86b9b]/70"
                }`}
              />
            );
          })}
        </div>

        <div className="mt-6 flex justify-center sm:mt-7">
          <a
            href="#contact"
            className="inline-flex w-full max-w-[280px] items-center justify-center border-[2.5px] border-[#5e9a71] px-6 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5e9a71] outline-[1.5px] outline-[#5e9a71]/25 outline-offset-[5px] transition hover:bg-[#5e9a71] hover:text-white sm:w-auto sm:max-w-none sm:px-8"
          >
            Book Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
