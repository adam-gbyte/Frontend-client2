import React, { useState } from "react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav
      className="navbar"
      style={{
        backgroundColor: "white",
        padding: "0.6rem 1rem",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      <div
        className="container flex"
        style={{
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <a href="/" className="site-brand">
          <img
            src="https://ik.imagekit.io/barokahtour/images/Logo.png?updatedAt=1754211050291"
            alt="Barokah Logo"
            style={{ height: "45px" }}
          />
        </a>

        <ul
          className="navbar-nav"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            listStyle: "none",
            margin: 0,
          }}
        >
          <li>
            <a href="/" className="nav-link">
              Beranda
            </a>
          </li>
          <li>
            <a href="about" className="nav-link">
              Tentang kami
            </a>
          </li>
          <li
            className="nav-item dropdown"
            style={{ position: "relative" }}
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <a href="#" className="nav-link dropdown-toggle">
              Cabang
            </a>
            {isDropdownOpen && (
              <ul
                className="dropdown-menu"
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  backgroundColor: "white",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                  padding: "0.5rem 0",
                  borderRadius: "5px",
                  listStyle: "none",
                }}
              >
                <li>
                  <a href="sukabumi.html" className="dropdown-link">
                    Sukabumi
                  </a>
                </li>
                <li>
                  <a href="yogyakarta.html" className="dropdown-link">
                    Yogyakarta
                  </a>
                </li>
                <li>
                  <a href="semarang.html" className="dropdown-link">
                    Semarang
                  </a>
                </li>
                <li>
                  <a href="surabaya.html" className="dropdown-link">
                    Surabaya
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="services" className="nav-link">
              Layanan
            </a>
          </li>
          <li>
            <a href="blog" className="nav-link">
              Travel News
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/6285930005544"
              className="nav-link"
              style={{
                backgroundColor: "#1574AC",
                color: "white",
                padding: "0.4rem 1.1rem",
                borderRadius: "30px",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              Pesan Sekarang
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
