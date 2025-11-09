"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; 

export default function Navigation() {
  const [showNav, setShowNav] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

  useEffect(() => {
    const handleScroll = () => {
      // Toggle visibility based on scroll position
      setShowNav(window.scrollY > 80);
      
      // Close mobile menu when scrolling starts/stops/nav appears
      if (isMobileMenuOpen) {
          setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen]); // Dependency added for isMobileMenuOpen

  // Utility function to handle closing the menu after a link is clicked
  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    targetId: string
  ) => {
    e.preventDefault();
    setIsMobileMenuOpen(false); // Close mobile menu immediately

    const targetElementId = targetId.substring(1);
    const el = document.getElementById(targetElementId);

    // Check if the element exists
    if (el) {
      // Scroll smoothly to the element
      el.scrollIntoView({ behavior: "smooth" });

      // Manually update the URL hash.
      setTimeout(() => {
        // Check if we are at the top/hero section.
        if (targetId === "#hero") {
          window.history.pushState(
            "",
            document.title,
            window.location.pathname + window.location.search
          );
        } else {
          window.location.hash = targetId;
        }
      }, 400); // 400ms delay matches the motion transition duration and allows scroll to start
    } else {
      // Fallback navigation if element not found
      window.location.href = targetId;
    }
  };

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <AnimatePresence>
      {showNav && (
        <motion.nav
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -60, opacity: 0 }}
          transition={{ duration: 0.4 }}
          // max-w-7xl mx-auto for better structure on large screens
          className="fixed top-0 left-0 right-0 w-full bg-gray-900/80 backdrop-blur-md text-white py-4 shadow-lg z-50"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 flex justify-between items-center">
            {/* Name */}
            <a
              href="#hero"
              onClick={(e) => handleLinkClick(e, "#hero")}
              className="font-bold text-xl tracking-tight text-blue-400 hover:opacity-90 transition"
              aria-label="Go to top / hero section"
            >
              Brian Kimeli
            </a>

            {/* Desktop Navigation Links (Visible on small screens and up) */}
            <ul className="hidden sm:flex gap-6 text-sm font-medium">
              {navItems.map(item => (
                <li key={item.name}>
                  <a href={item.href} onClick={(e) => handleLinkClick(e, item.href)} className="hover:text-blue-400 transition">{item.name}</a>
                </li>
              ))}
            </ul>
            
            {/* Mobile Menu Button (Hidden on small screens and up) */}
            <button
              className="sm:hidden text-white p-2 rounded-md hover:bg-gray-800 transition"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu Dropdown (Visible only when open on small screens) */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="sm:hidden w-full bg-gray-900/90 py-2 border-t border-gray-800"
              >
                <ul className="flex flex-col gap-1 p-4">
                  {navItems.map(item => (
                    <li key={item.name}>
                      <a 
                        href={item.href} 
                        onClick={(e) => handleLinkClick(e, item.href)} 
                        className="block py-2 px-3 text-lg font-medium text-gray-200 hover:bg-gray-800 rounded-lg transition"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}