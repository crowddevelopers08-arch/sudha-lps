import type { Metadata } from "next";
import GoogleAdsConversion from "@/component/google-ads-conversion";

import Footer from "@/component/generic-lp/footer";
import ThankYou from "@/component/generic-lp/thankyou";
import Navbared from "@/component/generic-lp/thank-navbar";

export const metadata: Metadata = {
  title: "Thank You | Sudha Aesthetics",
  description: "Confirmation page for consultation and enquiry submissions.",
    icons: {
    icon: [
      { url: "https://res.cloudinary.com/h2vx5bue/image/upload/v1794405482/logos.jpg", sizes: "any" },
      { url: "https://res.cloudinary.com/h2vx5bue/image/upload/v1794405482/logos.jpg", sizes: "16x16", type: "image/png" },
      { url: "https://res.cloudinary.com/h2vx5bue/image/upload/v1794405482/logos.jpg", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "https://res.cloudinary.com/h2vx5bue/image/upload/v1794405482/logos.jpg", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "icon", url: "https://res.cloudinary.com/h2vx5bue/image/upload/v1794405482/logos.jpg", sizes: "192x192", type: "image/png" },
      { rel: "icon", url: "https://res.cloudinary.com/h2vx5bue/image/upload/v1794405482/logos.jpg", sizes: "512x512", type: "image/png" },
    ],
  },
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
