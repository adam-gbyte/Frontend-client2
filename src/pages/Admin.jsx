import { useEffect, useState } from "react";
import axios from "axios";
import "../style/admin.css";

export default function Admin() {
  const apiUrl = import.meta.env.VITE_URL_API || "http://localhost:5000/api";

  const [cities, setCities] = useState([]);
  const [newCity, setNewCity] = useState("");
  const [newTour, setNewTour] = useState({ image: "", title: "", price: "" });
  const [selectedCityId, setSelectedCityId] = useState("");

  const fetchCities = async () => {
    try {
      const res = await axios.get(`${apiUrl}/cities`);
      setCities(res.data);
    } catch (err) {
      console.error("Gagal ambil data:", err.message);
    }
  };

  useEffect(() => {
    fetchCities();
  }, []);

  const handleAddCity = async () => {
    try {
      await axios.post(`${apiUrl}/cities`, {
        city: newCity,
        tours: [],
      });
      setNewCity("");
      fetchCities();
    } catch (err) {
      console.error("Gagal tambah kota:", err.message);
    }
  };

  const handleDeleteCity = async (id) => {
    try {
      await axios.delete(`${apiUrl}/cities/${id}`);
      fetchCities();
    } catch (err) {
      console.error("Gagal hapus kota:", err.message);
    }
  };

  const handleAddTour = async () => {
    try {
      await axios.post(`${apiUrl}/cities/${selectedCityId}/tours`, newTour);
      setNewTour({ image: "", title: "", price: "" });
      fetchCities();
    } catch (err) {
      console.error("Gagal tambah tour:", err.message);
    }
  };

  const handleDeleteTour = async (cityId, tourId) => {
    try {
      await axios.delete(`${apiUrl}/cities/${cityId}/tours/${tourId}`);
      fetchCities();
    } catch (err) {
      console.error("Gagal hapus tour:", err.message);
    }
  };

  return (
    <div className="admin-wrapper">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <h2>Admin</h2>
        <nav>
          <ul>
            <li>
              <a href="#tambah-kota">Tambah Kota</a>
            </li>
            <li>
              <a href="#tambah-tour">Tambah Tour</a>
            </li>
            <li>
              <a href="#data-kota-tour">Data Kota & Tour</a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="admin-container">
        <h2 className="admin-title">Admin Dashboard - Kelola Kota & Tours</h2>

        <div className="section" id="tambah-kota">
          <h3>Tambah Kota Baru</h3>
          <input
            type="text"
            placeholder="Nama kota"
            value={newCity}
            onChange={(e) => setNewCity(e.target.value)}
          />
          <button onClick={handleAddCity}>Tambah Kota</button>
        </div>

        <div className="section" id="tambah-tour">
          <h3>Tambah Tour ke Kota</h3>
          <select
            value={selectedCityId}
            onChange={(e) => setSelectedCityId(e.target.value)}
          >
            <option value="">-- Pilih Kota --</option>
            {cities.map((city) => (
              <option key={city._id} value={city._id}>
                {city.city}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Image URL"
            value={newTour.image}
            onChange={(e) => setNewTour({ ...newTour, image: e.target.value })}
          />
          <input
            type="text"
            placeholder="Judul Tour"
            value={newTour.title}
            onChange={(e) => setNewTour({ ...newTour, title: e.target.value })}
          />
          <input
            type="text"
            placeholder="Harga"
            value={newTour.price}
            onChange={(e) => setNewTour({ ...newTour, price: e.target.value })}
          />
          <button onClick={handleAddTour}>Tambah Tour</button>
        </div>

        <div className="section" id="data-kota-tour">
          <h3>Data Kota & Tour</h3>
          {cities.map((city) => (
            <div key={city._id} className="city-card">
              <h4>
                {city.city}{" "}
                <button
                  className="btn-delete"
                  onClick={() => handleDeleteCity(city._id)}
                >
                  Hapus Kota
                </button>
              </h4>
              <ul className="tour-list">
                {city.tours.map((tour) => (
                  <li key={tour._id} className="tour-item">
                    <img src={tour.image} alt={tour.title} width="100" />
                    <div>
                      <strong>{tour.title}</strong> - {tour.price}
                    </div>
                    <button
                      className="btn-delete"
                      onClick={() => handleDeleteTour(city._id, tour._id)}
                    >
                      Hapus Tour
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
