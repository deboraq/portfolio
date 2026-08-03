import { site } from "@/data/site";

export function About() {
  return (
    <section className="section" id="sobre-mi">
      <div className="section__intro section__intro--center">
        <h2 className="section__title">
          Sobre <span className="gradient-text">mí</span>
        </h2>
      </div>

      <div className="about">
        <div className="about__copy">
          {site.about.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <div className="about__certs">
          <h3>Certificaciones</h3>
          <ul>
            {site.certifications.map((cert) => (
              <li key={cert}>{cert}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
