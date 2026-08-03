"use client";

import { useState } from "react";
import { About } from "./About";
import { ChatWidget } from "./ChatWidget";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { Nav } from "./Nav";
import { Projects } from "./Projects";
import { Skills } from "./Skills";

export function PortfolioApp() {
  const [chatOpen, setChatOpen] = useState(false);

  function openChat() {
    setChatOpen(true);
  }

  function goContact() {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="page">
      <Nav onHire={openChat} />
      <main>
        <Hero onContact={goContact} onChat={openChat} />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ChatWidget open={chatOpen} onClose={() => setChatOpen(false)} />
    </div>
  );
}
