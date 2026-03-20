import { useEffect , useRef } from "react";
import {skills, featured} from "../data/skills.js";
import FadeIn from "../hooks/useFadeIn.jsx";

export default function Skills(){
    return(
          <section id="skills" style={{ borderTop: "1px solid var(--border)", background: "var(--surface)" }}>
        <FadeIn>
          <p className="section-label">Skills</p>
          <h2 className="section-title">Tech Stack</h2>
        </FadeIn>
        <FadeIn style={{ transitionDelay: "0.1s" }}>
          <div className="skills-grid">
            {skills.map(s => (
              <span key={s} className={`skill-tag ${featured.includes(s) ? "featured" : ""}`}>{s}</span>
            ))}
          </div>
        </FadeIn>
      </section>
    )
}