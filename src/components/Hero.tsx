"use client";

import { site } from "@/data/site";
import { ProfileCard } from "./ProfileCard";
import { Typewriter } from "./Typewriter";

type Props = {
  onContact: () => void;
};

export function Hero({ onContact }: Props) {
  return (
    <section className="hero" id="inicio">
      <div className="hero__copy">
        <p className="hero__hello">Hola, soy</p>
        <h1 className="hero__name">{site.name}</h1>
        <p className="hero__company">
          {site.role} · {site.roleSecondary}
        </p>
        <p className="hero__company hero__company--muted">{site.company}</p>
        <p className="hero__typing">
          <Typewriter phrases={site.typingPhrases} />
        </p>
        <p className="hero__tagline">{site.tagline}</p>

        <div className="hero__socials">
          <a href={site.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${site.email}`}>Email</a>
        </div>
      </div>

      <div className="hero__card">
        <ProfileCard onContact={onContact} />
      </div>
    </section>
  );
}
