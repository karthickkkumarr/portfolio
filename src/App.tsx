import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Lenis from "@studio-freight/lenis";
// import '@google/model-viewer';
import { Mail, Github, Linkedin, ArrowRight, ExternalLink, MapPin, FileText } from "lucide-react";

/*
  React + Tailwind portfolio with smooth scrolling (Lenis) and reveal-on-scroll (Framer Motion).
  - Sections: Hero, About, Projects, Microcredentials, Skills (Java focus), Contact
  - Minimal, professional aesthetic; keyboard accessible; mobile friendly.

  Hook this component up as your <App /> in a Vite + React project with Tailwind.
  Dependencies: react, react-dom, framer-motion, @studio-freight/lenis, lucide-react
*/

// ---------- Utilities ----------
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
// const fadeUp = {
//   hidden: { opacity: 0, y: 16 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
// };

function Section({ id  }: { id: string; title: string; kicker: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ amount: 0.2, once: true }}>
      </motion.div>
    </section>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center text-xs font-medium rounded-full border border-neutral-200 px-2.5 py-1 mr-2 mb-2">
      {children}
    </span>
  );
}

function Card({ children, href }: { children: React.ReactNode; href?: string }) {
  const Wrapper = href ? "a" : "div";
  return (
    <Wrapper
      {...(href ? { href, target: "_blank", rel: "noreferrer" } : {})}
      className="group block rounded-2xl border border-neutral-200 bg-white/70 backdrop-blur hover:bg-white transition-colors shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-neutral-900/10"
    >
      <div className="p-5 sm:p-6">{children}</div>
    </Wrapper>
  );
}

function Progress({ value, label }: { value: number; label: string }) {
  return (
    <div className="mb-5">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-neutral-800">{label}</span>
        <span className="text-xs text-neutral-500">{value}%</span>
      </div>
      <div className="h-2 rounded-full bg-neutral-200 overflow-hidden">
        <div className="h-full w-0 rounded-full bg-neutral-900" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { amount: 0.2, once: true });
  return (
    <motion.div ref={ref} initial={{ y: 16, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.6, delay }}>
      {children}
    </motion.div>
  );
}

// ---------- Data (swap with your real content) ----------
const PROJECTS = [
  {
    title: "Green Riders — Real‑time E‑bike Tracker",
    blurb:
      "Node.js + WebSocket backend with React dashboard for live GPS routes, historical playback, and Power BI analytics pipeline.",
    tags: ["React", "Node", "WebSocket", "PostgreSQL", "Power BI"],
    links: { demo: "#", repo: "#" },
  },
  {
    title: "Java Fleet Optimizer",
    blurb:
      "Java 21 + Spring Boot microservice that ingests telematics, computes optimal charge/dispatch windows, and exposes REST APIs.",
    tags: ["Java", "Spring Boot", "REST", "PostgreSQL"],
    links: { demo: "#", repo: "#" },
  },
  {
    title: "Manufacturing Analytics Toolkit",
    blurb:
      "Python + React toolchain to analyze tensile tests (ASTM E8), visualize stress–strain curves, and auto‑extract mechanical properties.",
    tags: ["React", "Python", "Pandas", "D3"],
    links: { demo: "#", repo: "#" },
  },
];

const MICROCREDENTIALS = [
  { name: "Siemens Microcredentials", issuer: "Siemens", year: "2025", url: "#" },
  { name: "AWS Cloud Practitioner", issuer: "Amazon", year: "2024", url: "#" },
  { name: "Google Data Analytics", issuer: "Google", year: "2024", url: "#" },
];

const JAVA_DEMO = `// Example: Greedy interval scheduling in Java
import java.util.*;

public class Scheduler {
  static class Job { int start, end; Job(int s, int e){ start=s; end=e; } }
  public static int maxNonOverlapping(List<Job> jobs){
    jobs.sort(Comparator.comparingInt(j -> j.end));
    int count = 0, lastEnd = Integer.MIN_VALUE;
    for(Job j : jobs){
      if(j.start >= lastEnd){ count++; lastEnd = j.end; }
    }
    return count;
  }
  public static void main(String[] args){
    List<Job> jobs = Arrays.asList(new Job(0,3), new Job(1,2), new Job(3,4));
    System.out.println(maxNonOverlapping(jobs)); // -> 2
  }
}`;

// ---------- Main Component ----------
export default function PortfolioSite() {
  const [openMenu, setOpenMenu] = useState(false);

  // Smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
      wheelMultiplier: 1,
    });
    const raf = (time: number) => { lenis.raf(time); requestAnimationFrame(raf); };
    const id = requestAnimationFrame(raf);

    // Enable anchor smooth scroll
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a[href^='#']") as HTMLAnchorElement | null;
      if (anchor && anchor.getAttribute("href")?.startsWith("#")) {
        e.preventDefault();
        document.querySelector(anchor.getAttribute("href")!);
        // if (el) lenis.scrollTo(el);
      }
    };
    document.addEventListener("click", handleClick);

    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const nav = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "cad", label: "CAD" },
    { id: "microcreds", label: "Microcredentials" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-800">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur bg-neutral-50/70 border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#top" className="font-semibold tracking-tight">Karthick Kumar</a>
          <nav className="hidden sm:flex gap-6 text-sm">
            {nav.map((n) => (
              <a key={n.id} href={`#${n.id}`} className="hover:text-neutral-950 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 rounded">
                {n.label}
              </a>
            ))}
          </nav>
          <button className="sm:hidden p-2" onClick={() => setOpenMenu((s) => !s)} aria-label="Toggle menu">
            <span className="i">☰</span>
          </button>
        </div>
        {openMenu && (
          <div className="sm:hidden border-t border-neutral-200">
            <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-2">
              {nav.map((n) => (
                <a key={n.id} href={`#${n.id}`} className="py-1" onClick={() => setOpenMenu(false)}>
                  {n.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <a id="top" />
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-20 pb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="uppercase tracking-widest text-xs sm:text-sm text-neutral-500 mb-3">Portfolio</p>
          <h1 className="text-3xl sm:text-5xl font-semibold leading-tight text-neutral-900">
            Designs, projects, and microcredentials — built with intention.
          </h1>
          <p className="mt-4 max-w-2xl text-neutral-600">
            Clean, fast, and to the point. Interactive reveals on scroll. Full code ownership. Java and React at the core.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 text-white text-sm px-4 py-2">
              View Projects <ArrowRight size={16} />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 text-sm px-4 py-2">
              Contact <Mail size={16} />
            </a>
          </div>
        </motion.div>
      </section>

      {/* About */}
      <Section id="about" title="About" kicker="Overview">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <Reveal>
            <p className="md:col-span-2 text-neutral-700 leading-relaxed">
              I'm a mechanical‑minded builder with a software backbone. I work at the seams of hardware, data, and
              clean UI. Recent focus: telematics dashboards, analytics pipelines, and Java services that don’t fall over.
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="text-sm text-neutral-600 flex flex-col gap-2">
              <div className="flex items-center gap-2"><MapPin size={16}/> Based in Illinois</div>
              <div className="flex items-center gap-2"><FileText size={16}/> <a className="underline" href="#" target="_blank" rel="noreferrer">Resume</a></div>
              <div className="flex items-center gap-2"><Github size={16}/> <a className="underline" href="#" target="_blank" rel="noreferrer">GitHub</a></div>
              <div className="flex items-center gap-2"><Linkedin size={16}/> <a className="underline" href="#" target="_blank" rel="noreferrer">LinkedIn</a></div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects" kicker="Selected work">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <Card href={p.links.demo !== "#" ? p.links.demo : undefined}>
                <div className="flex items-start justify-between">
                  <h3 className="text-base font-semibold text-neutral-900 pr-3">{p.title}</h3>
                  <a
                    href={p.links.repo}
                    onClick={(e) => p.links.repo === "#" && e.preventDefault()}
                    className="ml-2 text-neutral-500 hover:text-neutral-900"
                    aria-label="Repository"
                  >
                    <Github size={18} />
                  </a>
                </div>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{p.blurb}</p>
                <div className="mt-4">
                  {p.tags.map((t) => (
                    <Chip key={t}>{t}</Chip>
                  ))}
                </div>
                {p.links.demo !== "#" && (
                  <div className="mt-5 inline-flex items-center text-sm text-neutral-900">
                    Open demo <ExternalLink size={16} className="ml-1" />
                  </div>
                )}
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CAD (Interactive) */}
      <Section id="cad" title="Interactive CAD" kicker="3D models in-browser">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* NOTE: place your .glb files into /public/models and update src paths below.
              Install viewer: npm i @google/model-viewer
              If you prefer CDN, add to index.html:
              <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
          */}
          {[
            { title: 'Planetary Gearbox', src: '/models/gearbox.glb' },
            { title: 'Battery Enclosure', src: '/models/battery_enclosure.glb' },
            { title: 'Suspension Upright', src: '/models/upright.glb' },
          ].map((m) => (
            <Reveal key={m.title}>
              <Card>
                <h3 className="text-base font-semibold text-neutral-900">{m.title}</h3>
                <div className="mt-3 rounded-xl overflow-hidden border border-neutral-200 bg-neutral-100">
                  
                </div>
                <p className="mt-3 text-sm text-neutral-600">Rotate, zoom, and inspect directly in the browser. Assets are self-hosted.</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Microcredentials */}
      <Section id="microcreds" title="Microcredentials" kicker="Proof of practice">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MICROCREDENTIALS.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.04}>
              <Card href={m.url !== "#" ? m.url : undefined}>
                <div className="text-sm text-neutral-600">{m.issuer} · {m.year}</div>
                <div className="text-base font-semibold text-neutral-900 mt-1">{m.name}</div>
                {m.url !== "#" && (
                  <div className="mt-4 inline-flex items-center text-sm text-neutral-900">
                    Verify <ExternalLink size={16} className="ml-1" />
                  </div>
                )}
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Skills with Java focus */}
      <Section id="skills" title="Skills" kicker="What I use">
        <div className="grid lg:grid-cols-2 gap-10">
          <Reveal>
            <div className="rounded-2xl border border-neutral-200 p-6 bg-white/70">
              <h3 className="text-lg font-semibold mb-4">Languages & Frameworks</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <Progress value={90} label="Java (Core, Streams, Concurrency)" />
                  <Progress value={80} label="Spring Boot (REST, JPA)" />
                  <Progress value={78} label="SQL (PostgreSQL)" />
                </div>
                <div>
                  <Progress value={85} label="JavaScript / TypeScript" />
                  <Progress value={82} label="React" />
                  <Progress value={70} label="Node.js" />
                </div>
              </div>
              <div className="mt-4 text-sm text-neutral-600">
                Recent Java use: building a fleet optimizer microservice (Java 21) with records, switch patterns, and virtual threads
                for I/O‑heavy workloads.
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="rounded-2xl border border-neutral-200 p-6 bg-white/70">
              <h3 className="text-lg font-semibold mb-4">Sample Java Code</h3>
              <pre className="text-xs sm:text-sm overflow-auto bg-neutral-900 text-neutral-100 p-4 rounded-xl leading-relaxed">
                <code>{JAVA_DEMO}</code>
              </pre>
              <p className="text-xs text-neutral-500 mt-2">Snippet: greedy interval scheduling (O(n log n)). Swap with your own algorithms or service examples.</p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact" kicker="Say hello">
        <div className="rounded-2xl border border-neutral-200 p-6 bg-white/70">
          <p className="text-neutral-700">Open to internships and collaborations. Best way to reach me is email or LinkedIn.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 text-white text-sm px-4 py-2" href="mailto:karthick@example.com">
              <Mail size={16}/> Email
            </a>
            <a className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 text-sm px-4 py-2" href="#" target="_blank" rel="noreferrer">
              <Linkedin size={16}/> LinkedIn
            </a>
            <a className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 text-sm px-4 py-2" href="#" target="_blank" rel="noreferrer">
              <Github size={16}/> GitHub
            </a>
          </div>
        </div>
      </Section>

      <footer className="text-center text-xs text-neutral-500 py-10">© {new Date().getFullYear()} Karthick Kumar. Built with React, Tailwind, Lenis, and Framer Motion.</footer>
    </div>
  );
}
