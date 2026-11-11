import type { Metadata } from "next";
import Footer from "@/component/footer";
import GoogleAdsConversion from "@/component/google-ads-conversion";
import ThankYou from "@/component/thankyou";
import Navbared from "@/component/thank-navbar";

export const metadata: Metadata = {
  title: "Thank You | Sudha Aesthetics Skin Stage Consultation",
  description: "Confirmation page for skin stage consultation submissions.",
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

export default function ThankYouSkinStagePage() {
  return (
    <>
      <GoogleAdsConversion />
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
