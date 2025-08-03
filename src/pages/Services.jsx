import OurServicesSection from "../components/services/Services";
import Navbar from "../components/Navbar";
import TopBar from "../components/Topbar";
import FooterBar from "../components/Footerbar";
import Footer from "../components/Footer";
import CustomCTA from "../components/CustomCTA";
import Profile from "../components/about/Profile";

export default function Services() {
  return (
    <>
      <TopBar />
      <Navbar />
      <OurServicesSection />
      <CustomCTA />
      <Footer />
      <FooterBar />
    </>
  );
}
