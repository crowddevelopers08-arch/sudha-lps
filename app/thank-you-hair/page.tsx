import type { Metadata } from "next";
import Footer from "@/component/footer";
import ThankYou from "@/component/thankyou";
import Navbared from "@/component/thank-navbar";

export const metadata: Metadata = {
  title: "Thank You | Sudha Aesthetics Hair Consultation",
  description: "Confirmation page for hair consultation submissions.",
};

export default function ThankYouHairPage() {
  return (
    <>
      <Navbared />
      <ThankYou
        eyebrow="Hair Consultation Received"
        title="Thank you for booking your hair consultation."
        message="Your hair consultation request has been received. Our hair specialists will review your details and reach out shortly to guide you on the best treatment path."
      />
      <Footer />
    </>
  );
}
