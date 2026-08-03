"use client";

import { useState } from "react";
import { site } from "@/data/site";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contacto", label: "Contacto" },
];

type Props = {
  onHire: () => void;
};

export function Nav({ onHire }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="nav__inner">
        <a href="#inicio" className="nav__brand">
          {site.initials}
        </a>

        <button
          type="button"
          className="nav__burger"
          aria-label="Menú"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>

        <nav className={`nav__links${open ? " is-open" : ""}`} aria-label="Principal">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <button
            type="button"
            className="nav__hire"
            onClick={() => {
              setOpen(false);
              onHire();
            }}
          >
            Contactame
          </button>
        </nav>
      </div>
    </header>
  );
}
