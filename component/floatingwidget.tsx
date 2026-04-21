'use client'

import { useState } from "react";

export default function FloatingWidget() {
  const [offerHov, setOfferHov] = useState(false);
  const [waHov,    setWaHov]    = useState(false);
  const [callHov,  setCallHov]  = useState(false);

  return (
    <>
      <style>{`
        @keyframes floatPop {
          0%   { transform: translateX(-6px); opacity: 0.82; }
          50%  { transform: translateX(4px);  opacity: 1;    }
          100% { transform: translateX(-6px); opacity: 0.82; }
        }
        @keyframes floatPopB {
          0%   { transform: translateX(-4px); opacity: 0.85; }
          50%  { transform: translateX(5px);  opacity: 1;    }
          100% { transform: translateX(-4px); opacity: 0.85; }
        }
        @keyframes floatPopC {
          0%   { transform: translateX(-5px); opacity: 0.80; }
          50%  { transform: translateX(4px);  opacity: 1;    }
          100% { transform: translateX(-5px); opacity: 0.80; }
        }
        @keyframes ringPulse {
          0%   { box-shadow: 0 0 0 0   rgba(30,86,200,0.55); }
          70%  { box-shadow: 0 0 0 10px rgba(30,86,200,0);   }
          100% { box-shadow: 0 0 0 0   rgba(30,86,200,0);    }
        }
        @keyframes waPulse {
          0%   { box-shadow: 0 0 0 0   rgba(37,211,102,0.55); }
          70%  { box-shadow: 0 0 0 10px rgba(37,211,102,0);   }
          100% { box-shadow: 0 0 0 0   rgba(37,211,102,0);    }
        }
        @keyframes callPulse {
          0%   { box-shadow: 0 0 0 0   rgba(234,88,12,0.55); }
          70%  { box-shadow: 0 0 0 10px rgba(234,88,12,0);   }
          100% { box-shadow: 0 0 0 0   rgba(234,88,12,0);    }
        }
        @keyframes callRing {
          0%,100% { transform: rotate(0deg);   }
          10%     { transform: rotate(-18deg);  }
          20%     { transform: rotate(18deg);   }
          30%     { transform: rotate(-14deg);  }
          40%     { transform: rotate(14deg);   }
          50%     { transform: rotate(-8deg);   }
          60%     { transform: rotate(8deg);    }
          70%     { transform: rotate(0deg);    }
        }
        .fw-offer { animation: floatPop  2.8s ease-in-out infinite; }
        .fw-wa    { animation: floatPopB 3.2s ease-in-out infinite 0.6s; }
        .fw-call  { animation: floatPopC 3.0s ease-in-out infinite 1.2s; }

        .fw-offer:hover,
        .fw-wa:hover,
        .fw-call:hover {
          animation-play-state: paused !important;
        }

        .fw-offer-icon { animation: ringPulse 2.8s ease-out infinite; }
        .fw-wa-icon    { animation: waPulse   3.2s ease-out infinite 0.6s; }
        .fw-call-icon  { animation: callPulse 3.0s ease-out infinite 1.2s; }

        .fw-call-bell  { animation: callRing  2.4s ease-in-out infinite 1.8s; display:inline-block; }

        @media (max-width: 767px) {
          .fw-long-text { display: none; }
        }
      `}</style>

      <div className="max-sm:gap-0 gap-2" style={{
        position: "fixed",
        right: "0px",
        bottom: "10px",
        zIndex: 9000,
        display: "flex",
        flexDirection: "column",
        pointerEvents: "none",
      }}>

        <a
          href="tel:+919553033366"
          className="fw-call"
          onMouseEnter={() => setCallHov(true)}
          onMouseLeave={() => setCallHov(false)}
          style={{
            pointerEvents: "all",
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            filter: callHov
              ? "drop-shadow(0 8px 24px rgba(234,88,12,0.28))"
              : "drop-shadow(0 4px 16px rgba(0,0,0,0.16))",
            cursor: "pointer",
          }}
        >
          {/* Icon circle */}
          <div
            className="fw-call-icon"
            style={{
              width: "52px", height: "52px", borderRadius: "50%",
              background: "linear-gradient(135deg, #ea580c, #f97316)",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0, zIndex: 1,
              border: "2.5px solid #fff",
            }}
          >
            <span className="fw-call-bell">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z"
                  fill="#fff"/>
              </svg>
            </span>
          </div>

          {/* Label */}
          <div style={{
            background: "#fff",
            border: "1px solid rgba(0,0,0,0.08)",
            borderRadius: "0 999px 999px 0",
            padding: "12px 20px 12px 16px",
            marginLeft: "-5px",
            boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
            whiteSpace: "nowrap",
            display: "flex", alignItems: "center", gap: "8px",
          }}>
            <span style={{
              width: "7px", height: "7px", borderRadius: "50%",
              background: "#f97316", flexShrink: 0,
              boxShadow: "0 0 6px rgba(249,115,22,0.7)",
            }} />
            <span style={{ fontSize: "13px", fontWeight: 600, color: "#1a1a2e", lineHeight: 1.3 }}>
             Get Special offers<span className="fw-long-text"> on all treatments</span>
            </span>
          </div>
        </a>
        <a
          href="https://wa.me/919553033366"
          target="_blank"
          rel="noopener noreferrer"
          className="fw-wa max-sm:mb-10"
          onMouseEnter={() => setWaHov(true)}
          onMouseLeave={() => setWaHov(false)}
          style={{
            pointerEvents: "all",
            display: "flex",
            alignItems: "center",
            justifyContent: 'flex-end',
            textDecoration: "none",
            filter: waHov
              ? "drop-shadow(0 8px 24px rgba(37,211,102,0.28))"
              : "drop-shadow(0 4px 16px rgba(0,0,0,0.16))",
            cursor: "pointer",
          }}
        >
          {/* Icon circle */}
          <div
            className="fw-wa-icon "
            style={{
              width: "52px", height: "52px", borderRadius: "50%",
              background: "linear-gradient(135deg, #1ebe5d, #25d366)",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0, zIndex: 1,
              border: "2.5px solid #fff",
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path fillRule="evenodd" clipRule="evenodd"
                d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.978-1.418A9.956 9.956 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm-1.07 5.95c-.18-.44-.37-.45-.54-.46l-.46-.01c-.16 0-.42.06-.64.3-.22.23-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.66 2.67 4.1 3.64.57.22 1.02.35 1.37.45.57.18 1.09.15 1.5.09.46-.07 1.41-.58 1.61-1.13.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28-.24-.12-1.41-.7-1.63-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.01-.37.1-.49.11-.11.25-.28.37-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78z"
                fill="#fff"/>
            </svg>
          </div>

          {/* Label */}
          <div style={{
            background: "#fff",
            border: "1px solid rgba(0,0,0,0.08)",
            borderRadius: "0 999px 999px 0",
            padding: "12px 20px 12px 16px",
            marginLeft: "-5px",
            boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
            whiteSpace: "nowrap",
            display: "flex", alignItems: "center", gap: "8px",
          }}>
            <span style={{
              width: "7px", height: "7px", borderRadius: "50%",
              background: "#25d366", flexShrink: 0,
              boxShadow: "0 0 6px rgba(37,211,102,0.7)",
            }} />
            <span style={{ fontSize: "13px", fontWeight: 600, color: "#1a1a2e", lineHeight: 1.3 }}>
              We are online
            </span>
          </div>
        </a>
      </div>
    </>
  );
}
