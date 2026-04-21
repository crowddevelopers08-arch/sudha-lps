'use client'

import { useState } from "react";

const SAGE      = "#5e9a71";
const SAGE_DEEP = "#4f8562";
const ROSE      = "#c86b9b";

const TRUST_ITEMS = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="10" stroke={SAGE} strokeWidth="1.5" fill={`${SAGE}18`} />
        <path d="M7 11l2.5 2.5L15 8" stroke={SAGE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    accent: SAGE,
    accentDp: SAGE_DEEP,
    glowColor: "rgba(94,154,113,0.18)",
    label: "Expert Care",
    headline: "Doctors with 10+ years of experience",
    body: "Our doctors are leading professionals in the field, ensuring you get top-tier, personalised care.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="2" width="18" height="18" rx="5" stroke={ROSE} strokeWidth="1.5" fill={`${ROSE}18`} />
        <path d="M7 11h8M11 7v8" stroke={ROSE} strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    accent: ROSE,
    accentDp: "#b72c78",
    glowColor: "rgba(200,107,155,0.18)",
    label: "FDA-Approved Technology",
    headline: "Rigorously tested. Proven safe.",
    body: "We only use technology that has been rigorously tested and approved for safety and effectiveness.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2l2.5 6.5H20l-5.5 4 2 6.5L11 15l-5.5 4 2-6.5L2 8.5h6.5L11 2z"
          stroke={SAGE} strokeWidth="1.5" fill={`${SAGE}18`} strokeLinejoin="round" />
      </svg>
    ),
    accent: SAGE,
    accentDp: SAGE_DEEP,
    glowColor: "rgba(94,154,113,0.18)",
    label: "Proven Results",
    headline: "Hundreds of success stories",
    body: "With hundreds of success stories, our treatments are designed to ensure the best outcome for your skin and hair.",
  },
];

function TrustCard({ item, index }: { item: typeof TRUST_ITEMS[0]; index: number }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: "relative",
        background: hov ? `${item.accent}08` : "#ffffff",
        border: `1px solid ${hov ? item.accent + "55" : "rgba(0,0,0,0.07)"}`,
        borderLeft: `3px solid ${item.accent}`,
        borderRadius: "16px",
        padding: "22px 24px",
        transition: "all 0.25s cubic-bezier(0.22,1,0.36,1)",
        boxShadow: hov
          ? `0 12px 32px ${item.glowColor}, 0 2px 8px rgba(0,0,0,0.06)`
          : "0 2px 12px rgba(0,0,0,0.06)",
        transform: hov ? "translateX(6px)" : "translateX(0)",
        cursor: "default",
      }}
    >
      <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
        {/* icon bubble */}
        <div style={{
          flexShrink: 0,
          width: "42px", height: "42px",
          borderRadius: "12px",
          background: hov ? `${item.accent}18` : `${item.accent}10`,
          border: `1px solid ${item.accent}30`,
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: hov ? `0 0 16px ${item.glowColor}` : "none",
          transition: "all 0.25s",
        }}>
          {item.icon}
        </div>

        <div style={{ flex: 1 }}>
          {/* eyebrow */}
          <p style={{
            margin: "0 0 4px 0",
            fontSize: "var(--fs-eyebrow)", fontWeight: 700,
            letterSpacing: "0.22em", textTransform: "uppercase",
            color: item.accent, lineHeight: 1,
          }}>
            {item.label}
          </p>

          {/* headline */}
          <p style={{
            margin: "0 0 7px 0",
            fontSize: "var(--fs-small)", fontWeight: 800,
            color: "#241f21", lineHeight: 1.3,
          }}>
            {item.headline}
          </p>

          {/* body */}
          <p style={{
            margin: 0,
            fontSize: "var(--fs-small)",
            color: "rgba(36,31,33,0.55)",
            lineHeight: 1.65,
          }}>
            {item.body}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function TrustSection() {
  return (
    <section className="mt-10 pb-8" style={{
      position: "relative", width: "100%",
      overflow: "hidden",

    }}>

      {/* subtle sage tint top-left */}
      <div aria-hidden style={{
        position: "absolute", top: "-80px", left: "-80px",
        width: "500px", height: "360px",
        background: "radial-gradient(ellipse, rgba(94,154,113,0.07) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      {/* subtle rose tint bottom-right */}
      <div aria-hidden style={{
        position: "absolute", bottom: "-60px", right: "-80px",
        width: "480px", height: "340px",
        background: "radial-gradient(ellipse, rgba(200,107,155,0.06) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      {/* ── Inner wrapper ── */}
      <div
        className="trust-inner"
        style={{
          position: "relative", zIndex: 10,
          maxWidth: "1120px", margin: "0 auto",
          padding: "0 44px",
          display: "flex",
          gap: "56px",
          alignItems: "center",
        }}
      >

        {/* ══════════════════════════════════
            LEFT  — trust content  (50 %)
        ══════════════════════════════════ */}
        <div className="trust-left" style={{ flex: "1 1 0", minWidth: 0 }}>

          {/* eyebrow */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
            <span style={{ display: "block", width: "32px", height: "1.5px", background: SAGE }} />
            <span style={{
              fontSize: "var(--fs-eyebrow)", letterSpacing: "0.28em",
              textTransform: "uppercase", color: SAGE, fontWeight: 700,
            }}>
              Patient Trust
            </span>
            <span style={{ display: "block", width: "32px", height: "1.5px", background: SAGE }} />
          </div>

          {/* heading */}
          <h2 style={{
            fontSize: "var(--fs-title)", fontWeight: 900,
            margin: "0 0 14px 0", letterSpacing: "-0.5px", lineHeight: 1.1,
            background: `linear-gradient(135deg, #241f21 20%, ${SAGE_DEEP} 55%, ${ROSE} 100%)`,
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}>
            Why Patients<br />Trust Us
          </h2>

          <p style={{
            fontSize: "var(--fs-body)", color: "rgba(36,31,33,0.5)",
            lineHeight: 1.65, margin: "0 0 36px 0", maxWidth: "380px",
          }}>
            Every aspect of our practice is built around delivering safe,
            effective, and lasting results you can count on.
          </p>

          {/* trust cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {TRUST_ITEMS.map((item, i) => (
              <TrustCard key={item.label} item={item} index={i} />
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════
            RIGHT  — placeholder  (50 %)
        ══════════════════════════════════ */}
        <div
          className="trust-right"
          style={{
            flex: "1 1 0",
            minWidth: 0,
            position: "relative",
          }}
        >
          {/* subtle border glow */}
          <div style={{
            position: "absolute", inset: "-1px",
            borderRadius: "26px",
            background: `linear-gradient(135deg, ${SAGE}33, ${ROSE}22, transparent 60%)`,
          }} />

          {/* Instagram Reel panel */}
          <div style={{
            position: "relative",
            borderRadius: "24px",
            overflow: "hidden",
            aspectRatio: "4 / 5",
            background: "#0f0b0d",
            border: "1px solid rgba(0,0,0,0.07)",
            boxShadow: "0 24px 60px rgba(0,0,0,0.08), 0 4px 16px rgba(0,0,0,0.05)",
          }}>

            {/* top accent bar */}
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0, height: "3px", zIndex: 2,
              background: `linear-gradient(90deg, ${SAGE_DEEP}, ${SAGE}, ${ROSE})`,
              borderRadius: "24px 24px 0 0",
            }} />

            {/* corner marks */}
            <div aria-hidden style={{
              position: "absolute", top: "18px", left: "18px", zIndex: 2,
              width: "28px", height: "28px",
              borderTop: `1.5px solid ${SAGE}66`,
              borderLeft: `1.5px solid ${SAGE}66`,
              borderRadius: "4px 0 0 0",
            }} />
            <div aria-hidden style={{
              position: "absolute", bottom: "18px", right: "18px", zIndex: 2,
              width: "28px", height: "28px",
              borderBottom: `1.5px solid ${ROSE}55`,
              borderRight: `1.5px solid ${ROSE}55`,
              borderRadius: "0 0 4px 0",
            }} />

            <iframe
              src="https://www.instagram.com/reel/DV3M2Y7kSWK/embed/?autoplay=1&muted=1"
              scrolling="no"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                border: "none",
              }}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              title="Sudha Clinic Instagram Reel"
            />

          </div>
        </div>

      </div>

      <style>{`
        @keyframes trustPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.35; transform: scale(0.65); }
        }
        @media (max-width: 900px) {
          .trust-inner {
            flex-direction: column !important;
            gap: 36px !important;
            padding: 0 20px !important;
          }
          .trust-right {
            width: 100% !important;
            max-width: 480px !important;
            margin: 0 auto !important;
          }
        }
        @media (max-width: 520px) {
          .trust-inner { padding: 0 14px !important; }
          .trust-right { max-width: 100% !important; }
        }
      `}</style>
    </section>
  );
}
