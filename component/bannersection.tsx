'use client'

import { useState, useEffect } from "react";

const GRAIN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23g)' opacity='1'/%3E%3C/svg%3E")`;

const BULLETS = [
  { icon: "✦", text: "FDA Approved Machines" },
  { icon: "✦", text: "Only Dermatologists Consult You" },
  { icon: "✦", text: "Visible Results in Few Sessions" },
  { icon: "✦", text: "Easy EMI Options" },
];

const TYPING_PHRASES = [
  "Change Your Life",
  "Restore Your Glow",
  "Transform Your Hair",
];

const IMAGES = [
  {
    src: "/name.jpeg",
    fallback: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=900&q=90",
    label: "Skin Care",
    sublabel: "Expert Dermatologist Consult",
  },
  {
    src: "/names.jpeg",
    fallback: "",
    label: "Hair Care",
    sublabel: "Advanced Hair Restoration",
  },
];

export default function BannerSection() {
  const [btnHover, setBtnHover] = useState(false);
  const [activeImg, setActiveImg] = useState(0);
  const [activePhrase, setActivePhrase] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveImg((prev) => (prev + 1) % IMAGES.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setActivePhrase((prev) => (prev + 1) % TYPING_PHRASES.length);
    }, 5200);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      className="banner-section"
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        minHeight: "680px",
        backgroundImage:
          "url('/unnamed.webp')",
        backgroundSize: "100%",
        backgroundPosition: "left center, right center",
        backgroundRepeat: "no-repeat, no-repeat",
      }}
    >
      {/* ── Background image overlay (keeps text readable) ── */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          background:
            "linear-gradient(90deg, rgba(18,13,16,0.68) 0%, rgba(18,13,16,0.46) 32%, rgba(94,154,113,0.12) 56%, transparent 82%)",
          pointerEvents: "none",
        }}
      />

      <style>{`
        /* ── Keyframe Animations ── */
        @keyframes blobLeft {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 1; }
          33%       { transform: translate(22px, 16px) scale(1.12); opacity: 0.88; }
          66%       { transform: translate(10px, 28px) scale(1.06); opacity: 0.94; }
        }
        @keyframes blobRight {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 1; }
          40%       { transform: translate(-18px, -14px) scale(1.1); opacity: 0.86; }
          70%       { transform: translate(-8px, -24px) scale(1.04); opacity: 0.92; }
        }
        @keyframes grainDrift {
          0%   { background-position: 0px 0px; }
          100% { background-position: 250px 250px; }
        }
        @keyframes typeErase {
          0%, 8%    { max-width: 0; }
          38%, 58%  { max-width: 100%; }
          92%, 100% { max-width: 0; }
        }
        @keyframes caretBlink {
          0%, 45%   { border-color: rgba(255,253,250,0.95); }
          46%, 100% { border-color: transparent; }
        }

        .banner-section {
          min-height: 720px;
        }
        .banner-eyebrow {
          font-size: clamp(11px, 0.82vw, 13px) !important;
        }
        .banner-title {
          font-size: clamp(40px, 4.7vw, 68px) !important;
        }
        .banner-paragraph {
          font-size: clamp(19px, 1.75vw, 24px) !important;
        }
        .banner-bullet-text {
          font-size: clamp(15px, 1.12vw, 17px) !important;
        }
        .banner-rating-text {
          font-size: clamp(14px, 1vw, 16px) !important;
        }
        .banner-cta {
          font-size: clamp(11px, 0.82vw, 13px) !important;
        }
        .banner-typing-text {
          display: inline-block;
          max-width: 0;
          overflow: hidden;
          white-space: nowrap;
          vertical-align: bottom;
          border-right: 4px solid rgba(255,253,250,0.95);
          animation:
            typeErase 5.2s steps(16, end) infinite,
            caretBlink 0.72s step-end infinite;
        }

        /* ── Mobile reorder ── */
        @media (max-width: 767px) {
          .banner-section {
            min-height: auto !important;
            align-items: flex-start !important;
            background-image: url('/rejuvenating-facial-treatment.jpg') !important;
            background-size: cover !important;
            background-position: center top !important;
            background-repeat: no-repeat !important;
          }
          .banner-inner {
            flex-direction: column !important;
            padding: 32px 14px 42px !important;
            gap: 0 !important;
            align-items: stretch !important;
          }
          .banner-left {
            display: contents !important;
          }
          .banner-heading {
            order: 1;
            margin-bottom: 14px;
            text-align: center;
          }
          .banner-eyebrow-row {
            justify-content: center;
            margin-bottom: 14px !important;
          }
          .banner-eyebrow {
            font-size: 12px !important;
            letter-spacing: 0.18em !important;
          }
          .banner-title {
            font-size: clamp(34px, 10vw, 46px) !important;
            line-height: 1.02 !important;
            letter-spacing: -1px !important;
          }
          .banner-paragraph {
            order: 2;
            max-width: 360px;
            margin: 0 auto 18px !important;
            border-left: 0 !important;
            border-top: 3px solid rgba(94,154,113,0.42);
            padding: 12px 14px 0 !important;
            text-align: center;
            font-size: clamp(16px, 4.7vw, 20px) !important;
            line-height: 1.35 !important;
            background: rgba(255,255,255,0.34);
            border-radius: 16px;
          }
          .banner-img-wrap {
            order: 3 !important;
            width: 100% !important;
            max-width: 390px !important;
            flex-shrink: unset !important;
            margin: 0 auto 18px;
          }
          .banner-img-box {
            width: 100% !important;
            height: 330px !important;
          }
          .banner-bullets {
            order: 4;
            text-align: center;
          }
          .banner-bullets-grid {
            grid-template-columns: 1fr !important;
            gap: 10px !important;
            max-width: 360px;
            margin: 0 auto 16px !important;
          }
          .banner-bullets-grid li {
            justify-content: flex-start;
            border: 1px solid rgba(255,255,255,0.42);
            background: rgba(255,255,255,0.52);
            border-radius: 16px;
            padding: 10px 12px;
            box-shadow: 0 8px 24px rgba(36,31,33,0.08);
          }
          .banner-bullet-text {
            font-size: 15px !important;
            text-align: left;
          }
          .banner-rating-badge {
            width: 100%;
            max-width: 360px;
            justify-content: center;
            margin: 0 auto 22px !important;
            padding: 12px 14px !important;
          }
          .banner-rating-text {
            font-size: 14px !important;
          }
          .banner-cta {
            width: min(100%, 300px) !important;
            text-align: center;
            padding: 13px 20px !important;
            font-size: 11px !important;
          }
        }

        @media (min-width: 768px) and (max-width: 1100px) {
          .banner-inner {
            padding: 62px 32px !important;
            gap: 32px !important;
          }
          .banner-img-wrap,
          .banner-img-box {
            width: 390px !important;
          }
          .banner-img-box {
            height: 470px !important;
          }
        }

        @media (max-width: 420px) {
          .banner-img-box {
            height: 300px !important;
          }
          .banner-title {
            font-size: clamp(32px, 9.8vw, 42px) !important;
          }
          .banner-paragraph {
            font-size: 16px !important;
          }
        }
      `}</style>

      {/* ── Background 1: Grain drift ── */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          pointerEvents: "none",
          backgroundImage: GRAIN,
          backgroundRepeat: "repeat",
          backgroundSize: "250px 250px",
          opacity: 0.08,
          mixBlendMode: "multiply",
          animation: "grainDrift 14s linear infinite",
        }}
      />

      {/* ── Background 2: grid lines ── */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          pointerEvents: "none",
          backgroundImage: `
            repeating-linear-gradient(0deg,transparent,transparent 20px,rgba(94,154,113,0.025) 20px,rgba(94,154,113,0.025) 21px),
            repeating-linear-gradient(90deg,transparent,transparent 20px,rgba(200,107,155,0.02) 20px,rgba(200,107,155,0.02) 21px)`,
        }}
      />

      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          pointerEvents: "none",
          backgroundImage:
            "repeating-linear-gradient(135deg,transparent,transparent 7px,rgba(91,85,88,0.012) 7px,rgba(91,85,88,0.012) 8px)",
        }}
      />

      {/* ── Background 3: Green blob (animated) ── */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "50%",
          height: "65%",
          // background:
          //   "radial-gradient(ellipse at 0% 0%, rgba(94,154,113,0.18) 0%, rgba(94,154,113,0.08) 45%, transparent 70%)",
          zIndex: 2,
          pointerEvents: "none",
          animation: "blobLeft 8s ease-in-out infinite",
          transformOrigin: "top left",
        }}
      />

      {/* ── Background 4: Rose blob (animated) ── */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "48%",
          height: "55%",
          // background:
          //   "radial-gradient(ellipse at 100% 100%, rgba(200,107,155,0.18) 0%, rgba(233,191,208,0.1) 45%, transparent 70%)",
          zIndex: 2,
          pointerEvents: "none",
          animation: "blobRight 10s ease-in-out infinite",
          transformOrigin: "bottom right",
        }}
      />

      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "46%",
          left: 0,
          width: "100%",
          height: "1.5px",
          // background:
          //   "linear-gradient(90deg, transparent 0%, rgba(94,154,113,0.35) 18%, rgba(200,107,155,0.16) 60%, transparent 100%)",
          zIndex: 3,
          pointerEvents: "none",
        }}
      />

      <svg
        aria-hidden
        style={{ position: "absolute", top: 0, left: "6%", zIndex: 3, pointerEvents: "none" }}
        width="380"
        height="70"
        viewBox="0 0 380 70"
        fill="none"
      >
        <path d="M30 0 Q28 24 26 34 Q24 44 26 56 Q28 66 26 74" stroke="rgba(94,154,113,0.32)" strokeWidth="2.5" fill="none"/>
        <ellipse cx="26" cy="74" rx="3" ry="5" fill="rgba(94,154,113,0.18)"/>
        <path d="M130 0 Q129 16 128 26 Q127 34 129 42" stroke="rgba(200,107,155,0.22)" strokeWidth="1.8" fill="none"/>
        <ellipse cx="129" cy="42" rx="2.5" ry="4" fill="rgba(200,107,155,0.14)"/>
        <path d="M260 0 Q262 20 263 34 Q264 46 261 58 Q259 68 261 76" stroke="rgba(94,154,113,0.26)" strokeWidth="2" fill="none"/>
        <ellipse cx="261" cy="76" rx="2.8" ry="4.5" fill="rgba(94,154,113,0.16)"/>
        <path d="M360 0 Q361 12 360 22 Q359 30 361 38" stroke="rgba(200,107,155,0.18)" strokeWidth="1.6" fill="none"/>
        <ellipse cx="361" cy="38" rx="2" ry="3.5" fill="rgba(200,107,155,0.12)"/>
      </svg>

      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          lineHeight: 0,
          zIndex: 4,
          pointerEvents: "none",
        }}
      >
        <svg
          viewBox="0 0 1440 72"
          preserveAspectRatio="none"
          style={{ display: "block", width: "100%", height: "72px" }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,40 C240,72 480,8 720,40 C960,72 1200,8 1440,40 L1440,72 L0,72 Z"
            fill="rgba(200,107,155,0.12)"
          />
          <path
            d="M0,52 C180,28 360,68 540,48 C720,28 900,64 1080,46 C1260,28 1380,58 1440,50 L1440,72 L0,72 Z"
            fill="#f6f2ec"
          />
        </svg>
      </div>

      <div
        className="banner-inner"
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          maxWidth: "1320px",
          margin: "0 auto",
          padding: "76px 70px",
          gap: "68px",
        }}
      >
        {/* Left column */}
        <div
          className="banner-left"
          style={{
            maxWidth: "660px",
            flex: "1 1 0",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* ① Heading */}
          <div className="banner-heading">
            <div
              className="banner-eyebrow-row"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "18px",
                background: "rgba(183,44,120,0.18)",
                border: "1px solid rgba(183,44,120,0.32)",
                padding: "9px 14px",
                boxShadow: "0 10px 26px rgba(18,13,16,0.16)",
              }}
            >
              <span style={{ display: "block", width: "40px", height: "3px", background: "#f2bdd7", flexShrink: 0 }} />
              <span
                className="banner-eyebrow"
                style={{
                  fontSize: "var(--fs-eyebrow)",
                  letterSpacing: "0.26em",
                  textTransform: "uppercase",
                  color: "#fffdfa",
                  fontWeight: 700,
                }}
              >
                Best Skin & Hair Clinic in Kakinada
              </span>
            </div>
            <h1
              className="banner-title"
              style={{
                fontSize: "var(--fs-title)",
                fontWeight: 900,
                color: "#fffdfa",
                lineHeight: 1.02,
                margin: "0 0 4px 0",
                letterSpacing: "-1.4px",
                textShadow: "0 3px 18px rgba(18,13,16,0.48)",
              }}
            >
              One Right Decision Can
            </h1>
            <h1
              className="banner-title"
              style={{
                fontSize: "var(--fs-title)",
                fontWeight: 900,
                color: "#b72c78",
                lineHeight: 1.02,
                margin: "0 0 22px 0",
                letterSpacing: "-1.4px",
                textShadow: "0 3px 18px rgba(18,13,16,0.52)",
              }}
            >
              <span key={activePhrase} className="banner-typing-text">
                {TYPING_PHRASES[activePhrase]}
              </span>
            </h1>
          </div>

          {/* ② Paragraph */}
          <p
            className="banner-paragraph"
            style={{
              fontSize: "var(--fs-subtitle)",
              color: "rgba(255,253,250,0.94)",
              fontWeight: 650,
              lineHeight: 1.42,
              margin: "0 0 28px 0",
              letterSpacing: "0.01em",
              borderLeft: "4px solid rgba(94,154,113,0.46)",
              paddingLeft: "18px",
            }}
          >
            All your Skin and Hair concerns can be treated
          </p>

          {/* ④ Bullets + Google Rating + Button */}
          <div className="banner-bullets">
            {/* 2×2 grid of bullets */}
            <ul
              className="banner-bullets-grid"
              style={{
                listStyle: "none",
                padding: 0,
                margin: "0 0 16px 0",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "13px 22px",
              }}
            >
              {BULLETS.map((b, i) => (
                <li key={i} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "24px",
                      height: "24px",
                      flexShrink: 0,
                      border: "2px solid rgba(200,107,155,0.75)",
                      transform: "rotate(45deg)",
                      fontSize: "12px",
                      color: "#c86b9b",
                      fontWeight: 800,
                    }}
                  >
                    <span style={{ transform: "rotate(-45deg)", lineHeight: 1 }}>{b.icon}</span>
                  </span>
                  <span
                    className="banner-bullet-text max-sm:text-black md:text-white"
                    style={{
                      fontSize: "var(--fs-body)",
                      fontWeight: 750,
                      letterSpacing: "0.01em",
                      lineHeight: 1.35,
                    }}
                  >
                    {b.text}
                  </span>
                </li>
              ))}
            </ul>

            {/* Google Rating Badge */}
            <div
              className="banner-rating-badge"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                background: "#f3e1ea",
                border: "1px solid rgba(94,154,113,0.22)",
                borderRadius: "10px",
                padding: "12px 20px",
                marginBottom: "26px",
                boxShadow: "0 2px 12px rgba(36,31,33,0.07)",
              }}
            >
              {/* Google G */}
              <svg width="22" height="22" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9.1 3.2l6.8-6.8C35.9 2.5 30.3 0 24 0 14.6 0 6.5 5.4 2.6 13.3l7.9 6.1C12.4 13.1 17.7 9.5 24 9.5z"/>
                <path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v8.5h12.7c-.6 3-2.3 5.5-4.8 7.2l7.5 5.8c4.4-4.1 7.1-10.1 7.1-17z"/>
                <path fill="#FBBC05" d="M10.5 28.6A14.4 14.4 0 0 1 9.5 24c0-1.6.3-3.2.8-4.6l-7.9-6.1A23.9 23.9 0 0 0 0 24c0 3.9.9 7.5 2.6 10.7l7.9-6.1z"/>
                <path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.5-5.8c-2.2 1.5-5 2.4-8.4 2.4-6.3 0-11.6-3.6-13.5-9.4l-7.9 6.1C6.5 42.6 14.6 48 24 48z"/>
              </svg>

              <div className="flex flex-wrap  items-center gap-2">
                {/* 5 stars */}
                <div style={{ display: "flex", gap: "2px",}}>
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FBBC04">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <span className="banner-rating-text" style={{ fontSize: "var(--fs-body)", color: "#5b5558", fontWeight: 700 }}>
                  4.7 Google
                </span>
              </div>
            </div>

            <div>
              <a
                href="#contact"
                className="banner-cta"
                onMouseEnter={() => setBtnHover(true)}
                onMouseLeave={() => setBtnHover(false)}
                style={{
                  background: btnHover ? "#b72c78" : "#5e9a71",
                  color: btnHover ? "#ffffff" : "#ffffff",
                  border: "2.5px solid #5e9a71",
                  borderRadius: 0,
                  padding: "13px 30px",
                  fontSize: "var(--fs-eyebrow)",
                  fontWeight: 750,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  width: "fit-content",
                  transition: "background 0.18s, color 0.18s",
                  outline: "1.5px solid rgba(94,154,113,0.24)",
                  outlineOffset: "5px",
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                Book Consultation
              </a>
            </div>
          </div>
        </div>

        {/* ③ Right — two images crossfading */}
        <div className="banner-img-wrap" style={{ position: "relative", flexShrink: 0, width: "480px" }}>
          <div
            style={{
              position: "absolute",
              top: "14px",
              left: "14px",
              width: "100%",
              height: "100%",
              border: "1px solid rgba(94,154,113,0.24)",
              zIndex: 0,
            }}
          />

          {([
            { top: 0, left: 0, points: "28,2 2,2 2,28" },
            { top: 0, right: 0, points: "0,2 26,2 26,28" },
            { bottom: 0, left: 0, points: "28,26 2,26 2,0" },
            { bottom: 0, right: 0, points: "0,26 26,26 26,0" },
          ] as const).map((c, i) => (
            <svg key={i} style={{ position: "absolute", ...c, zIndex: 8 }} width="28" height="28" viewBox="0 0 28 28" fill="none">
              <polyline points={c.points} stroke="#5e9a71" strokeWidth="2.8" fill="none" opacity="0.9" />
            </svg>
          ))}

          <div
            className="banner-img-box"
            style={{
              position: "relative",
              width: "480px",
              height: "520px",
              overflow: "hidden",
              background: "#e9e4dc",
              zIndex: 1,
              boxShadow: "0 20px 60px rgba(36,31,33,0.18), inset 0 0 0 1px rgba(255,255,255,0.35)",
            }}
          >
            {/* Two images stacked — crossfade via opacity */}
            {IMAGES.map((img, i) => (
              <img
                key={img.label}
                src={img.src}
                alt={img.label}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                  opacity: activeImg === i ? 1 : 0,
                  transition: "opacity 1.2s ease-in-out",
                  filter: "contrast(1.02) brightness(0.96) saturate(0.9)",
                }}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = img.fallback;
                }}
              />
            ))}

            {/* Overlays */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to right, rgba(246,242,236,0.42) 0%, transparent 28%)",
                zIndex: 2,
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "120px",
                background: "linear-gradient(to top, rgba(246,242,236,0.9) 0%, transparent 100%)",
                zIndex: 2,
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "radial-gradient(ellipse at 55% 45%, transparent 48%, rgba(36,31,33,0.18) 100%)",
                zIndex: 2,
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: GRAIN,
                backgroundRepeat: "repeat",
                backgroundSize: "200px 200px",
                opacity: 0.16,
                mixBlendMode: "multiply",
                zIndex: 3,
                pointerEvents: "none",
              }}
            />

            {/* Dynamic label (changes with active image) */}
            <div
              style={{
                position: "absolute",
                bottom: "18px",
                left: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "4px",
                zIndex: 5,
              }}
            >
              <span style={{ display: "block", width: "32px", height: "2.5px", background: "#c86b9b", marginBottom: "4px" }} />
              <span
                style={{
                  fontSize: "var(--fs-eyebrow)",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "rgba(94,154,113,0.92)",
                  transition: "opacity 0.4s ease",
                }}
              >
                {IMAGES[activeImg].label}
              </span>
              <span
                style={{
                  fontSize: "10.5px",
                  fontWeight: 500,
                  letterSpacing: "0.02em",
                  textTransform: "uppercase",
                  color: "rgba(91,85,88,0.62)",
                  transition: "opacity 0.4s ease",
                }}
              >
                {IMAGES[activeImg].sublabel}
              </span>
            </div>

            {/* Slide indicator dots */}
            <div
              style={{
                position: "absolute",
                bottom: "22px",
                right: "20px",
                display: "flex",
                gap: "6px",
                alignItems: "center",
                zIndex: 5,
              }}
            >
              {IMAGES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  style={{
                    width: activeImg === i ? "22px" : "7px",
                    height: "7px",
                    borderRadius: "4px",
                    background: activeImg === i ? "#5e9a71" : "rgba(255,255,255,0.55)",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    transition: "all 0.35s ease",
                  }}
                />
              ))}
            </div>
          </div>

          <svg
            aria-hidden
            style={{ position: "absolute", top: "16px", right: "-3px", zIndex: 9 }}
            width="10"
            height="110"
            viewBox="0 0 10 110"
            fill="none"
          >
            <path d="M6 0 Q7 28 6 52 Q5 72 7 90" stroke="rgba(200,107,155,0.3)" strokeWidth="2" fill="none"/>
            <ellipse cx="7" cy="92" rx="2.8" ry="4.5" fill="rgba(200,107,155,0.2)"/>
          </svg>
        </div>
      </div>
    </section>
  );
}
