import { useState } from "react";
import { motion } from "framer-motion";

type Page = "home" | "projects" | "contact" | "capetown" | "media" | "etrl" | "controls" | "car" | "IoT" | "heli" | "about";

interface HomeProps {
  setPage: (page: Page) => void;
}

const Tile = ({
  id,
  label,
  isName,
  onClick,
  hovered,
  setHovered,
}: {
  id: string;
  label: string;
  isName?: boolean;
  onClick?: () => void;
  hovered: string | null;
  setHovered: (id: string | null) => void;
}) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 10 },
      show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    }}
    onHoverStart={() => setHovered(id)}
    onHoverEnd={() => setHovered(null)}
    whileHover={{ y: -2 }}
    onClick={onClick}
    style={{
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: isName ? "1.8rem" : "1.2rem",
      fontWeight: 300,
      letterSpacing: "0.06em",
      color: "#111",
      padding: "0.6rem 2.5rem",
      borderRadius: "10px",
      width: isName ? "260px" : "160px",
      textAlign: "center",
      cursor: "pointer",
      border: hovered === id
        ? "1px solid rgba(0,0,0,0.18)"
        : "1px solid transparent",
      transition: "border-color 0.3s",
    }}
  >
    {label}
  </motion.div>
);

export default function Home({ setPage }: HomeProps) {
  const [hovered, setHovered] = useState<string | null>(null);

  const pageVariants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
  };

  return (
  <motion.div
    key="home"
    variants={pageVariants}
    initial="hidden"
    animate="show"
    exit="exit"
    style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    {/* Neural Network - top left */}
    <svg
      style={{ position: "fixed", top: 0, left: 0, width: "50%", height: "50%", pointerEvents: "none", zIndex: 0 }}
      viewBox="0 0 300 250"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line className="neural-line" x1="30" y1="60" x2="110" y2="40" stroke="#111" strokeWidth="0.6" opacity="0.2"/>
      <line className="neural-line" style={{ animationDelay: "0.8s" }} x1="30" y1="60" x2="110" y2="100" stroke="#111" strokeWidth="0.6" opacity="0.2"/>
      <line className="neural-line" style={{ animationDelay: "1.6s" }} x1="30" y1="60" x2="110" y2="160" stroke="#111" strokeWidth="0.6" opacity="0.2"/>
      <line className="neural-line" style={{ animationDelay: "0.4s" }} x1="30" y1="130" x2="110" y2="40" stroke="#111" strokeWidth="0.6" opacity="0.15"/>
      <line className="neural-line" style={{ animationDelay: "0.8s" }} x1="30" y1="130" x2="110" y2="100" stroke="#111" strokeWidth="0.6" opacity="0.2"/>
      <line className="neural-line" style={{ animationDelay: "1.2s" }} x1="30" y1="130" x2="110" y2="160" stroke="#111" strokeWidth="0.6" opacity="0.2"/>
      <line className="neural-line" style={{ animationDelay: "1.6s" }} x1="30" y1="200" x2="110" y2="100" stroke="#111" strokeWidth="0.6" opacity="0.15"/>
      <line className="neural-line" style={{ animationDelay: "0.6s" }} x1="30" y1="200" x2="110" y2="160" stroke="#111" strokeWidth="0.6" opacity="0.2"/>
      <line className="neural-line" style={{ animationDelay: "1.0s" }} x1="110" y1="40" x2="200" y2="70" stroke="#111" strokeWidth="0.6" opacity="0.2"/>
      <line className="neural-line" style={{ animationDelay: "1.4s" }} x1="110" y1="40" x2="200" y2="140" stroke="#111" strokeWidth="0.6" opacity="0.15"/>
      <line className="neural-line" style={{ animationDelay: "0.2s" }} x1="110" y1="100" x2="200" y2="70" stroke="#111" strokeWidth="0.6" opacity="0.2"/>
      <line className="neural-line" style={{ animationDelay: "0.8s" }} x1="110" y1="100" x2="200" y2="140" stroke="#111" strokeWidth="0.6" opacity="0.2"/>
      <line className="neural-line" style={{ animationDelay: "1.6s" }} x1="110" y1="160" x2="200" y2="70" stroke="#111" strokeWidth="0.6" opacity="0.15"/>
      <line className="neural-line" style={{ animationDelay: "1.0s" }} x1="110" y1="160" x2="200" y2="140" stroke="#111" strokeWidth="0.6" opacity="0.2"/>
      <line className="neural-line" style={{ animationDelay: "0.4s" }} x1="200" y1="70" x2="270" y2="100" stroke="#111" strokeWidth="0.6" opacity="0.2"/>
      <line className="neural-line" style={{ animationDelay: "1.2s" }} x1="200" y1="140" x2="270" y2="100" stroke="#111" strokeWidth="0.6" opacity="0.2"/>
      {/* Nodes */}
      <circle className="neural-line"cx="30" cy="60" r="3" fill="none" stroke="#111" strokeWidth="0.8" opacity="0.3"/>
      <circle className="neural-line"cx="30" cy="130" r="3" fill="none" stroke="#111" strokeWidth="0.8" opacity="0.3"/>
      <circle className="neural-line"cx="30" cy="200" r="3" fill="none" stroke="#111" strokeWidth="0.8" opacity="0.3"/>
      <circle className="neural-line"cx="110" cy="40" r="3" fill="none" stroke="#111" strokeWidth="0.8" opacity="0.3"/>
      <circle className="neural-line"cx="110" cy="100" r="3" fill="none" stroke="#111" strokeWidth="0.8" opacity="0.3"/>
      <circle className="neural-line"cx="110" cy="160" r="3" fill="none" stroke="#111" strokeWidth="0.8" opacity="0.3"/>
      <circle className="neural-line"cx="200" cy="70" r="3" fill="none" stroke="#111" strokeWidth="0.8" opacity="0.3"/>
      <circle className="neural-line"cx="200" cy="140" r="3" fill="none" stroke="#111" strokeWidth="0.8" opacity="0.3"/>
      <circle className="neural-line"cx="270" cy="100" r="3" fill="none" stroke="#111" strokeWidth="0.8" opacity="0.3"/>
    </svg>

    {/* Rocket - bottom right */}
    <svg
      style={{ position: "fixed", bottom: 0, right: 0, width: "220px", height: "280px", pointerEvents: "none", zIndex: 0 }}
      viewBox="0 0 200 260"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="rocket-float">
        <path d="M100 20 C80 20 65 60 65 110 L135 110 C135 60 120 20 100 20Z" fill="none" stroke="#111" strokeWidth="0.9" opacity="0.25"/>
        <line x1="100" y1="10" x2="100" y2="22" stroke="#111" strokeWidth="0.8" opacity="0.2"/>
        <circle cx="100" cy="72" r="10" fill="none" stroke="#111" strokeWidth="0.8" opacity="0.25"/>
        <path d="M65 100 L45 130 L65 120Z" fill="none" stroke="#111" strokeWidth="0.8" opacity="0.2"/>
        <path d="M135 100 L155 130 L135 120Z" fill="none" stroke="#111" strokeWidth="0.8" opacity="0.2"/>
        <line x1="70" y1="110" x2="130" y2="110" stroke="#111" strokeWidth="0.8" opacity="0.2"/>
        <line className="exhaust-line" x1="88" y1="112" x2="88" y2="160" stroke="#111" strokeWidth="0.6" opacity="0.15" strokeDasharray="4 6"/>
        <line className="exhaust-line" style={{ animationDelay: "0.2s" }} x1="100" y1="112" x2="100" y2="175" stroke="#111" strokeWidth="0.6" opacity="0.2" strokeDasharray="4 6"/>
        <line className="exhaust-line" style={{ animationDelay: "0.4s" }} x1="112" y1="112" x2="112" y2="160" stroke="#111" strokeWidth="0.6" opacity="0.15" strokeDasharray="4 6"/>
      </g>
    </svg>

    {/* Center content */}
    <motion.div
      style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem", zIndex: 1 }}
      initial="hidden"
      animate="show"
      variants={{ show: { transition: { staggerChildren: 0.12 } } }}
    >
      {/* Oval headshot */}
      <motion.div
        variants={{ hidden: { opacity: 0, scale: 0.95 }, show: { opacity: 1, scale: 1 } }}
        style={{
          width: "160px",
          height: "220px",
          borderRadius: "50%",
          overflow: "hidden",
          border: "1px solid #e0e0e0",
          marginBottom: "0.5rem",
        }}
      >
        <img
          src="/portfolio/1headshot.jpg"
          alt="Karthick Kumar"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
          }}
        />
      </motion.div>

      <Tile id="name" label="Karthick Kumar" isName hovered={hovered} setHovered={setHovered} onClick={() => setPage("about")} />
      <Tile id="projects" label="Projects" hovered={hovered} setHovered={setHovered} onClick={() => setPage("projects")} />
      <Tile id="contact" label="Contact" hovered={hovered} setHovered={setHovered} onClick={() => setPage("contact")} />
    </motion.div>
  </motion.div>
);
}