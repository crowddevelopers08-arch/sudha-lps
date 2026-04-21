'use client'

import { useState } from "react";

const GRAIN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23g)' opacity='1'/%3E%3C/svg%3E")`;

const SAGE      = "#5e9a71";
const SAGE_DEEP = "#4f8562";
const ROSE      = "#c86b9b";

const Check = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0 }}>
    <circle cx="9" cy="9" r="8.5" fill="rgba(94,154,113,0.2)" stroke={SAGE} strokeWidth="1.3"/>
    <polyline points="4.5,9 7.5,12 13.5,6" stroke={SAGE} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Cross = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0 }}>
    <circle cx="9" cy="9" r="8.5" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" strokeWidth="1.3"/>
    <line x1="5.5" y1="5.5" x2="12.5" y2="12.5" stroke="rgba(255,253,250,0.3)" strokeWidth="1.8" strokeLinecap="round"/>
    <line x1="12.5" y1="5.5" x2="5.5" y2="12.5" stroke="rgba(255,253,250,0.3)" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

const ROWS = [
  {
    feature: "Expert Doctors",
    us:    "Leading professionals in hair & skin treatments, years of experience",
    them:  "General practitioners, less specialised",
  },
  {
    feature: "Technology",
    us:    "Advanced FDA-approved technologies, Hair Transplant, Carbon Laser",
    them:  "Outdated or non-FDA-approved tech",
  },
  {
    feature: "Personalised Treatment",
    us:    "Custom plans based on individual diagnosis and unique needs",
    them:  "One-size-fits-all, generic treatments",
  },
  {
    feature: "Result Visibility",
    us:    "Clear before/after transformations and verified patient success stories",
    them:  "Often lacks proof of successful outcomes",
  },
  {
    feature: "Pain Level",
    us:    "Minimal pain during procedures, comfortable recovery",
    them:  "Higher pain levels, more discomfort",
  },
  {
    feature: "Treatment Duration",
    us:    "Fast recovery with minimal downtime",
    them:  "Longer recovery periods, more invasive methods",
  },
];

function TableRow({ row, i }: { row: typeof ROWS[0]; i: number }) {
  const [hov, setHov] = useState(false);
  return (
    <tr
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{ transition: "background 0.2s" }}
    >
      {/* Feature label */}
      <td style={{
        padding: "14px 16px",
        verticalAlign: "middle",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        background: hov ? "rgba(255,255,255,0.04)" : (i % 2 === 0 ? "rgba(255,255,255,0.025)" : "transparent"),
        transition: "background 0.2s",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{
            flexShrink: 0,
            width: "6px", height: "6px",
            background: `linear-gradient(135deg, ${SAGE_DEEP}, ${SAGE})`,
            transform: "rotate(45deg)",
            display: "inline-block",
            boxShadow: "0 0 6px rgba(94,154,113,0.5)",
          }} />
          <span style={{
            fontSize: "var(--fs-small)", fontWeight: 800,
            color: "rgba(255,253,250,0.75)",
            letterSpacing: "0.08em", textTransform: "uppercase",
          }}>
            {row.feature}
          </span>
        </div>
      </td>

      {/* Sudha cell */}
      <td style={{
        padding: "14px 18px",
        verticalAlign: "top",
        borderBottom: "1px solid rgba(94,154,113,0.12)",
        background: hov
          ? "rgba(94,154,113,0.15)"
          : (i % 2 === 0 ? "rgba(94,154,113,0.1)" : "rgba(94,154,113,0.07)"),
        position: "relative",
        transition: "background 0.2s",
      }}>
        <div style={{
          position: "absolute", top: 0, left: 0,
          width: "2px", height: "100%",
          background: `linear-gradient(to bottom, transparent, ${SAGE} 30%, ${SAGE} 70%, transparent)`,
          opacity: 0.8,
        }} />
        <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
          <div style={{ marginTop: "1px" }}><Check /></div>
          <span style={{
            fontSize: "var(--fs-small)", color: "rgba(255,253,250,0.72)",
            lineHeight: 1.65, fontWeight: 500,
          }}>
            {row.us}
          </span>
        </div>
      </td>

      {/* Others cell */}
      <td style={{
        padding: "14px 18px",
        verticalAlign: "top",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
        background: hov
          ? "rgba(255,255,255,0.03)"
          : (i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent"),
        transition: "background 0.2s",
      }}>
        <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
          <div style={{ marginTop: "1px" }}><Cross /></div>
          <span style={{
            fontSize: "var(--fs-small)", color: "rgba(255,253,250,0.35)",
            lineHeight: 1.65, fontWeight: 400,
          }}>
            {row.them}
          </span>
        </div>
      </td>
    </tr>
  );
}

function BookBtn() {
  const [h, setH] = useState(false);
  return (
    <a
      href="#contact"
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        display: "inline-flex", alignItems: "center", gap: "10px",
        background: h ? SAGE : "transparent",
        color: h ? "#fff" : SAGE,
        border: `2px solid ${h ? SAGE : "rgba(94,154,113,0.6)"}`,
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
        boxShadow: h ? "0 8px 24px rgba(94,154,113,0.35)" : "none",
      }}
    >
      Book Consultation
      <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
        <path d="M2 6.5h9M8 3l3.5 3.5L8 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </a>
  );
}

export default function Uniqueness() {
  return (
    <section style={{
      position: "relative", width: "100%",
      background: "#120d10",
      overflow: "hidden",
      padding: "40px 0 40px",
    }}>

      {/* Grain */}
      <div aria-hidden style={{
        position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none",
        backgroundImage: GRAIN, backgroundSize: "240px 240px",
        opacity: 0.12, mixBlendMode: "screen",
      }} />

      {/* Rose glow — top right */}
      <div aria-hidden style={{
        position: "absolute", top: "-100px", right: "-80px",
        width: "600px", height: "420px",
        background: "radial-gradient(ellipse, rgba(200,107,155,0.22) 0%, transparent 65%)",
        zIndex: 2, pointerEvents: "none",
      }} />

      {/* Sage glow — bottom left */}
      <div aria-hidden style={{
        position: "absolute", bottom: "-60px", left: "-80px",
        width: "540px", height: "380px",
        background: "radial-gradient(ellipse, rgba(94,154,113,0.18) 0%, transparent 65%)",
        zIndex: 2, pointerEvents: "none",
      }} />

      {/* Top hairline */}
      <div aria-hidden style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(200,107,155,0.5), rgba(94,154,113,0.35), transparent)",
        zIndex: 3,
      }} />

      {/* ── inner ── */}
      <div className="uniqueness-inner" style={{ position: "relative", zIndex: 10, maxWidth: "1100px", margin: "0 auto", padding: "0 44px" }}>

        {/* ── HEADING ── */}
        <div style={{ marginBottom: "38px", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
            <span style={{ display: "block", width: "36px", height: "1.5px", background: ROSE }} />
            <span style={{ fontSize: "var(--fs-eyebrow)", letterSpacing: "0.28em", textTransform: "uppercase", color: ROSE, fontWeight: 700 }}>
              Why Choose Us
            </span>
            <span style={{ display: "block", width: "36px", height: "1.5px", background: ROSE }} />
          </div>

          <h2 style={{
            fontSize: "var(--fs-title)", fontWeight: 900,
            margin: "0 0 10px 0", letterSpacing: "-0.6px", lineHeight: 1.1,
            background: "linear-gradient(135deg, #fffdfa 30%, #c86b9b 65%, #5e9a71 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}>
            How Sudha Aesthetics<br />Stands Apart
          </h2>

          <p style={{ fontSize: "var(--fs-body)", color: "rgba(255,253,250,0.45)", margin: "0 auto", maxWidth: "460px", lineHeight: 1.65 }}>
            Expert care, cutting-edge technology, and personalised treatment — see the difference clearly.
          </p>
        </div>

        {/* ── COMPARISON TABLE ── */}
        <div className="uniqueness-table-wrap" style={{ overflowX: "auto" }}>
          <table
            className="uniqueness-table"
            style={{
              width: "100%",
              borderCollapse: "separate",
              borderSpacing: "0",
              tableLayout: "fixed",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 30px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)",
              background: "rgba(255,253,250,0.025)",
            }}
          >
            {/* ── THEAD ── */}
            <thead>
              <tr>
                {/* Feature col header */}
                <th style={{
                  width: "22%", padding: "14px 16px", textAlign: "left",
                  fontSize: "10px", fontWeight: 700, letterSpacing: "0.22em",
                  textTransform: "uppercase", color: "rgba(255,253,250,0.3)",
                  borderBottom: "1px solid rgba(255,255,255,0.07)",
                  background: "rgba(255,255,255,0.03)",
                }}>
                  Feature
                </th>

                {/* Sudha col header */}
                <th style={{
                  width: "39%", padding: "14px 18px", textAlign: "left",
                  background: "rgba(94,154,113,0.15)",
                  borderBottom: `2px solid ${SAGE}`,
                  position: "relative",
                }}>
                  {/* Glow line behind header */}
                  <div style={{
                    position: "absolute", inset: 0, pointerEvents: "none",
                    background: "linear-gradient(180deg, rgba(94,154,113,0.08) 0%, transparent 100%)",
                  }} />
                  <span style={{
                    position: "relative", display: "inline-flex", alignItems: "center", gap: "10px",
                    fontSize: "var(--fs-small)", fontWeight: 900, letterSpacing: "0.18em",
                    textTransform: "uppercase", color: SAGE,
                  }}>
                    <span style={{
                      display: "inline-block", width: "8px", height: "8px",
                      background: `linear-gradient(135deg, ${SAGE_DEEP}, ${SAGE})`,
                      transform: "rotate(45deg)",
                      boxShadow: `0 0 8px rgba(94,154,113,0.7)`,
                    }} />
                    Sudha Aesthetics
                    <span style={{
                      fontSize: "9px", fontWeight: 700, letterSpacing: "0.14em",
                      background: "rgba(94,154,113,0.25)", border: "1px solid rgba(94,154,113,0.4)",
                      borderRadius: "999px", padding: "2px 8px", color: "#7ec89a",
                    }}>
                      ✓ Best
                    </span>
                  </span>
                </th>

                {/* Others col header */}
                <th style={{
                  width: "39%", padding: "14px 18px", textAlign: "left",
                  background: "rgba(255,255,255,0.02)",
                  borderBottom: "1px solid rgba(255,255,255,0.07)",
                }}>
                  <span style={{
                    display: "inline-flex", alignItems: "center", gap: "8px",
                    fontSize: "var(--fs-small)", fontWeight: 700, letterSpacing: "0.18em",
                    textTransform: "uppercase", color: "rgba(255,253,250,0.3)",
                  }}>
                    Other Clinics
                  </span>
                </th>
              </tr>
            </thead>

            {/* ── TBODY ── */}
            <tbody>
              {ROWS.map((row, i) => (
                <TableRow key={row.feature} row={row} i={i} />
              ))}
            </tbody>
          </table>
        </div>

        {/* ── BOTTOM CTA STRIP ── */}
        <div style={{
          marginTop: "30px",
          padding: "20px 28px",
          background: "rgba(255,253,250,0.04)",
          border: "1px solid rgba(94,154,113,0.2)",
          borderLeft: `3px solid ${SAGE}`,
          borderRadius: "14px",
          display: "flex", alignItems: "center",
          justifyContent: "space-between",
          gap: "16px", flexWrap: "wrap",
          backdropFilter: "blur(10px)",
          boxShadow: "0 16px 40px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.04), 0 0 30px rgba(94,154,113,0.08)",
        }}>
          {/* Left glow dot */}
          <div style={{ position: "relative", paddingLeft: "0" }}>
            <div style={{
              position: "absolute", left: "-36px", top: "50%", transform: "translateY(-50%)",
              width: "8px", height: "8px", borderRadius: "50%",
              background: SAGE, boxShadow: `0 0 12px ${SAGE}, 0 0 24px rgba(94,154,113,0.5)`,
            }} />
            <p style={{
              fontSize: "var(--fs-subtitle)", fontWeight: 900,
              color: "#fffdfa", margin: "0 0 5px 0",
              letterSpacing: "-0.2px", lineHeight: 1.2,
            }}>
              Ready to experience the difference?
            </p>
            <p style={{ fontSize: "var(--fs-small)", color: "rgba(255,253,250,0.45)", margin: 0, lineHeight: 1.5 }}>
              Book a consultation with our expert dermatologists today.
            </p>
          </div>
          <BookBtn />
        </div>

      </div>
    </section>
  );
}
