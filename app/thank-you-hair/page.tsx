import type { Metadata } from "next";
import Footer from "@/component/footer";
import GoogleAdsConversion from "@/component/google-ads-conversion";
import ThankYou from "@/component/thankyou";
import Navbared from "@/component/thank-navbar";

export const metadata: Metadata = {
  title: "Thank You | Sudha Aesthetics Hair Consultation",
  description: "Confirmation page for hair consultation submissions.",
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

export default function ThankYouHairPage() {
  return (
    <>
      <GoogleAdsConversion />
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
