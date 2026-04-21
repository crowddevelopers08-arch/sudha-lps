import type { Metadata } from "next";
import Footer from "@/component/footer";
import ThankYou from "@/component/thankyou";
import Navbared from "@/component/thank-navbar";

export const metadata: Metadata = {
  title: "Thank You | Sudha Aesthetics Skin Stage Consultation",
  description: "Confirmation page for skin stage consultation submissions.",
};

export default function ThankYouSkinStagePage() {
  return (
    <>
      <Navbared />
      <ThankYou
        eyebrow="Skin Consultation Received"
        title="Thank you for identifying your skin concern stage."
        message="We've received your skin consultation request along with your stage details. Our dermatology specialists will reach out shortly with a personalised treatment plan tailored to your skin concern."
      />
      <Footer />
    </>
  );
}
