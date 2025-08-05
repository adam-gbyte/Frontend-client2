export default function TourIconsSection() {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        width: "100vw",
        marginLeft: "calc(-50vw + 50%)",
        padding: "4rem 0",
      }}
    >
      <div
        className="tour-icons-container"
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "4rem",
        }}
      >
        {/* Paket Wisata */}
        <a
          href=""
          className="tour-icon-item"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <div className="icon-circle">
            <img
              src="https://ik.imagekit.io/barokahtour/images/jeram.jpeg?updatedAt=1754211050605"
              alt="Paket Wisata"
              className="icon-image"
            />
          </div>
          <h3 className="icon-title">Paket Wisata</h3>
        </a>

        {/* One Day Trip */}
        <a
          href=""
          className="tour-icon-item"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <div className="icon-circle">
            <img
              src="https://ik.imagekit.io/barokahtour/images/situ.jpeg?updatedAt=1754211068061"
              alt="One Day Trip"
              className="icon-image"
            />
          </div>
          <h3 className="icon-title">One Day Trip</h3>
        </a>

        {/* Overland Umum */}
        <a
          href=""
          className="tour-icon-item"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <div className="icon-circle">
            <img
              src="https://ik.imagekit.io/barokahtour/images/pantai-bali.jpeg?updatedAt=1754211055932"
              alt="Overland Umum"
              className="icon-image"
            />
          </div>
          <h3 className="icon-title">Overland Umum</h3>
        </a>

        {/* Event Organizer */}
        <a
          href=""
          className="tour-icon-item"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <div className="icon-circle">
            <img
              src="https://ik.imagekit.io/barokahtour/images/services-bg.jpg?updatedAt=1754211068367"
              alt="Event Organizer"
              className="icon-image"
            />
          </div>
          <h3 className="icon-title">Event Organizer</h3>
        </a>
      </div>
    </div>
  );
}
