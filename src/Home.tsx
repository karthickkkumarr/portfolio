import { useState } from "react";
import { motion } from "framer-motion";

type Page = "home" | "projects" | "contact" | "capetown" | "media" | "etrl";

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
      <motion.div
        style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}
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

        <Tile id="name" label="Karthick Kumar" isName hovered={hovered} setHovered={setHovered} onClick={() => {}} />
        <Tile id="projects" label="Projects" hovered={hovered} setHovered={setHovered} onClick={() => setPage("projects")} />
        <Tile id="contact" label="Contact" hovered={hovered} setHovered={setHovered} onClick={() => setPage("contact")} />
      </motion.div>
    </motion.div>
  );
}