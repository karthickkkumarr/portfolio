import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

type Page = "home" | "projects" | "contact" | "capetown" | "media" | "etrl";

interface MediaProps {
  setPage: (page: Page) => void;
}

export default function Media({ setPage }: MediaProps) {
  const pageVariants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      key="media"
      variants={pageVariants}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ minHeight: "100vh", padding: "4rem 2rem", maxWidth: "720px", margin: "0 auto" }}
    >
      <button
        onClick={() => setPage("capetown")}
        style={{
          display: "flex", alignItems: "center", gap: "6px",
          background: "none", border: "none", cursor: "pointer",
          color: "#888", fontSize: "0.85rem", marginBottom: "3rem",
          fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.04em",
        }}
      >
        <ArrowLeft size={14} /> Cape Town Project
      </button>

      {/* Header */}
      <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.8rem", letterSpacing: "0.15em", color: "#aaa", textTransform: "uppercase", marginBottom: "0.5rem" }}>
        Green Riders · Cape Town, South Africa · Feb – Jun 2025
      </p>
      <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "3rem", fontWeight: 300, color: "#111", lineHeight: 1.2, margin: "0 0 2.5rem" }}>
        Media Created
      </h1>

      {/* Placeholder for media */}
      <div style={{
        width: "100%", minHeight: "400px", background: "#f5f5f5",
        borderRadius: "12px", marginBottom: "3rem",
        display: "flex", alignItems: "center", justifyContent: "center",
        color: "#ccc", fontSize: "0.85rem", fontFamily: "'DM Sans', sans-serif",
        border: "1px solid #eee",
      }}>
        Add media gallery here → Videos, photos, and other content from the Green Riders project
      </div>
    </motion.div>
  );
}