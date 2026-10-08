"use client";

import Image from "next/image";
import { useEffect, useState, type CSSProperties } from "react";
import { createPortal } from "react-dom";
import { site, type Project } from "@/data/site";
import { TechIcon } from "./TechIcon";

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="project-card__links">
      <a href={project.repo} target="_blank" rel="noopener noreferrer" className="btn-code">
        Código
      </a>
      {project.demo ? (
        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-demo">
          Ver demo
        </a>
      ) : null}
    </div>
  );
}

function ProjectStack({ project }: { project: Project }) {
  return (
    <ul className="project-card__stack">
      {project.stack.map((tech) => (
        <li key={tech}>
          <TechIcon name={tech} size={14} />
          {tech}
        </li>
      ))}
    </ul>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const [current, setCurrent] = useState(0);
  const images = project.images;
  const count = images.length;

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (count > 1 && e.key === "ArrowLeft") setCurrent((i) => (i - 1 + count) % count);
      if (count > 1 && e.key === "ArrowRight") setCurrent((i) => (i + 1) % count);
    }
    window.addEventListener("keydown", onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [count, onClose]);

  return createPortal(
    <div className="project-modal" role="dialog" aria-modal="true" aria-label={project.title} onClick={onClose}>
      <div
        className="project-modal__panel"
        style={{ "--accent": project.accent } as CSSProperties}
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="project-modal__close" aria-label="Cerrar" onClick={onClose}>
          ×
        </button>

        <header className="project-modal__header">
          <p className="project-card__subtitle">{project.subtitle}</p>
          <h3>{project.title}</h3>
        </header>

        {count ? (
          <div className="project-modal__gallery">
            <div className="project-modal__main">
              <Image
                key={images[current]}
                src={images[current]}
                alt={`Captura ${current + 1} de ${project.title}`}
                width={1800}
                height={900}
                sizes="(max-width: 960px) 100vw, 900px"
                quality={90}
                className="project-modal__image"
              />
              {count > 1 ? (
                <>
                  <button
                    type="button"
                    className="project-modal__nav project-modal__nav--prev"
                    aria-label="Captura anterior"
                    onClick={() => setCurrent((i) => (i - 1 + count) % count)}
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    className="project-modal__nav project-modal__nav--next"
                    aria-label="Captura siguiente"
                    onClick={() => setCurrent((i) => (i + 1) % count)}
                  >
                    ›
                  </button>
                </>
              ) : null}
            </div>
            {count > 1 ? (
              <div className="project-modal__thumbs">
                {images.map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    aria-label={`Ver captura ${i + 1}`}
                    className={i === current ? "is-active" : undefined}
                    onClick={() => setCurrent(i)}
                  >
                    <Image src={src} alt="" width={180} height={90} sizes="120px" />
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        ) : null}

        <div className="project-modal__content">
          <p className="project-modal__desc">{project.about}</p>
          <aside>
            <h4>Tecnologías</h4>
            <ProjectStack project={project} />
            <ProjectLinks project={project} />
          </aside>
        </div>

        <div className="project-modal__sections">
          {project.sections.map((section) => (
            <section key={section.title}>
              <h4>{section.title}</h4>
              <ul className="project-modal__highlights">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </div>,
    document.body,
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [open, setOpen] = useState(false);
  const cover = project.cover;

  return (
    <article
      className="project-card"
      style={{ "--accent": project.accent } as CSSProperties}
      onMouseMove={(e) => {
        if (open) return;
        const r = e.currentTarget.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        setTilt({ x: py * -8, y: px * 10 });
      }}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
    >
      <button
        type="button"
        className={`project-card__visual${cover ? " project-card__visual--cover" : ""}`}
        aria-label={`Ver detalle de ${project.title}`}
        onClick={() => setOpen(true)}
        style={{
          transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        }}
      >
        <span className="project-card__glow" />
        {cover ? (
          <span className="project-cover">
            <Image
              src={cover}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              quality={90}
            />
          </span>
        ) : (
          <span className="project-card__mark">{project.title.slice(0, 2)}</span>
        )}
        {project.featured ? <span className="project-card__badge">Destacado</span> : null}
        <span className="project-card__hint">Ver detalle</span>
      </button>

      <div className="project-card__body">
        <p className="project-card__subtitle">{project.subtitle}</p>
        <h3>{project.title}</h3>
        <p className="project-card__desc">{project.description}</p>
        <ProjectStack project={project} />
        <ProjectLinks project={project} />
      </div>

      {open ? <ProjectModal project={project} onClose={() => setOpen(false)} /> : null}
    </article>
  );
}

export function Projects() {
  return (
    <section className="section" id="proyectos">
      <div className="section__intro section__intro--center">
        <h2 className="section__title">
          Mis <span className="gradient-text">proyectos</span>
        </h2>
        <p className="section__lead">
          Una selección de cosas que construí recientemente.
        </p>
      </div>

      <div className="projects-grid">
        {site.projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
