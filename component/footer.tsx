import Image from "next/image";
import Link from "next/link";

const GRAIN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23g)' opacity='1'/%3E%3C/svg%3E")`;

const LINKS = [
  { label: "Home", href: "#" },
  { label: "Treatments", href: "#treatments" },
  { label: "Specialists", href: "#specialists" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  "Hair Regrowth",
  "Hair Transplant",
  "Laser Hair Removal",
  "Carbon Laser Facial",
  "Acne Scar Care",
];

export default function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        width: "100%",
        background: "#241f21",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          pointerEvents: "none",
          backgroundImage: GRAIN,
          backgroundRepeat: "repeat",
          backgroundSize: "240px 240px",
          opacity: 0.12,
          mixBlendMode: "screen",
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
            "repeating-linear-gradient(135deg,transparent,transparent 7px,rgba(255,255,255,0.02) 7px,rgba(255,255,255,0.02) 8px)",
        }}
      />

      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "36%",
          height: "60%",
          background: "radial-gradient(ellipse at 0% 0%, rgba(94,154,113,0.2) 0%, transparent 72%)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      <div
        aria-hidden
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          width: "34%",
          height: "55%",
          background: "radial-gradient(ellipse at 100% 0%, rgba(200,107,155,0.18) 0%, transparent 70%)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      <div className="footer-inner" style={{ position: "relative", zIndex: 10, maxWidth: "1220px", margin: "0 auto", padding: "42px 44px 18px" }}>
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr 0.9fr 1fr",
            gap: "20px",
            alignItems: "start",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
              <Link href="/" className="flex shrink-0 items-center" aria-label="Go to homepage">
          <div className="relative h-14 w-40 sm:w-44 lg:h-26 lg:w-48">
            <Image
              src="/logos.JPG"
              alt="Sudha Skin Hair Aesthetics logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>
            </div>

            <h3
              style={{
                margin: "0 0 10px 0",
                fontSize: "var(--fs-subtitle)",
                lineHeight: 1.2,
                color: "#fffdfa",
                fontWeight: 900,
              }}
            >
              Skin and hair care with expert-led, personalised treatment.
            </h3>

            <p
              style={{
                margin: 0,
                fontSize: "var(--fs-body)",
                lineHeight: 1.7,
                color: "rgba(255,253,250,0.72)",
                maxWidth: "320px",
              }}
            >
              Modern technology, careful consultation, and visible results designed around each patient.
            </p>
          </div>

          <div>
            <p
              style={{
                margin: "0 0 10px 0",
                fontSize: "var(--fs-eyebrow)",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#5e9a71",
                fontWeight: 700,
              }}
            >
              Quick Links
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
              {LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    color: "rgba(255,253,250,0.76)",
                    textDecoration: "none",
                    fontSize: "var(--fs-body)",
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p
              style={{
                margin: "0 0 10px 0",
                fontSize: "var(--fs-eyebrow)",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#5e9a71",
                fontWeight: 700,
              }}
            >
              Popular Care
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
              {SERVICES.map((service) => (
                <span
                  key={service}
                  style={{
                    color: "rgba(255,253,250,0.76)",
                    fontSize: "var(--fs-body)",
                  }}
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p
              style={{
                margin: "0 0 10px 0",
                fontSize: "var(--fs-eyebrow)",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#5e9a71",
                fontWeight: 700,
              }}
            >
              Contact
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span style={{ color: "rgba(255,253,250,0.76)", fontSize: "var(--fs-body)", lineHeight: 1.6 }}>
               4th Floor, Avon Diagnostics, Temple St, Salipeta, Kakinada, Andhra Pradesh 533001
              </span>
              <a href="tel:+919553033366 " style={{ color: "#fffdfa", textDecoration: "none", fontSize: "var(--fs-body)" }}>
                +91 9553033366
              </a>
              <a href="mailto:sudhaaesthetics@gmail.com " style={{ color: "#fffdfa", textDecoration: "none", fontSize: "var(--fs-body)" }}>
                sudhaaesthetics@gmail.com
              </a>
              <span style={{ color: "rgba(255,253,250,0.72)", fontSize: "var(--fs-body)", lineHeight: 1.6 }}>
                Mon - Sat
                <br />
                10:00 AM - 7:00 PM
              </span>
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: "24px",
            paddingTop: "14px",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          <span style={{ color: "rgba(255,253,250,0.62)", fontSize: "var(--fs-small)" }}>
            Copyright 2026 Sudha Aesthetics. All rights reserved.
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: "12px",justifyContent: "flex-start" }}>

            <Link href="/privacy-policy" style={{ color: "rgba(255,253,250,0.72)", textDecoration: "none", fontSize: "var(--fs-small)" }}>
              Privacy
            </Link>

          </div>
        </div>
      </div>
    </footer>
  );
}
