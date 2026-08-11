import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Arsenal from "./components/Arsenal";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import TerminalWidget from "./components/TerminalWidget";
import Labs from "./components/Labs";
import Certifications from "./components/Certifications";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const SECTION_IDS = [
  "home",
  "about",
  "arsenal",
  "experience",
  "projects",
  "labs",
  "certifications",
  "resume",
  "contact",
];

export default function App() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNavigate = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <Sidebar
        active={active}
        onNavigate={handleNavigate}
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      />

      <div className="lg:ml-[270px]">
        <Topbar onMenuClick={() => setMenuOpen(true)} />

        <main className="mx-auto max-w-[1400px] space-y-8 py-6">
          <Hero />
          <About />
          <Arsenal />
          <Experience />

          <div className="grid gap-5 px-4 sm:px-6 xl:grid-cols-[1.6fr_1fr] xl:items-start xl:px-0">
            <div className="xl:pl-6">
              <Projects />
            </div>
            <div className="xl:pr-6">
              <TerminalWidget />
            </div>
          </div>

          <Labs />
          <Certifications />
          <Resume />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}
