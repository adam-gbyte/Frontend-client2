export default function HeroSection() {
  return (
    <header className="hero-section">
      <div className="slideshow-container">
        {/* Slide 1 - Video */}
        {/* <a href="/PROMO 1.html"> */}
        <img
          className="bg-slide"
          src="https://ik.imagekit.io/barokahtour/images/biru.jpeg?updatedAt=1754211027021"
          alt="Image 1"
        />
        {/* <video
          className="bg-slide"
          src="https://ik.imagekit.io/barokahtour/videos/biru.jpeg"
          autoPlay
          muted
          loop
          playsInline
        ></video> */}
        {/* </a> */}
        {/* Slide 2 - Gambar */}
        <a href="/PROMO 2.html">
          <img
            className="bg-slide"
            src="https://ik.imagekit.io/barokahtour/images/biru.jpeg?updatedAt=1754211027021"
            alt="Image 1"
          />
        </a>

        {/* Slide 3 - Gambar */}
        <a href="/PROMO 3.html">
          <img
            className="bg-slide"
            src="https://ik.imagekit.io/barokahtour/images/gunung.jpeg?updatedAt=1754211046694"
            alt="Image 2"
          />
        </a>

        {/* Slide 4 - Gambar */}
        <a href="/PROMO 4.html">
          <img
            className="bg-slide"
            src="https://ik.imagekit.io/barokahtour/images/bali.jpeg?updatedAt=1754211026479"
            alt="Image 3"
          />
        </a>
      </div>
    </header>
  );
}
