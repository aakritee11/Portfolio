import { useState } from "react";
import FadeIn from "../hooks/useFadeIn";

export default function Contact(){
      const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };
    return(
         <section id="contact" style={{ borderTop: "1px solid var(--border)", background: "var(--surface)" }}>
        <FadeIn>
          <p className="section-label">Contact</p>
          <h2 className="section-title">Let's Talk</h2>
        </FadeIn>
        <FadeIn style={{ transitionDelay: "0.1s" }}>
          <div className="contact-wrap">
            <div>
              <p style={{ color: "var(--muted)", marginBottom: "1.5rem", lineHeight: 1.7 }}>
                Open to freelance, full-time roles, and interesting side projects.
              </p>
              <a href="mailto:bomzanaakriti@gmail.com" className="contact-email">bomzanaakriti@gmail.com</a>
              <div className="contact-links">
                {[["GitHub", "github.com/aakritee11"], ["LinkedIn", "linkedin.com/in/aakriti-tamang"]].map(([name, handle]) => (
                  <a key={name} href="#" className="contact-social">
                    <span style={{ color: "var(--accent)", fontWeight: 700 }}>{name}</span> — {handle}
                  </a>
                ))}
              </div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              {[["name", "Name", "text", "Your name"], ["email", "Email", "email", "your@email.com"]].map(([id, label, type, ph]) => (
                <div className="form-group" key={id}>
                  <label className="form-label" htmlFor={id}>{label}</label>
                  <input id={id} type={type} placeholder={ph} className="form-input" value={form[id]} onChange={e => setForm(f => ({ ...f, [id]: e.target.value }))} required />
                </div>
              ))}
              <div className="form-group">
                <label className="form-label" htmlFor="message">Message</label>
                <textarea id="message" placeholder="Tell me about your project..." className="form-input" value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} required />
              </div>
              <button type="submit" className="btn btn-primary" style={{ alignSelf: "flex-start" }}>
                {sent ? "✓ Message Sent!" : "Send Message →"}
              </button>
            </form>
          </div>
        </FadeIn>
      </section>
    )
}