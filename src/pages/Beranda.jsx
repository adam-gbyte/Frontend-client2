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
  // useEffect(() => {
  //   const fetchData = async () => {
  //     // const token = localStorage.getItem("token");
  //     try {
  //       const res = await axios.get(`${apiUrl}/tours`);

  //       console.log(res.data); // Data user
  //       setData(res.data);
  //     } catch (err) {
  //       console.error("Gagal mengambil data", err);
  //     }
  //   };

  //   fetchData();
  // }, []);

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
  }, []);

  // GET DATA FROM API
  const tours = [
    {
      city: "Sukabumi",
      tours: [
        {
          image: "/images/situ.jpeg",
          title: "Situ Gunung-Heritage Kota Sukabumi 2H1M",
          price: "IDR 695.000",
        },
        {
          image: "/images/plara.jpeg",
          title: "Pelabuhan Ratu Situ Gunung 2H1M",
          price: "IDR 790.000",
        },
        {
          image: "/images/dreamland.jpeg",
          title: "Tour Bali 2H1M",
          price: "IDR 837.000",
        },
        {
          image: "/images/lot.jpeg",
          title: "Honeymoon Bali 3H2M",
          price: "IDR 1.891.000",
        },
        {
          image: "/images/jeram.jpeg",
          title: "Taman Safari",
          price: "IDR 415.000",
        },
        {
          image: "/images/rj.jpeg",
          title: "Taman Bunga",
          price: "IDR 235.000",
        },
      ],
    },
    {
      city: "Yogyakarta",
      tours: [
        {
          image: "/images/pinus.jpeg",
          title: "PAKET A : YOGYAKARTA 2H1M",
          price: "IDR 992.000",
        },
        {
          image: "/images/yogya.jpeg",
          title: "PAKET B : YOGYAKARTA 2H1M",
          price: "IDR 874.000",
        },
        {
          image: "/images/bro.jpeg",
          title: "PAKET C : YOGYAKARTA 2H1M",
          price: "IDR 1.027.000",
        },
        {
          image: "/images/pram.jpeg",
          title: "PAKET D : YOGYAKARTA 2H1M",
          price: "IDR 1.016.000",
        },
        {
          image: "/images/jeram.jpeg",
          title: "PAKET A : YOGYAKARTA 3H2M",
          price: "IDR 1.444.000",
        },
        {
          image: "/images/rj.jpeg",
          title: "WISATA YOGYAKARTA 4H3M",
          price: "IDR 1.928.000",
        },
      ],
    },
    {
      city: "Surabaya",
      tours: [
        {
          image: "/images/bali.jpeg",
          title: "Tour Bali 2H1M",
          price: "IDR 837.000",
        },
        {
          image: "/images/bali.jpeg",
          title: "Tour Bali 3H2M",
          price: "IDR 1.260.000",
        },
        {
          image: "/images/dreamland.jpeg",
          title: "Tour Bali 4H3M",
          price: "IDR 1.891.000",
        },
        {
          image: "/images/tanjung.jpeg",
          title: "Wisata Karimunjawa 2H1M",
          price: "IDR 670.000",
        },
      ],
    },
    {
      city: "Semarang",
      tours: [
        {
          image: "/images/songo.jpeg",
          title: "2H1M TRIP SEMARANG 1",
          price: "IDR 1.163.000",
        },
        {
          image: "/images/dusun.jpeg",
          title: "2H1M TRIP SEMARANG 2",
          price: "IDR 1.163.000",
        },
        {
          image: "/images/museum ambarawa.jpeg",
          title: "2H1M TRIP SEMARANG 3",
          price: "IDR 1.216.000",
        },
        {
          image: "/images/Goa Kreo.jpeg",
          title: "2H1M TRIP SEMARANG 4",
          price: "IDR 1.168.000",
        },
        {
          image: "/images/pink.jpeg",
          title: "WISATA LABUAN BAJO 3H2M",
          price: "IDR 3.650.000",
        },
        {
          image: "/images/gili.jpeg",
          title: "PAKET B : LOMBOK ONE DAY",
          price: "IDR 460.000",
        },
      ],
    },
  ];
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
