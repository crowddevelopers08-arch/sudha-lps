import type { Metadata } from "next";
import Footer from "@/component/footer";
import ThankYou from "@/component/thankyou";
import Navbared from "@/component/thank-navbar";

export const metadata: Metadata = {
  title: "Thank You | Sudha Aesthetics Hair Stage Consultation",
  description: "Confirmation page for hair stage consultation submissions.",
};

export default function ThankYouHairStagePage() {
  return (
    <>
      <Navbared />
      <ThankYou
        eyebrow="Hair Consultation Received"
        title="Thank you for identifying your hair loss stage."
        message="We've received your hair consultation request along with your stage details. Our hair restoration specialists will reach out shortly with a personalised treatment plan tailored to your stage."
      />
      <Footer />
    </>
  );
}
