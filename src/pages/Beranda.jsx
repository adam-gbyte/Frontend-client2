import { useEffect, useState } from "react";
import axios from "axios";

import "../fonts/fonts.css";
import Navbar from "../components/Navbar";
import TopBar from "../components/Topbar";
import FooterBar from "../components/Footerbar";
import Footer from "../components/Footer";
import CustomCTA from "../components/CustomCTA";
import KenapaKami from "../components/KenapaKami";
import TourCards from "../components/TourCards";
import TourIconsSection from "../components/TourIconSection";
import HeroSection from "../components/HeroSection";
// import { useState } from "react";

export default function Beranda() {
  const [data, setData] = useState([]);
  const apiUrl = import.meta.env.VITE_URL_API;

  useEffect(() => {
    // Ambil semua data kota + tours
    const fetchData = async () => {
      try {
        const res = await axios.get(`${apiUrl}/cities`);
        setData(res.data);
      } catch (err) {
        console.error("Gagal ambil data:", err.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <TopBar />
      <Navbar />
      <HeroSection />
      <TourIconsSection />
      {data.map((group, index) => (
        <TourCards key={index} data={group} />
      ))}
      <KenapaKami />
      <CustomCTA />
      <Footer />
      <FooterBar />
    </>
  );
}
