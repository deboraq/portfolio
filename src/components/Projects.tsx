"use client";

import { useState, type CSSProperties } from "react";
import { site, type Project } from "@/data/site";
import { TechIcon } from "./TechIcon";

function ProjectCard({ project }: { project: Project }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  return (
    <article
      className="project-card"
      style={{ "--accent": project.accent } as CSSProperties}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        setTilt({ x: py * -8, y: px * 10 });
      }}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
    >
      <div
        className="project-card__visual"
        style={{
          transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        }}
      >
        <div className="project-card__glow" />
        <span className="project-card__mark">{project.title.slice(0, 2)}</span>
        {project.featured ? (
          <span className="project-card__badge">Destacado</span>
        ) : null}
      </div>

      <div className="project-card__body">
        <p className="project-card__subtitle">{project.subtitle}</p>
        <h3>{project.title}</h3>
        <p className="project-card__desc">{project.description}</p>
        <ul className="project-card__stack">
          {project.stack.map((tech) => (
            <li key={tech}>
              <TechIcon name={tech} size={14} />
              {tech}
            </li>
          ))}
        </ul>
        <div className="project-card__links">
          <a href={project.repo} target="_blank" rel="noopener noreferrer" className="btn-code">
            Código
          </a>
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-demo"
            >
              Ver demo
            </a>
          ) : null}
        </div>
      </div>
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
