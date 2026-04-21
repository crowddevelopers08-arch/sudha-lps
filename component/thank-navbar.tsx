'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const GRAIN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23g)' opacity='1'/%3E%3C/svg%3E")`;

export default function Navbared() {
  const [btnHover, setBtnHover] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
          ? "bg-[#fffdfa]/90 shadow-[0_18px_50px_rgba(46,60,50,0.12)] backdrop-blur-xl"
          : "bg-[#fffdfa]/75 backdrop-blur-md"
      }`}
    >
      {/* Grain effect */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: GRAIN,
          backgroundRepeat: "repeat",
          backgroundSize: "220px 220px",
        }}
      />

      {/* Top gradient line */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c86b9b] to-transparent opacity-60"
      />

      {/* Main container */}
      <div className="relative mx-auto flex min-h-[70px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative h-12 w-36 sm:h-14 sm:w-40 lg:h-25 lg:w-48">
            <Image
              src="/logos.JPG"
              alt="Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* CTA Button */}
        <button
          onMouseEnter={() => setBtnHover(true)}
          onMouseLeave={() => setBtnHover(false)}
          style={{
            background: btnHover ? "#b72c78" : "transparent",
            color: btnHover ? "#ffffff" : "#5e9a71",
            border: "2.5px solid #5e9a71",
            padding: "10px 18px",
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
          className="hidden sm:block"
        >
          Book Now
        </button>

      </div>
    </header>
  );
}