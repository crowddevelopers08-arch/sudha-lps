'use client'

import { useEffect, useRef, useState } from "react";
import TrustSection from "./trustsection";

const SAGE = "#5e9a71";
const ROSE = "#c86b9b";
const ROSE_DEEP = "#b72c78";

const LEFT_ITEMS = [
  { num: "01", label: "In-Depth Consultation" },
  { num: "02", label: "Treatment Plans" },
  { num: "03", label: "Advanced Technology" },
];

const RIGHT_ITEMS = [
  { num: "04", label: "Follow-Up & Monitoring" },
  { num: "05", label: "Real, Lasting Results" },
  { num: "06", label: "Natural Healing" },
];

const ALL_STEPS = [...LEFT_ITEMS, ...RIGHT_ITEMS];

interface StepNode {
  num: string;
  label: string;
  sage: boolean;
  x: number;
  y: number;
  angle: number;
}

export default function HolisticApproach() {
  const [btnHover, setBtnHover] = useState(false);
  const orbitRef = useRef<HTMLDivElement>(null);
  const [nodes, setNodes] = useState<StepNode[]>([]);
  const [size, setSize] = useState(520);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function checkMobile() {
      setIsMobile(window.innerWidth < 640);
    }
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    function compute() {
      if (!orbitRef.current) return;
      const s = orbitRef.current.offsetWidth;
      setSize(s);
      const cx = s / 2;
      const cy = s / 2;
      const r = s * 0.43;
      const computed: StepNode[] = ALL_STEPS.map((step, i) => {
        const angle = (-90 + i * 60) * (Math.PI / 180);
        return {
          ...step,
          sage: i < 3,
          x: cx + r * Math.cos(angle),
          y: cy + r * Math.sin(angle),
          angle,
        };
      });
      setNodes(computed);
    }
    if (!isMobile) {
      compute();
      window.addEventListener("resize", compute);
      return () => window.removeEventListener("resize", compute);
    }
  }, [isMobile]);

  const cx = size / 2;
  const cy = size / 2;
  const cardR = 76;

  return (
    <>
      <style>{`
        /* ── Orbit (desktop) ── */
        .holistic-orbit-wrap {
          position: relative;
          width: 520px;
          height: 520px;
          margin: 0 auto;
        }
        .holistic-step-node {
          position: absolute;
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
          z-index: 10;
        }
        .holistic-step-pill {
          background: rgba(255, 253, 250, 0.95);
          border: 0.5px solid rgba(91, 85, 88, 0.18);
          padding: 9px 14px;
          font-size: 13px;
          font-weight: 600;
          color: #241f21;
          white-space: nowrap;
          line-height: 1.3;
          letter-spacing: 0.01em;
        }
        .holistic-step-num {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 700;
          color: #fff;
          flex-shrink: 0;
          border: 2.5px solid #fff;
        }

        /* ── Mobile grid ── */
        .holistic-mobile-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          padding: 0 16px;
          max-width: 480px;
          margin: 0 auto;
        }
        .holistic-mobile-card {
          background: rgba(255, 253, 250, 0.97);
          border: 0.5px solid rgba(91, 85, 88, 0.14);
          border-radius: 12px;
          padding: 16px 14px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.05);
          position: relative;
          overflow: hidden;
        }
        .holistic-mobile-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          border-radius: 12px 12px 0 0;
        }
        .holistic-mobile-card.sage::before { background: #5e9a71; }
        .holistic-mobile-card.rose::before { background: #c86b9b; }
        .holistic-mobile-num {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 700;
          color: #fff;
          flex-shrink: 0;
        }
        .holistic-mobile-label {
          font-size: 12px;
          font-weight: 600;
          color: #241f21;
          line-height: 1.4;
          letter-spacing: 0.01em;
        }

        /* ── Mobile center badge ── */
        .holistic-mobile-center {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin: 0 auto 24px;
          width: 110px;
          height: 110px;
          border-radius: 50%;
          border: 2px solid #5e9a71;
          background: rgba(255,253,250,0.97);
          outline: 8px solid rgba(94,154,113,0.08);
          text-align: center;
        }

        @media (max-width: 639px) {
          .holistic-section {
            padding-bottom: 34px !important;
          }
          .holistic-content {
            padding: 34px 14px 0 !important;
          }
          .holistic-header {
            margin-bottom: 22px !important;
          }
          .holistic-header h2 {
            font-size: clamp(26px, 8vw, 34px) !important;
            line-height: 1.08 !important;
          }
          .holistic-header p {
            max-width: 300px;
            margin: 0 auto !important;
            font-size: 14px !important;
            line-height: 1.5 !important;
          }
          .holistic-mobile-center {
            width: 94px !important;
            height: 94px !important;
            margin-bottom: 18px !important;
            outline-width: 6px !important;
          }
          .holistic-mobile-grid {
            gap: 10px !important;
            padding: 0 !important;
            max-width: 360px !important;
          }
          .holistic-mobile-card {
            min-height: 92px;
            border-radius: 14px !important;
            padding: 12px 10px !important;
            gap: 8px !important;
          }
          .holistic-mobile-num {
            width: 30px !important;
            height: 30px !important;
            font-size: 10px !important;
          }
          .holistic-mobile-label {
            font-size: 11px !important;
            line-height: 1.35 !important;
          }
          .holistic-cta {
            margin-top: 24px !important;
          }
          .holistic-cta a {
            width: min(100%, 280px);
            justify-content: center;
            padding: 10px 18px !important;
            text-align: center;
          }
        }

        @media (max-width: 380px) {
          .holistic-mobile-grid {
            grid-template-columns: 1fr !important;
            max-width: 280px !important;
          }
          .holistic-mobile-card {
            min-height: 0 !important;
            flex-direction: row !important;
            align-items: center !important;
          }
        }
      `}</style>

      <section
        className="holistic-section"
        style={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
          background: "#f6f2ec",
          paddingBottom: "60px",
        }}
      >
        {/* Sage glow top-left */}
        <div aria-hidden style={{
          position: "absolute", top: 0, left: 0,
          width: "42%", height: "56%",
          background: "radial-gradient(ellipse at 0% 0%, rgba(94,154,113,0.13) 0%, transparent 70%)",
          zIndex: 1, pointerEvents: "none",
        }} />
        {/* Rose glow bottom-right */}
        <div aria-hidden style={{
          position: "absolute", right: 0, bottom: 0,
          width: "38%", height: "48%",
          background: "radial-gradient(ellipse at 100% 100%, rgba(200,107,155,0.12) 0%, transparent 70%)",
          zIndex: 1, pointerEvents: "none",
        }} />

        <div className="holistic-content" style={{ position: "relative", zIndex: 2, padding: "60px 20px 0" }}>

          {/* Header */}
          <div className="holistic-header" style={{ textAlign: "center", marginBottom: "48px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
              <span style={{ display: "block", width: "28px", height: "2px", background: SAGE }} />
              <span style={{
                fontSize: "11px", letterSpacing: "0.22em",
                textTransform: "uppercase", color: ROSE_DEEP, fontWeight: 700,
              }}>
                Patient Journey
              </span>
            </div>
            <h2 style={{
              fontSize: "var(--fs-title)", fontWeight: 800,
              color: "#241f21", margin: "0 0 6px", letterSpacing: "-0.2px",
            }}>
              Our Holistic Approach
            </h2>
            <p style={{ fontSize: "var(--fs-body)", color: "#5b5558", margin: 0, lineHeight: 1.6 }}>
              A complete care pathway personalised for every patient
            </p>
          </div>

          {/* ── MOBILE LAYOUT ── */}
          {isMobile ? (
            <>
              {/* Centre badge */}
              <div className="holistic-mobile-center">
                <span style={{
                  fontSize: "12px", fontWeight: 800, color: SAGE,
                  letterSpacing: "0.06em", textTransform: "uppercase", lineHeight: 1.3,
                }}>
                  Holistic<br />Approach
                </span>
                <span style={{
                  fontSize: "9px", letterSpacing: "0.15em",
                  textTransform: "uppercase", color: ROSE_DEEP, marginTop: "4px",
                  fontWeight: 700,
                }}>
                  Care Plan
                </span>
              </div>

              {/* 2-column step grid */}
              <div className="holistic-mobile-grid">
                {ALL_STEPS.map((step, i) => {
                  const isSage = i < 3;
                  return (
                    <div
                      key={step.num}
                      className={`holistic-mobile-card ${isSage ? "sage" : "rose"}`}
                    >
                      <div
                        className="holistic-mobile-num"
                        style={{ background: isSage ? SAGE : ROSE }}
                      >
                        {step.num}
                      </div>
                      <div className="holistic-mobile-label">{step.label}</div>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            /* ── DESKTOP ORBITAL LAYOUT ── */
            <div className="holistic-orbit-wrap" ref={orbitRef}>

              {/* Dashed orbit ring */}
              <div aria-hidden style={{
                position: "absolute", inset: 0, borderRadius: "50%",
                border: "1px dashed rgba(94,154,113,0.25)",
                pointerEvents: "none",
              }} />

              {/* SVG connector lines */}
              <svg
                style={{
                  position: "absolute", inset: 0,
                  width: "100%", height: "100%",
                  pointerEvents: "none", zIndex: 5, overflow: "visible",
                }}
                viewBox={`0 0 ${size} ${size}`}
              >
                {nodes.map((n) => {
                  const lx = cx + cardR * Math.cos(n.angle);
                  const ly = cy + cardR * Math.sin(n.angle);
                  return (
                    <line
                      key={n.num}
                      x1={lx} y1={ly}
                      x2={n.x} y2={n.y}
                      stroke={n.sage ? SAGE : ROSE}
                      strokeWidth="1.5"
                      strokeDasharray="5 4"
                      opacity="0.45"
                    />
                  );
                })}
              </svg>

              {/* Center circle */}
              <div style={{
                position: "absolute", top: "50%", left: "50%",
                transform: "translate(-50%, -50%)",
                width: "150px", height: "150px", borderRadius: "50%",
                border: `2px solid ${SAGE}`,
                background: "rgba(255,253,250,0.97)",
                outline: "10px solid rgba(94,154,113,0.07)",
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center",
                textAlign: "center", padding: "16px", zIndex: 20,
              }}>
                <span style={{
                  fontSize: "13px", fontWeight: 800, color: SAGE,
                  letterSpacing: "0.06em", textTransform: "uppercase", lineHeight: 1.3,
                }}>
                  Holistic<br />Approach
                </span>
                <span style={{
                  fontSize: "10px", letterSpacing: "0.15em",
                  textTransform: "uppercase", color: ROSE_DEEP, marginTop: "5px",
                  fontWeight: 700,
                }}>
                  Care Plan
                </span>
              </div>

              {/* Step nodes */}
              {nodes.map((n) => {
                const isLeft = n.x < cx - 10;
                const numEl = (
                  <div
                    className="holistic-step-num"
                    style={{ background: n.sage ? SAGE : ROSE }}
                  >
                    {n.num}
                  </div>
                );
                const pillEl = (
                  <div
                    className="holistic-step-pill"
                    style={{ borderRadius: isLeft ? "999px 0 0 999px" : "0 999px 999px 0" }}
                  >
                    {n.label}
                  </div>
                );
                return (
                  <div
                    key={n.num}
                    className="holistic-step-node"
                    style={{ left: `${n.x}px`, top: `${n.y}px` }}
                  >
                    {isLeft ? <>{pillEl}{numEl}</> : <>{numEl}{pillEl}</>}
                  </div>
                );
              })}
            </div>
          )}

          {/* CTA Button */}
          <div className="holistic-cta" style={{ display: "flex", justifyContent: "center", marginTop: "36px" }}>
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
        </div>


      </section>
    </>
  );
}
