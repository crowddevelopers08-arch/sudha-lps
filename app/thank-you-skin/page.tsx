import type { Metadata } from "next";
import Footer from "@/component/footer";
import GoogleAdsConversion from "@/component/google-ads-conversion";
import ThankYou from "@/component/thankyou";
import Navbared from "@/component/thank-navbar";

export const metadata: Metadata = {
  title: "Thank You | Sudha Aesthetics Skin Consultation",
  description: "Confirmation page for skin consultation submissions.",
};

export default function ThankYouSkinPage() {
  return (
    <>
      <GoogleAdsConversion />
      <Navbared />
      <ThankYou
        eyebrow="Skin Consultation Received"
        title="Thank you for booking your skin consultation."
        message="Your skin consultation request has been received. Our dermatology specialists will review your details and reach out shortly to guide you on the best treatment path for your skin."
      />
      <Footer />
    </>
  );
}
