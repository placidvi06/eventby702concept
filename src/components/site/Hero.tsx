import heroImage from "../../assets/hero/Hero.jpg";

export default function Hero() {
  return (
    <section
      style={{
        textAlign: "center",
        padding: "80px 0",
      }}
    >
      <p
        style={{
          color: "#C5A059",
          fontWeight: 600,
          letterSpacing: "2px",
          textTransform: "uppercase",
        }}
      >
        Luxury Event Planning & Decor
      </p>

      <h1
        style={{
          fontSize: "clamp(3rem, 8vw, 5rem)",
          margin: "20px 0",
          lineHeight: "1.1",
        }}
      >
        Crafting Moments
        <br />
        That Linger.
      </h1>

      <p
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          fontSize: "1.1rem",
        }}
      >
        Luxury Event Planning, Coordination, Decoration,
        Management and Decor Rental Services in Lagos.
      </p>

      <div style={{ marginTop: "30px" }}>
       <a href="https://wa.me/2348032734531">
        <button className="btn btn-gold">
          Book Now
        </button>
       </a>

       <a href="tel:08032734531">
        <button
         className="btn btn-outline"
         style={{ marginLeft: "10px" }}
        >
          Call Us
        </button>
       </a>
      </div>

<div
  style={{
    marginTop: "40px",
    position: "relative",
    overflow: "hidden",
  }}
 >
  <img
    src={heroImage}
    alt="Luxury Event Setup"
    style={{
      width: "100%",
      height: "500px",
      objectFit: "cover",
      borderRadius: "24px",
      boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
    }}
  />

  <div
    style={{
      position: "absolute",
      right: "20px",
      bottom: "20px",
      background: "#fff",
      padding: "16px 24px",
      borderRadius: "16px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      fontWeight: "600",
    }}
  >
    ⭐⭐⭐⭐⭐ 5.0 Rating • 12 Reviews
  </div>
</div>
    </section>
  );
}
