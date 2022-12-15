import {Navbar,Hero,About,Trade,Team,Mountains,Contact,Faq,Footer} from "../components"

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
