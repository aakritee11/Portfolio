import { useEffect, useRef } from "react";

function useFadeIn() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

export default function FadeIn({ children, style, className = "" }) {
  const ref = useFadeIn();
  return <div ref={ref} className={`fade-in ${className}`} style={style}>{children}</div>;
}