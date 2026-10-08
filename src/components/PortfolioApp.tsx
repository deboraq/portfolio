"use client";

import { About } from "./About";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { Nav } from "./Nav";
import { Projects } from "./Projects";
import { Skills } from "./Skills";

export function PortfolioApp() {
  function goContact() {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="page">
      <Nav />
      <main>
        <Hero onContact={goContact} />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
