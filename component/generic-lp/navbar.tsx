'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IMG } from "@/component/generic-lp/images";

const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "Treatments", href: "#treatments" },
  { label: "Doctors", href: "#specialists" },
];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-[#5e9a71]/15 transition-all duration-300 ${
        scrolled
          ? "bg-[#f4f7fb]/95 shadow-[0_18px_50px_rgba(46,60,50,0.10)] backdrop-blur-xl"
          : "bg-[#f4f7fb]"
      }`}
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c86b9b] to-transparent opacity-60"
      />

      <div className="relative mx-auto flex min-h-[82px] max-w-7xl items-center justify-between gap-4 py-2 px-4 sm:px-6 lg:px-8">
        <Link href="/generic" className="flex shrink-0 items-center" aria-label="Go to homepage">
          <div className="relative h-14 w-18 sm:w-44 lg:h-26 lg:w-48">
            <Image
              src={IMG.logo}
              alt="Sudha Skin Hair Aesthetics logo"
              fill
              sizes="200px"
              className="object-contain mix-blend-multiply max-sm:object-cover max-sm:object-left"
              priority
            />
          </div>
          <div className="relative h-13 w-43 sm:w-44 lg:h-26 lg:w-48">
            <Image
              src={IMG.logo2}
              alt="Sudha Skin Hair Aesthetics secondary logo"
              fill
              sizes="200px"
              className="object-contain max-sm:object-cover max-sm:object-left"
              priority
            />
          </div>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-[#3f7455]/12 bg-white/70 px-2 py-2 shadow-[0_10px_30px_rgba(36,31,33,0.05)] lg:flex">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = activeLink === label;
            return (
              <a
                key={label}
                href={href}
                onClick={() => setActiveLink(label)}
                className={`rounded-full px-5 py-2 text-[12px] font-medium uppercase tracking-[0.16em] transition-colors ${
                  isActive ? "bg-[#f3e1ea] text-[#b72c78]" : "text-[#5b5558] hover:bg-[#eef3ef] hover:text-[#3f7455]"
                }`}
              >
                {label}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center lg:flex">
          <a
            href="#contact"
            className="flex h-[52px] items-center justify-between gap-5 rounded-full bg-[#3f7455] pl-7 pr-[7px] text-[15px] font-bold text-white shadow-[0_8px_24px_rgba(63,116,85,0.25)] transition hover:brightness-110"
          >
            <span className="whitespace-nowrap">Book Now</span>
            <span className="grid h-10 w-10 place-items-center rounded-full bg-[#1f3a2b]">
              <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </a>
        </div>

        <a
          href="#contact"
          className="flex h-11 items-center justify-between gap-3 rounded-full bg-[#3f7455] pl-5 pr-[5px] text-[13px] font-bold text-white max-[411px]:hidden lg:hidden"
        >
          <span className="whitespace-nowrap">Book Now</span>
          <span className="grid h-[34px] w-[34px] place-items-center rounded-full bg-[#1f3a2b]">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </span>
        </a>

        {/* <=411px: menu toggle (div role=button, not <button>, so the global button:hover rule doesn't repaint it) */}
        <div
          role="button"
          tabIndex={0}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((o) => !o)}
          onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setMenuOpen((o) => !o)}
          className="hidden h-11 w-11 shrink-0 cursor-pointer place-items-center rounded-full border border-[#3f7455]/25 bg-white text-[#3f7455] outline-none max-[411px]:grid"
        >
          <span className="relative block h-4 w-5">
            <span className={`absolute left-0 top-0 h-0.5 w-5 rounded bg-current transition ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`absolute left-0 top-[7px] h-0.5 w-5 rounded bg-current transition ${menuOpen ? "opacity-0" : "opacity-100"}`} />
            <span className={`absolute left-0 top-[14px] h-0.5 w-5 rounded bg-current transition ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </span>
        </div>
      </div>

      <nav className="relative flex items-center justify-center gap-2 border-t border-[#3f7455]/10 px-4 py-2 max-[411px]:hidden lg:hidden">
        {NAV_LINKS.map(({ label, href }) => {
          const isActive = activeLink === label;
          return (
            <a
              key={label}
              href={href}
              onClick={() => setActiveLink(label)}
              className={`rounded-full px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] ${
                isActive ? "bg-[#f3e1ea] text-[#b72c78]" : "text-[#5b5558]"
              }`}
            >
              {label}
            </a>
          );
        })}
      </nav>

      {/* <=411px dropdown: links + Book Now */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-[#3f7455]/10 bg-[#f4f7fb] transition-all duration-300 min-[412px]:hidden ${
          menuOpen ? "max-h-[26rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-2 px-4 py-4">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = activeLink === label;
            return (
              <a
                key={label}
                href={href}
                onClick={() => {
                  setActiveLink(label);
                  setMenuOpen(false);
                }}
                className={`flex items-center justify-between rounded-2xl px-4 py-3 text-[12px] font-medium uppercase tracking-[0.12em] ${
                  isActive ? "bg-[#f3e1ea] text-[#b72c78]" : "bg-white text-[#5b5558]"
                }`}
              >
                <span>{label}</span>
                <span className={`h-2.5 w-2.5 rounded-full ${isActive ? "bg-[#c86b9b]" : "bg-[#3f7455]/35"}`} />
              </a>
            );
          })}

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-1 flex h-12 items-center justify-between rounded-full bg-[#3f7455] pl-6 pr-[6px] text-[14px] font-bold text-white"
          >
            <span className="whitespace-nowrap">Book Now</span>
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[#1f3a2b]">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </a>
        </nav>
      </div>
    </header>
  );
}
