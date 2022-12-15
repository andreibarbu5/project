import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Trade from "../components/Trade";
import Team from "../components/Team";
import Mountains from "../components/Mountains";

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
      {/* Contact Us */}
      {/* Footer */}
      <div className="h-screen bg-[#ffffff]"></div>
    </div>
  );
}
``;
