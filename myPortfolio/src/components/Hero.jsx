import FadeIn from "../hooks/useFadeIn";

export default function Hero(){
    return(
        <section id="hero" className="hero">
        <div className="hero-grid" />
        <div className="hero-orb" />
        <FadeIn>
          <p className="hero-tag">Warm welcome✌️</p>
          <h1 className="hero-name">Aakriti<br /><span>Tamang</span></h1>
          <div className="hero-bottom">
            <p className="hero-role">
              Frontend Developer. Focused on building, learning, and solving.
            </p>
            <div className="hero-cta">
              <a href="#projects" className="btn btn-primary">View Work →</a>
              <a href="#contact" className="btn btn-ghost">Get In Touch</a>
            </div>
          </div>
        </FadeIn>
      </section>
    )
}