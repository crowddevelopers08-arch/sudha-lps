import Link from "next/link";

const GRAIN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23g)' opacity='1'/%3E%3C/svg%3E")`;

type ThankYouProps = {
  title?: string;
  message?: string;
  eyebrow?: string;
};

const primaryLinkStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "14px 26px",
  background: "#5e9a71",
  color: "#fffdfa",
  textDecoration: "none",
  textTransform: "uppercase" as const,
  letterSpacing: "0.18em",
  fontSize: "11px",
  fontWeight: 700,
  boxShadow: "0 16px 34px rgba(94,154,113,0.2)",
};

const secondaryLinkStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "14px 26px",
  background: "transparent",
  color: "#b72c78",
  textDecoration: "none",
  textTransform: "uppercase" as const,
  letterSpacing: "0.18em",
  fontSize: "11px",
  fontWeight: 700,
  border: "1.5px solid rgba(200,107,155,0.35)",
};

export default function ThankYou({
  title = "Thank you for reaching out.",
  message = "Your enquiry has been received. Our team will review your details and contact you shortly to help with the next step.",
  eyebrow = "Enquiry Received",
}: ThankYouProps) {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "72px 24px 96px",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage: GRAIN,
          backgroundRepeat: "repeat",
          backgroundSize: "240px 240px",
          opacity: 0.12,
          mixBlendMode: "multiply",
        }}
      />

      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "42%",
          height: "52%",
          background:
            "radial-gradient(ellipse at 0% 0%, rgba(94,154,113,0.16) 0%, transparent 68%)",
          pointerEvents: "none",
        }}
      />

      <div
        aria-hidden
        style={{
          position: "absolute",
          right: 0,
          bottom: 0,
          width: "38%",
          height: "44%",
          background:
            "radial-gradient(ellipse at 100% 100%, rgba(200,107,155,0.14) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "880px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            background: "rgba(255,253,250,0.94)",
            border: "1px solid rgba(94,154,113,0.16)",
            boxShadow: "0 24px 60px rgba(36,31,33,0.08)",
            padding: "48px clamp(24px, 5vw, 56px)",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "18px",
            }}
          >
            <span
              style={{
                display: "block",
                width: "42px",
                height: "3px",
                background: "#5e9a71",
              }}
            />
            <span
              style={{
                color: "#b72c78",
                fontSize: "11px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.22em",
              }}
            >
              {eyebrow}
            </span>
          </div>

          <div
            className="thankyou-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1.2fr) minmax(220px, 0.8fr)",
              gap: "28px",
              alignItems: "start",
            }}
          >
            <div>
              <h1
                style={{
                  margin: "0 0 16px",
                  color: "#241f21",
                  fontSize: "clamp(34px, 6vw, 60px)",
                  lineHeight: 1,
                  fontWeight: 900,
                  letterSpacing: "-0.04em",
                }}
              >
                {title}
              </h1>

              <p
                style={{
                  margin: "0 0 26px",
                  color: "#5b5558",
                  fontSize: "16px",
                  lineHeight: 1.8,
                  maxWidth: "560px",
                }}
              >
                {message}
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "14px",
                }}
              >
                <Link href="/" style={primaryLinkStyle}>
                  Back To Home
                </Link>
                <Link href="/privacy-policy" style={secondaryLinkStyle}>
                  Privacy Policy
                </Link>
              </div>
            </div>

            <div
              style={{
                background:
                  "linear-gradient(180deg, rgba(94,154,113,0.08) 0%, rgba(200,107,155,0.08) 100%)",
                border: "1px solid rgba(36,31,33,0.08)",
                padding: "24px",
              }}
            >
              <p
                style={{
                  margin: "0 0 14px",
                  color: "#3f7455",
                  fontSize: "11px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.18em",
                }}
              >
                What Happens Next
              </p>

              <div style={{ display: "grid", gap: "14px" }}>
                {[
                  "A team member reviews your submission.",
                  "We contact you to understand your concern better.",
                  "You get guidance on consultation timing and the right treatment path.",
                ].map((step) => (
                  <div
                    key={step}
                    style={{
                      display: "flex",
                      gap: "12px",
                      alignItems: "flex-start",
                    }}
                  >
                    <span
                      style={{
                        width: "10px",
                        height: "10px",
                        borderRadius: "999px",
                        background: "#c86b9b",
                        marginTop: "7px",
                        flexShrink: 0,
                      }}
                    />
                    <p
                      style={{
                        margin: 0,
                        color: "#241f21",
                        fontSize: "14px",
                        lineHeight: 1.7,
                      }}
                    >
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
