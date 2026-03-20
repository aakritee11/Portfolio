import FadeIn from "../hooks/useFadeIn"

export default function About(){
    return(
         <section id="about" style={{ borderTop: "1px solid var(--border)" }}>
        <FadeIn>
          <p className="section-label">About</p>
          <h2 className="section-title">Who I Am</h2>
        </FadeIn>
          <FadeIn>
            <div className="about-text">
              <p>I am an aspiring software engineer from Nepal, currently pursuing a bachelor’s degree in IT. I’m focused on building full-stack web applications using the<strong>MERN stack </strong> while strengthening my problem-solving skills.</p>
              <p>Alongside web development, I’m gradually preparing to transition into <strong>AI and machine learning</strong>, with the goal of building intelligent systems that make everyday experiences smarter and more efficient.</p>
              <p>I’m driven by the idea of using technology to solve real-world problems and aim to grow into a developer who creates impactful, user-focused products.</p>
            </div>
          </FadeIn>
      </section>
    )
}