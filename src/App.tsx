import "./styles.css";
import SiteNav from "./components/site/SiteNav";
import Hero from "./components/site/Hero";
import Services from "./components/site/Services";
import Contact from "./components/site/Contact";

function App() {
  return (
    <div className="container">
      <SiteNav />
      <Hero />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
