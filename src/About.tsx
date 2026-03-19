import { motion } from "framer-motion";
import { ArrowLeft, Instagram } from "lucide-react";

type Page = "home" | "projects" | "contact" | "capetown" | "media" | "etrl" | "controls" | "car" | "IoT" | "heli" | "about";

interface AboutProps {
  setPage: (page: Page) => void;
}

export default function About({ setPage }: AboutProps) {
  const pageVariants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      key="about"
      variants={pageVariants}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ minHeight: "100vh", padding: "4rem 2rem", maxWidth: "720px", margin: "0 auto" }}
    >
      <button
        onClick={() => setPage("home")}
        style={{
          display: "flex", alignItems: "center", gap: "6px",
          background: "none", border: "none", cursor: "pointer",
          color: "#888", fontSize: "0.85rem", marginBottom: "3rem",
          fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.04em",
        }}
      >
        <ArrowLeft size={14} /> Back
      </button>

      {/* Header */}
      <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.8rem", letterSpacing: "0.15em", color: "#aaa", textTransform: "uppercase", marginBottom: "0.5rem" }}>
        About Me
      </p>
      <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "3rem", fontWeight: 300, color: "#111", lineHeight: 1.2, margin: "0 0 2.5rem" }}>
        Karthick Kumar
      </h1>

      {/* About Section */}
      <div style={{ marginBottom: "2.5rem" }}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: "#555", lineHeight: 1.8, margin: 0 }}>
          I'm a senior mechanical engineer passionate about building systems that make a tangible impact. 
          My work spans from optimizing e-bike fleets in South Africa to researching advanced cooling techniques for data centers, 
          and designing robust control systems that prevent failures at scale. I thrive at the intersection of hardware, software, and real-world problem-solving.
        </p>
      </div>

      {/* Interests */}
      <div style={{ marginBottom: "2.5rem" }}>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.75rem", letterSpacing: "0.15em", color: "#aaa", textTransform: "uppercase", marginBottom: "1rem" }}>
          Interests
        </p>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {["Mechanical Design", "Control Systems", "Electric Vehicles", "IoT", "Robotics", "Manufacturing", "Sustainability", "Research"].map((tag) => (
            <span key={tag} style={{
              fontSize: "0.7rem", letterSpacing: "0.08em", color: "#999",
              border: "1px solid #e0e0e0", borderRadius: "20px", padding: "4px 12px",
              fontFamily: "'DM Sans', sans-serif",
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Fitness Instagram */}
      <div style={{ marginBottom: "2.5rem", borderTop: "1px solid #eee", paddingTop: "2rem" }}>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.75rem", letterSpacing: "0.15em", color: "#aaa", textTransform: "uppercase", marginBottom: "1rem" }}>
          Fitness Journey
        </p>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: "#555", lineHeight: 1.8, marginBottom: "1rem" }}>
          Beyond engineering, I'm deeply committed to fitness and wellness. Follow my fitness journey for workout tips, nutrition insights, and lifestyle content.
        </p>
        <a
          href="https://www.instagram.com/str3ngthtime/?hl=en"
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
          <Instagram size={15} />
          Follow on Instagram
        </a>
      </div>

      {/* Instagram Preview Embed */}
      <div style={{ marginBottom: "2.5rem" }}>
        <iframe
          src="https://www.instagram.com/embed/capture/?url=https://www.instagram.com/str3ngthtime/"
          width="100%"
          height="300"
          frameBorder="0"
          style={{ borderRadius: "12px", border: "1px solid #eee" }}
        />
      </div>
    </motion.div>
  );
}