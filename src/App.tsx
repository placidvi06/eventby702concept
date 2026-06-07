import "./styles.css";
import SiteNav from "./components/site/SiteNav";
import Hero from "./components/site/Hero";
import Services from "./components/site/Services";
import Portfolio from "./components/site/Portfolio";
import Testimonials from "./components/site/Testimonials";
import About from "./components/site/About";
import Contact from "./components/site/Contact";
import SiteFooter from "./components/site/SiteFooter";

function App() {
  return (
    <div className="container">
      <SiteNav />
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <About />
      <Contact />
      <SiteFooter />
    </div>
  );
}

export default App;
