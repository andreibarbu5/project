import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Trade from "../components/Trade";
import Team from "../components/Team";
import Mountains from "../components/Mountains";
import Contact from "../components/Contact";
import Faq from "../components/Faq";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="">
      {/* Navbar */}
      <Navbar />
      {/* Hero */}
      <Hero />
      {/* About + Chart */}
      <About />
      {/* Trade your GHG*/}
      <Trade />
      {/* Team */}
      <Team />
      {/* Mountains */}
      <Mountains />
      {/* FAQ Dropdown Questions */}
      <Faq />
      {/* Contact Us */}
      <Contact />
      {/* Footer */}
      <Footer />
    </div>
  );
}
