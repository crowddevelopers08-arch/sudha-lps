'use client'

import { useEffect, useRef, useState } from "react";
import ContactSection from "@/component/contactsection";

const POPUP_DELAY = 30000;

export default function ConsultationPopup() {
  const [open, setOpen] = useState(false);
  const timerRef = useRef<number | null>(null);
  const nextOpenAtRef = useRef(0);

  useEffect(() => {
    const clearPopupTimer = () => {
      if (timerRef.current === null) return;
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    };

    const openPopup = () => {
      clearPopupTimer();
      setOpen(true);
    };

    const handleContactClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const contactLink = target?.closest('a[href="#contact"]');

      if (!contactLink) return;

      event.preventDefault();
      openPopup();
    };

    const handleCustomOpen = () => openPopup();

    const handleVisibilityChange = () => {
      if (document.visibilityState !== "visible") return;
      if (nextOpenAtRef.current && Date.now() >= nextOpenAtRef.current) {
        openPopup();
      }
    };

    document.addEventListener("click", handleContactClick);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("pageshow", handleVisibilityChange);
    window.addEventListener("open-consultation-popup", handleCustomOpen);
    openPopup();

    return () => {
      clearPopupTimer();
      document.removeEventListener("click", handleContactClick);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("pageshow", handleVisibilityChange);
      window.removeEventListener("open-consultation-popup", handleCustomOpen);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (open || timerRef.current !== null) return;

    nextOpenAtRef.current = Date.now() + POPUP_DELAY;
    timerRef.current = window.setTimeout(() => {
      timerRef.current = null;
      if (document.visibilityState !== "visible") return;
      setOpen(true);
    }, POPUP_DELAY);

    return () => {
      if (timerRef.current === null) return;
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      onClick={() => setOpen(false)}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "14px",
        background: "rgba(18,13,16,0.74)",
        backdropFilter: "blur(7px)",
      }}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        style={{
          width: "min(760px, 100%)",
          maxHeight: "92vh",
          overflowY: "auto",
          borderRadius: "20px",
          position: "relative",
          boxShadow: "0 32px 80px rgba(0,0,0,0.45)",
        }}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close consultation popup"
          style={{
            position: "sticky",
            top: "10px",
            left: "calc(100% - 46px)",
            zIndex: 20,
            width: "34px",
            height: "34px",
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.16)",
            background: "rgba(15,11,13,0.85)",
            color: "#fff",
            cursor: "pointer",
            fontSize: "20px",
            lineHeight: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "-34px",
          }}
        >
          ×
        </button>

        <div className="popup-contact-form">
          <ContactSection />
        </div>
      </div>

      <style>{`
        .popup-contact-form #contact {
          padding: 18px 0 20px !important;
        }

        .popup-contact-form .contact-inner {
          padding: 0 18px !important;
        }

        .popup-contact-form .contact-heading {
          margin-bottom: 14px !important;
        }

        .popup-contact-form .contact-heading p {
          display: none !important;
        }

        .popup-contact-form .contact-form-body {
          padding: 14px 16px 16px !important;
        }

        .popup-contact-form .contact-form-stack {
          gap: 8px !important;
        }

        .popup-contact-form .contact-field-grid {
          gap: 8px !important;
        }

        .popup-contact-form .contact-message {
          display: none !important;
        }

        .popup-contact-form .contact-submit-row {
          margin-top: 10px !important;
          padding-top: 10px !important;
        }

        @media (max-width: 767px) {
          .popup-contact-form .contact-inner {
            padding: 0 10px !important;
          }
          .popup-contact-form .contact-field-grid {
            grid-template-columns: 1fr !important;
            gap: 8px !important;
          }
          .popup-contact-form .contact-form-body {
            padding: 12px 10px 14px !important;
          }
          .popup-contact-form .contact-submit-row {
            flex-direction: column !important;
            align-items: stretch !important;
          }
          .popup-contact-form .contact-submit-row button {
            width: 100% !important;
            justify-content: center !important;
          }
          .popup-contact-form #contact {
            padding: 12px 0 16px !important;
          }
        }
      `}</style>
    </div>
  );
}
