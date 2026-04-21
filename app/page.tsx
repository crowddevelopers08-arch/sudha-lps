import Navbar from "@/component/navbar";
import BannerSection from "@/component/bannersection";
import BeforeAfterSection from "@/component/beforeafter";
import Treatments from "@/component/treatments";
import HairLossStage from "@/component/hairlossstage";
import HolisticApproach from "@/component/holisticapproach";
import Uniqueness from "@/component/uniqueness";
import TrustSection from "@/component/trustsection";
import Specialists from "@/component/specialists";
import Review from "@/component/review";
import Footer from "@/component/footer";
import FloatingWidget from "@/component/floatingwidget";
import ConsultationPopup from "@/component/consultationpopup";
import MobileActionBar from "@/component/fat-mobile-action-bar";

export default function Home() {
  return (
    <>
      <MobileActionBar />
      <FloatingWidget />
      <ConsultationPopup />
      <Navbar />
      <BannerSection />
      <BeforeAfterSection />
      <TrustSection />
      <Specialists />
      <Treatments />
      <HairLossStage />
      <HolisticApproach />
      <Uniqueness />
      <Review />
      <Footer />
    </>
  );
}
