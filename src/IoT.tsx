import { motion } from "framer-motion";
import { ArrowLeft} from "lucide-react";

type Page = "home" | "projects" | "contact" | "capetown" | "media" | "etrl" | "controls" | "car" | "IoT";

interface IoTProps {
  setPage: (page: Page) => void;
}

export default function IoT({ setPage }: IoTProps) {
  const pageVariants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      key="IoT"
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
        Independent Venture
      </p>
      <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "3rem", fontWeight: 300, color: "#111", lineHeight: 1.2, margin: "0 0 2.5rem" }}>
        IoT Asset Management System with LoRa Connectivity
      </h1>

      {/* Hero video slot */}
{/* Hero image slot */}
      <div style={{
        width: "100%", aspectRatio: "16/9", background: "#f5f5f5",
        borderRadius: "12px", marginBottom: "3rem",
        display: "flex", alignItems: "center", justifyContent: "center",
        color: "#ccc", fontSize: "0.85rem", fontFamily: "'DM Sans', sans-serif",
        border: "1px solid #eee",
      }}>

        <motion.img
          src="/portfolio/IoT-hero.png"   // ← your image path here
          alt="Green Riders Cape Town"
          whileHover={{ scale: 1.0 }}
          transition={{ duration: 0.3 }}
          onClick={() => setPage("media")}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",        // crops to fill, no distortion
            display: "block",
            cursor: "pointer",
          }}
        />
      </div>

      {/* Overview */}
      <div style={{ marginBottom: "2.5rem" }}>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.75rem", letterSpacing: "0.15em", color: "#aaa", textTransform: "uppercase", marginBottom: "1rem" }}>
          Overview
        </p>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: "#555", lineHeight: 1.8, margin: 0 }}>
          This project focuses on the development of a scalable, real-time GPS tracking platform designed to collect, process, and visualize location data from distributed tracking devices. The system is being built with a clear separation between real-time operational tracking and historical analytics, ensuring both performance and analytical depth.
        </p>
      </div>

      {/* Contributions */}
      <div style={{ marginBottom: "2.5rem" }}>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.75rem", letterSpacing: "0.15em", color: "#aaa", textTransform: "uppercase", marginBottom: "1rem" }}>
          Role & Contributions
        </p>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
          {[
            "Design and testing is done on a Lilygo TSim7000-G development board, which integrates a LoRa transceiver and GPS module for real-time location tracking.",
            "Dashboard is built using React and integrates with the backend API for real-time data visualization.",
            "Companies have shown interest in the platform for creating heat maps for aggregrators and fleet management.",
            "Data analysis could pinpoint strategic location of mobile charging units and service centers.",
            "Prototyping is done and ready to develop at scale.",
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
  { name: "Node.js + Express", desc: "Scalable REST APIs for real-time GPS data ingestion and device communication" },
  { name: "PostgreSQL", desc: "Structured storage and querying of high-frequency location and timestamp data" },
  { name: "Real-Time Systems", desc: "Live tracking architecture with heartbeat mode and data expiry logic" },
  { name: "WebSocket Integration", desc: "Low-latency bidirectional communication for live location updates" },
  { name: "React + Vite", desc: "Interactive dashboard for live tracking, route playback, and time-based filtering" },
  { name: "Data Visualization", desc: "Animated route rendering and real-time map-based asset tracking" },
  { name: "IoT Communication", desc: "JSON-based data transmission between embedded devices and backend services" },
  { name: "System Architecture", desc: "Separation of real-time tracking and analytics pipelines for scalability" }
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

      {/* Hero image slot */}
      <div style={{
        width: "100%", aspectRatio: "17/9", background: "#f5f5f5",
        borderRadius: "12px", marginBottom: "3rem",
        display: "flex", alignItems: "center", justifyContent: "center",
        color: "#ccc", fontSize: "0.85rem", fontFamily: "'DM Sans', sans-serif",
        border: "1px solid #eee",
      }}>

        <motion.img
          src="/portfolio/tracker-1.png"   // ← your image path here
          alt="Green Riders Cape Town"
          whileHover={{ scale: 1.0 }}
          transition={{ duration: 0.3 }}
          onClick={() => setPage("media")}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",        // crops to fill, no distortion
            display: "block",
            cursor: "pointer",
          }}
        />
      </div>


      {/* Tags */}
      <div style={{ borderTop: "1px solid #eee", paddingTop: "2rem", display: "flex", gap: "8px", flexWrap: "wrap" }}>
        {["Node.js", "Express", "PostgreSQL", "React"].map((tag) => (
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