import { motion } from "framer-motion";
import { ArrowLeft, Mail, Linkedin, Twitter } from "lucide-react";

type Page = "home" | "projects" | "contact" | "capetown" | "media" | "etrl" | "controls" | "car" | "IoT" | "heli" | "about";

interface ContactProps {
  setPage: (page: Page) => void;
}

export default function Contact({ setPage }: ContactProps) {
  const pageVariants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      key="contact"
      variants={pageVariants}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{
        minHeight: "100vh", display: "flex", alignItems: "center",
        justifyContent: "center", flexDirection: "column", gap: "1.5rem",
      }}
    >
      <button
        onClick={() => setPage("home")}
        style={{
          position: "absolute", top: "2rem", left: "2rem",
          display: "flex", alignItems: "center", gap: "6px",
          background: "none", border: "none", cursor: "pointer",
          color: "#888", fontSize: "0.85rem",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        <ArrowLeft size={14} /> Back
      </button>
      <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.8rem", fontWeight: 300, color: "#111", marginBottom: "2rem" }}>
        Say hello.
      </h1>
      
      {/* Contact Links */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center" }}>
        <a
          href="mailto:karthickjax@gmail.com"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.9rem",
            color: "#888",
            textDecoration: "none",
            borderBottom: "1px solid #e0e0e0",
            paddingBottom: "2px",
            transition: "color 0.3s",
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#111"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#888"; }}
        >
          <Mail size={16} />
          karthickjax@gmail.com
        </a>
        
        <a
          href="https://www.linkedin.com/in/karthickk-kumarr/"
          target="_blank"
          rel="noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.9rem",
            color: "#888",
            textDecoration: "none",
            borderBottom: "1px solid #e0e0e0",
            paddingBottom: "2px",
            transition: "color 0.3s",
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#111"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#888"; }}
        >
          <Linkedin size={16} />
          LinkedIn
        </a>
        
        <a
          href="https://x.com/KarthickkKumarr"
          target="_blank"
          rel="noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.9rem",
            color: "#888",
            textDecoration: "none",
            borderBottom: "1px solid #e0e0e0",
            paddingBottom: "2px",
            transition: "color 0.3s",
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#111"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#888"; }}
        >
          <Twitter size={16} />
          Twitter
        </a>
      </div>
    </motion.div>
  );
}