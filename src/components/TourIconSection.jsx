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
              src="/images/jeram.jpeg"
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
              src="/images/situ.jpeg"
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
              src="/images/pantai-bali.jpeg"
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
              src="/images/services-bg.jpg"
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
