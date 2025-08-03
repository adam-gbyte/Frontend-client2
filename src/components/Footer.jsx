import React from "react";

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        {/* Kolom 1 */}
        <div className="footer-col">
          <h3>PT. Bina Barokah Sejahtera</h3>
          <p>
            Selamat Datang di PT. Bina Barokah Tour – Awali Perjalanan Istimewa
            Anda Bersama Kami!
            <br />
            <br />
            Mari jelajahi keindahan dunia dengan tenang dan nyaman – karena
            setiap langkah adalah berkah dan kenangan tak ternilai.
          </p>
        </div>

        {/* Kolom 2 */}
        <div className="footer-col">
          <h3>Kantor Pusat</h3>
          <ul>
            <li>🏢 GEDUNG GRAHA BAROKAH</li>
            <li>📍 Jl. Raya Cisaat No. 1 Sukamanah Cisaat – Sukabumi</li>
            <li>
              📧{" "}
              <a href="mailto:barokahtour.travel@gmail.com">
                barokahtour.travel@gmail.com
              </a>
            </li>
            <li>
              📞{" "}
              <a
                href="https://wa.me/62266230408"
                target="_blank"
                rel="noopener noreferrer"
              >
                0266 230 408
              </a>{" "}
              /{" "}
              <a
                href="https://wa.me/6285930005544"
                target="_blank"
                rel="noopener noreferrer"
              >
                0859 3000 5544
              </a>
            </li>
          </ul>
        </div>

        {/* Lokasi */}
        <section className="lokasi">
          <h3>Lokasi Kami</h3>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.8413543183374!2d106.89146117356522!3d-6.9095652676201915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68482b702b6599%3A0xfd5d3d335f6d8bd8!2sBarokah%20Tour%20%26%20Travel!5e0!3m2!1sid!2sid!4v1752729967693!5m2!1sid!2sid"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Barokah Tour"
            ></iframe>
          </div>
        </section>
      </div>
    </footer>
  );
}
