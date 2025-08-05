import { useState, useEffect } from "react";
import axios from "axios";
import ImageUpload from "../components/admin/ImageUpload";
import Sidebar from "../components/ui/Sidebar";
import { Navigate } from "react-router-dom";

export default function Admin() {
  const apiUrl = import.meta.env.VITE_URL_API;

  const [currentTab, setCurrentTab] = useState("city");

  const [uploadedUrl, setUploadedUrl] = useState("");
  const [cities, setCities] = useState([]);
  const [newCity, setNewCity] = useState("");
  const [tourData, setTourData] = useState({
    city_id: "",
    image: "",
    title: "",
    price: "",
  });

  // Autentikasi admin
  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      try {
        const res = await axios.get(`${apiUrl}/auth/admin`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(res.data); // Data user
      } catch (err) {
        console.error("Gagal mengambil data", err);
        Navigate("/login"); // Redirect ke halaman login jika gagal
      }
    };

    fetchData();
  }, [apiUrl]);

  // Ambil data kota
  useEffect(() => {
    axios.get(`${apiUrl}/tours`).then((res) => {
      setCities(res.data);
    });
  }, [apiUrl]);

  const handleImageUploaded = (url) => {
    console.log("Image berhasil diunggah:", url);
    setUploadedUrl(url);
    setTourData((prev) => ({ ...prev, image: url })); // Sync ke tourData.image
  };

  const handleAddCity = async () => {
    if (!newCity.trim()) {
      alert("Nama kota tidak boleh kosong.");
      return;
    }
    try {
      const res = await axios.post(`${apiUrl}/tours/city`, { name: newCity });
      // Refresh data kota dari server, bukan hanya append
      const refreshed = await axios.get(`${apiUrl}/tours`);
      setCities(refreshed.data);
      setNewCity("");
    } catch (err) {
      alert("Gagal tambah kota");
      console.error(err);
    }
  };

  const handleAddTour = async () => {
    const { city_id, title, price, image } = tourData;

    console.log("Data tour yang akan ditambahkan:", tourData);

    if (!city_id || !title.trim() || !price.trim() || !image.trim()) {
      alert("Lengkapi semua data tour terlebih dahulu.");
      return;
    }

    try {
      await axios.post(`${apiUrl}/tours/tour`, tourData);
      alert("Tour berhasil ditambahkan!");
      setTourData({ city_id: "", image: "", title: "", price: "" });
      setUploadedUrl("");
    } catch (err) {
      alert("Gagal tambah tour");
      console.error(err);
    }
  };

  const addAll = async (e) => {
    e.preventDefault();
    // Jika kota baru ditambahkan, baru lanjut tambah tour
    if (newCity.trim()) {
      await handleAddCity();
    }
    await handleAddTour();
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <div style={styles.container}>
        <h2 style={styles.heading}>
          {currentTab === "city" ? "Tambah Kota" : "Tambah Tour"}
        </h2>

        <form onSubmit={addAll} style={styles.form}>
          {currentTab === "city" && (
            <input
              type="text"
              placeholder="Nama kota"
              value={newCity}
              onChange={(e) => setNewCity(e.target.value)}
              style={styles.input}
            />
          )}

          {currentTab === "tour" && (
            <>
              <select
                value={tourData.city_id}
                onChange={(e) =>
                  setTourData({ ...tourData, city_id: e.target.value })
                }
                style={styles.input}
              >
                <option value="">Pilih Kota</option>
                {cities.map((city) => (
                  <option key={city.city_id} value={city.city_id}>
                    {city.city}
                  </option>
                ))}
              </select>

              <ImageUpload
                folder="barokahtour"
                onUploaded={handleImageUploaded}
                defaultImage={uploadedUrl}
              />

              <input
                type="text"
                placeholder="Image path (optional)"
                value={tourData.image}
                onChange={(e) =>
                  setTourData({ ...tourData, image: e.target.value })
                }
                style={styles.input}
              />

              <input
                type="text"
                placeholder="Judul tour"
                value={tourData.title}
                onChange={(e) =>
                  setTourData({ ...tourData, title: e.target.value })
                }
                style={styles.input}
              />

              <input
                type="text"
                placeholder="Harga (ex: IDR 500.000)"
                value={tourData.price}
                onChange={(e) =>
                  setTourData({ ...tourData, price: e.target.value })
                }
                style={styles.input}
              />
            </>
          )}

          <button type="submit" style={styles.button}>
            {currentTab === "city" ? "Tambah Kota" : "Tambah Tour"}
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    flex: 1,
    padding: "40px",
    backgroundColor: "#f8f9fa",
    minHeight: "100vh",
  },
  heading: {
    fontSize: "24px",
    marginBottom: "24px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    maxWidth: "500px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "12px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "8px",
  },
};
