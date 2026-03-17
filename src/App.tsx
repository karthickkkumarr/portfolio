import { useState, useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import Home from "./Home";
import Projects from "./Projects";
import Etrl from "./Etrl";
import Capetown from "./Capetown";
import Media from "./Media";
import Contact from "./Contact";
import Controls from "./Controls";
import Car from "./Car";
import IoT from "./IoT";
import Heli from "./Heli";
import About from "./About";
import './index.css'

type Page = "home" | "projects" | "contact" | "capetown" | "media" | "etrl" | "controls" | "car" | "IoT" | "heli" | "about";



export default function App() {
  const [page, setPage] = useState<Page>("home");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0, behavior: "instant" });
  }, [page]);

  return (
    <div
      ref={scrollRef}
      style={{ position: "fixed", inset: 0, background: "#fff", overflowY: "auto" }}
    >
      <AnimatePresence mode="wait">
        {page === "home" && <Home setPage={setPage} />}
        {page === "projects" && <Projects setPage={setPage} />}
        {page === "etrl" && <Etrl setPage={setPage} />}
        {page === "capetown" && <Capetown setPage={setPage} />}
        {page === "controls" && <Controls setPage={setPage} />}
        {page === "media" && <Media setPage={setPage} />}
        {page === "contact" && <Contact setPage={setPage} />}
        {page === "car" && <Car setPage={setPage} />}
        {page === "IoT" && <IoT setPage={setPage} />}
        {page === "heli" && <Heli setPage={setPage} />}
        {page === "about" && <About setPage={setPage} />}
      </AnimatePresence>
    </div>
  );
}