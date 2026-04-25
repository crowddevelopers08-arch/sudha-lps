import type { Metadata } from "next";
import Footer from "@/component/footer";
import GoogleAdsConversion from "@/component/google-ads-conversion";
import ThankYou from "@/component/thankyou";
import Navbared from "@/component/thank-navbar";

export const metadata: Metadata = {
  title: "Thank You | Sudha Aesthetics",
  description: "Confirmation page for consultation and enquiry submissions.",
};

export default function ThankYouPage() {
  return (
    <>
      <GoogleAdsConversion />
      <Navbared />
      <ThankYou />
      <Footer />
    </>
  );
}
