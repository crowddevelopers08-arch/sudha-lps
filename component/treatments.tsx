'use client'

import { useState, useEffect, useRef } from "react";

const GRAIN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23g)' opacity='1'/%3E%3C/svg%3E")`;

const AUTO_MS = 5000;

const CATEGORIES = [
  {
    id: "hair",
    label: "Hair Treatments",
    accent: "#5e9a71",
    treatments: [
      {
        name: "Hair Transplant (FUE / FUT)",
        tagline: "Permanent solution for advanced hair loss",
        desc: "Follicle-by-follicle extraction and implantation for natural, lasting density with zero visible scarring.",
        before: "/bfaf2.jpeg",
        after: "/bfaf4.jpeg",
      },
      {
        name: "Platelet Growth Therapy",
        tagline: "Uses your own blood to stimulate hair growth",
        desc: "Concentrated platelets injected into the scalp reactivate dormant follicles and boost natural regrowth.",
        before: "/bfaf.jpeg",
        after: "/bfaf1.jpeg",
      },
      {
        name: "GFC Treatment",
        tagline: "Advanced growth factor therapy for stronger regrowth",
        desc: "High-concentration growth factor concentrate targets miniaturised follicles for thicker, denser hair.",
        before: "/treat4.jpg",
        after: "/treat5.jpg",
      },
    ],
  },
  {
    id: "skin",
    label: "Skin Treatments",
    accent: "#c86b9b",
    treatments: [
      {
        name: "Acne Scar Revision",
        tagline: "Reduces deep scars & improves skin texture",
        desc: "Combination micro-needling and resurfacing breaks down fibrous scar tissue and triggers collagen rebuilding.",
        before: "/treat7.png",
        after: "/treat6.png",
      },
      {
        name: "Carbon Laser Facial",
        tagline: "Instant glow + oil control + pore tightening",
        desc: "Carbon paste absorbs impurities; the laser blasts it away - exfoliating, tightening and brightening in one pass.",
        before: "/treat9.png",
        after: "/treat8.png",
      },
      {
        name: "Laser Toning",
        tagline: "Targets pigmentation & uneven skin tone",
        desc: "Low-fluence Q-switched passes break up melanin clusters, steadily evening the complexion over sessions.",
        before: "/treat10.png",
        after: "/treat11.png",
      },
      {
        name: "Laser Hair Removal (LHR)",
        tagline: "Long-term hair reduction with smooth skin",
        desc: "Diode laser energy selectively disables hair follicles at the root - permanent reduction after recommended sessions.",
        before: "/treat12.png",
        after: "/treat13.png",
      },
    ],
  },
];

type Treatment = { name: string; tagline: string; desc: string; before: string; after: string };

function TreatmentCard({ treatment, accent }: { treatment: Treatment; accent: string }) {
  return (
    <div className="treatment-card" style={{
      flex: "1 1 240px",
      maxWidth: "300px",
      minWidth: "220px",
      background: "#fffdfa",
      border: "1px solid rgba(94,154,113,0.12)",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      position: "relative",
      boxShadow: "0 16px 40px rgba(36,31,33,0.08)",
    }}>
      <div style={{ height: "3px", background: accent, opacity: 0.85 }} />

      <div style={{ padding: "16px 14px 12px" }}>
        <p style={{
          fontSize: "var(--fs-small)", fontWeight: 900,
          color: "#241f21", margin: "0 0 5px 0",
          letterSpacing: "0.02em", lineHeight: 1.25,
          textTransform: "uppercase",
        }}>
          {treatment.name}
        </p>

        <p style={{
          fontSize: "11px", fontWeight: 600,
          color: accent, margin: "0 0 8px 0",
          letterSpacing: "0.04em",
          opacity: 0.9,
        }}>
          {treatment.tagline}
        </p>

        <p style={{
          fontSize: "11px", color: "#5b5558",
          margin: 0, lineHeight: 1.65,
        }}>
          {treatment.desc}
        </p>
      </div>

      <div style={{ position: "relative", height: "160px", display: "flex", marginTop: "auto" }}>
        <div style={{ position: "relative", width: "50%", overflow: "hidden" }}>
          <img src={treatment.before} alt="before"
            style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"top center",
              display:"block", filter:"grayscale(45%) contrast(1.02) brightness(0.82)" }}
            onError={e => { (e.target as HTMLImageElement).style.opacity = "0"; }}
          />
          <div style={{ position:"absolute", inset:0,
            background:"linear-gradient(to right, rgba(255,253,250,0.24) 0%, transparent 80%)" }} />
          <span style={{
            position:"absolute", top:"8px", left:"7px",
            fontSize:"8.5px", fontWeight:900,
            letterSpacing:"0.18em", textTransform:"uppercase",
            color:"#5b5558",
            background:"rgba(255,253,250,0.84)",
            padding:"3px 7px",
            border:"1px solid rgba(200,107,155,0.3)",
          }}>Before</span>

          <div style={{ position:"absolute", inset:0,
            backgroundImage:GRAIN, backgroundRepeat:"repeat", backgroundSize:"160px",
            opacity:0.18, mixBlendMode:"multiply" }} />
        </div>

        <div style={{
          position:"absolute", top:0, left:"50%", transform:"translateX(-50%)",
          width:"2px", height:"100%",
          background:`linear-gradient(to bottom, transparent, ${accent} 20%, ${accent} 80%, transparent)`,
          zIndex:3,
        }}/>

        <div style={{
          position:"absolute", top:"50%", left:"50%",
          transform:"translate(-50%,-50%) rotate(45deg)",
          width:"22px", height:"22px",
          background:"#fffdfa",
          border:`1.5px solid ${accent}`,
          display:"flex", alignItems:"center", justifyContent:"center",
          zIndex:4,
        }}>
          <span style={{ transform:"rotate(-45deg)", fontSize:"7px",
            color: accent, fontWeight:900, lineHeight:1 }}>vs</span>
        </div>

        <div style={{ position: "relative", width: "50%", overflow: "hidden" }}>
          <img src={treatment.after} alt="after"
            style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"top center",
              display:"block", filter:"grayscale(10%) contrast(1.03) brightness(0.92)" }}
            onError={e => { (e.target as HTMLImageElement).style.opacity = "0"; }}
          />
          <div style={{ position:"absolute", inset:0,
            background:"linear-gradient(to left, rgba(255,253,250,0.24) 0%, transparent 80%)" }} />
          <span style={{
            position:"absolute", top:"8px", right:"7px",
            fontSize:"8.5px", fontWeight:900,
            letterSpacing:"0.18em", textTransform:"uppercase",
            color: accent,
            background:"rgba(255,253,250,0.84)",
            padding:"3px 7px",
            border:`1px solid ${accent}55`,
          }}>After</span>

          <div style={{ position:"absolute", inset:0,
            backgroundImage:GRAIN, backgroundRepeat:"repeat", backgroundSize:"160px",
            opacity:0.14, mixBlendMode:"multiply" }} />
        </div>
      </div>
    </div>
  );
}

export default function Treatments() {
  const [catIdx, setCatIdx] = useState(0);
  const [fading, setFading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [btnHover, setBtnHover] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const startRef = useRef<number>(Date.now());
  const rafRef = useRef<number>(0);

  const tick = () => {
    const elapsed = Date.now() - startRef.current;
    const pct = Math.min((elapsed / AUTO_MS) * 100, 100);
    setProgress(pct);
    if (pct < 100) {
      rafRef.current = requestAnimationFrame(tick);
    }
  };

  const switchTo = (idx: number) => {
    setFading(true);
    setTimeout(() => {
      setCatIdx(idx);
      setFading(false);
      startRef.current = Date.now();
      setProgress(0);
      rafRef.current = requestAnimationFrame(tick);
    }, 280);
  };

  useEffect(() => {
    startRef.current = Date.now();
    rafRef.current = requestAnimationFrame(tick);

    const timer = setInterval(() => {
      switchTo((catIdx + 1) % CATEGORIES.length);
    }, AUTO_MS);

    return () => {
      clearInterval(timer);
      cancelAnimationFrame(rafRef.current);
    };
  }, [catIdx]);

  const cat = CATEGORIES[catIdx];

  return (
    <section id="treatments" style={{
      position: "relative",
      width: "100%",
      background: "#f6f2ec",
      overflow: "hidden",
      padding: "40px 0 40px",
    }}>
      <div aria-hidden style={{
        position:"absolute", inset:0, zIndex:1, pointerEvents:"none",
        backgroundImage:GRAIN, backgroundRepeat:"repeat", backgroundSize:"240px",
        opacity:0.2, mixBlendMode:"multiply",
      }}/>
      <div aria-hidden style={{
        position:"absolute", inset:0, zIndex:1, pointerEvents:"none",
        backgroundImage:"repeating-linear-gradient(135deg,transparent,transparent 7px,rgba(91,85,88,0.025) 7px,rgba(91,85,88,0.025) 8px)",
      }}/>

      <div aria-hidden style={{
        position:"absolute", top:0, left:0, width:"40%", height:"50%",
        background:"radial-gradient(ellipse at 0% 0%, rgba(94,154,113,0.14) 0%, transparent 65%)",
        zIndex:2, pointerEvents:"none",
      }}/>

      <svg aria-hidden style={{ position:"absolute", top:0, left:"4%", zIndex:2, pointerEvents:"none" }}
        width="320" height="55" viewBox="0 0 320 55" fill="none">
        <path d="M20 0 Q18 18 17 28 Q16 36 18 44" stroke="rgba(94,154,113,0.28)" strokeWidth="2" fill="none"/>
        <ellipse cx="18" cy="46" rx="2.5" ry="4" fill="rgba(94,154,113,0.16)"/>
        <path d="M160 0 Q161 14 161 24 Q160 32 162 38" stroke="rgba(200,107,155,0.22)" strokeWidth="1.6" fill="none"/>
        <ellipse cx="162" cy="40" rx="2" ry="3.5" fill="rgba(200,107,155,0.14)"/>
        <path d="M290 0 Q291 12 290 20 Q289 28 291 34" stroke="rgba(94,154,113,0.18)" strokeWidth="1.5" fill="none"/>
        <ellipse cx="291" cy="36" rx="1.8" ry="3" fill="rgba(94,154,113,0.12)"/>
      </svg>

      <div className="treatments-inner" style={{ position:"relative", zIndex:10, maxWidth:"1220px", margin:"0 auto", padding:"0 44px" }}>
        <div style={{ marginBottom:"28px" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"10px" }}>
            <span style={{ display:"block", width:"36px", height:"3px", background:"#5e9a71" }}/>
            <span style={{ fontSize:"var(--fs-eyebrow)", letterSpacing:"0.26em", textTransform:"uppercase",
              color:"#b72c78", fontWeight:700 }}>
              Our Expertise
            </span>
          </div>
          <h2 style={{
            fontSize:"var(--fs-title)", fontWeight:900,
            color:"#241f21", margin:"0 0 8px 0",
            letterSpacing:"-0.4px", lineHeight:1.12,
            textShadow:"2px 3px 0px rgba(255,255,255,0.65)",
          }}>
            Skin &amp; Hair Treatments
          </h2>
          <p style={{ fontSize:"var(--fs-body)", color:"#5b5558", margin:0, lineHeight:1.6 }}>
            Science-backed treatments. Visible results. Personalised care.
          </p>
        </div>

        <div style={{ display:"flex", alignItems:"center", gap:"0", marginBottom:"26px",
          borderBottom:"1px solid rgba(94,154,113,0.14)" }}>
          {CATEGORIES.map((c, i) => {
            const active = i === catIdx;
            const hovered = hoveredCategory === c.id;
            return (
              <button
                key={c.id}
                onClick={() => switchTo(i)}
                onMouseEnter={() => setHoveredCategory(c.id)}
                onMouseLeave={() => setHoveredCategory(null)}
                style={{
                background:"transparent", border:"none",
                padding:"10px 22px 12px",
                fontSize:"var(--fs-small)", fontWeight:900,
                letterSpacing:"0.18em", textTransform:"uppercase",
                cursor:"pointer",
                color: hovered ? "#b72c78" : active ? "#241f21" : "#8a7f74",
                borderBottom: active || hovered ? "2.5px solid #b72c78" : "2.5px solid transparent",
                marginBottom:"-1px",
                transition:"color 0.2s, border-color 0.2s",
              }}>
                {c.label}
              </button>
            );
          })}

          <div style={{ flex:1, marginLeft:"16px", height:"2px",
            background:"rgba(94,154,113,0.08)", borderRadius:"2px", overflow:"hidden" }}>
            <div style={{
              height:"100%",
              width:`${progress}%`,
              background: cat.accent,
              opacity:0.65,
              transition:"width 0.05s linear",
              borderRadius:"2px",
            }}/>
          </div>
        </div>

        <div className="treatments-cards" style={{
          opacity: fading ? 0 : 1,
          transform: fading ? "translateY(8px)" : "translateY(0)",
          transition: "opacity 0.28s ease, transform 0.28s ease",
          display:"flex", flexWrap:"wrap", gap:"14px",
        }}>
          {cat.treatments.map(t => (
            <TreatmentCard key={t.name} treatment={t} accent={cat.accent} />
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
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

      <div aria-hidden style={{ position:"absolute", bottom:0, left:0, width:"100%", lineHeight:0, zIndex:4, pointerEvents:"none" }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none"
          style={{ display:"block", width:"100%", height:"60px" }} xmlns="http://www.w3.org/2000/svg">
          <path d="M0,32 C240,60 480,6 720,32 C960,60 1200,6 1440,32 L1440,60 L0,60 Z"
            fill="rgba(200,107,155,0.08)"/>
          <path d="M0,44 C180,22 360,56 540,40 C720,22 900,52 1080,38 C1260,22 1380,48 1440,42 L1440,60 L0,60 Z"
            fill="#f6f2ec"/>
        </svg>
      </div>
    </section>
  );
}
