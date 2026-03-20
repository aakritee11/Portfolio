import {projects} from "../data/projects.js"
import FadeIn from "../hooks/useFadeIn.jsx"

export default function Projects(){
    return(
          <section id="projects" style={{ borderTop: "1px solid var(--border)" }}>
        <FadeIn>
          <p className="section-label">Work</p>
          <h2 className="section-title">Projects</h2>
        </FadeIn>
        <FadeIn style={{ transitionDelay: "0.1s" }}>
          <div className="projects-grid">
            {projects.map((p, i) => (
              <div className="project-card" key={p.title}>
                <span className="project-num">0{i + 1}</span>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>
                <div className="project-tags">
                  {p.tags.map(t => <span key={t} className="project-tag">{t}</span>)}
                </div>
                <div className="project-links">
                  <a href={p.live} className="project-link">↗ Live</a>
                  <a href={p.github} className="project-link">⌥ GitHub</a>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>
    )
}