"use client";

import { useEffect, useState } from "react";

const GRAIN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23g)' opacity='1'/%3E%3C/svg%3E")`;

const AUTO_MS = 5000;

const REVIEW_GROUPS = [
  {
    id: "hair",
    label: "Hair Reviews",
    accent: "#5e9a71",
    reviews: [
      {
        name: "Nithin K",
        treatment: "Hair Regrowth Therapy",
        rating: 5,
        quote:
          "What stood out most was how personalised the plan felt. The doctors explained each step clearly and the progress has been genuinely encouraging.",
        result: "Improved density and stronger hair growth",
      },
      {
        name: "Rahul S",
        treatment: "Platelet Growth Therapy",
        rating: 5,
        quote:
          "I was nervous before starting, but the care and follow-up were excellent. Everything felt structured, clean, and trustworthy from start to finish.",
        result: "Healthier scalp and steady regrowth",
      },
      {
        name: "Harish M",
        treatment: "GFC Hair Therapy",
        rating: 5,
        quote:
          "The recovery guidance and follow-up made a big difference. I felt supported through every session and could actually track visible progress.",
        result: "Thicker texture and better scalp coverage",
      },
      {
        name: "Sanjana P",
        treatment: "Hair Fall Consultation",
        rating: 5,
        quote:
          "The doctors did not rush into treatment. They first explained the cause clearly, then gave me a practical plan that felt realistic and effective.",
        result: "Reduced shedding and healthier hair cycle",
      },
      {
        name: "Vikram R",
        treatment: "Hair Transplant",
        rating: 5,
        quote:
          "I wanted natural-looking results and that is exactly what I got. The entire process felt professional, calm, and far less stressful than I expected.",
        result: "Natural hairline and fuller overall density",
      },
      {
        name: "Sandeep M",
        treatment: "Hair Transplant",
        rating: 5,
        quote:
          "The procedure was explained clearly and carried out with great care. Over time, the results started showing naturally and the overall look feels very consistent.",
        result: "Natural growth with better coverage and density",
      },
    ],
  },
  {
    id: "skin",
    label: "Skin Reviews",
    accent: "#c86b9b",
    reviews: [
      {
        name: "Aishwarya R",
        treatment: "Laser Hair Removal",
        rating: 5,
        quote:
          "The clinic made every session feel comfortable and professional. I started noticing visible reduction much faster than I expected.",
        result: "Smooth skin and visible reduction in a few sessions",
      },
      {
        name: "Shreya M",
        treatment: "Carbon Laser Facial",
        rating: 5,
        quote:
          "My skin looked fresher even after the first appointment. The team was warm, knowledgeable, and focused on natural-looking results.",
        result: "Brighter skin tone and refined texture",
      },
      {
        name: "Pooja N",
        treatment: "Acne Scar Revision",
        rating: 5,
        quote:
          "I had been trying treatments for a long time, but this was the first place that explained what would actually suit my skin and why.",
        result: "Smoother texture and softer scar appearance",
      },
      {
        name: "Deepika S",
        treatment: "Laser Toning",
        rating: 5,
        quote:
          "The glow was gradual but very real. I appreciated that the team focused on healthy improvement instead of overpromising instant results.",
        result: "More even tone and healthier skin finish",
      },
      {
        name: "Karthik V",
        treatment: "Pigmentation Treatment",
        rating: 5,
        quote:
          "The consultation felt detailed and honest. Over the next sessions my skin started looking clearer, calmer, and much more balanced overall.",
        result: "Reduced pigmentation and improved clarity",
      },
      {
        name: "Priya S",
        treatment: "Acne & Scar Treatment",
        rating: 5,
        quote:
          "I had been struggling with acne for years. The treatment plan was clearly explained, and over time my skin became smoother with fewer breakouts. It feels much healthier now.",
        result: "Reduced acne and smoother skin texture",
      },
    ],
  },
] as const;

type ReviewItem = (typeof REVIEW_GROUPS)[number]["reviews"][number];

function chunkReviews(reviews: readonly ReviewItem[]) {
  const slides: ReviewItem[][] = [];

  for (let i = 0; i < reviews.length; i += 2) {
    slides.push([...reviews.slice(i, i + 2)]);
  }

  return slides;
}

function Stars({ rating }: { rating: number }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
      {Array.from({ length: 5 }).map((_, index) => {
        const active = index < rating;

        return (
          <svg
            key={index}
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            style={{ display: "block" }}
          >
            <path
              d="M12 2.8l2.87 5.82 6.43.93-4.65 4.53 1.1 6.4L12 17.44 6.25 20.48l1.1-6.4L2.7 9.55l6.43-.93L12 2.8z"
              fill={active ? "#c86b9b" : "rgba(200,107,155,0.25)"}
            />
          </svg>
        );
      })}
    </div>
  );
}

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      {direction === "left" ? (
        <path
          d="M9.8 3.2L5 8l4.8 4.8"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : (
        <path
          d="M6.2 3.2L11 8l-4.8 4.8"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
}

function ReviewCard({
  review,
  accent,
}: {
  review: ReviewItem;
  accent: string;
}) {
  return (
    <article
      style={{
        flex: "1 1 320px",
        minWidth: "280px",
      }}
    >
      <div
        style={{
          background: "#fffdfa",
          border: "1px solid rgba(94,154,113,0.14)",
          boxShadow: "0 18px 42px rgba(36,31,33,0.08)",
          padding: "22px 20px 20px",
          position: "relative",
          overflow: "hidden",
          minHeight: "100%",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "4px",
            background: `linear-gradient(90deg, ${accent} 0%, #c86b9b 100%)`,
          }}
        />

        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "16px",
            right: "22px",
            fontSize: "68px",
            lineHeight: 1,
            color: "rgba(200,107,155,0.12)",
          }}
        >
          "
        </div>

        <div style={{ position: "relative", zIndex: 1 }}>
          <Stars rating={review.rating} />

          <p
            style={{
              margin: "12px 0 16px 0",
              fontSize: "var(--fs-body)",
              lineHeight: 1.8,
              color: "#3b3538",
            }}
          >
            {review.quote}
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              borderTop: "1px solid rgba(94,154,113,0.12)",
              paddingTop: "14px",
            }}
          >
            <div
              style={{ display: "flex", flexDirection: "column", gap: "5px" }}
            >
              <span
                style={{
                  fontSize: "var(--fs-body)",
                  fontWeight: 800,
                  color: "#241f21",
                }}
              >
                {review.name}
              </span>
              <span
                style={{
                  fontSize: "var(--fs-eyebrow)",
                  fontWeight: 700,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: accent,
                }}
              >
                {review.treatment}
              </span>
            </div>

            <div
              style={{
                background: "rgba(94,154,113,0.08)",
                border: "1px solid rgba(94,154,113,0.12)",
                  padding: "8px 12px",
              }}
            >
              <span
                style={{
                  display: "block",
                  fontSize: "10px",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "#5e9a71",
                  fontWeight: 700,
                  marginBottom: "5px",
                }}
              >
                Result
              </span>
              <span
                style={{
                  fontSize: "var(--fs-small)",
                  color: "#5b5558",
                  lineHeight: 1.5,
                }}
              >
                {review.result}
              </span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Review() {
  const [groupIndex, setGroupIndex] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [btnHover, setBtnHover] = useState(false);

  const activeGroup = REVIEW_GROUPS[groupIndex];
  const slides = chunkReviews(activeGroup.reviews);

  useEffect(() => {
    setActiveSlide(0);
  }, [groupIndex]);

  useEffect(() => {
    if (hovered) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, AUTO_MS);

    return () => window.clearInterval(timer);
  }, [hovered, slides.length]);

  const goPrev = () => {
    setActiveSlide((current) => (current - 1 + slides.length) % slides.length);
  };

  const goNext = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  const arrowButtonBase = {
    width: "44px",
    height: "44px",
    borderRadius: "50%",
    background: "#fffdfa",
    cursor: "pointer",
    boxShadow: "0 10px 24px rgba(36,31,33,0.06)",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  } as const;

  return (
    <section id="reviews"
      style={{
        position: "relative",
        width: "100%",
        background: "#f6f2ec",
        overflow: "hidden",
        padding: "56px 0 62px",
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
          opacity: 0.2,
          mixBlendMode: "multiply",
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
            "repeating-linear-gradient(135deg,transparent,transparent 7px,rgba(91,85,88,0.025) 7px,rgba(91,85,88,0.025) 8px)",
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
            "radial-gradient(ellipse at 0% 0%, rgba(94,154,113,0.14) 0%, transparent 68%)",
          zIndex: 2,
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
          height: "46%",
          background:
            "radial-gradient(ellipse at 100% 100%, rgba(200,107,155,0.16) 0%, transparent 70%)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      <svg
        aria-hidden
        style={{
          position: "absolute",
          top: 0,
          left: "4%",
          zIndex: 2,
          pointerEvents: "none",
        }}
        width="320"
        height="55"
        viewBox="0 0 320 55"
        fill="none"
      >
        <path
          d="M20 0 Q18 18 17 28 Q16 36 18 44"
          stroke="rgba(94,154,113,0.28)"
          strokeWidth="2"
          fill="none"
        />
        <ellipse cx="18" cy="46" rx="2.5" ry="4" fill="rgba(94,154,113,0.16)" />
        <path
          d="M160 0 Q161 14 161 24 Q160 32 162 38"
          stroke="rgba(200,107,155,0.22)"
          strokeWidth="1.6"
          fill="none"
        />
        <ellipse
          cx="162"
          cy="40"
          rx="2"
          ry="3.5"
          fill="rgba(200,107,155,0.14)"
        />
      </svg>

      <div
        className="review-inner"
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "0 44px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "16px",
            flexWrap: "wrap",
            marginBottom: "22px",
          }}
        >
          <div style={{ maxWidth: "640px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "10px",
              }}
            >
              <span
                style={{
                  display: "block",
                  width: "36px",
                  height: "3px",
                  background: "#5e9a71",
                }}
              />
              <span
                style={{
                  fontSize: "var(--fs-eyebrow)",
                  letterSpacing: "0.26em",
                  textTransform: "uppercase",
                  color: "#b72c78",
                  fontWeight: 700,
                }}
              >
                Client Reviews
              </span>
            </div>

            <h2
              style={{
                fontSize: "var(--fs-title)",
                fontWeight: 900,
                color: "#241f21",
                margin: "0 0 10px 0",
                letterSpacing: "-0.4px",
                lineHeight: 1.12,
                textShadow: "2px 3px 0px rgba(255,255,255,0.65)",
              }}
            >
              Real Reviews From Hair And Skin Patients
            </h2>

            <p
              style={{
                fontSize: "var(--fs-body)",
                color: "#5b5558",
                margin: 0,
                lineHeight: 1.6,
              }}
            >
              Two dedicated review sets with five testimonials each, so visitors
              can explore outcomes for both hair and skin care.
            </p>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous review slide"
              style={{
                border: "1px solid rgba(94,154,113,0.2)",
                color: "#5e9a71",
                ...arrowButtonBase,
              }}
            >
              <ArrowIcon direction="left" />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next review slide"
              style={{
                border: "1px solid rgba(200,107,155,0.22)",
                color: "#b72c78",
                ...arrowButtonBase,
              }}
            >
              <ArrowIcon direction="right" />
            </button>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "18px",
            flexWrap: "wrap",
          }}
        >
          {REVIEW_GROUPS.map((group, index) => {
            const active = index === groupIndex;

            return (
              <button
                key={group.id}
                type="button"
                onClick={() => setGroupIndex(index)}
                style={{
                  background: active ? "#fffdfa" : "rgba(255,253,250,0.55)",
                  color: active ? "#241f21" : "#8a7f74",
                  border: active
                    ? `1px solid ${group.accent}44`
                    : "1px solid rgba(94,154,113,0.1)",
                  padding: "9px 14px",
                  fontSize: "var(--fs-eyebrow)",
                  fontWeight: 700,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  boxShadow: active
                    ? "0 10px 24px rgba(36,31,33,0.06)"
                    : "none",
                }}
              >
                <span style={{ color: group.accent }}>{group.label}</span>
              </button>
            );
          })}
        </div>

        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              transform: `translateX(-${activeSlide * 100}%)`,
              transition: "transform 0.36s ease",
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={`${activeGroup.id}-${index}`}
                style={{
                  minWidth: "100%",
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: "14px",
                  alignItems: "stretch",
                }}
              >
                {slide.map((review) => (
                  <ReviewCard
                    key={`${review.name}-${review.treatment}`}
                    review={review}
                    accent={activeGroup.accent}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "12px",
            flexWrap: "wrap",
            marginTop: "18px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {slides.map((_, index) => {
              const active = index === activeSlide;

              return (
                <button
                  key={`${activeGroup.id}-${index}`}
                  type="button"
                  aria-label={`Go to review slide ${index + 1}`}
                  onClick={() => setActiveSlide(index)}
                  style={{
                    width: active ? "34px" : "10px",
                    height: "10px",
                    borderRadius: "999px",
                    border: "none",
                    background: active
                      ? activeGroup.accent
                      : "rgba(200,107,155,0.28)",
                    cursor: "pointer",
                    transition: "all 0.22s ease",
                  }}
                />
              );
            })}
          </div>

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
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          style={{ display: "block", width: "100%", height: "60px" }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,32 C240,60 480,6 720,32 C960,60 1200,6 1440,32 L1440,60 L0,60 Z"
            fill="rgba(200,107,155,0.08)"
          />
          <path
            d="M0,44 C180,22 360,56 540,40 C720,22 900,52 1080,38 C1260,22 1380,48 1440,42 L1440,60 L0,60 Z"
            fill="#f6f2ec"
          />
        </svg>
      </div>
    </section>
  );
}
