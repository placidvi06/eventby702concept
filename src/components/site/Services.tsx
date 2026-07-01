const services = [
  "Event Planning",
  "Event Management",
  "Event Coordination",
  "Event Supervision",
  "Event Design",
  "Event Decoration",
  "Event Decor Rental"
];

export default function Services() {
  return (
    <section>
      <h2>Services</h2>

      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",
        gap:15
      }}>
        {services.map(s => (
          <div key={s} style={{
            padding:15,
            background:"#fff",
            borderRadius:"10px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            border:"1px solid #eee"
          }}>
            {s}
          </div>
        ))}
      </div>
    </section>
  );
}
