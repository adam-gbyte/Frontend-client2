import React from "react";

export default function CustomCTA() {
  return (
    <section className="custom-cta">
      <video autoPlay muted loop playsInline className="cta-video">
        <source
          src="https://ik.imagekit.io/barokahtour/videos/video-section.mp4?updatedAt=1754211473918"
          type="video/mp4"
        />
        Browser Anda tidak mendukung video.
      </video>

      <div className="cta-overlay">
        <div className="cta-text">
          <h2>Belum menemukan paket yang sesuai?</h2>
          <p>
            Kami siap bantu merancang perjalanan khusus sesuai kebutuhan dan
            anggaran Anda!
          </p>
          <a
            href="https://wa.me/6285930005544"
            className="cta-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat Kami Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}
