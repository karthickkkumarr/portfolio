import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

type Page = "home" | "projects" | "contact" | "capetown" | "media" | "etrl";

interface EtrlProps {
  setPage: (page: Page) => void;
}

export default function Etrl({ setPage }: EtrlProps) {
  const pageVariants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      key="etrl"
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
        Energy Transport Research Lab · Ongoing
      </p>
      <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "3rem", fontWeight: 300, color: "#111", lineHeight: 1.2, margin: "0 0 2.5rem" }}>
        Hyperefficient Data Center Cooling
      </h1>

      {/* Hero image slot */}
      <div style={{
        width: "100%", aspectRatio: "16/9",
        borderRadius: "12px", marginBottom: "3rem",
        overflow: "hidden",
      }}>
        <motion.img
          src="/portfolio/etrl-hero.jpg"
          alt="ETRL Data Center Cooling Research"
          whileHover={{ scale: 1 }}
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
          As data centers push the boundaries of compute density, conventional air cooling is no longer sufficient.
          This research, conducted alongside PhD students, investigates liquid-metal and advanced wetting techniques
          to drastically reduce thermal resistance at the chip level — working toward a peer-reviewed publication.
        </p>
      </div>

      {/* Contributions */}
      <div style={{ marginBottom: "2.5rem" }}>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.75rem", letterSpacing: "0.15em", color: "#aaa", textTransform: "uppercase", marginBottom: "1rem" }}>
          Role & Contributions
        </p>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
          {[
            "Performed heat exchanger condensation analysis using LabVIEW, InstaCal, and ImageJ  with highly accurate resin printed assemblies for measurement acquisition and validation.",
            "Systematized liquid gallium and copper-wetting procedures within a corrosive chemical etching process, improving repeatability across samples.",
            "Investigated thermal efficiency of 40+ individually etched samples, contributing data toward a peer-reviewed publication.",
            "Collaborated directly with PhD researchers to refine experimental methodology and interpret results.",
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
          Tools & Instruments
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px" }}>
          {[
            { name: "LabVIEW", desc: "Data acquisition & control" },
            { name: "InstaCal", desc: "Measurement calibration" },
            { name: "ImageJ", desc: "Optical validation & analysis" },
            { name: "Liquid Gallium", desc: "Wetting & thermal interface" },
            { name: "Chemical Etching", desc: "Surface preparation process" },
            { name: "Heat Exchangers", desc: "Condensation analysis" },
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

      {/* Image gallery */}
      <div style={{ marginBottom: "2.5rem" }}>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.75rem", letterSpacing: "0.15em", color: "#aaa", textTransform: "uppercase", marginBottom: "1rem" }}>
          Gallery
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
          {["Image.jpg", "Image (1).jpg", "etrl-3.jpg"].map((src) => (
            <div key={src} style={{
              aspectRatio: "4/3", background: "#f5f5f5", borderRadius: "8px",
              border: "1px solid #eee", overflow: "hidden",
            }}>
              <img
                src={`/portfolio/${src}`}
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
              />
            </div>
          ))}
        </div>
        
      </div>

      {/* Tags */}
      <div style={{ borderTop: "1px solid #eee", paddingTop: "2rem", display: "flex", gap: "8px", flexWrap: "wrap" }}>
        {["Heat Transfer", "LabVIEW", "InstaCal", "ImageJ", "Liquid Gallium", "Thermal Analysis", "Chemical Etching", "Research Publication"].map((tag) => (
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