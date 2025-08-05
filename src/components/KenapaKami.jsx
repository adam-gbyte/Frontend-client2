import React from "react";

export default function KenapaKami() {
  return (
    <section
      style={{
        backgroundColor: "#1e73be",
        padding: "40px 20px",
        color: "white",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
        Kenapa Harus Kami?
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {/* Card 1 */}
        <div
          style={{
            background: "white",
            color: "black",
            padding: "20px",
            borderRadius: "10px",
            maxWidth: "300px",
            flex: "1",
          }}
        >
          <img
            src="https://ik.imagekit.io/barokahtour/images/telp.png?updatedAt=1754211068217"
            alt="Icon Respon Cepat"
            style={{
              width: "30px",
              height: "30px",
              marginBottom: "10px",
            }}
          />
          <h3>Respon Cepat & Ramah</h3>
          <p>
            Kami merespon kebutuhan pelanggan dengan cepat dan ramah. Tim
            customer service kami siap membantu Anda kapan pun dibutuhkan.
          </p>
        </div>

        {/* Card 2 */}
        <div
          style={{
            background: "white",
            color: "black",
            padding: "20px",
            borderRadius: "10px",
            maxWidth: "300px",
            flex: "1",
          }}
        >
          <img
            src="https://ik.imagekit.io/barokahtour/images/tameng.jpeg?updatedAt=1754211067957"
            alt="Icon Terpercaya"
            style={{
              width: "30px",
              height: "30px",
              marginBottom: "10px",
            }}
          />
          <h3>Terpercaya & Berpengalaman</h3>
          <p>
            Kami telah dipercaya oleh banyak pelanggan dan memiliki pengalaman
            dalam menangani berbagai jenis event dengan aman dan profesional.
          </p>
        </div>

        {/* Card 3 */}
        <div
          style={{
            background: "white",
            color: "black",
            padding: "20px",
            borderRadius: "10px",
            maxWidth: "300px",
            flex: "1",
          }}
        >
          <img
            src="https://ik.imagekit.io/barokahtour/images/kop.jpeg?updatedAt=1754211049856"
            alt="Icon Trip"
            style={{
              width: "30px",
              height: "30px",
              marginBottom: "10px",
            }}
          />
          <h3>Perjalanan Terencana dengan Baik</h3>
          <p>
            Setiap perjalanan disusun dengan baik, mulai dari jadwal,
            transportasi, logistik, hingga akomodasi, untuk memastikan
            kenyamanan Anda.
          </p>
        </div>
      </div>
    </section>
  );
}
