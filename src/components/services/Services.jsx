export default function OurServicesSection() {
  return (
    <>
      {/* Slide-out image section */}
      <div className="header-slider">
        <div className="slider">
          <img
            src="https://ik.imagekit.io/barokahtour/images/services-bg.jpg?updatedAt=1754211068367"
            className="active"
            alt="Slide 1"
          />
          <img
            src="https://ik.imagekit.io/barokahtour/images/gallery-5.jpg?updatedAt=1754211044567"
            alt="Slide 2"
          />
          <img
            src="https://ik.imagekit.io/barokahtour/images/gallery-6.jpg?updatedAt=1754211044981"
            alt="Slide 3"
          />
          {/* Tambahkan slide jika perlu */}
        </div>
        <div className="header-overlay">
          <h1>BAROKAH</h1>
          <h2>SERVIS KAMI</h2>
        </div>
      </div>

      {/* Tentang Kami section */}
      <section className="tentang-kami">
        <div className="tentang-container">
          <h2>Barokah Tour & Travel bergerak dalam bidang jasa:</h2>

          <div className="cabang-item">
            <p>Paket Wisata Rohani, Umroh dan Ziaroh (All In)</p>
            <p>Tour Domestik dan Mancanegara</p>
            <p>Ticketing Pesawat</p>
            <p>MICE/EO/WO</p>
            <p>
              Study Tour, Study Banding, Capacity Building, Kunjungan Kerja, dan
              Lainnya
            </p>
            <p>Persewaan Transportasi Pariwisata</p>
            <p>Agen Resmi PT. Taman Impian Jaya Ancol</p>
            <p>Event Organizer</p>
            <p>Team Building, Company Meeting, Gathering, and Outbound</p>
            <p>Exhibition, ESQ, Expo, dan Bazar</p>
          </div>
        </div>
      </section>
    </>
  );
}
