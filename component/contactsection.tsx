'use client'

import React, { useState } from "react";

const GRAIN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23g)' opacity='1'/%3E%3C/svg%3E")`;

const HAIR_CONTACT_IMAGE = "/adult-male-having-balding-problems.jpg";
const SKIN_CONTACT_IMAGE = "/rejuvenating-facial-treatment.jpg";
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
const SKIN_CONCERN_STAGE_IMAGES: Record<string, string[]> = {
  "Acne / Breakouts":          ["/images1.png",  "/images2.png",  "/images3.png",  "/images4.png",  "/images5.png"],
  "Pigmentation / Dark Spots": ["/shakura-pigmentation-stages.jpeg",   "/shakura-pigmentation-stages1.jpeg",   "/shakura-pigmentation-stages2.jpeg",   "/shakura-pigmentation-stages3.jpeg",   "/shakura-pigmentation-stages4.png"],
  "Anti-Aging / Fine Lines":   ["/wrikingle.png",  "/wrikingle1.png",  "/wrikingle2.png",  "/wrikingle3.png",  "/wrikingle4.png"],
  "Laser Hair Removal":   ["/laser7.png",  "/laser6.jpeg",  "/laser8.jpeg",  "/laser4.jpeg",  "/laser10.jpeg"],
  "Other":           ["/laser1.jpeg",  "/laser2.jpeg",  "/laser11.webp",  "/laser3.jpeg",  "/laser9.jpeg"],
};
const LASER_TREATMENT_NAMES = [
  "Leg Laser",
  "Under Arms - Laser",
  "Beard hair - Laser",
  "Chin - Laser",
  "Hand laser",
];
const OTHER_TREATMENT_NAMES = [
  "Psoriasis",
  "Vitligo",
  "Acne scars",
  "Skin Toning",
  "Upper Lip Hair Removal",
];
const SAGE      = "#5e9a71";
const SAGE_DEEP = "#4f8562";
const ROSE      = "#c86b9b";
const ROSE_DEEP = "#b72c78";
const SK_BASE   = "#f2c8a8";
const SK_SEL    = "#f5d0b4";
const HR_COL    = "#2a1c10";


function MiniHead({ stage, selected }: { stage: number; selected: boolean }) {
  const cid = `mh-${stage}-${selected ? "s" : "u"}`;
  const sk  = selected ? SK_SEL : SK_BASE;
  const ear = selected ? "#ecc09a" : "#e0a878";
  return (
    <svg viewBox="0 0 60 74" width="44" height="55" fill="none">
      <defs><clipPath id={cid}><ellipse cx="30" cy="43" rx="22" ry="27"/></clipPath></defs>
      <ellipse cx="7" cy="45" rx="4" ry="5.5" fill={ear}/>
      <ellipse cx="53" cy="45" rx="4" ry="5.5" fill={ear}/>
      <ellipse cx="30" cy="43" rx="22" ry="27" fill={sk}/>
      <g clipPath={`url(#${cid})`}>
        {stage === 1 && <rect x="0" y="0" width="60" height="40" fill={HR_COL}/>}
        {stage === 2 && (<><rect x="0" y="0" width="60" height="40" fill={HR_COL}/><ellipse cx="13" cy="40" rx="8" ry="7.5" fill={sk}/><ellipse cx="47" cy="40" rx="8" ry="7.5" fill={sk}/></>)}
        {stage === 3 && (<><rect x="0" y="0" width="60" height="38" fill={HR_COL}/><ellipse cx="12" cy="38" rx="12" ry="11" fill={sk}/><ellipse cx="48" cy="38" rx="12" ry="11" fill={sk}/></>)}
        {stage === 4 && (<><rect x="0" y="0" width="60" height="36" fill={HR_COL}/><ellipse cx="11" cy="36" rx="15" ry="14" fill={sk}/><ellipse cx="49" cy="36" rx="15" ry="14" fill={sk}/><ellipse cx="30" cy="22" rx="10" ry="9" fill={sk}/></>)}
        {stage === 5 && (<><ellipse cx="30" cy="43" rx="22" ry="27" fill={sk}/><ellipse cx="9" cy="46" rx="9" ry="20" fill={HR_COL}/><ellipse cx="51" cy="46" rx="9" ry="20" fill={HR_COL}/><ellipse cx="30" cy="67" rx="20" ry="7" fill={HR_COL}/></>)}
      </g>
      <ellipse cx="30" cy="54" rx="13" ry="11" fill="rgba(0,0,0,0.06)"/>
    </svg>
  );
}

function MiniFace({ stage, selected }: { stage: number; selected: boolean }) {
  const sk  = selected ? SK_SEL : SK_BASE;
  const ear = selected ? "#ecc09a" : "#e0a878";
  const s1  = "rgba(185,72,50,0.52)";
  const pig = "rgba(145,80,45,0.22)";
  return (
    <svg viewBox="0 0 60 74" width="44" height="55" fill="none">
      <defs><clipPath id={`mf-${stage}-${selected ? "s" : "u"}`}><ellipse cx="30" cy="43" rx="22" ry="27"/></clipPath></defs>
      <ellipse cx="7" cy="45" rx="4" ry="5.5" fill={ear}/>
      <ellipse cx="53" cy="45" rx="4" ry="5.5" fill={ear}/>
      <ellipse cx="30" cy="43" rx="22" ry="27" fill={sk}/>
      <g clipPath={`url(#mf-${stage}-${selected ? "s" : "u"})`}>
        <rect x="0" y="0" width="60" height="26" fill={HR_COL}/>
      </g>
      {stage === 2 && (<><circle cx="24" cy="38" r="1.5" fill={s1}/><circle cx="36" cy="41" r="1.3" fill={s1}/><circle cx="28" cy="48" r="1.2" fill={s1}/></>)}
      {stage === 3 && (<><ellipse cx="21" cy="44" rx="7" ry="5" fill={pig}/><circle cx="24" cy="36" r="1.7" fill={s1}/><circle cx="37" cy="39" r="1.5" fill={s1}/><circle cx="30" cy="50" r="1.3" fill={s1}/></>)}
      {stage === 4 && (<><ellipse cx="19" cy="43" rx="8" ry="6" fill={pig}/><ellipse cx="41" cy="43" rx="7" ry="5.5" fill={pig}/><circle cx="22" cy="36" r="1.9" fill={s1}/><circle cx="35" cy="38" r="1.8" fill={s1}/><circle cx="28" cy="47" r="1.6" fill={s1}/><circle cx="38" cy="50" r="1.5" fill={s1}/></>)}
      {stage === 5 && (<><ellipse cx="19" cy="41" rx="10" ry="8" fill={pig}/><ellipse cx="41" cy="42" rx="10" ry="8" fill={pig}/><ellipse cx="30" cy="54" rx="12" ry="7" fill={pig}/><circle cx="22" cy="34" r="2.1" fill={s1}/><circle cx="30" cy="31" r="1.9" fill={s1}/><circle cx="38" cy="35" r="2.0" fill={s1}/><circle cx="20" cy="44" r="1.8" fill={s1}/><circle cx="36" cy="47" r="1.7" fill={s1}/></>)}
      <ellipse cx="30" cy="54" rx="13" ry="11" fill="rgba(0,0,0,0.06)"/>
    </svg>
  );
}

/* ── Stage Picker ── */
function StagePicker({
  label, stages, selected, onSelect, accent, accentDp, imagePaths, imageAltPrefix, imageLabels,
}: {
  label: string;
  stages: { stage: number; desc: string }[];
  selected: number | null;
  onSelect: (n: number) => void;
  accent: string; accentDp: string;
  imagePaths: string[];
  imageAltPrefix: string;
  imageLabels?: string[];
}) {
  const isHairAccent = accent === SAGE;
  return (
    <div>
      <span style={{
        display: "block", marginBottom: "10px",
        fontSize: "10px", fontWeight: 700,
        letterSpacing: "0.18em", textTransform: "uppercase",
        color: accent,
      }}>
        {label}
      </span>
      <div style={{ display: "flex", gap: "8px", flexWrap: "nowrap", overflowX: "auto", paddingBottom: "4px" }}>
        {stages.map(({ stage, desc }) => {
          const sel = selected === stage;
          const imageLabel = imageLabels?.[stage - 1];
          return (
            <button
              key={stage}
              onClick={() => onSelect(sel ? -1 : stage)}
              style={{
                flex: "1 1 0", minWidth: "96px", maxWidth: "132px",
                background: sel
                  ? (isHairAccent ? "rgba(94,154,113,0.16)" : "rgba(200,107,155,0.16)")
                  : "rgba(255,255,255,0.05)",
                border: sel
                  ? `1.5px solid ${accent}`
                  : "1.5px solid rgba(255,255,255,0.1)",
                borderRadius: "12px",
                padding: "11px 8px 9px",
                display: "flex", flexDirection: "column", alignItems: "center",
                cursor: "pointer", outline: "none",
                transition: "all 0.22s cubic-bezier(0.22,1,0.36,1)",
                transform: sel ? "translateY(-5px) scale(1.04)" : "none",
                boxShadow: sel
                  ? `0 10px 28px rgba(0,0,0,0.35), 0 0 0 1px ${accent}55, 0 0 16px ${isHairAccent ? "rgba(94,154,113,0.2)" : "rgba(200,107,155,0.2)"}`
                  : "0 2px 10px rgba(0,0,0,0.2)",
                position: "relative", overflow: "hidden",
              }}
            >
              {sel && (
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: "2px",
                  background: `linear-gradient(90deg, ${accentDp}, ${accent})`,
                  borderRadius: "12px 12px 0 0",
                }}/>
              )}
              <div style={{
                width: "78px",
                height: "70px",
                borderRadius: "16px",
                overflow: "hidden",
                marginBottom: "6px",
                border: sel ? `1.5px solid ${accent}` : "1px solid rgba(255,255,255,0.12)",
                background: "linear-gradient(135deg, rgba(255,255,255,0.13), rgba(255,255,255,0.05))",
                filter: sel
                  ? `drop-shadow(0 0 8px ${isHairAccent ? "rgba(94,154,113,0.5)" : "rgba(200,107,155,0.5)"})`
                  : "drop-shadow(0 2px 4px rgba(0,0,0,0.3))",
                transition: "filter 0.22s, border-color 0.22s, transform 0.22s",
                transform: sel ? "scale(1.02)" : "scale(1)",
              }}>
                <img
                  src={imagePaths[stage - 1]}
                  alt={`${imageAltPrefix} stage ${stage}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    display: "block",
                    filter: sel ? "brightness(1.05) saturate(1.08)" : "none",
                  }}
                />
              </div>
              <p style={{
                margin: "0 0 2px 0", fontSize: "11px", fontWeight: 800,
                color: sel ? accent : "rgba(255,253,250,0.7)", lineHeight: 1,
                transition: "color 0.22s",
              }}>
                {imageLabel ?? `Stage ${stage}`}
              </p>
              {!imageLabel && (
                <p style={{
                  margin: 0, fontSize: "9px",
                  color: sel ? "rgba(255,253,250,0.65)" : "rgba(255,253,250,0.3)",
                  lineHeight: 1.3, textAlign: "center",
                  transition: "color 0.22s",
                }}>
                  {desc}
                </p>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

const HAIR_STAGE_DATA = [
  { stage: 1, desc: ""     },
  { stage: 2, desc: ""        },
  { stage: 3, desc: ""    },
  { stage: 4, desc: "" },
  { stage: 5, desc: ""    },
];
const SKIN_STAGE_DATA = [
  { stage: 1, desc: ""       },
  { stage: 2, desc: ""        },
  { stage: 3, desc: ""    },
  { stage: 4, desc: "" },
  { stage: 5, desc: ""      },
];


const inputBase: React.CSSProperties = {
  width: "100%",
  border: "1px solid rgba(255,255,255,0.1)",
  background: "rgba(255,255,255,0.06)",
  padding: "11px 14px",
  fontSize: "var(--fs-body)",
  color: "#fffdfa",
  outline: "none",
  boxSizing: "border-box",
  borderRadius: "8px",
  transition: "border-color 0.2s",
};

function Field({ label, placeholder, as = "input", accent = SAGE, value, onChange }: {
  label: string; placeholder: string; as?: "input" | "textarea"; accent?: string;
  value?: string; onChange?: (v: string) => void;
}) {
  return (
    <label style={{ display: "block" }}>
      <span style={{
        display: "block", marginBottom: "7px",
        fontSize: "10px", fontWeight: 700,
        letterSpacing: "0.18em", textTransform: "uppercase", color: accent,
      }}>
        {label}
      </span>
      {as === "textarea" ? (
        <textarea placeholder={placeholder} rows={4} value={value ?? ""} onChange={e => onChange?.(e.target.value)}
          style={{ ...inputBase, resize: "vertical", minHeight: "100px" }} />
      ) : (
        <input placeholder={placeholder} value={value ?? ""} onChange={e => onChange?.(e.target.value)} style={inputBase} />
      )}
    </label>
  );
}

function SelectField({ label, options, accent = SAGE, value, onChange }: {
  label: string; options: string[]; accent?: string;
  value?: string; onChange?: (v: string) => void;
}) {
  return (
    <label style={{ display: "block" }}>
      <span style={{
        display: "block", marginBottom: "7px",
        fontSize: "10px", fontWeight: 700,
        letterSpacing: "0.18em", textTransform: "uppercase", color: accent,
      }}>
        {label}
      </span>
      <div style={{ position: "relative" }}>
        <select value={value ?? ""} onChange={e => onChange?.(e.target.value)} style={{
          ...inputBase, appearance: "none",
          WebkitAppearance: "none",
          paddingRight: "38px", cursor: "pointer",
        }}>
          <option value="" disabled style={{ background: "#1c1518", color: "#fffdfa" }}>Select an option</option>
          {options.map(o => <option key={o} value={o} style={{ background: "#1c1518", color: "#fffdfa" }}>{o}</option>)}
        </select>
        <svg style={{ position: "absolute", right: "14px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}
          width="13" height="13" viewBox="0 0 13 13" fill="none">
          <path d="M2.5 4.5l4 4 4-4" stroke={accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </label>
  );
}

interface FormFields {
  name: string; phone: string; email: string; concern: string;
  stage: number | null; message: string;
}

/* ── Hair Form ── */
function HairForm({ values, onChange }: { values: FormFields; onChange: (k: keyof FormFields, v: any) => void }) {
  return (
    <div className="contact-form-stack" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <div className="contact-field-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0,1fr))", gap: "10px" }}>
        <Field label="Full Name"    placeholder="Enter your name"   accent={SAGE} value={values.name}  onChange={v => onChange("name", v)} />
        <Field label="Phone Number" placeholder="Enter your number" accent={SAGE} value={values.phone} onChange={v => onChange("phone", v)} />
      </div>
      <div className="contact-field-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0,1fr))", gap: "10px" }}>
        <Field label="Email Address" placeholder="Enter your email" accent={SAGE} value={values.email}   onChange={v => onChange("email", v)} />
        <SelectField label="Hair Concern" accent={SAGE} value={values.concern} onChange={v => onChange("concern", v)} options={[
          "Hair Fall / Thinning", "Receding Hairline", "Scalp Issues",
          "Hair Transplant", "Other",
        ]} />
      </div>
      <StagePicker
        label="Select Hair Loss Stage"
        stages={HAIR_STAGE_DATA}
        selected={values.stage}
        onSelect={n => onChange("stage", n === -1 ? null : n)}
        accent={SAGE} accentDp={SAGE_DEEP}
        imagePaths={HAIR_STAGE_IMAGES}
        imageAltPrefix="Hair loss"
      />
      <div className="contact-message">
        <Field label="Message" placeholder="Describe your hair concern in detail" as="textarea" accent={SAGE} value={values.message} onChange={v => onChange("message", v)} />
      </div>
    </div>
  );
}

/* ── Skin Form ── */
function SkinForm({ values, onChange }: { values: FormFields; onChange: (k: keyof FormFields, v: any) => void }) {
  const stageImages = (values.concern && SKIN_CONCERN_STAGE_IMAGES[values.concern]) || SKIN_STAGE_IMAGES;
  const isLaserConcern = values.concern === "Laser Treatment";
  const isOtherConcern = values.concern === "Other";
  const treatmentLabels = isLaserConcern ? LASER_TREATMENT_NAMES : isOtherConcern ? OTHER_TREATMENT_NAMES : undefined;
  return (
    <div className="contact-form-stack" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <div className="contact-field-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0,1fr))", gap: "10px" }}>
        <Field label="Full Name"    placeholder="Enter your name"   accent={ROSE} value={values.name}  onChange={v => onChange("name", v)} />
        <Field label="Phone Number" placeholder="Enter your number" accent={ROSE} value={values.phone} onChange={v => onChange("phone", v)} />
      </div>
      <div className="contact-field-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0,1fr))", gap: "10px" }}>
        <Field label="Email Address" placeholder="Enter your email" accent={ROSE} value={values.email}   onChange={v => onChange("email", v)} />
        <SelectField label="Skin Concern" accent={ROSE} value={values.concern} onChange={v => { onChange("concern", v); onChange("stage", null); }} options={[
          "Acne / Breakouts", "Pigmentation / Dark Spots",
          "Anti-Aging / Fine Lines", "Laser Hair Removal", "Other",
        ]} />
      </div>
      <StagePicker
        label={values.concern ? `${values.concern} — Select Stage` : "Select Skin Concern Stage"}
        stages={SKIN_STAGE_DATA}
        selected={values.stage}
        onSelect={n => onChange("stage", n === -1 ? null : n)}
        accent={ROSE} accentDp={ROSE_DEEP}
        imagePaths={stageImages}
        imageAltPrefix="Skin concern"
        imageLabels={treatmentLabels}
      />
      <div className="contact-message">
        <Field label="Message" placeholder="Describe your skin concern in detail" as="textarea" accent={ROSE} value={values.message} onChange={v => onChange("message", v)} />
      </div>
    </div>
  );
}


const EMPTY_FORM: FormFields = { name: "", phone: "", email: "", concern: "", stage: null, message: "" };

export default function ContactSection() {
  const [formType, setFormType] = useState<"hair" | "skin">("hair");
  const [btnHover, setBtnHover] = useState(false);
  const [fields, setFields] = useState<FormFields>(EMPTY_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [fieldError, setFieldError] = useState("");

  const isHair   = formType === "hair";
  const accent   = isHair ? SAGE      : ROSE;
  const accentDp = isHair ? SAGE_DEEP : ROSE_DEEP;

  const handleChange = (k: keyof FormFields, v: any) => {
    setFields(f => ({ ...f, [k]: v }));
    setFieldError("");
    setStatus("idle");
  };

  const handleFormTypeChange = (t: "hair" | "skin") => {
    setFormType(t);
    setFields(EMPTY_FORM);
    setStatus("idle");
    setFieldError("");
  };

  const handleSubmit = async () => {
    if (!fields.name.trim() || !fields.phone.trim()) {
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
          name: fields.name.trim(),
          phone: fields.phone.trim(),
          email: fields.email.trim() || undefined,
          treatment: fields.concern || undefined,
          message: [fields.message, fields.stage ? `Selected Stage: ${fields.stage}` : ""].filter(Boolean).join(" | ") || undefined,
          source: "Website",
          formName: isHair ? "hair consultation" : "skin consultation",
          consent: true,
        }),
      });
      const data = await res.json();
      if (data.success) { window.location.href = isHair ? "/thank-you-hair" : "/thank-you-skin"; }
      else setStatus("error");
    } catch { setStatus("error"); }
    finally { setSubmitting(false); }
  };

  return (
    <section id="contact" style={{
      position: "relative", width: "100%",
      background: "#0f0b0d",
      overflow: "hidden",
      padding: "30px 0 40px",
    }}>
      {/* Grain */}
      <div aria-hidden style={{
        position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none",
        backgroundImage: GRAIN, backgroundSize: "240px 240px",
        opacity: 0.11, mixBlendMode: "screen",
      }} />

      {/* Sage glow top-left */}
      <div aria-hidden style={{
        position: "absolute", top: "-100px", left: "-80px",
        width: "580px", height: "440px",
        background: "radial-gradient(ellipse, rgba(94,154,113,0.22) 0%, transparent 65%)",
        zIndex: 2, pointerEvents: "none",
      }} />

      {/* Rose glow bottom-right */}
      <div aria-hidden style={{
        position: "absolute", bottom: "-80px", right: "-60px",
        width: "560px", height: "420px",
        background: "radial-gradient(ellipse, rgba(200,107,155,0.22) 0%, transparent 65%)",
        zIndex: 2, pointerEvents: "none",
      }} />

      {/* Top hairline */}
      <div aria-hidden style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(94,154,113,0.5), rgba(200,107,155,0.4), transparent)",
        zIndex: 3,
      }} />

      <div className="contact-inner" style={{ position: "relative", zIndex: 10, maxWidth: "1220px", margin: "0 auto", padding: "0 44px" }}>

        {/* ── HEADING ── */}
        <div className="contact-heading" style={{ marginBottom: "34px", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
            <span style={{ display: "block", width: "36px", height: "1.5px", background: ROSE }} />
            <span style={{ fontSize: "var(--fs-eyebrow)", letterSpacing: "0.28em", textTransform: "uppercase", color: ROSE, fontWeight: 700 }}>
              Contact Us
            </span>
            <span style={{ display: "block", width: "36px", height: "1.5px", background: ROSE }} />
          </div>
          <h2 style={{
            fontSize: "var(--fs-title)", fontWeight: 900,
            margin: "0 0 10px 0", letterSpacing: "-0.6px", lineHeight: 1.1,
            background: "linear-gradient(135deg, #fffdfa 30%, #c86b9b 65%, #5e9a71 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}>
            Book Your Consultation
          </h2>
          <p style={{ fontSize: "var(--fs-body)", color: "rgba(255,253,250,0.45)", margin: "0 auto", maxWidth: "480px", lineHeight: 1.65 }}>
            Share your concern and our team will help you choose the right skin or hair treatment path.
          </p>
        </div>

        <div className="contact-grid" style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr)",
          gap: "18px", alignItems: "stretch",
          maxWidth: "760px",
          margin: "0 auto",
        }}>

          {/* ── HAIR FORM PANEL ── */}
          <div style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: `0 30px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04), 0 0 40px ${isHair ? "rgba(94,154,113,0.07)" : "rgba(200,107,155,0.07)"}`,
            transition: "box-shadow 0.3s",
            position: "relative",
          }}>
            {/* top gradient bar */}
            <div style={{
              height: "3px",
              background: isHair
                ? `linear-gradient(90deg, ${SAGE_DEEP}, ${SAGE}, #8bbf97)`
                : `linear-gradient(90deg, ${ROSE_DEEP}, ${ROSE}, #d9a0be)`,
              transition: "background 0.3s",
            }} />

            {/* Grain overlay */}
            <div aria-hidden style={{
              position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none",
              backgroundImage: GRAIN, backgroundSize: "200px 200px",
              opacity: 0.07, mixBlendMode: "screen",
            }} />

            {/* ── PILL TAB SWITCHER ── */}
            <div style={{ position: "relative", zIndex: 1, display: "flex", justifyContent: "center", padding: "16px 22px 0", overflowX: "auto" }}>
              <div className="max-sm:ml-20" style={{
                display: "inline-flex", flexShrink: 0,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "999px", padding: "5px", gap: "4px",
              }}>
                {(["hair", "skin"] as const).map(cat => {
                  const active = formType === cat;
                  const col   = cat === "hair" ? SAGE      : ROSE;
                  const colDp = cat === "hair" ? SAGE_DEEP : ROSE_DEEP;
                  return (
                    <button
                      key={cat}
                      onClick={() => handleFormTypeChange(cat)}
                      style={{
                        padding: "8px 22px", borderRadius: "999px",
                        border: "none", outline: "none", cursor: "pointer",
                        background: active ? `linear-gradient(135deg, ${colDp}, ${col})` : "transparent",
                        color: active ? "#fff" : "rgba(255,253,250,0.42)",
                        fontSize: "var(--fs-eyebrow)", fontWeight: 700,
                        letterSpacing: "0.12em", textTransform: "uppercase",
                        transition: "all 0.28s cubic-bezier(0.22,1,0.36,1)",
                        boxShadow: active ? `0 4px 18px ${cat === "hair" ? "rgba(94,154,113,0.45)" : "rgba(200,107,155,0.45)"}` : "none",
                        display: "flex", alignItems: "center", gap: "7px",
                      }}
                    >
                      <span style={{
                        width: "6px", height: "6px", borderRadius: "50%",
                        background: active ? "rgba(255,255,255,0.7)" : (cat === "hair" ? "rgba(94,154,113,0.5)" : "rgba(200,107,155,0.5)"),
                        display: "inline-block", flexShrink: 0,
                        transition: "background 0.25s",
                      }} />
                      {cat === "hair" ? "Hair Treatment" : "Skin Treatment"}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ── FORM BODY ── */}
            <div className="contact-form-body" style={{ position: "relative", zIndex: 1, padding: "18px 22px 22px" }}>
              {isHair
                ? <HairForm values={fields} onChange={handleChange} />
                : <SkinForm values={fields} onChange={handleChange} />
              }

              {fieldError && <p style={{ margin: "10px 0 0", fontSize: "12px", color: "#f87171" }}>{fieldError}</p>}
              {status === "success" && <p style={{ margin: "10px 0 0", fontSize: "12px", color: "#4ade80" }}>Thank you! We will contact you soon.</p>}
              {status === "error"   && <p style={{ margin: "10px 0 0", fontSize: "12px", color: "#f87171" }}>Something went wrong. Please try again.</p>}

              <div className="contact-submit-row" style={{
                display: "flex", alignItems: "center",
                justifyContent: "space-between", gap: "12px",
                flexWrap: "wrap", marginTop: "16px", paddingTop: "16px",
                borderTop: "1px solid rgba(255,255,255,0.07)",
              }}>
                <p style={{ margin: 0, fontSize: "var(--fs-small)", lineHeight: 1.6, color: "rgba(255,253,250,0.3)", maxWidth: "300px" }}>
                  Our team will contact you to confirm a convenient consultation slot.
                </p>
                <button
                  type="button" onClick={handleSubmit} disabled={submitting}
                  onMouseEnter={() => setBtnHover(true)} onMouseLeave={() => setBtnHover(false)}
                  style={{
                    background: btnHover && !submitting ? `linear-gradient(135deg, ${accentDp}, ${accent})` : "transparent",
                    color: btnHover && !submitting ? "#ffffff" : accent,
                    border: `2px solid ${btnHover && !submitting ? accent : "rgba(255,255,255,0.2)"}`,
                    borderRadius: "8px", padding: "10px 22px",
                    fontSize: "var(--fs-eyebrow)", fontWeight: 700,
                    letterSpacing: "0.14em", textTransform: "uppercase",
                    cursor: submitting ? "not-allowed" : "pointer",
                    opacity: submitting ? 0.6 : 1, transition: "all 0.22s",
                    boxShadow: btnHover && !submitting ? `0 8px 24px ${isHair ? "rgba(94,154,113,0.4)" : "rgba(200,107,155,0.4)"}` : "none",
                    display: "inline-flex", alignItems: "center", gap: "8px",
                  }}
                >
                  {submitting ? "Sending..." : "Send Enquiry"}
                  {!submitting && (
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                      <path d="M2 6.5h9M8 3l3.5 3.5L8 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .contact-inner { padding: 0 16px !important; }
          .contact-heading { margin-bottom: 18px !important; }
          .contact-field-grid { grid-template-columns: 1fr !important; gap: 8px !important; }
          .contact-form-body { padding: 14px 12px 16px !important; }
          .contact-form-stack { gap: 8px !important; }
          .contact-submit-row { flex-direction: column !important; align-items: stretch !important; gap: 10px !important; }
          .contact-submit-row button { width: 100% !important; justify-content: center !important; }
          .contact-submit-row p { max-width: 100% !important; text-align: center !important; }
        }
      `}</style>
    </section>
  );
}
