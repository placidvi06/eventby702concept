export default function Hero() {
  return (
    <section style={{padding:"70px 0", textAlign:"center"}}>
      <h1>Crafting Moments That Linger.</h1>

      <p>Luxury Event Planning & Decor in Lagos</p>

      <div style={{marginTop:20}}>
        <button className="btn btn-gold">Book Now</button>
        <button className="btn btn-outline" style={{marginLeft:10}}>
          Call Us
        </button>
      </div>

      <div style={{
        marginTop:30,
        padding:20,
        display:"inline-block",
        background:"#fff",
        borderRadius:12
      }}>
        ⭐ 5.0 Rating • 12 Reviews
      </div>
    </section>
  );
}
