"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-gray-900 to-gray-950 text-white px-6 border-t border-gray-800"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-8"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-gray-300 leading-relaxed mb-6"
        >
          I’m <span className="text-blue-400 font-medium">Brian Kimeli</span>, a
          Software Engineer driven by curiosity, creativity, and purpose. My
          journey in tech began with a fascination for how ideas can be turned
          into tools that make people’s lives easier; that spark became my
          lifelong pursuit.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg text-gray-300 leading-relaxed mb-6"
        >
          Today, I build intelligent, user-centered systems; from sleek Android
          apps to AI-powered web platforms, that bridge creativity and
          technology. I love solving real-world problems through clean design,
          thoughtful engineering, and scalable architecture.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-lg text-gray-300 leading-relaxed mb-8"
        >
          Beyond code, I’m passionate about learning, collaboration, and
          building things that matter. My goal is simple: to craft experiences
          that inspire, empower, and connect people through technology.
        </motion.p>

        <motion.a
          href="#skills"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium transition"
        >
          View My Skills
        </motion.a>
      </div>
    </section>
  );
}
