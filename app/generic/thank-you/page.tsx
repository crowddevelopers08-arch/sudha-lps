import type { Metadata } from "next";
import GoogleAdsConversion from "@/component/google-ads-conversion";

import Footer from "@/component/generic-lp/footer";
import ThankYou from "@/component/generic-lp/thankyou";
import Navbared from "@/component/generic-lp/thank-navbar";

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
