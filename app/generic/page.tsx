
import Footer from "@/component/generic-lp/footer";
import CareHero from "@/component/generic-lp/care-hero";
import ConditionsCarousel from "@/component/generic-lp/conditions-carousel";
import DoctorExpertise from "@/component/generic-lp/doctor-expertise";
import LeadPopup from "@/component/generic-lp/lead-popup";
import Navbar from "@/component/generic-lp/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <CareHero />
      <ConditionsCarousel />
      <DoctorExpertise />
      <Footer />
      <LeadPopup />
    </>
  );
}
