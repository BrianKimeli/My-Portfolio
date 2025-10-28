"use client";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-28 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white px-6 overflow-hidden"
    >
      {/* Glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
        >
        Let’s Connect
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-lg md:text-xl text-gray-300 leading-relaxed mb-12"
        >
          I’m always open to exciting projects, collaborations, or even a quick
          chat about tech, design, and AI.  
          Drop me a line, I’ll get back to you soon.
        </motion.p>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="bg-gray-900/70 border border-gray-800 rounded-2xl shadow-xl p-10 backdrop-blur-md hover:border-blue-500/40 transition"
        >
          <motion.a
            href="mailto:briankimeli.dev@gmail.com"
            className="inline-flex items-center justify-center gap-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <Mail className="w-5 h-5" /> briankimeli06@gmail.com
          </motion.a>

          <div className="flex justify-center gap-8 mt-10">
            <motion.a
              href="https://github.com/BrianKimeli"
              target="_blank"
              whileHover={{ scale: 1.1 }}
              className="p-3 rounded-full bg-gray-800 hover:bg-blue-500/20 transition"
            >
              <Github className="w-6 h-6 text-gray-300 hover:text-blue-400" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/briankimeli"
              target="_blank"
              whileHover={{ scale: 1.1 }}
              className="p-3 rounded-full bg-gray-800 hover:bg-blue-500/20 transition"
            >
              <Linkedin className="w-6 h-6 text-gray-300 hover:text-blue-400" />
            </motion.a>
          </div>
        </motion.div>

        {/* Footer text */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="text-gray-500 mt-16 text-sm"
        >
          © {new Date().getFullYear()} Brian Kimeli - Finesse
        </motion.p>
      </div>
    </section>
  );
}
