export default function Navbar({ scrolled }) {
  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <a href="#hero" className="nav-logo">aakriti.T</a>
      <ul className="nav-links">
        {["about", "skills", "projects", "contact"].map(s => (
          <li key={s}><a href={`#${s}`}>{s}</a></li>
        ))}
      </ul>
    </nav>
  );
}