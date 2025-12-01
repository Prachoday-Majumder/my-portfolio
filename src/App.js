import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050816] via-[#0b102f] to-black text-gray-200">

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6 page-enter page-enter-active">
        <h1 className="text-5xl md:text-6xl font-extrabold text-cyan-400 drop-shadow-[0_0_12px_#00ffff]">
          Prachoday Majumder
        </h1>

        <p className="mt-4 text-lg md:text-xl text-gray-300">
          Cybersecurity Student • Python Developer • Ethical Hack Learner
        </p>

        <button
          onClick={() => navigate("/work")}
          className="mt-8 px-8 py-3 rounded border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 shadow-[0_0_12px_#00ffff]"
        >
          View My Work
        </button>
      </section>
    </div>
  );
}

function Work() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div
      className={`
        min-h-screen bg-gradient-to-br from-[#050816] via-[#0b102f] to-black text-gray-200 px-8 md:px-32 py-16
        ${animate ? "page-enter-active" : "page-enter"}
      `}
    >

      {/* BACK */}
      <button
        onClick={() => window.history.back()}
        className="mb-10 text-cyan-400 hover:text-white transition"
      >
        ← Back
      </button>

      {/* ABOUT */}
      <h2 className="text-3xl font-bold text-cyan-400 mb-4">
        About Me
      </h2>

      <p className="max-w-3xl text-gray-300 leading-relaxed mb-16">
        I’m a cybersecurity student obsessed with understanding how digital systems
        work and how to protect them. I build tools using Python, explore ethical
        hacking techniques, and test vulnerabilities in safe lab environments to
        strengthen real-world security skills.
      </p>

      {/* PROJECTS */}
      <h2 className="text-3xl font-bold text-cyan-400 mb-8">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          "Python Port Scanner",
          "Password Strength Analyzer",
          "Cyber Portfolio Website",
        ].map((project) => (
          <div
            key={project}
            className="border border-cyan-400/40 rounded p-6 hover:bg-cyan-400/10 hover:shadow-[0_0_20px_#00ffff] transition"
          >
            <h3 className="text-xl font-semibold text-white mb-2">
              {project}
            </h3>
            <p className="text-sm text-gray-400">
              Cybersecurity automation & secure scripting built with Python.
            </p>
          </div>
        ))}
      </div>

      {/* SOCIAL LINKS */}
      <h2 className="text-3xl font-bold text-cyan-400 mt-20 mb-4">
        Connect With Me
      </h2>

      <div className="flex space-x-6 text-lg">
        <a
          href="https://www.linkedin.com/in/prachoday-majumder-704583376/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-white hover:drop-shadow-[0_0_8px_#00ffff] transition flex items-center gap-2"
        >
          💼 LinkedIn
        </a>

        <a
          href="https://github.com/Prachoday-Majumder"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-white hover:drop-shadow-[0_0_8px_#00ffff] transition flex items-center gap-2"
        >
          💻 GitHub
        </a>
      </div>

    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/work" element={<Work />} />
    </Routes>
  );
}
