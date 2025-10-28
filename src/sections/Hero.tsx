"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white px-6">
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
        className="text-lg md:text-xl text-gray-400 max-w-xl mb-8"
      >
        A passionate <span className="text-gray-200">Software Engineer</span> crafting
        sleek web and mobile experiences with modern tech and AI.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <a
          href="#projects"
          className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-full transition"
        >
          View My Work <ArrowRight className="w-4 h-4" />
        </a>
      </motion.div>
    </section>
  );
}
