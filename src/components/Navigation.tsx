"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > 80); // hide on Hero, show after scrolling
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {showNav && (
        <motion.nav
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -60, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed top-0 left-0 w-full bg-gray-900/80 backdrop-blur-md text-white py-4 px-6 flex justify-between items-center shadow-lg z-50"
        >
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("hero");
              if (el) el.scrollIntoView({ behavior: "smooth" });
              else window.location.href = "#hero";
            }}
            className="font-bold text-lg tracking-tight text-blue-400 hover:opacity-90 transition"
            aria-label="Go to top / hero section"
          >
            Brian Kimeli
          </a>

          <ul className="flex gap-6 text-sm font-medium">
            <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
            <li><a href="#skills" className="hover:text-blue-400 transition">Skills</a></li>
            <li><a href="#projects" className="hover:text-blue-400 transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
          </ul>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
