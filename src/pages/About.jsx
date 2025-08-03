import Navbar from "../components/Navbar";
import TopBar from "../components/Topbar";
import FooterBar from "../components/Footerbar";
import Footer from "../components/Footer";
import CustomCTA from "../components/CustomCTA";
import Profile from "../components/about/Profile";

export default function About() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Profile />
      <CustomCTA />
      <Footer />
      <FooterBar />
    </>
  );
}
