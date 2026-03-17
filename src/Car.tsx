import { motion } from "framer-motion";
import { ArrowLeft, FileText } from "lucide-react";

type Page = "home" | "projects" | "contact" | "capetown" | "media" | "etrl" | "controls" | "car";

interface CarProps {
  setPage: (page: Page) => void;
}

export default function Car({ setPage }: CarProps) {
  const pageVariants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      key="car"
      variants={pageVariants}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ minHeight: "100vh", padding: "4rem 2rem", maxWidth: "720px", margin: "0 auto" }}
    >
      <button
        onClick={() => setPage("projects")}
        style={{
          display: "flex", alignItems: "center", gap: "6px",
          background: "none", border: "none", cursor: "pointer",
          color: "#888", fontSize: "0.85rem", marginBottom: "3rem",
          fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.04em",
        }}
      >
        <ArrowLeft size={14} /> Projects
      </button>

      {/* Header */}
      <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.8rem", letterSpacing: "0.15em", color: "#aaa", textTransform: "uppercase", marginBottom: "0.5rem" }}>
        ME 371 Final Project · Completed
      </p>
      <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "3rem", fontWeight: 300, color: "#111", lineHeight: 1.2, margin: "0 0 2.5rem" }}>
        Multi-Speed Remote-Control Vehicle with Sliding Gear Transmission
      </h1>

      {/* Hero video slot */}
<div
  style={{
    width: "100%",
    maxWidth: "360px",        
    aspectRatio: "19/25.4",      
    borderRadius: "12px",
    marginBottom: "3rem",
    overflow: "hidden",
    background: "#f5f5f5",
    margin: "0 auto 3rem",    
  }}
>
  <video
    autoPlay
    loop
    muted
    playsInline
    preload="auto"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center center",
      display: "block",
    }}
    onError={(e) => {
      console.error("Video failed to load");
      (e.target as HTMLVideoElement).style.display = "none";
    }}
  >
    <source
      src="/portfolio/car-1.mp4"
      type="video/mp4"
    />
  </video>
</div>

      {/* Overview */}
      <div style={{ marginBottom: "2.5rem" }}>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.75rem", letterSpacing: "0.15em", color: "#aaa", textTransform: "uppercase", marginBottom: "1rem" }}>
          Overview
        </p>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: "#555", lineHeight: 1.8, margin: 0 }}>
          Designed and built a multi-speed remote-control vehicle optimized for performance across speed, strength, and agility benchmarks.
          The system integrates a novel sliding-mesh transmission with compound and simple gear trains, enabling dynamic switching
          between high-speed, reverse, and high-torque modes. The drivetrain was engineered with tight mechanical tolerances and
          validated through both analytical modeling and physical testing, balancing power transmission efficiency with structural reliability.
        </p>
      </div>

      {/* Contributions */}
      <div style={{ marginBottom: "2.5rem" }}>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.75rem", letterSpacing: "0.15em", color: "#aaa", textTransform: "uppercase", marginBottom: "1rem" }}>
          Role & Contributions
        </p>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
          {[
            "Engineered a sliding-mesh transmission system using rack-and-pinion actuation to enable three distinct drive modes (forward, reverse, high torque).",
            "Performed machine component analysis on critical drivetrain elements, identifying gear tooth failure risks under worst-case loading conditions.",
            "Calculated stress using bending fatigue models and validated results against material limits of 3D-printed PLA components.",
            "Conducted FEA simulations on structural supports to evaluate stress distribution, displacement, and safety factors under realistic loading scenarios.",
            "Led system-level integration, ensuring synchronization between servo actuation and mechanical gear engagement positions.",
          ].map((item, i) => (
            <li key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
              <span style={{ color: "#ccc", fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem", marginTop: "2px", flexShrink: 0 }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: "#555", lineHeight: 1.7, margin: 0 }}>
                {item}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Tools */}
      <div style={{ marginBottom: "2.5rem" }}>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.75rem", letterSpacing: "0.15em", color: "#aaa", textTransform: "uppercase", marginBottom: "1rem" }}>
          Tools & Methods
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px" }}>
          {[
            { name: "Fusion 360", desc: "CAD modeling & validation" },
            { name: "FEA Analysis", desc: "Stress & displacement simulation" },
            { name: "Gear Train Design", desc: "Multi-speed transmission" },
            { name: "Machine Analysis", desc: "Failure prediction" },
            { name: "3D Printing", desc: "PLA prototyping" },
            { name: "Embedded Control", desc: "Servo-actuated shifting" },
          ].map((tool) => (
            <div key={tool.name} style={{
              padding: "1rem",
              border: "1px solid #eee",
              borderRadius: "10px",
              background: "#fafafa",
            }}>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", fontWeight: 400, color: "#111", margin: "0 0 4px" }}>
                {tool.name}
              </p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: "#aaa", margin: 0, lineHeight: 1.5 }}>
                {tool.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Report Link */}
      <div style={{ marginBottom: "2.5rem" }}>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.75rem", letterSpacing: "0.15em", color: "#aaa", textTransform: "uppercase", marginBottom: "1rem" }}>
          Report
        </p>
        <a
          href="/portfolio/me371-report.pdf"
          target="_blank"
          rel="noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.9rem",
            color: "#555",
            textDecoration: "none",
            border: "1px solid #e0e0e0",
            borderRadius: "10px",
            padding: "0.6rem 1.25rem",
          }}
        >
          <FileText size={15} />
          View Full Report
        </a>
      </div>

      {/* Tags */}
      <div style={{ borderTop: "1px solid #eee", paddingTop: "2rem", display: "flex", gap: "8px", flexWrap: "wrap" }}>
        {["Mechanical Design", "Gear Systems", "FEA", "Failure Analysis", "Robotics", "3D Printing", "Embedded Systems", "Dynamics"].map((tag) => (
          <span key={tag} style={{
            fontSize: "0.7rem", letterSpacing: "0.08em", color: "#999",
            border: "1px solid #e0e0e0", borderRadius: "20px", padding: "4px 12px",
            fontFamily: "'DM Sans', sans-serif",
          }}>
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}