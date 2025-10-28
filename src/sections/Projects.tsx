"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "EchoSpace",
    description:
      "An AI-driven social hub that curates discussions, analyzes sentiment, and generates factual content.",
    tech: ["React", "Node.js", "AI", "TailwindCSS"],
    link: "https://github.com/BrianKimeli/echospace",
  },
  {
    title: "MatatuTrac",
    description:
      "A real-time Android app for tracking matatus using live GPS data and route analytics.",
    tech: ["Kotlin", "Firebase", "Google Maps API"],
    link: "https://github.com/BrianKimeli/MatatuTrac",
  },
  {
    title: "VeveBase",
    description:
      "A web app connecting miraa farmers with clients — enabling seamless delivery and communication.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    link: "https://github.com/BrianKimeli/VeveBase",
  },
  {
    title: "Uwazi254",
    description:
      "Transparency-focused web platform built with Django and TypeScript to display open data interactively.",
    tech: ["Django", "TypeScript", "PostgreSQL"],
    link: "https://github.com/BrianKimeli/Uwazi254",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-950 text-white px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-12"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-blue-500 transition"
            >
              <h3 className="text-2xl font-semibold mb-3 text-blue-400">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-800 px-3 py-1 text-sm rounded-full text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                className="text-blue-400 hover:underline"
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
