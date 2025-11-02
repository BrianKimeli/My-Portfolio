"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Copy, MessageCircle } from "lucide-react";

const CONTACT_EMAIL = "briankimeli06@gmail.com";
const WHATSAPP_NUMBER = "254746144228"; // No "+" prefix

export default function Contact() {
  const [status, setStatus] = useState<string | null>(null);

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setStatus("✅ Email copied!");
      setTimeout(() => setStatus(null), 2500);
    } catch {
      setStatus("⚠️ Copy failed. Try manually.");
      setTimeout(() => setStatus(null), 3000);
    }
  }

  return (
    <section
      id="contact"
      className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-950 text-white px-6 overflow-hidden" >
      {/* Glow Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Let’s Connect
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Whether you want to collaborate, share ideas, or just say hi —
            I’m always open to meaningful conversations.
          </p>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="bg-gray-900/70 border border-gray-800 rounded-3xl shadow-2xl p-8 backdrop-blur-md flex flex-col gap-8"
        >
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 justify-center">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-medium px-5 py-3 rounded-full transition w-full sm:w-auto"
            >
              <Mail className="w-4 h-4" /> Email Me
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-gray-200 px-5 py-3 rounded-full border border-gray-700 transition w-full sm:w-auto"
            >
              <Copy className="w-4 h-4" /> Copy Email
            </button>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-full transition w-full sm:w-auto"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </div>

          {status && (
            <p className="text-center text-sm text-green-400">{status}</p>
          )}

          {/* Socials */}
          <div className="flex justify-center gap-5 mt-4">
            <a
              href="https://github.com/BrianKimeli"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-gray-800 hover:bg-blue-500/20 transition"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6 text-gray-300 hover:text-blue-400" />
            </a>

            <a
              href="https://linkedin.com/in/briankimeli"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-gray-800 hover:bg-blue-500/20 transition"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-gray-300 hover:text-blue-400" />
            </a>
          </div>
        </motion.div>

        {/* Copyright Footer */}
        <div className="mt-10 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()}{" "}
          <span>Brian Kimeli - Finesse</span>
        </div>
      </div>
    </section>
  );
}
