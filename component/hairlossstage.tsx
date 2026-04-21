"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const GRAIN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23g)' opacity='1'/%3E%3C/svg%3E")`;

const SAGE = "#5e9a71";
const SAGE_DEEP = "#4f8562";
const ROSE = "#c86b9b";
const ROSE_DEEP = "#b72c78";
const SK_BASE = "#f2c8a8";
const SK_HOV = "#f5d0b4";
const HR_BASE = "#2a1c10";
const TAB_INTERVAL = 5000;
const HAIR_STAGE_IMAGES = [
  "/st1-2.jpeg",
  "/st2-1.jpeg",
  "/st3-3.jpeg",
  "/st4-4.jpeg",
  "/st5-5.jpeg",
];
const SKIN_STAGE_IMAGES = [
  "/images1.png",
  "/images2.png",
  "/images3.png",
  "/images4.png",
  "/images5.png",
];

/* ═══════════════════════════════════════════════════
   HAIR LOSS SVG
═══════════════════════════════════════════════════ */
function HeadSVG({ stage, selected }: { stage: number; selected: boolean }) {
  const cid = `hc-s${stage}-${selected ? "a" : "b"}`;
  const sk = selected ? SK_HOV : SK_BASE;
  const ear = selected ? "#ecc09a" : "#e0a878";
  return (
    <svg viewBox="0 0 60 74" width="64" height="80" fill="none">
      <defs>
        <clipPath id={cid}>
          <ellipse cx="30" cy="43" rx="22" ry="27" />
        </clipPath>
      </defs>
      <ellipse cx="7" cy="45" rx="4" ry="5.5" fill={ear} />
      <ellipse cx="53" cy="45" rx="4" ry="5.5" fill={ear} />
      <ellipse cx="30" cy="43" rx="22" ry="27" fill={sk} />
      <g clipPath={`url(#${cid})`}>
        {stage === 1 && (
          <rect x="0" y="0" width="60" height="40" fill={HR_BASE} />
        )}
        {stage === 2 && (
          <>
            <rect x="0" y="0" width="60" height="40" fill={HR_BASE} />
            <ellipse cx="13" cy="40" rx="8" ry="7.5" fill={sk} />
            <ellipse cx="47" cy="40" rx="8" ry="7.5" fill={sk} />
          </>
        )}
        {stage === 3 && (
          <>
            <rect x="0" y="0" width="60" height="38" fill={HR_BASE} />
            <ellipse cx="12" cy="38" rx="12" ry="11" fill={sk} />
            <ellipse cx="48" cy="38" rx="12" ry="11" fill={sk} />
          </>
        )}
        {stage === 4 && (
          <>
            <rect x="0" y="0" width="60" height="36" fill={HR_BASE} />
            <ellipse cx="11" cy="36" rx="15" ry="14" fill={sk} />
            <ellipse cx="49" cy="36" rx="15" ry="14" fill={sk} />
            <ellipse cx="30" cy="22" rx="10" ry="9" fill={sk} />
          </>
        )}
        {stage === 5 && (
          <>
            <ellipse cx="30" cy="43" rx="22" ry="27" fill={sk} />
            <ellipse cx="9" cy="46" rx="9" ry="20" fill={HR_BASE} />
            <ellipse cx="51" cy="46" rx="9" ry="20" fill={HR_BASE} />
            <ellipse cx="30" cy="67" rx="20" ry="7" fill={HR_BASE} />
          </>
        )}
      </g>
      <ellipse cx="30" cy="54" rx="13" ry="11" fill="rgba(0,0,0,0.04)" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════
   SKIN CONCERN SVG
═══════════════════════════════════════════════════ */
function FaceSVG({ stage, selected }: { stage: number; selected: boolean }) {
  const sk = selected ? SK_HOV : SK_BASE;
  const ear = selected ? "#ecc09a" : "#e0a878";
  const s1 = "rgba(190,75,55,0.52)";
  const s2 = "rgba(175,65,45,0.44)";
  const pig = "rgba(145,80,45,0.24)";
  return (
    <svg viewBox="0 0 60 74" width="64" height="80" fill="none">
      <defs>
        <clipPath id={`fc-s${stage}-${selected ? "a" : "b"}`}>
          <ellipse cx="30" cy="43" rx="22" ry="27" />
        </clipPath>
      </defs>
      <ellipse cx="7" cy="45" rx="4" ry="5.5" fill={ear} />
      <ellipse cx="53" cy="45" rx="4" ry="5.5" fill={ear} />
      <ellipse cx="30" cy="43" rx="22" ry="27" fill={sk} />
      <g clipPath={`url(#fc-s${stage}-${selected ? "a" : "b"})`}>
        <rect x="0" y="0" width="60" height="26" fill={HR_BASE} />
      </g>
      {stage === 2 && (
        <>
          <circle cx="24" cy="38" r="1.6" fill={s1} />
          <circle cx="36" cy="41" r="1.4" fill={s2} />
          <circle cx="28" cy="48" r="1.3" fill={s1} />
          <circle cx="34" cy="35" r="1.2" fill={s2} />
        </>
      )}
      {stage === 3 && (
        <>
          <ellipse cx="21" cy="44" rx="7" ry="5" fill={pig} />
          <circle cx="24" cy="36" r="1.8" fill={s1} />
          <circle cx="37" cy="39" r="1.6" fill={s2} />
          <circle cx="28" cy="46" r="1.5" fill={s1} />
          <circle cx="33" cy="43" r="1.4" fill={s2} />
          <circle cx="22" cy="50" r="1.3" fill={s1} />
          <circle cx="38" cy="48" r="1.4" fill={s2} />
          <circle cx="30" cy="54" r="1.2" fill={s1} />
        </>
      )}
      {stage === 4 && (
        <>
          <ellipse cx="19" cy="43" rx="8" ry="6" fill={pig} />
          <ellipse cx="41" cy="43" rx="7" ry="5.5" fill={pig} />
          <circle cx="22" cy="36" r="2.0" fill={s1} />
          <circle cx="28" cy="33" r="1.8" fill={s2} />
          <circle cx="36" cy="37" r="1.9" fill={s1} />
          <circle cx="25" cy="44" r="1.7" fill={s2} />
          <circle cx="33" cy="41" r="1.6" fill={s1} />
          <circle cx="20" cy="49" r="1.5" fill={s2} />
          <circle cx="38" cy="47" r="1.6" fill={s1} />
          <circle cx="30" cy="52" r="1.4" fill={s2} />
          <circle cx="27" cy="57" r="1.2" fill={s1} />
        </>
      )}
      {stage === 5 && (
        <>
          <ellipse cx="19" cy="41" rx="10" ry="8" fill={pig} />
          <ellipse cx="41" cy="42" rx="10" ry="8" fill={pig} />
          <ellipse cx="30" cy="54" rx="12" ry="7" fill={pig} />
          <circle cx="22" cy="34" r="2.3" fill={s1} />
          <circle cx="30" cy="31" r="2.0" fill={s2} />
          <circle cx="38" cy="35" r="2.2" fill={s1} />
          <circle cx="19" cy="42" r="2.0" fill={s2} />
          <circle cx="27" cy="40" r="1.9" fill={s1} />
          <circle cx="35" cy="39" r="2.0" fill={s2} />
          <circle cx="41" cy="44" r="1.9" fill={s1} />
          <circle cx="23" cy="50" r="1.8" fill={s2} />
          <circle cx="31" cy="48" r="1.8" fill={s1} />
          <circle cx="38" cy="52" r="1.7" fill={s2} />
          <circle cx="26" cy="57" r="1.5" fill={s1} />
          <circle cx="34" cy="58" r="1.4" fill={s2} />
        </>
      )}
      <ellipse cx="30" cy="54" rx="13" ry="11" fill="rgba(0,0,0,0.04)" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════
   STAGE DATA
═══════════════════════════════════════════════════ */
const HAIR_STAGES = [
  { stage: 1, label: "Stage 1", desc: "Minimal loss" },
  { stage: 2, label: "Stage 2", desc: "Mild receding" },
  { stage: 3, label: "Stage 3", desc: "Moderate" },
  { stage: 4, label: "Stage 4", desc: "Significant" },
  { stage: 5, label: "Stage 5", desc: "Advanced" },
];
const SKIN_STAGES = [
  { stage: 1, label: "Stage 1", desc: "Clear skin" },
  { stage: 2, label: "Stage 2", desc: "Mild concern" },
  { stage: 3, label: "Stage 3", desc: "Moderate" },
  { stage: 4, label: "Stage 4", desc: "Significant" },
  { stage: 5, label: "Stage 5", desc: "Severe" },
];
const HAIR_HINTS: Record<number, string> = {
  1: "Early-stage thinning. Preventive treatments show excellent results.",
  2: "Mild temple recession therapy and topical care can slow progression.",
  3: "Moderate M-shape hairline. Hair transplant or combined therapy recommended.",
  4: "Significant thinning. Hair transplant with offers strong restoration.",
  5: "Advanced horseshoe pattern. Our specialists will design a full restoration plan.",
};
const SKIN_HINTS: Record<number, string> = {
  1: "Your skin looks clear! A personalised skin-care routine keeps it that way.",
  2: "Mild breakouts or pigmentation. Targeted facials and topical care will help.",
  3: "Moderate acne or pigmentation. Carbon laser and custom plans recommended.",
  4: "Significant skin concerns. Advanced laser therapy and dermatologist guidance needed.",
  5: "Severe skin concerns. Our dermatologists will create a comprehensive care plan.",
};

/* ═══════════════════════════════════════════════════
   STAGE CARD
═══════════════════════════════════════════════════ */
function StageCard({
  stage,
  label,
  desc,
  selected,
  onClick,
  category,
}: {
  stage: number;
  label: string;
  desc: string;
  selected: boolean;
  onClick: () => void;
  category: "hair" | "skin";
}) {
  const [hov, setHov] = useState(false);
  const isHair = category === "hair";
  const accent = isHair ? SAGE : ROSE;
  const accentDp = isHair ? SAGE_DEEP : ROSE_DEEP;
  const glowColor = isHair ? "rgba(94,154,113,0.5)" : "rgba(200,107,155,0.5)";
  const glowSoft = isHair ? "rgba(94,154,113,0.18)" : "rgba(200,107,155,0.18)";
  const imageSrc = (isHair ? HAIR_STAGE_IMAGES : SKIN_STAGE_IMAGES)[stage - 1];

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        flex: "1 1 0",
        minWidth: "0",
        position: "relative",
        background: selected
          ? isHair
            ? "rgba(94,154,113,0.3)"
            : "rgba(200,107,155,0.3)"
          : hov
            ? "rgba(255,253,250,0.06)"
            : "rgba(255,253,250,0.03)",
        border: selected
          ? `1.5px solid ${accent}`
          : hov
            ? `1.5px solid ${isHair ? "rgba(94,154,113,0.4)" : "rgba(200,107,155,0.4)"}`
            : "1.5px solid rgba(255,255,255,0.08)",
        borderRadius: "20px",
        padding: "24px 14px 18px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
        overflow: "hidden",
        outline: "none",
        transition: "all 0.25s cubic-bezier(0.22,1,0.36,1)",
        transform: selected
          ? "translateY(-8px) scale(1.03)"
          : hov
            ? "translateY(-4px)"
            : "none",
        boxShadow: selected
          ? `0 20px 48px rgba(0,0,0,0.45), 0 0 0 1px ${glowColor}, 0 0 32px ${glowSoft}`
          : hov
            ? "0 12px 32px rgba(0,0,0,0.35)"
            : "0 4px 16px rgba(0,0,0,0.25)",
      }}
    >
      {/* top accent bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2.5px",
          background: selected
            ? `linear-gradient(90deg, ${accentDp}, ${accent})`
            : "transparent",
          transition: "background 0.25s",
          borderRadius: "20px 20px 0 0",
        }}
      />

      {/* stage number badge */}
      <div
        style={{
          position: "absolute",
          top: "14px",
          right: "14px",
          width: "22px",
          height: "22px",
          borderRadius: "50%",
          background: selected ? accent : "rgba(255,255,255,0.08)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "10px",
          fontWeight: 800,
          color: selected ? "#fff" : "rgba(255,255,255,0.4)",
          transition: "all 0.25s",
        }}
      >
        {stage}
      </div>

      {/* ── FIXED: Image box — objectFit cover, square, boxShadow glow ── */}
      <div
        className="stage-card-img"
        style={{
          width: "112px",
          height: "112px",
          borderRadius: "14px",
          overflow: "hidden",
          marginBottom: "12px",
          border: selected
            ? `1.5px solid ${accent}`
            : "1px solid rgba(255,255,255,0.1)",
          boxShadow: selected
            ? `0 0 18px ${glowColor}, 0 4px 14px rgba(0,0,0,0.5)`
            : hov
              ? "0 4px 10px rgba(0,0,0,0.35)"
              : "0 3px 6px rgba(0,0,0,0.3)",
          transition: "box-shadow 0.25s, border-color 0.25s, transform 0.25s",
          transform: selected ? "scale(1.04)" : "scale(1)",
          background: "rgba(20,14,18,0.7)",
          flexShrink: 0,
        }}
      >
        <img
          src={imageSrc}
          alt={`${isHair ? "Hair loss" : "Skin concern"} ${label}`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            display: "block",
            filter:
              selected || hov
                ? "brightness(1.05) saturate(1.1)"
                : "brightness(0.92)",
            transition: "filter 0.25s, transform 0.25s",
            transform: hov ? "scale(1.06)" : "scale(1)",
          }}
        />
      </div>

      {/* label */}
      <p
        style={{
          margin: "0 0 5px 0",
          fontSize: "var(--fs-small)",
          fontWeight: 800,
          color: selected
            ? accent
            : hov
              ? "rgba(255,253,250,0.9)"
              : "rgba(255,253,250,0.65)",
          letterSpacing: "0.04em",
          lineHeight: 1,
          transition: "color 0.25s",
        }}
      >
        {label}
      </p>

      {/* desc */}
      <p
        style={{
          margin: 0,
          fontSize: "11px",
          color: selected ? "rgba(255,253,250,0.7)" : "rgba(255,253,250,0.38)",
          lineHeight: 1.4,
          transition: "color 0.25s",
          textAlign: "center",
        }}
      >
        {desc}
      </p>
    </button>
  );
}

/* ═══════════════════════════════════════════════════
   BOOKING POPUP
═══════════════════════════════════════════════════ */
type PopupInfo = { category: "hair" | "skin"; stage: number; desc: string };

function BookingPopup({
  info,
  onClose,
}: {
  info: PopupInfo;
  onClose: () => void;
}) {
  const isHair = info.category === "hair";
  const accent = isHair ? SAGE : ROSE;
  const accentDp = isHair ? SAGE_DEEP : ROSE_DEEP;
  const [btnHov, setBtnHov] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [fieldError, setFieldError] = useState("");

  const handleSubmit = async () => {
    if (!name.trim() || !phone.trim()) {
      setFieldError("Name and phone number are required.");
      return;
    }
    setSubmitting(true);
    setFieldError("");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          city: city.trim() || undefined,
          message: `Stage ${info.stage} — ${info.desc}`,
          source: "Website",
          formName: isHair ? "hair consultation" : "skin consultation",
          consent: true,
        }),
      });
      const data = await res.json();
      if (data.success) {
        window.location.href = isHair ? "/thank-you-hair-stage" : "/thank-you-skin-stage";
      } else {
        setFieldError("Something went wrong. Please try again.");
      }
    } catch {
      setFieldError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const inputStyle: React.CSSProperties = {
    width: "100%",
    border: `1px solid ${isHair ? "rgba(94,154,113,0.25)" : "rgba(200,107,155,0.25)"}`,
    background: "rgba(255,253,250,0.05)",
    padding: "13px 15px",
    fontSize: "var(--fs-body)",
    color: "#fffdfa",
    outline: "none",
    boxSizing: "border-box",
    borderRadius: "8px",
    transition: "border-color 0.2s",
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(14,9,12,0.75)",
        backdropFilter: "blur(6px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        animation: "fadeIn 0.2s ease",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#1c1518",
          border: `1px solid ${isHair ? "rgba(94,154,113,0.3)" : "rgba(200,107,155,0.3)"}`,
          borderRadius: "20px",
          width: "100%",
          maxWidth: "420px",
          boxShadow: `0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05), 0 0 60px ${isHair ? "rgba(94,154,113,0.08)" : "rgba(200,107,155,0.08)"}`,
          position: "relative",
          overflow: "hidden",
          animation: "slideUp 0.22s ease",
        }}
      >
        {/* top gradient bar */}
        <div
          style={{
            height: "3px",
            background: isHair
              ? `linear-gradient(90deg, ${SAGE_DEEP}, ${SAGE})`
              : `linear-gradient(90deg, ${ROSE_DEEP}, ${ROSE})`,
          }}
        />

        {/* grain */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            pointerEvents: "none",
            backgroundImage: GRAIN,
            backgroundSize: "200px 200px",
            opacity: 0.1,
            mixBlendMode: "screen",
          }}
        />

        {/* close */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            zIndex: 10,
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.1)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            outline: "none",
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <line x1="1" y1="1" x2="11" y2="11" stroke="rgba(255,253,250,0.6)" strokeWidth="1.8" strokeLinecap="round" />
            <line x1="11" y1="1" x2="1" y2="11" stroke="rgba(255,253,250,0.6)" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>

        {/* header */}
        <div style={{ position: "relative", zIndex: 1, padding: "20px 22px 16px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: isHair ? "rgba(94,154,113,0.12)" : "rgba(200,107,155,0.12)",
              border: `1px solid ${isHair ? "rgba(94,154,113,0.3)" : "rgba(200,107,155,0.3)"}`,
              borderRadius: "999px",
              padding: "5px 14px",
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: accent,
              marginBottom: "12px",
            }}
          >
            <span
              style={{
                width: "5px",
                height: "5px",
                background: accent,
                borderRadius: "50%",
                display: "inline-block",
              }}
            />
            {info.category === "hair" ? "Hair Loss" : "Skin Concern"} — Stage {info.stage}
          </div>
          <h3
            style={{
              margin: "0 0 6px 0",
              fontSize: "var(--fs-subtitle)",
              fontWeight: 900,
              color: "#fffdfa",
              lineHeight: 1.2,
            }}
          >
            Book Your Consultation
          </h3>
          <p
            style={{
              margin: 0,
              fontSize: "var(--fs-small)",
              color: "rgba(255,253,250,0.5)",
              lineHeight: 1.55,
            }}
          >
            {info.desc} — our specialist will reach out shortly.
          </p>
        </div>

        {/* divider */}
        <div
          style={{
            height: "1px",
            background: `linear-gradient(90deg, transparent, ${accent}44, transparent)`,
            margin: "0 22px",
          }}
        />

        {/* form */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            padding: "18px 22px 22px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <label style={{ display: "block" }}>
            <span style={{ display: "block", fontSize: "10px", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: accentDp, marginBottom: "6px" }}>
              Full Name
            </span>
            <input placeholder="Enter your name" type="text" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />
          </label>

          <label style={{ display: "block" }}>
            <span style={{ display: "block", fontSize: "10px", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: accentDp, marginBottom: "6px" }}>
              Phone Number
            </span>
            <input placeholder="Enter your number" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} style={inputStyle} />
          </label>

          <label style={{ display: "block" }}>
            <span style={{ display: "block", fontSize: "10px", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: accentDp, marginBottom: "6px" }}>
              Location / City
            </span>
            <input placeholder="Your city or area" type="text" value={city} onChange={(e) => setCity(e.target.value)} style={inputStyle} />
          </label>

          {fieldError && (
            <p style={{ margin: 0, fontSize: "11px", color: "#f87171", textAlign: "center" }}>
              {fieldError}
            </p>
          )}

          <button
            onClick={handleSubmit}
            disabled={submitting}
            onMouseEnter={() => setBtnHov(true)}
            onMouseLeave={() => setBtnHov(false)}
            style={{
              marginTop: "6px",
              width: "100%",
              padding: "14px",
              background: submitting ? "rgba(255,255,255,0.1)" : btnHov ? accentDp : accent,
              color: "#fff",
              borderRadius: "10px",
              fontSize: "var(--fs-eyebrow)",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              cursor: submitting ? "not-allowed" : "pointer",
              border: "none",
              outline: "none",
              display: "block",
              textAlign: "center",
              transition: "background 0.18s",
              boxShadow: submitting ? "none" : `0 8px 24px ${isHair ? "rgba(94,154,113,0.35)" : "rgba(200,107,155,0.35)"}`,
            }}
          >
            {submitting ? "Submitting..." : "Book Consultation"}
          </button>

          <p
            style={{
              margin: 0,
              fontSize: "var(--fs-eyebrow)",
              color: "rgba(255,253,250,0.28)",
              textAlign: "center",
              lineHeight: 1.5,
            }}
          >
            Our team will confirm your slot within 24 hours.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   MAIN SECTION
═══════════════════════════════════════════════════ */
export default function HairLossStage() {
  const [category, setCategory] = useState<"hair" | "skin">("hair");
  const [selected, setSelected] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);
  const [popup, setPopup] = useState<PopupInfo | null>(null);

  const startRef = useRef<number>(Date.now());
  const rafRef = useRef<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const tickProgress = useCallback(() => {
    const pct = Math.min(
      ((Date.now() - startRef.current) / TAB_INTERVAL) * 100,
      100
    );
    setProgress(pct);
    if (pct < 100) rafRef.current = requestAnimationFrame(tickProgress);
  }, []);

  const switchTo = useCallback(
    (cat: "hair" | "skin") => {
      setCategory(cat);
      setSelected(null);
      setProgress(0);
      startRef.current = Date.now();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (timerRef.current) clearTimeout(timerRef.current);
      rafRef.current = requestAnimationFrame(tickProgress);
    },
    [tickProgress]
  );

  useEffect(() => {
    const schedule = () => {
      timerRef.current = setTimeout(() => {
        setCategory((prev) => {
          const next = prev === "hair" ? "skin" : "hair";
          setSelected(null);
          setProgress(0);
          startRef.current = Date.now();
          if (rafRef.current) cancelAnimationFrame(rafRef.current);
          rafRef.current = requestAnimationFrame(tickProgress);
          return next;
        });
        schedule();
      }, TAB_INTERVAL);
    };
    startRef.current = Date.now();
    rafRef.current = requestAnimationFrame(tickProgress);
    schedule();
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [tickProgress]);

  const stages = category === "hair" ? HAIR_STAGES : SKIN_STAGES;
  const hints = category === "hair" ? HAIR_HINTS : SKIN_HINTS;
  const accent = category === "hair" ? SAGE : ROSE;
  const accentDp = category === "hair" ? SAGE_DEEP : ROSE_DEEP;
  const glowColor =
    category === "hair" ? "rgba(94,154,113,0.3)" : "rgba(200,107,155,0.3)";

  return (
    <>
      <section
        style={{
          position: "relative",
          width: "100%",
          background: "#130e11",
          overflow: "hidden",
          padding: "25px 0 25px",
        }}
      >
        {/* Grain */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            pointerEvents: "none",
            backgroundImage: GRAIN,
            backgroundSize: "240px 240px",
            opacity: 0.12,
            mixBlendMode: "screen",
          }}
        />

        {/* Sage glow — top left */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "-80px",
            left: "-80px",
            width: "560px",
            height: "400px",
            background:
              "radial-gradient(ellipse, rgba(94,154,113,0.2) 0%, transparent 65%)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        {/* Rose glow — bottom right */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            bottom: "-60px",
            right: "-60px",
            width: "520px",
            height: "380px",
            background:
              "radial-gradient(ellipse, rgba(200,107,155,0.2) 0%, transparent 65%)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        {/* Top hairline */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(94,154,113,0.5), rgba(200,107,155,0.4), transparent)",
            zIndex: 3,
          }}
        />

        {/* ── inner ── */}
        <div
          className="stage-inner"
          style={{
            position: "relative",
            zIndex: 10,
            maxWidth: "960px",
            margin: "0 auto",
            padding: "0 36px",
          }}
        >
          {/* ── HEADING ── */}
          <div style={{ marginBottom: "36px", textAlign: "center" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "12px",
              }}
            >
              <span
                style={{
                  display: "block",
                  width: "36px",
                  height: "1.5px",
                  background: "#c86b9b",
                }}
              />
              <span
                style={{
                  fontSize: "var(--fs-eyebrow)",
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  color: "#c86b9b",
                  fontWeight: 700,
                }}
              >
                Self Diagnosis
              </span>
              <span
                style={{
                  display: "block",
                  width: "36px",
                  height: "1.5px",
                  background: "#c86b9b",
                }}
              />
            </div>
            <h2
              style={{
                fontSize: "var(--fs-title)",
                fontWeight: 900,
                margin: "0 0 10px 0",
                letterSpacing: "-0.6px",
                lineHeight: 1.1,
                background:
                  "linear-gradient(135deg, #fffdfa 30%, #c86b9b 65%, #5e9a71 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Find Your Stage,
              <br />
              Start Your Transformation
            </h2>
            <p
              style={{
                fontSize: "var(--fs-body)",
                color: "rgba(255,253,250,0.48)",
                margin: "0 auto",
                maxWidth: "460px",
                lineHeight: 1.65,
              }}
            >
              Select your hair loss or skin concern stage — get a personalised
              treatment recommendation instantly.
            </p>
          </div>

          {/* ── TAB SWITCHER ── */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "28px",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "999px",
                padding: "5px",
                gap: "4px",
              }}
            >
              {(["hair", "skin"] as const).map((cat) => {
                const active = category === cat;
                const col = cat === "hair" ? SAGE : ROSE;
                const colDp = cat === "hair" ? SAGE_DEEP : ROSE_DEEP;
                return (
                  <button
                    key={cat}
                    onClick={() => switchTo(cat)}
                    style={{
                      position: "relative",
                      padding: "9px 24px",
                      borderRadius: "999px",
                      border: "none",
                      outline: "none",
                      cursor: "pointer",
                      background: active
                        ? `linear-gradient(135deg, ${colDp}, ${col})`
                        : "transparent",
                      color: active ? "#fff" : "rgba(255,253,250,0.45)",
                      fontSize: "var(--fs-small)",
                      fontWeight: 700,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      transition: "all 0.28s cubic-bezier(0.22,1,0.36,1)",
                      boxShadow: active
                        ? `0 4px 20px ${cat === "hair" ? "rgba(94,154,113,0.45)" : "rgba(200,107,155,0.45)"}`
                        : "none",
                    }}
                  >
                    {cat === "hair" ? "Hair Loss" : "Skin Concern"}
                    {active && (
                      <span
                        style={{
                          position: "absolute",
                          bottom: "6px",
                          left: "50%",
                          transform: "translateX(-50%)",
                          display: "block",
                          height: "2px",
                          width: `${progress * 0.6}%`,
                          maxWidth: "60%",
                          background: "rgba(255,255,255,0.5)",
                          borderRadius: "999px",
                          transition: "none",
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── STAGE CARDS ── */}
          <div className="stage-cards">
            {stages.map((s) => (
              <StageCard
                key={`${category}-${s.stage}`}
                {...s}
                category={category}
                selected={selected === s.stage}
                onClick={() => {
                  setSelected((p) => (p === s.stage ? null : s.stage));
                  setPopup({ category, stage: s.stage, desc: s.desc });
                }}
              />
            ))}
          </div>

          {/* ── HINT STRIP ── */}
          {selected !== null && (
            <div
              style={{
                marginTop: "18px",
                padding: "14px 18px",
                background: "rgba(255,253,250,0.04)",
                border: `1px solid ${category === "hair" ? "rgba(94,154,113,0.3)" : "rgba(200,107,155,0.3)"}`,
                borderLeft: `3px solid ${accent}`,
                borderRadius: "12px",
                display: "flex",
                alignItems: "flex-start",
                gap: "12px",
                animation: "fadeUp 0.22s ease",
                backdropFilter: "blur(8px)",
                boxShadow: `0 8px 32px rgba(0,0,0,0.3), 0 0 24px ${glowColor}`,
              }}
            >
              <div
                style={{
                  flexShrink: 0,
                  marginTop: "2px",
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  background: `linear-gradient(135deg, ${accentDp}, ${accent})`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: `0 4px 12px ${glowColor}`,
                }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M6 2v4l2.5 2.5"
                    stroke="#fff"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="6" cy="6" r="5" stroke="#fff" strokeWidth="1.5" />
                </svg>
              </div>
              <div>
                <p
                  style={{
                    margin: "0 0 4px 0",
                    fontSize: "var(--fs-small)",
                    fontWeight: 800,
                    color: accent,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  Stage {selected} — {stages[selected - 1].desc}
                </p>
                <p
                  style={{
                    margin: 0,
                    fontSize: "var(--fs-small)",
                    color: "rgba(255,253,250,0.65)",
                    lineHeight: 1.65,
                  }}
                >
                  {hints[selected]}
                </p>
              </div>
            </div>
          )}

          {/* caption */}
          <p
            style={{
              textAlign: "center",
              margin: "16px 0 0 0",
              fontSize: "11px",
              color: "rgba(255,253,250,0.22)",
              letterSpacing: "0.08em",
            }}
          >
            Choose your skin &amp; / hair concern
          </p>
        </div>
      </section>

      {/* ── BOOKING POPUP ── */}
      {popup !== null && (
        <BookingPopup
          info={popup}
          onClose={() => {
            setPopup(null);
            setSelected(null);
          }}
        />
      )}

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(28px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)    scale(1);    }
        }

        .stage-cards {
          display: flex;
          align-items: stretch;
          gap: 10px;
        }

        @media (max-width: 520px) {
          .stage-inner {
            padding: 0 12px !important;
          }
          .stage-cards {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
          }
          .stage-card-img {
            width: 94px !important;
            height: 94px !important;
          }
        }
      `}</style>
    </>
  );
}