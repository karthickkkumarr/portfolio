import { motion } from "framer-motion";
import { ArrowLeft, FileText } from "lucide-react";

type Page = "home" | "projects" | "contact" | "capetown" | "media" | "etrl" | "controls";

interface ControlsProps {
  setPage: (page: Page) => void;
}

export default function Controls({ setPage }: ControlsProps) {
  const pageVariants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
  };

  return (
    
    <motion.div
      key="controls"
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
        ME 462 Final Project · Completed
      </p>
      <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "3rem", fontWeight: 300, color: "#111", lineHeight: 1.2, margin: "0 0 2.5rem" }}>
        Predictive Torque Control for E-Bike Safety
      </h1>

      {/* Hero image slot */}
      <div style={{
        width: "100%", aspectRatio: "16/7",
        borderRadius: "12px", marginBottom: "3rem",
        overflow: "hidden",
      }}>
        <motion.img
          src="/portfolio/flowchart.jpg"
          alt="Predictive Torque Control"
          whileHover={{ scale: 1.0 }}
          transition={{ duration: 0.3 }}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
        />
      </div>

      {/* Context */}
      <div style={{ marginBottom: "2.5rem" }}>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.75rem", letterSpacing: "0.15em", color: "#aaa", textTransform: "uppercase", marginBottom: "1rem" }}>
          Overview
        </p>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: "#555", lineHeight: 1.8, margin: 0 }}>
          Developed a supervisory control system for electric bicycles to improve safety, battery longevity, and operational reliability. 
          The project introduces a constrained predictive torque control strategy that regulates motor current and speed using PWM duty cycles, 
          while accounting for real-world disturbances such as terrain, rider load, and system faults. Designed with practical deployment in mind, 
          the system enhances fleet performance without requiring invasive hardware modifications.
        </p>
      </div>

      {/* Contributions */}
      <div style={{ marginBottom: "2.5rem" }}>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.75rem", letterSpacing: "0.15em", color: "#aaa", textTransform: "uppercase", marginBottom: "1rem" }}>
          Role & Contributions
        </p>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
          {[
            "Modeled e-bike longitudinal dynamics using first-principles physics, incorporating torque, load forces, and environmental disturbances.",
            "Designed a Generalized Predictive Control (GPC) framework to constrain speed, regulate current, and ensure safe torque delivery.",
            "Implemented battery-aware current limiting and PWM duty control to prevent capacitor failure and extend controller lifespan.",
            "Developed fault-tolerant control logic with residual-based detection and fallback modes for safe operation under system failure.",
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
            { name: "MATLAB / Simulation", desc: "Control system validation" },
            { name: "GPC", desc: "Predictive control strategy" },
            { name: "PWM Control", desc: "Motor actuation" },
            { name: "Fault Detection", desc: "Residual-based logic" },
            { name: "System Modeling", desc: "Physics-based dynamics" },
            { name: "Embedded Systems", desc: "Controller integration" },
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
          href="/portfolio/controls-report.pdf"
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
        {["Control Systems", "Predictive Control", "Electric Vehicles", "Battery Management", "PWM", "Fault Tolerance", "System Modeling", "Embedded Systems"].map((tag) => (
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