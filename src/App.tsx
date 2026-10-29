import { useEffect, useRef, useState } from "react";
import { MotionConfig } from "framer-motion";
import Background from "./components/Background";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Metrics from "./components/Metrics";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [active, setActive] = useState("projects");
  const [tab, setTab] = useState("projects");
  const tabRef = useRef(tab);
  useEffect(() => {
    tabRef.current = tab;
  }, [tab]);

  useEffect(() => {
    const ids = ["home", "about", "work", "contact"];
    const obs = new IntersectionObserver(
      (es) => {
        for (const e of es) {
          if (!e.isIntersecting) continue;
          const id = e.target.id;
          if (id === "work") setActive(tabRef.current === "stack" ? "skills" : "projects");
          else if (id === "home") setActive("projects");
          else setActive(id);
        }
      },
      { rootMargin: "-42% 0px -52% 0px", threshold: 0 }
    );
    ids.forEach((i) => {
      const el = document.getElementById(i);
      el && obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const goNav = (id: string) => {
    if (id === "skills") setTab("stack");
    if (id === "projects") setTab("projects");
    setActive(id);
  };

  return (
    <MotionConfig reducedMotion="user">
      <Background />
      <Nav active={active} onGo={goNav} />
      <main className="relative z-0">
        <Hero onCase={goNav} />
        <Metrics />
        <About />
        <Portfolio onCase={goNav} />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
