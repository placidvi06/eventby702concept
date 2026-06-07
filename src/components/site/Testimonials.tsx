export default function Testimonials() {
  return (
    <section
      style={{
        background: "#121417",
        color: "white",
        padding: "60px 20px",
        marginTop: "60px",
        borderRadius: "20px",
      }}
    >
      <h2 style={{ textAlign: "center" }}>What Clients Say</h2>

      <div
        style={{
          display: "grid",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <div
          style={{
            background: "#1b1f24",
            padding: "20px",
            borderRadius: "12px",
          }}
        >
          <p>
            "Excellent service and beautiful decoration. Everything was handled professionally."
          </p>
          <strong>— Patrick Michael</strong>
        </div>

        <div
          style={{
            background: "#1b1f24",
            padding: "20px",
            borderRadius: "12px",
          }}
        >
          <p>
            "Very creative team. They transformed our event space beyond expectations."
          </p>
          <strong>— Folajimi Adeloye</strong>
        </div>
      </div>
    </section>
  );
}
