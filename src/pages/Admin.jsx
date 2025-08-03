import React, { useEffect } from "react";
import axios from "axios";

export default function Admin() {
  // contoh di Dashboard.jsx
  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      const apiUrl = import.meta.env.VITE_URL_API;
      try {
        const res = await axios.get(`${apiUrl}/auth/admin`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log(res.data); // Data user
      } catch (err) {
        console.error("Gagal mengambil data", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="admin-page">
      <h1>Admin Page</h1>
      <p>This is the admin page where you can manage the application.</p>
      <p>Currently, this page is under construction.</p>
      <p>Please check back later for updates.</p>
    </div>
  );
}
