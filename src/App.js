import React, { useEffect, useRef, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./index.css";

function Typer({ text, speed = 90 }) {
  const [displayed, setDisplayed] = useState("");
  const idx = useRef(0);
  const timer = useRef(null);

  useEffect(() => {
    setDisplayed("");
    idx.current = 0;

    timer.current = setInterval(() => {
      idx.current++;
      setDisplayed(text.slice(0, idx.current));
      if (idx.current >= text.length) clearInterval(timer.current);
    }, speed);

    return () => clearInterval(timer.current);
  }, [text]);

  return (
    <span style={{ whiteSpace: "pre-line" }} className="border-r border-cyan-300 pr-1">
      {displayed}
    </span>
  );
}


function Layout({ active, children }) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-root text-slate-100 flex">
      <aside className="side-nav">

        <div className="side-nav-top">
          <button onClick={() => navigate("/")} className="side-nav-logo">P</button>

          <button
            className={`side-nav-label ${active === "home" ? "side-nav-label-active" : ""}`}
            onClick={() => navigate("/")}
          >
            Home
          </button>

          <button
            className={`side-nav-label ${active === "projects" ? "side-nav-label-active" : ""}`}
            onClick={() => navigate("/projects")}
          >
            Projects
          </button>
        </div>

        <div className="side-nav-bottom" role="navigation" aria-label="Social links">
  <a
    className="side-nav-social"
    href="https://www.linkedin.com/in/prachoday-majumder-704583376/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Prachoday on LinkedIn"
    title="LinkedIn"
  >
    
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5z" fill="currentColor" opacity="0.9"/>
      <path d="M.5 24h4V7h-4v17zM9.5 7h3.7v2.3h.1c.5-.9 1.8-1.8 3.6-1.8 3.9 0 4.6 2.6 4.6 6v9.5h-4v-8.4c0-2 0-4.6-2.8-4.6-2.8 0-3.2 2.1-3.2 4.4V24h-4V7z" fill="currentColor"/>
    </svg>
  </a>

  <a
    className="side-nav-social"
    href="https://github.com/Prachoday-Majumder"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Prachoday on GitHub"
    title="GitHub"
  >
    
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path fill="currentColor" d="M12 .5C5.7.5.9 5.3.9 11.6c0 4.7 3 8.7 7.2 10.1.5.1.6-.2.6-.4v-1.5c-2.9.6-3.5-1.2-3.5-1.2-.4-1-1-1.3-1-1.3-.8-.5.1-.5.1-.5.9.1 1.4.9 1.4.9.8 1.4 2.1 1 2.6.8.1-.6.3-1 .6-1.3-2.4-.3-5-1.2-5-5.3 0-1.2.4-2.1 1.1-2.9-.1-.3-.5-1.5.1-3.1 0 0 .9-.3 3 .9.9-.2 1.9-.4 2.9-.4 1 0 2 .1 2.9.4 2-.1 3-.9 3-.9.6 1.6.2 2.8.1 3.1.7.8 1.1 1.7 1.1 2.9 0 4.1-2.6 5-5 5.3.3.3.6.8.6 1.6v2.4c0 .2.1.5.6.4 4.2-1.4 7.2-5.4 7.2-10.1C23.1 5.3 18.3.5 12 .5z"/>
    </svg>
  </a>
</div>


      </aside>

      <main className="flex-1">{children}</main>
    </div>
  );
}


function Home() {
  const blobRef = useRef(null);

  useEffect(() => {
    const blob = blobRef.current;
    let raf = null;

    const handler = (e) => {
      const dx = e.clientX;
      const dy = e.clientY;

      const tx = dx * 0.018;
      const ty = dy * 0.009;

      if (!raf) {
        raf = requestAnimationFrame(() => {
          raf = null;
          blob.style.transform = `
            translate(50%, -50%)
            translateX(${tx}px)
            translateY(${ty}px)
          `;
        });
      }
    };

    const reset = () => {
      blob.style.transform = "translate(50%, -50%) translateX(0px) translateY(0px)";
    };

    window.addEventListener("mousemove", handler);
    window.addEventListener("mouseleave", reset);

    return () => {
      window.removeEventListener("mousemove", handler);
      window.removeEventListener("mouseleave", reset);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <Layout active="home">
      <div className="max-w-6xl mx-auto px-6 md:px-12 min-h-screen flex flex-col md:flex-row items-center justify-center gap-12">

        
        <div className="flex-1 space-y-5">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/80">
            cybersecurity · python
          </p>

          <h1 className="text-4xl font-semibold fade-pop">Prachoday Majumder</h1>

          <div className="underline-wrapper">
            <h2 className="text-5xl font-extrabold text-cyan-300 drop-shadow-xl">
              <Typer text={"Cybersecurity\nPython Developer"} />
            </h2>
            <div className="underline-animated" />
          </div>

          <p className="text-slate-300 text-lg max-w-xl">
            Ethical hacking learner exploring how systems break — and how
            to build them back stronger using Python, networking and security fundamentals.
          </p>

          <div className="flex gap-3 flex-wrap">
            <span className="pill text-cyan-200">Ports & recon</span>
            <span className="pill text-cyan-200">Python scripting</span>
            <span className="pill text-cyan-200">Ethical hacking basics</span>
          </div>

          <div className="mt-6">
            <a
              href="/projects"
              className="px-8 py-3 bg-[#00F2FE] text-slate-900 rounded-md font-semibold shadow-lg hover:bg-[#4FF6FF]"
            >
              View projects →
            </a>
          </div>
        </div>

        
        <div className="flex-1 flex items-center justify-center">
          <div ref={blobRef} className="hero-blob">
            <svg className="hero-prism" viewBox="0 0 100 100">
              <polygon points="50,6 81,19 94,50 81,81 50,94 19,81 6,50 19,19" />
            </svg>
          </div>
        </div>

      </div>
    </Layout>
  );
}


function Projects() {
  const projects = [
    {
      id: "01",
      title: "Python Port Scanner",
      blurb:
        "Basic recon tool scanning common ports. Helps understand attack surface.",
      status: "planned",
      cta: "Coming soon",
    },
    {
      id: "02",
      title: "Password Strength Checker",
      blurb:
        "Explains WHY a password is weak instead of just telling it's weak.",
      status: "in progress",
      cta: "In development",
    },
    {
      id: "03",
      title: "This Portfolio",
      blurb:
        "React + Tailwind portfolio deployed on Vercel tracking my journey.",
      status: "live",
      cta: "Source soon",
    },
  ];

  return (
    <Layout active="projects">
      <div className="projects-wrapper max-w-6xl mx-auto px-6 md:px-12 py-12">

        {projects.map((p) => (
          <section key={p.id} className="project-slide flex flex-col md:flex-row gap-10">

            <div className="flex-1 space-y-4">
              <div className="flex gap-3 items-center text-cyan-300">
                <div className="h-1 w-10 bg-[#00F2FE] rounded-full"></div>
                <span className="text-xs tracking-[0.3em]">{p.id}</span>
              </div>

              <h2 className="text-4xl font-bold text-slate-50">{p.title}</h2>
              <p className="text-slate-300 max-w-xl">{p.blurb}</p>

              <p className="text-xs uppercase text-slate-400">
                Status: <span className="text-cyan-300">{p.status}</span>
              </p>

              <button disabled className="px-6 py-2 bg-[#00F2FE] text-black rounded-md font-semibold opacity-70 cursor-not-allowed">
                {p.cta} ↗
              </button>
            </div>

            <div className="flex-1 flex justify-center items-center">
              <div className="project-preview max-w-md w-full aspect-video rounded-3xl bg-slate-800/70 border border-slate-700 shadow-xl flex items-center justify-center">
                <span className="text-slate-400 text-sm px-4">
                  Preview for <span className="text-cyan-300">{p.title}</span> coming soon.
                </span>
              </div>
            </div>

          </section>
        ))}

      </div>
    </Layout>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}
