import React from "react";

export default function TourCards({ data }) {
  const { city, tours } = data;

  return (
    <section className="tour-cards-section">
      <h3 className="tour-section-title">
        PAKET WISATA {city.toUpperCase()}
        <a href={`/${city.toLowerCase()}`} className="lihat-semua-link">
          Lihat Semua
        </a>
      </h3>

      <div className="scroll-container">
        {tours.map((tour, index) => (
          <div className="tour-card" key={index}>
            <img src={tour.image} alt={tour.title} />
            <h4>{tour.title}</h4>
            <p className="price-label">Mulai dari</p>
            <strong className="price-value">{tour.price}</strong>
            <a href={`/${city.toLowerCase()}`} className="detail-button">
              Lihat Detail
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
