"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/data/site";

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <path
        fill="currentColor"
        d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z"
      />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <path
        fill="currentColor"
        d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1L6.6 10.8Z"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <path
        fill="currentColor"
        d="M6.94 6.5A2.44 2.44 0 1 1 6.94 1.6a2.44 2.44 0 0 1 0 4.9ZM2.9 22V8.75h4.08V22H2.9Zm7.2 0h4.08v-7.2c0-1.9.36-3.74 2.72-3.74 2.33 0 2.36 2.18 2.36 3.86V22H23v-7.86c0-3.86-.83-6.82-5.34-6.82-2.17 0-3.62 1.19-4.21 2.32h-.06V8.75H10.1c.05 1.14 0 13.25 0 13.25Z"
      />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path fill="currentColor" d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z" />
    </svg>
  );
}

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "opened">("idle");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const body = `Nombre: ${name}\nEmail: ${email}\n\n${message}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      `Contacto portfolio — ${name || "Hola"}`,
    )}&body=${encodeURIComponent(body)}`;
    setStatus("opened");
  }

  return (
    <section className="section section--contact" id="contacto">
      <div className="section__intro section__intro--center">
        <h2 className="section__title">
          <span className="gradient-text">Contacto</span>
        </h2>
      </div>

      <div className="contact-info-row">
        <a className="contact-chip" href={`mailto:${site.email}`}>
          <span className="contact-chip__icon">
            <MailIcon />
          </span>
          <span className="contact-chip__text">
            <small>Email</small>
            <strong className="contact-chip__email">{site.email}</strong>
          </span>
        </a>
        <a className="contact-chip" href={site.phoneHref}>
          <span className="contact-chip__icon">
            <PhoneIcon />
          </span>
          <span className="contact-chip__text">
            <small>Teléfono</small>
            <strong>{site.phone}</strong>
          </span>
        </a>
        <a
          className="contact-chip"
          href={site.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="contact-chip__icon">
            <LinkedInIcon />
          </span>
          <span className="contact-chip__text">
            <small>LinkedIn</small>
            <strong>Débora Aylén Quinteros</strong>
          </span>
        </a>
        <div className="contact-chip">
          <span className="contact-chip__icon">
            <PinIcon />
          </span>
          <span className="contact-chip__text">
            <small>Ubicación</small>
            <strong>{site.location}</strong>
          </span>
        </div>
      </div>

      <div className="contact-main">
        <div className="contact-art" aria-hidden="true">
          <div className="contact-art__glow" />
          <div className="contact-art__desk">
            <div className="contact-art__person" />
            <div className="contact-art__laptop" />
            <span className="contact-art__tag contact-art__tag--a">{"</>"}</span>
            <span className="contact-art__tag contact-art__tag--b">{"{ }"}</span>
            <span className="contact-art__tag contact-art__tag--c">QA</span>
          </div>
        </div>

        <form className="contact-form" onSubmit={onSubmit}>
          <h3>Escribime</h3>
          <label>
            Tu nombre
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Tu nombre"
            />
          </label>
          <label>
            Tu email
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
            />
          </label>
          <label>
            Mensaje
            <textarea
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Contame en qué puedo ayudarte..."
            />
          </label>
          <button type="submit" className="btn btn--outline-gradient">
            <SendIcon />
            {status === "opened" ? "Abrí tu correo" : "Enviar"}
          </button>
          <p className="contact-form__hint">
            Al tocar Enviar se abre tu app de mail con el mensaje listo para{" "}
            {site.email}. No se manda solo: tenés que confirmar el envío.
          </p>
        </form>
      </div>
    </section>
  );
}
