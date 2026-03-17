import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";

type Page = "home" | "projects" | "contact" | "capetown" | "media" | "etrl" | "controls" | "car";

interface ProjectsProps {
    setPage: (page: Page) => void;
}

export default function Projects({ setPage }: ProjectsProps) {
    const pageVariants = {
        hidden: { opacity: 0, y: 16 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
    };

    return (
        <motion.div
            key="projects"
            variants={pageVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            style={{ minHeight: "100vh", padding: "4rem 2rem", maxWidth: "800px", margin: "0 auto" }}
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

            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.85rem", letterSpacing: "0.15em", color: "#aaa", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                Selected Work
            </p>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.8rem", fontWeight: 300, color: "#111", margin: "0 0 3rem" }}>
                Projects
            </h1>

            {/* Project Card */}
            <motion.div
                whileHover={{ x: 4 }}
                onClick={() => setPage("capetown")}
                style={{
                    cursor: "pointer",
                    borderTop: "1px solid #e8e8e8",
                    padding: "2rem 0",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "2rem",
                }}
            >
                <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.75rem", letterSpacing: "0.15em", color: "#aaa", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                        Green Riders · Cape Town, South Africa · 2025
                    </p>
                    <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.6rem", fontWeight: 300, color: "#111", margin: "0 0 0.75rem" }}>
                        Integrating an Expanding Business
                    </h2>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: "#888", lineHeight: 1.7, maxWidth: "520px", margin: 0 }}>
                        Manufacturing 300+ e-bike units, highway certification, battery housing design, and building a rider connectivity app for last-mile delivery in South Africa.
                    </p>
                    <div style={{ display: "flex", gap: "8px", marginTop: "1rem", flexWrap: "wrap" }}>
                        {["Manufacturing", "EV Strategy", "IEEE Certification", "React Native", "CAD"].map((tag) => (
                            <span key={tag} style={{
                                fontSize: "0.7rem", letterSpacing: "0.08em", color: "#999",
                                border: "1px solid #e0e0e0", borderRadius: "20px", padding: "3px 10px",
                                fontFamily: "'DM Sans', sans-serif",
                            }}>
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.75rem", flexShrink: 0 }}>
                    <div style={{
                        width: "160px",
                        height: "180px",
                        borderRadius: "6px",
                        overflow: "hidden",        // clips the zoom effect to the rounded corners
                    }}>
                        <motion.img
                            src="/portfolio/capetown-1.jpg"   // ← your image path here
                            alt="Green Riders Cape Town"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",        // crops to fill, no distortion
                                display: "block",
                            }}
                        />
                    </div>
                    <ExternalLink size={16} style={{ color: "#ccc" }} />
                </div>
            </motion.div>

            {/* ETRL Project Card */}
            <motion.div
                whileHover={{ x: 4 }}
                onClick={() => setPage("etrl")}
                style={{
                    cursor: "pointer",
                    borderTop: "1px solid #e8e8e8",
                    padding: "2rem 0",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "2rem",
                }}
            >
                <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.75rem", letterSpacing: "0.15em", color: "#aaa", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                        Energy Transport Research Lab · Ongoing
                    </p>
                    <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.6rem", fontWeight: 300, color: "#111", margin: "0 0 0.75rem" }}>
                        Hyperefficient Data Center Cooling
                    </h2>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: "#888", lineHeight: 1.7, maxWidth: "520px", margin: 0 }}>
                        Researching liquid-metal cooling techniques for high-density data centers, working toward peer-reviewed publication with PhD researchers.
                    </p>
                    <div style={{ display: "flex", gap: "8px", marginTop: "1rem", flexWrap: "wrap" }}>
                        {["Heat Transfer", "LabVIEW", "Liquid Gallium", "Research Publication"].map((tag) => (
                            <span key={tag} style={{
                                fontSize: "0.7rem", letterSpacing: "0.08em", color: "#999",
                                border: "1px solid #e0e0e0", borderRadius: "20px", padding: "3px 10px",
                                fontFamily: "'DM Sans', sans-serif",
                            }}>
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.75rem", flexShrink: 0 }}>
                    <div style={{
                        width: "160px",
                        height: "180px",
                        borderRadius: "6px",
                        overflow: "hidden",
                        background: "#f5f5f5",
                        border: "1px solid #eee",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#ccc",
                        fontSize: "0.85rem",
                        fontFamily: "'DM Sans', sans-serif",
                    }}>
                        <motion.img
                            src="/portfolio/Crystal _cube_.png"   // ← your image path here
                            alt="Green Riders Cape Town"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",        // crops to fill, no distortion
                                display: "block",
                            }}
                        />          </div>
                    <ExternalLink size={16} style={{ color: "#ccc" }} />
                </div>
            </motion.div>
            {/* Supervisory Control Algorithm Card */}
            <motion.div
                whileHover={{ x: 4 }}
                onClick={() => setPage("controls")}
                style={{
                    cursor: "pointer",
                    borderTop: "1px solid #e8e8e8",
                    padding: "2rem 0",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "2rem",
                }}
            >
                <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.75rem", letterSpacing: "0.15em", color: "#aaa", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                        Advanced Computer Controls · Professor Joseph Bentsman
                    </p>
                    <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.6rem", fontWeight: 300, color: "#111", margin: "0 0 0.75rem" }}>
                        Supervisory Control Algorithm for E-Bike Motor Controllers
                    </h2>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: "#888", lineHeight: 1.7, maxWidth: "520px", margin: 0 }}>
                        Designed a preventative control strategy to eliminate capacitor failures across a 300-bike fleet — regulating torque, current ramp-up, and speed via PWM duty commands with IoT-based voltage updates.
                    </p>
                    <div style={{ display: "flex", gap: "8px", marginTop: "1rem", flexWrap: "wrap" }}>
                        {["Control Systems", "PWM", "Fault Tolerance", "IoT", "Motor Control"].map((tag) => (
                            <span key={tag} style={{
                                fontSize: "0.7rem", letterSpacing: "0.08em", color: "#999",
                                border: "1px solid #e0e0e0", borderRadius: "20px", padding: "3px 10px",
                                fontFamily: "'DM Sans', sans-serif",
                            }}>
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.75rem", flexShrink: 0 }}>
                    <div style={{
                        width: "160px",
                        height: "180px",
                        borderRadius: "6px",
                        overflow: "hidden",
                        background: "#f5f5f5",
                        border: "1px solid #eee",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#ccc",
                        fontSize: "0.85rem",
                        fontFamily: "'DM Sans', sans-serif",
                    }}>
                        <motion.img
                            src="/portfolio/control-2.jpg"
                            alt="Supervisory Control Algorithm"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                display: "block",
                            }}
                        />
                    </div>
                    <ExternalLink size={16} style={{ color: "#ccc" }} />
                </div>
            </motion.div>

            {/* ME 371 Project Card */}
<motion.div
  whileHover={{ x: 4 }}
  onClick={() => setPage("car")}
  style={{
    cursor: "pointer",
    borderTop: "1px solid #e8e8e8",
    padding: "2rem 0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "2rem",
  }}
>
  <div style={{ flex: 1, minWidth: 0 }}>
    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.75rem", letterSpacing: "0.15em", color: "#aaa", textTransform: "uppercase", marginBottom: "0.5rem" }}>
      ME 371 Design Project · Completed
    </p>
    <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.6rem", fontWeight: 300, color: "#111", margin: "0 0 0.75rem" }}>
      Multi-Speed RC Vehicle for Robot Heptathlon
    </h2>
    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: "#888", lineHeight: 1.7, maxWidth: "520px", margin: 0 }}>
      Engineered a sliding-gear transmission vehicle to compete in a multi-event robot heptathlon, optimizing performance across strength, speed, agility, durability, and efficiency under strict budget and design constraints.
    </p>
    <div style={{ display: "flex", gap: "8px", marginTop: "1rem", flexWrap: "wrap" }}>
      {["Strength", "Speed", "Agility", "Durability", "Budget", "Efficiency", "Mechanical Design", "Gear Systems"].map((tag) => (
        <span key={tag} style={{
          fontSize: "0.7rem", letterSpacing: "0.08em", color: "#999",
          border: "1px solid #e0e0e0", borderRadius: "20px", padding: "3px 10px",
          fontFamily: "'DM Sans', sans-serif",
        }}>
          {tag}
        </span>
      ))}
    </div>
  </div>

  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.75rem", flexShrink: 0 }}>
    <div style={{
      width: "180px",
      height: "180px",
      borderRadius: "6px",
      overflow: "hidden",
      background: "#f5f5f5",
      border: "1px solid #eee",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#ccc",
      fontSize: "0.85rem",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <motion.img
        src="/portfolio/car-hero.png"
        alt="RC Vehicle Transmission"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
    </div>
    <ExternalLink size={16} style={{ color: "#ccc" }} />
  </div>
</motion.div>
            <div style={{ borderTop: "1px solid #e8e8e8" }} />
        </motion.div>
    );
}