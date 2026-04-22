'use client'

import { useState, useRef } from "react";

const GRAIN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23g)' opacity='1'/%3E%3C/svg%3E")`;

const DOCTORS = [
  {
    name: "Dr.Ravi vadrevu",
    role: "Clinical Director",
    specialty: "Skin & Laser Expert",
    qualifications: "MD.DD",
    image: "/Dr-Ravi-Vadrevu.png",
    exp: "12+ Yrs",
    featured: true,
  },
  {
    name: "Dr.VKG Sudha",
    role: "Senior Consultant",
    specialty: "Hair Restoration",
    qualifications: "MD,DVL",
    image: "/sudha.jpeg",
    exp: "10+ Yrs",
    featured: false,
  },
  {
    name: "Dr.K.Chandrakala",
    role: "Consultant",
    specialty: "Acne & Scar Care",
    qualifications: "MBBS,DD",
    image: "/dr-chandrakala.jpeg",
    exp: "8+ Yrs",
    featured: false,
  },
];

function FeaturedCard({ doctor }: { doctor: typeof DOCTORS[0] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        borderRadius: "24px",
        overflow: "hidden",
        height: "100%",
        minHeight: "480px",
        cursor: "default",
        transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s",
        transform: hovered ? "translateY(-6px)" : "none",
        boxShadow: hovered
          ? "0 40px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(94,154,113,0.45), 0 0 60px rgba(94,154,113,0.15)"
          : "0 20px 60px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.07)",
      }}
    >
      {/* Full-bleed image */}
      <img
        src={doctor.image}
        alt={doctor.name}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center top",
          opacity: 1,
          filter: hovered ? "brightness(0.96)" : "brightness(0.9)",
          transition: "filter 0.5s ease, transform 0.6s cubic-bezier(0.22,1,0.36,1)",
          transform: hovered ? "scale(1.05)" : "scale(1)",
        }}
        onError={e => { (e.target as HTMLImageElement).style.display = "none"; }}
      />

      {/* Gradient overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(180deg, transparent 58%, rgba(14,10,12,0.48) 78%, rgba(14,10,12,0.9) 100%)",
        zIndex: 1,
      }} />

      {/* Grain */}
      <div aria-hidden style={{
        position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none",
        backgroundImage: GRAIN, backgroundSize: "200px 200px",
        opacity: 0.04, mixBlendMode: "overlay",
      }} />

      {/* Glow border on hover */}
      <div style={{
        position: "absolute", inset: 0, borderRadius: "24px", zIndex: 3, pointerEvents: "none",
        boxShadow: hovered ? "inset 0 0 0 1.5px rgba(94,154,113,0.6)" : "inset 0 0 0 1px rgba(255,255,255,0.07)",
        transition: "box-shadow 0.35s",
      }} />

      {/* Exp badge */}
      <div style={{
        position: "absolute", top: "20px", right: "20px", zIndex: 4,
        background: "rgba(94,154,113,0.22)", backdropFilter: "blur(12px)",
        border: "1px solid rgba(94,154,113,0.4)",
        borderRadius: "999px", padding: "6px 14px",
        fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em",
        color: "#7ec89a",
      }}>
        {doctor.exp} Exp
      </div>

      {/* Content */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 4,
        padding: "28px 28px 32px",
      }}>
        <div style={{
          display: "inline-block",
          background: "rgba(200,107,155,0.25)", backdropFilter: "blur(8px)",
          border: "1px solid rgba(200,107,155,0.4)",
          borderRadius: "999px", padding: "4px 14px",
          fontSize: "10px", fontWeight: 700, letterSpacing: "0.14em",
          textTransform: "uppercase", color: "#e8a0c5",
          marginBottom: "12px",
        }}>
          {doctor.specialty}
        </div>
        <h3 style={{
          fontSize: "var(--fs-subtitle)", fontWeight: 900, color: "#fffdfa",
          margin: "0 0 6px 0", letterSpacing: "-0.3px", lineHeight: 1.2,
          textShadow: "0 2px 12px rgba(0,0,0,0.5)",
        }}>
          {doctor.name}
        </h3>
        <p style={{
          fontSize: "var(--fs-small)", fontWeight: 500, color: "rgba(255,253,250,0.65)",
          margin: "0 0 18px 0", letterSpacing: "0.04em",
        }}>
          {doctor.role} · {doctor.qualifications}
        </p>
        <a
          href="#contact"
          style={{
            display: "inline-flex", alignItems: "center", gap: "10px",
            background: "transparent",
            color: "#5e9a71",
            border: "2px solid rgba(94,154,113,0.6)",
            borderRadius: 0,
            padding: "10px 26px",
            fontSize: "var(--fs-eyebrow)", fontWeight: 700,
            letterSpacing: "0.14em", textTransform: "uppercase",
            cursor: "pointer",
            transition: "all 0.2s",
            outline: "1.5px solid rgba(94,154,113,0.18)",
            outlineOffset: "5px",
            whiteSpace: "nowrap",
            flexShrink: 0,
            textDecoration: "none",
          }}
        >
          Book Consultation
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <path d="M2 6.5h9M8 3l3.5 3.5L8 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  );
}

function SmallCard({ doctor }: { doctor: typeof DOCTORS[0] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        borderRadius: "20px",
        overflow: "hidden",
        cursor: "default",
        height: "100%",
        width: "100%",
        transition: "transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s",
        transform: hovered ? "translateY(-5px)" : "none",
        boxShadow: hovered
          ? "0 28px 56px rgba(0,0,0,0.5), 0 0 0 1px rgba(200,107,155,0.4)"
          : "0 12px 36px rgba(0,0,0,0.38), 0 0 0 1px rgba(255,255,255,0.06)",
        background: "#1a1416",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Image top half */}
      <div style={{ position: "relative", height: "clamp(210px, 28vw, 300px)", overflow: "hidden", flexShrink: 0 }}>
        <img
          src={doctor.image}
          alt={doctor.name}
          style={{
            width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top",
            opacity: 1,
            filter: hovered ? "brightness(0.98)" : "brightness(0.92)",
            transition: "filter 0.4s, transform 0.5s cubic-bezier(0.22,1,0.36,1)",
            transform: hovered ? "scale(1.07)" : "scale(1)",
          }}
          onError={e => { (e.target as HTMLImageElement).style.display = "none"; }}
        />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(180deg, transparent 68%, rgba(26,20,22,0.72) 100%)",
        }} />
        {/* Exp pill */}
        <div style={{
          position: "absolute", top: "12px", right: "12px",
          background: "rgba(20,14,17,0.7)", backdropFilter: "blur(10px)",
          border: "1px solid rgba(94,154,113,0.35)",
          borderRadius: "999px", padding: "4px 10px",
          fontSize: "10px", fontWeight: 700, color: "#7ec89a",
          letterSpacing: "0.06em",
        }}>
          {doctor.exp}
        </div>
      </div>

      {/* Info bottom */}
      <div style={{ padding: "13px 14px 16px", flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{
          fontSize: "9.5px", fontWeight: 700, letterSpacing: "0.16em",
          textTransform: "uppercase", color: "#c86b9b",
          marginBottom: "6px",
        }}>
          {doctor.specialty}
        </div>
        <p style={{
          fontSize: "var(--fs-body)", fontWeight: 800, color: "#fffdfa",
          margin: "0 0 4px 0", lineHeight: 1.25, letterSpacing: "-0.2px",
        }}>
          {doctor.name}
        </p>
        <p style={{
          fontSize: "11.5px", color: "rgba(255,253,250,0.5)",
          margin: "0 0 10px 0", fontWeight: 500,
        }}>
          {doctor.role}
        </p>
        {/* Divider */}
        <div style={{
          height: "1px",
          background: hovered ? "rgba(94,154,113,0.4)" : "rgba(255,255,255,0.08)",
          marginBottom: "10px",
          transition: "background 0.3s",
        }} />
        <a
          href="#contact"
          style={{
            fontSize: "10.5px", fontWeight: 700, letterSpacing: "0.1em",
            textTransform: "uppercase", color: hovered ? "#7ec89a" : "rgba(255,253,250,0.45)",
            textDecoration: "none",
            display: "flex", alignItems: "center", gap: "6px",
            transition: "color 0.25s",
            marginTop: "auto",
          }}
        >
          Book Now
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M1 5h8M6 2l3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>

      {/* Bottom glow border on hover */}
      <div style={{
        position: "absolute", inset: 0, borderRadius: "20px", pointerEvents: "none",
        boxShadow: hovered ? "inset 0 0 0 1.5px rgba(200,107,155,0.45)" : "none",
        transition: "box-shadow 0.3s",
      }} />
    </div>
  );
}

function MobileCarousel() {
  const [active, setActive] = useState(0);
  const startX = useRef<number | null>(null);

  const prev = () => setActive(i => (i - 1 + DOCTORS.length) % DOCTORS.length);
  const next = () => setActive(i => (i + 1) % DOCTORS.length);

  const handleTouchStart = (e: React.TouchEvent) => { startX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (startX.current === null) return;
    const diff = startX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    startX.current = null;
  };

  return (
    <div style={{ width: "100%", position: "relative" }}>
      <div onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} style={{ overflow: "hidden", width: "100%" }}>
        <div style={{
          display: "flex",
          transition: "transform 0.38s cubic-bezier(0.4,0,0.2,1)",
          transform: `translateX(-${active * 100}%)`,
        }}>
          {DOCTORS.map((doc, i) => (
            <div key={doc.name} style={{
              minWidth: "100%", padding: "0 10px 6px", boxSizing: "border-box",
              opacity: i === active ? 1 : 0.35,
              transform: i === active ? "scale(1)" : "scale(0.95)",
              transition: "opacity 0.38s, transform 0.38s",
            }}>
              <div style={{ borderRadius: "20px", overflow: "hidden", background: "#1a1416" }}>
                <div style={{ height: "300px", position: "relative", overflow: "hidden" }}>
                  <img src={doc.image} alt={doc.name} style={{
                    width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top",
                    opacity: 1,
                    filter: "brightness(0.92)",
                  }} onError={e => { (e.target as HTMLImageElement).style.display = "none"; }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 68%, rgba(26,20,22,0.72) 100%)" }} />
                  <div style={{
                    position: "absolute", top: "12px", right: "12px",
                    background: "rgba(20,14,17,0.75)", backdropFilter: "blur(10px)",
                    border: "1px solid rgba(94,154,113,0.35)", borderRadius: "999px",
                    padding: "4px 10px", fontSize: "10px", fontWeight: 700, color: "#7ec89a",
                  }}>
                    {doc.exp}
                  </div>
                </div>
                <div style={{ padding: "14px 16px 18px" }}>
                  <div style={{ fontSize: "9.5px", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#c86b9b", marginBottom: "6px" }}>
                    {doc.specialty}
                  </div>
                  <p style={{ fontSize: "var(--fs-subtitle)", fontWeight: 800, color: "#fffdfa", margin: "0 0 4px 0" }}>{doc.name}</p>
                  <p style={{ fontSize: "var(--fs-small)", color: "rgba(255,253,250,0.5)", margin: "0 0 10px 0" }}>{doc.role}</p>
                  <a href="#contact" style={{
                    display: "inline-flex", alignItems: "center", gap: "8px",
                    background: "rgba(94,154,113,0.9)", color: "#fff",
                    borderRadius: "8px", padding: "9px 16px",
                    fontSize: "var(--fs-eyebrow)", fontWeight: 700, letterSpacing: "0.1em",
                    textTransform: "uppercase", textDecoration: "none",
                  }}>
                    Book Consultation
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      {[{ dir: "prev", fn: prev, pos: { left: "4px" } }, { dir: "next", fn: next, pos: { right: "4px" } }].map(({ dir, fn, pos }) => (
        <button key={dir} onClick={fn} aria-label={dir}
          style={{
            position: "absolute", ...pos as React.CSSProperties,
            top: "50%", transform: "translateY(-60%)",
            width: "36px", height: "36px", borderRadius: "50%",
            border: "1px solid rgba(94,154,113,0.4)",
            background: "rgba(26,20,22,0.92)", color: "#7ec89a",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", fontSize: "18px", zIndex: 10,
            boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
          }}>
          {dir === "prev" ? "‹" : "›"}
        </button>
      ))}

      {/* Dots */}
      <div style={{ display: "flex", justifyContent: "center", gap: "7px", marginTop: "14px" }}>
        {DOCTORS.map((_, i) => (
          <button key={i} onClick={() => setActive(i)} aria-label={`Slide ${i + 1}`}
            style={{
              width: i === active ? "22px" : "7px", height: "7px",
              borderRadius: "999px", border: "none", padding: 0, cursor: "pointer",
              background: i === active ? "#5e9a71" : "rgba(94,154,113,0.28)",
              transition: "width 0.3s, background 0.3s",
            }} />
        ))}
      </div>
    </div>
  );
}

export default function Specialists() {
  const [btnHover, setBtnHover] = useState(false);

  return (
    <>
      <style>{`
        /* ── Grid (shown on tablet + desktop) ── */
        .specialists-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
          max-width: 920px;
          margin: 0 auto;
          align-items: stretch;
          justify-content: center;
        }

        /* ── Carousel (mobile only) ── */
        .specialists-carousel { display: none; }

        /* ── Tablet: 3 + 2 layout ── */
        @media (max-width: 960px) {
          .specialists-section {
            padding: 40px 24px 48px !important;
          }
          .specialists-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 14px;
            max-width: 720px;
          }
        }

        /* ── Small tablet: 2 columns ── */
        @media (max-width: 640px) {
          .specialists-section {
            padding: 32px 16px 40px !important;
          }
          .specialists-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
            max-width: 480px;
          }
          .specialists-grid > :nth-child(3) {
            grid-column: 1 / -1;
            max-width: 234px;
            margin: 0 auto;
          }
        }

        /* ── Mobile: carousel only ── */
        @media (max-width: 420px) {
          .specialists-section {
            padding: 28px 10px 34px !important;
          }
          .specialists-grid     { display: none; }
          .specialists-carousel { display: block; }
        }
      `}</style>

      <section
        id="specialists"
        className="specialists-section"
        style={{
          width: "100%",
          background: "#160e12",
          padding: "20px 44px 20px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grain overlay */}
        <div aria-hidden style={{
          position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none",
          backgroundImage: GRAIN, backgroundSize: "240px 240px",
          opacity: 0.13, mixBlendMode: "screen",
        }} />

        {/* Top rose spotlight */}
        <div aria-hidden style={{
          position: "absolute", top: "-120px", left: "50%",
          transform: "translateX(-50%)",
          width: "700px", height: "400px",
          background: "radial-gradient(ellipse, rgba(200,107,155,0.22) 0%, transparent 68%)",
          zIndex: 2, pointerEvents: "none",
        }} />

        {/* Bottom left sage glow */}
        <div aria-hidden style={{
          position: "absolute", bottom: "-60px", left: "-80px",
          width: "500px", height: "380px",
          background: "radial-gradient(ellipse, rgba(94,154,113,0.16) 0%, transparent 65%)",
          zIndex: 2, pointerEvents: "none",
        }} />

        {/* Top hairline */}
        <div aria-hidden style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(200,107,155,0.5), rgba(94,154,113,0.35), transparent)",
          zIndex: 3,
        }} />

        {/* Header */}
        <div style={{ position: "relative", zIndex: 10, textAlign: "center", marginBottom: "42px" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "10px",
            marginBottom: "12px",
          }}>
            <span style={{ display: "block", width: "36px", height: "1.5px", background: "#c86b9b" }} />
            <span style={{
              fontSize: "var(--fs-eyebrow)", letterSpacing: "0.28em", textTransform: "uppercase",
              color: "#c86b9b", fontWeight: 700,
            }}>
              Our Specialists
            </span>
            <span style={{ display: "block", width: "36px", height: "1.5px", background: "#c86b9b" }} />
          </div>

          <h2 style={{
            fontSize: "var(--fs-title)",
            fontWeight: 900,
            margin: "0 0 10px 0",
            letterSpacing: "-0.8px",
            lineHeight: 1.1,
            background: "linear-gradient(135deg, #fffdfa 30%, #c86b9b 65%, #5e9a71 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            Expert Hands Behind<br />Every Transformation
          </h2>

          <p style={{
            fontSize: "var(--fs-body)", color: "rgba(255,253,250,0.52)",
            margin: "0 auto", maxWidth: "480px", lineHeight: 1.65,
          }}>
            Board-certified dermatologists with years of hands-on expertise in skin, hair, and aesthetic medicine.
          </p>
        </div>

        {/* ── GRID: desktop 5-col / tablet 3-col / small-tablet 2-col ── */}
        <div
          className="specialists-grid"
          style={{ position: "relative", zIndex: 10 }}
        >
          {DOCTORS.map(doc => (
            <SmallCard key={doc.name} doctor={doc} />
          ))}
        </div>

        {/* ── MOBILE CAROUSEL ── */}
        <div className="specialists-carousel" style={{ position: "relative", zIndex: 10 }}>
          <MobileCarousel />
        </div>

        {/* Bottom CTA */}
        <div style={{
          position: "relative", zIndex: 10,
          display: "flex", flexDirection: "column", alignItems: "center", marginTop: "36px", gap: "10px",
        }}>
          <p style={{ fontSize: "var(--fs-small)", color: "rgba(255,253,250,0.38)", letterSpacing: "0.06em" }}>
            Choose Your Skin/Hair Concern
          </p>

          <a
            href="#contact"
            onMouseEnter={() => setBtnHover(true)}
            onMouseLeave={() => setBtnHover(false)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              background: btnHover ? "#b72c78" : "transparent",
              color: btnHover ? "#ffffff" : "#5e9a71",
              border: "2.5px solid #5e9a71",
              borderRadius: 0,
              padding: "10px 24px",
              fontSize: "var(--fs-eyebrow)",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              cursor: "pointer",
              textDecoration: "none",
              transition: "background 0.18s, color 0.18s",
              outline: "1.5px solid rgba(94,154,113,0.24)",
              outlineOffset: "5px",
            }}
          >
            Book Consultation
          </a>
        </div>
      </section>
    </>
  );
}
