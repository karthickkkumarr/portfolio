import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

type Page = "home" | "projects" | "contact" | "capetown" | "media" | "etrl";

interface CapetownProps {
  setPage: (page: Page) => void;
}

export default function Capetown({ setPage }: CapetownProps) {
  const pageVariants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      key="capetown"
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
        Green Riders · Cape Town, South Africa · Feb – Jun 2025
      </p>
      <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "3rem", fontWeight: 300, color: "#111", lineHeight: 1.2, margin: "0 0 2.5rem" }}>
        Integrating an Expanding Business
      </h1>
      <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.25rem", letterSpacing: "0.15em", color: "#aaa", textTransform: "uppercase", marginBottom: "1rem" }}>
        Media
      </p>
      {/* Hero image slot */}
      <div style={{
        width: "100%", aspectRatio: "16/9", background: "#f5f5f5",
        borderRadius: "12px", marginBottom: "3rem",
        display: "flex", alignItems: "center", justifyContent: "center",
        color: "#ccc", fontSize: "0.85rem", fontFamily: "'DM Sans', sans-serif",
        border: "1px solid #eee",
      }}>

        <motion.img
          src="/portfolio/capetown-hero.jpg"   // ← your image path here
          alt="Green Riders Cape Town"
          whileHover={{ scale: 1.05 }}
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



      {/* Image grid slot */}
      <div style={{ marginBottom: "2.5rem" }}>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.25rem", letterSpacing: "0.15em", color: "#aaa", textTransform: "uppercase", marginBottom: "1rem" }}>
          Rider Training App
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
          {["capetown-2.png", "app-2.png", "app-3 (2).png"].map((src, index) => (
            <div key={src} style={{
              ...(index === 1 ? { height: "300px", width: "300px" } : { aspectRatio: index === 0 ? "10/11" : "3/4" }), background: "#f5f5f5", borderRadius: "8px",
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
        <li style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
          <span style={{ color: "#ccc", fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem", marginTop: "2px", flexShrink: 0 }}>
            —
          </span>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: "#555", lineHeight: 1.7, margin: 0 }}>
          Screenshots from the rider connectivity app I built to provide training resources and motivational content for Green Riders' expanding fleet in Cape Town.
          </p>
        </li>
      </div>
      <div style={{ marginBottom: "2.5rem" }}>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.25rem", letterSpacing: "0.15em", color: "#aaa", textTransform: "uppercase", marginBottom: "1rem" }}>
          Dashboard KPI Management
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
          {["dash (2).png"].map((src, index) => (
            <div key={src} style={{
              ...(index === 0 ? { height: "500px", width: "900px" } : { aspectRatio: index === 0 ? "10/11" : "3/4" }), background: "#f5f5f5", borderRadius: "8px",
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
        <li style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
          <span style={{ color: "#ccc", fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem", marginTop: "2px", flexShrink: 0 }}>
            —
          </span>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: "#555", lineHeight: 1.7, margin: 0 }}>
            Screenshot from the dashboard I helped develop and monitor.
          </p>
        </li>

      </div>
      {/* Role section */}
      <div style={{ marginBottom: "2.5rem" }}>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.75rem", letterSpacing: "0.15em", color: "#aaa", textTransform: "uppercase", marginBottom: "1rem" }}>
          Role & Contributions
        </p>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
          {[
            "Supported nationwide expansion by reporting to CEO on sustainable fuel cell alternatives and EV strategy.",
            "Partnered with technicians to manufacture 300+ e-bike units; conducted root cause analysis for electronics failures.",
            "Managed projects from design to implementation to improve rider safety and protect assets.",
            "Chaired highway certification team coordinating between directors, government agencies, and IEEE certification bodies.",
            "Filmed and edited media advocating sustainable transformation in last-mile delivery.",
            "Built a rider connectivity app providing access to training resources and motivational content.",
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
    {/* Image grid slot */}
      <div style={{ marginBottom: "2.5rem" }}>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.25rem", letterSpacing: "0.15em", color: "#aaa", textTransform: "uppercase", marginBottom: "1rem" }}>
          Gallery
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
          {["control-1.jpg", "control-hero.jpg", "house-3.jpg"].map((src, index) => (
            <div key={src} style={{
              ...(index === 1 ? { height: "300px", width: "355px" } : { aspectRatio: index === 0 ? "10/11" : "3/4" }), background: "#f5f5f5", borderRadius: "8px",
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
        <li style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
          <span style={{ color: "#ccc", fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem", marginTop: "2px", flexShrink: 0 }}>
            —
          </span>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: "#555", lineHeight: 1.7, margin: 0 }}>
          Bikes I learned how to build and ship.
          </p>
        </li>
      </div>
      
      {/* Tags */}
      <div style={{ borderTop: "1px solid #eee", paddingTop: "2rem", display: "flex", gap: "8px", flexWrap: "wrap" }}>
        {["Manufacturing", "EV Strategy", "IEEE Certification", "CAD", "Root Cause Analysis", "React Native", "Last-Mile Delivery"].map((tag) => (
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