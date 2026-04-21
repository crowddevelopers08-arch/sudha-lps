'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const GRAIN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23g)' opacity='1'/%3E%3C/svg%3E")`;

const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "Treatments", href: "#treatments" },
  { label: "Specialists", href: "#specialists" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const ctaClassName =
  "inline-flex items-center justify-center whitespace-nowrap rounded-full border border-[#5e9a71] bg-[#5e9a71] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-white shadow-[0_12px_30px_rgba(94,154,113,0.22)] transition hover:-translate-y-0.5 hover:border-[#4f8562] hover:bg-[#4f8562]";

export default function Navbar() {
  const [btnHover, setBtnHover] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-[#5e9a71]/15 transition-all duration-300 ${
        scrolled
          ? "bg-[#fffdfa]/90 shadow-[0_18px_50px_rgba(46,60,50,0.12)] backdrop-blur-xl"
          : "bg-[#fffdfa]/75 backdrop-blur-md"
      }`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: GRAIN,
          backgroundRepeat: "repeat",
          backgroundSize: "220px 220px",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c86b9b] to-transparent opacity-60"
      />

      <div className="relative mx-auto flex min-h-[82px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center" aria-label="Go to homepage">
          <div className="relative h-14 w-40 sm:w-44 lg:h-16 lg:w-48">
            <Image
              src="/logos.JPG"
              alt="Sudha Skin Hair Aesthetics logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-[#5e9a71]/12 bg-white/70 px-2 py-2 shadow-[0_10px_30px_rgba(36,31,33,0.05)] lg:flex">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = activeLink === label;

            return (
              <a
                key={label}
                href={href}
                onClick={() => setActiveLink(label)}
                className={`rounded-full px-4 py-2 text-[12px] font-medium uppercase tracking-[0.16em] ${
                  isActive
                    ? "bg-[#f3e1ea] text-[#b72c78]"
                    : "text-[#5b5558] hover:bg-[#f7f2ed] hover:text-[#3f7455]"
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
            onMouseEnter={() => setBtnHover(true)}
            onMouseLeave={() => setBtnHover(false)}
            style={{
              background: btnHover ? "#b72c78" : "transparent",
              color: btnHover ? "#ffffff" : "#5e9a71",
              border: "2.5px solid #5e9a71",
              borderRadius: 0,
              padding: "10px 22px",
              fontSize: "var(--fs-eyebrow)",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              cursor: "pointer",
              width: "fit-content",
              transition: "background 0.18s, color 0.18s",
              outline: "1.5px solid rgba(94,154,113,0.24)",
              outlineOffset: "5px",
            }}
          >
            Book Now
          </a>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#5e9a71]/20 bg-white/85 text-[#3f7455] shadow-[0_8px_24px_rgba(63,116,85,0.12)] lg:hidden"
        >
          <span className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-current ${
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-0.5 w-5 bg-current ${
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-[#5e9a71]/12 bg-[#fffdfa]/95 transition-all duration-300 lg:hidden ${
          menuOpen ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-4 py-4 sm:px-6">
          <div className="flex flex-col gap-2">
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
                  className={`flex items-center justify-between rounded-2xl px-4 py-3 text-[11.5px] font-medium uppercase tracking-[0.12em] ${
                    isActive
                      ? "bg-[#f3e1ea] text-[#b72c78]"
                      : "bg-white/70 text-[#5b5558] hover:text-[#3f7455]"
                  }`}
                >
                  <span>{label}</span>
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${
                      isActive ? "bg-[#c86b9b]" : "bg-[#5e9a71]/35"
                    }`}
                  />
                </a>
              );
            })}
          </div>

                   <button
            onMouseEnter={() => setBtnHover(true)}
            onMouseLeave={() => setBtnHover(false)}
            style={{
              background: btnHover ? "#b72c78" : "transparent",
              color: btnHover ? "#ffffff" : "#5e9a71",
              border: "2.5px solid #5e9a71",
              borderRadius: 0,
              padding: "10px 22px",
              fontSize: "var(--fs-eyebrow)",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              cursor: "pointer",
              width: "fit-content",
              transition: "background 0.18s, color 0.18s",
              outline: "1.5px solid rgba(94,154,113,0.24)",
              outlineOffset: "5px",
            }}
          >
            Book Now
          </button>
        </nav>
      </div>
    </header>
  );
}
