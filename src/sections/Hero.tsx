"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
  <section id="hero" className="flex flex-col md:flex-row items-center justify-center h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white px-6 md:px-16">
      {/* Profile Image (Left Side) */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="md:mr-12 mb-8 md:mb-0"
      >
        <div className="w-48 h-56 rounded-2xl overflow-hidden border-4 border-blue-500 shadow-lg">
          <Image
            src="/avatar-placeholder.png" // to replace with my image later
            alt="Brian Kimeli"
            width={192}
            height={224}
            className="object-cover"
          />
        </div>
      </motion.div>

      {/* Text Content (Right Side) */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center md:text-left max-w-xl"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4"
        >
          Hi, I’m <span className="text-blue-400">Brian Kimeli</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-400 mb-8"
        >
          A passionate <span className="text-gray-200">Software Engineer</span> crafting
          sleek web and mobile experiences with modern tech and AI.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-full transition"
          >
            Explore My Work <ArrowRight className="w-4 h-4" />
          </a>

          <motion.a
            href="#about"
            className="inline-flex items-center gap-2 border border-gray-700 hover:border-blue-400 text-gray-300 hover:text-blue-400 font-medium px-6 py-3 rounded-full transition"
          >
            About Me
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.2 }}
            >
              ↓
            </motion.span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
