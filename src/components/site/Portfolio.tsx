import weddingImage from "../../assets/portfolio/wedding.jpg";
import babyShowerImage from "../../assets/portfolio/baby-shower.jpg";
import birthdayImage from "../../assets/portfolio/birthday.jpg";
import centerpieceImage from "../../assets/portfolio/centerpiece.jpg";

export default function Portfolio() {
  const projects = [
    {
      title: "Luxury Wedding Reception",
      transition: "transform 0.3s ease",
      cursor: "pointer",
      image: weddingImage,
    },
    {
      title: "Baby Shower Celebration",
      transition: "transform 0.3s ease",
      cursor: "pointer",
      image: babyShowerImage,
    },
    {
      title: "80th Birthday Party",
      transition: "transform 0.3s ease",
      cursor: "pointer",
      image: birthdayImage,
    },
    {
      title: "Elegant Table Centerpiece",
      transition: "transform 0.3s ease",
      cursor: "pointer",
      image: centerpieceImage,
    },
  ];

  return (
    <section style={{ padding: "60px 0" }}>
<h2
  style={{
    textAlign: "center",
    marginBottom: "10px",
  }}
>
  Featured Events
</h2>

<p
  style={{
    textAlign: "center",
    color: "#666",
    marginBottom: "40px",
  }}
>
  A glimpse into the celebrations we've brought to life.
</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {projects.map((project) => (
          <div
            key={project.title}
            style={{
              background: "#fff",
              borderRadius: "16px",
              padding: "20px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: "100%",
                height: "280px",
                objectFit: "cover",
                borderRadius: "12px",
                marginBottom: "15px",
              }}
            />

            <strong>{project.title}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}
