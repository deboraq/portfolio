import { marqueeIcons } from "@/lib/tech";
import { site } from "@/data/site";
import { TechIcon } from "./TechIcon";

export function Skills() {
  const loop = [...marqueeIcons, ...marqueeIcons];

  return (
    <section className="section" id="habilidades">
      <div className="section__intro section__intro--center">
        <h2 className="section__title">
          Mis <span className="gradient-text">habilidades</span>
        </h2>
      </div>

      <div className="logoloop logoloop--fade" aria-hidden="true">
        <div className="logoloop__track">
          <ul className="logoloop__list">
            {loop.map((skill, i) => (
              <li key={`${skill}-${i}`} className="logoloop__item">
                <span className="logoloop__icon" title={skill}>
                  <TechIcon name={skill} mono size={34} />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="skills-grid">
        {site.skillGroups.map((group) => (
          <div key={group.title} className="skill-card">
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>
                  <span>{item}</span>
                  <TechIcon name={item} size={24} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
