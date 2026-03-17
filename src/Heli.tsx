import { motion } from "framer-motion";
import { ArrowLeft, FileText } from "lucide-react";

type Page = "home" | "projects" | "contact" | "capetown" | "media" | "etrl" | "controls" | "car" | "IoT" | "heli";

interface HeliProps {
  setPage: (page: Page) => void;
}

export default function Heli({ setPage }: HeliProps) {
  const pageVariants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      key="heli"
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
        ME 370 Final Project · Completed
      </p>
      <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "3rem", fontWeight: 300, color: "#111", lineHeight: 1.2, margin: "0 0 2.5rem" }}>
        Stealth Snow Chopper Robot Rope Crawler     
         </h1>

      {/* Hero video slot */}
      <div
        style={{
          width: "100%",
          maxWidth: "360px",
          aspectRatio: "17/16",
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
            src="/portfolio/helicad-1.mp4"
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
          Led the team in design, assembly, and creative direction for a rope crawler robot themed after a stealth snow chopper, successfully navigating design constraints and optimizing for performance being 2nd fastest team to cross the rope.
        </p>
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
            { name: "Hand Tools", desc: "Precision assembly" },
            { name: "Linkage Analysis", desc: "Python-based kinematic analysis" },
            
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
            src="/portfolio/chopper-2.mp4"
            type="video/mp4"
          />
        </video>
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