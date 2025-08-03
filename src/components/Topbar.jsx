import React from "react";
// import './TopBar.css'; // opsional jika kamu ingin pisahkan style-nya

export default function TopBar() {
  const barStyle = {
    backgroundColor: "#1574AC",
    color: "white",
    padding: "0.4rem 1rem",
    fontSize: "0.85rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
  };

  const iconStyle = {
    color: "white",
    marginLeft: "0.6rem",
  };

  return (
    <div className="top-bar" style={barStyle}>
      <div>
        <a
          href="https://wa.me/6285930005544"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          <i className="fab fa-whatsapp"></i> +62 859 3000 5544
        </a>
        <a
          href="mailto:barokahtour.travel@gmail.com"
          style={{ ...linkStyle, marginLeft: "1rem" }}
        >
          <i className="fas fa-envelope"></i> barokahtour.travel@gmail.com
        </a>
      </div>
      <div className="social-icons">
        <a
          href="https://www.instagram.com/barokahtourindonesia_/?utm_source=ig_web_button_share_sheet"
          style={iconStyle}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://www.tiktok.com/@barokahtour_?is_from_webapp=1&sender_device=pc"
          style={iconStyle}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-tiktok"></i>
        </a>
        <a
          href="https://youtube.com/@barokahtoursmi?si=-yRfaFEfKaC-lelk"
          style={iconStyle}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-youtube"></i>
        </a>
      </div>
    </div>
  );
}
