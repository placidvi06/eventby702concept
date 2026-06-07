export default function SiteNav() {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "#FBF9F6",
        padding: "16px 0",
        borderBottom: "1px solid #eee",
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <strong
          style={{
            fontSize: "1.2rem",
            color: "#121417",
          }}
        >
          Eventby702concept
        </strong>

        <a href="tel:08032734531">
          <button className="btn btn-gold">
            Call Now
          </button>
        </a>
      </div>
    </nav>
  );
}
