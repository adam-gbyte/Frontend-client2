import React from "react";
// import './FooterBar.css'; // opsional, kalau kamu pisahkan styling

export default function FooterBar() {
  return (
    <footer className="footer-bar">
      <div className="footer-content">
        <div className="footer-logos">
          <img
            src="https://ik.imagekit.io/barokahtour/images/mandiri.png?updatedAt=1754211051583"
            alt="Mandiri"
          />
          <img
            src="https://ik.imagekit.io/barokahtour/images/bca.png?updatedAt=1754211026491"
            alt="BCA"
          />
          <img
            src="https://ik.imagekit.io/barokahtour/images/bni.png?updatedAt=1754211032351"
            alt="BNI"
          />
          <img
            src="https://ik.imagekit.io/barokahtour/images/asita.png?updatedAt=1754211026420"
            alt="Kemenag RI"
          />
          <img
            src="https://ik.imagekit.io/barokahtour/images/won.png?updatedAt=1754211073159"
            alt="Wonderful Indonesia"
          />
        </div>
        <div className="footer-text">
          Copyright © 2025 PT. Bina Barokah Sejahtera
        </div>
      </div>
    </footer>
  );
}
