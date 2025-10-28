"use client";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Android & Mobile Development",
    skills: [
      "Kotlin",
      "Jetpack Compose",
      "KMP (Kotlin Multiplatform)",
      "XML UI Design",
      "Firebase",
      "REST APIs",
    ],
    color: "from-green-400 to-emerald-500",
  },
  {
    title: "Web Development",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML & CSS",
      "TailwindCSS",
    ],
    color: "from-blue-400 to-cyan-500",
  },
  {
    title: "Backend & Databases",
    skills: [
      "Django",
      "FastAPI",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "Node.js",
    ],
    color: "from-purple-400 to-indigo-500",
  },
  {
    title: "AI, Machine Learning & Data",
    skills: [
      "AI Agents",
      "Machine Learning",
      "Data Analysis",
      "Natural Language Processing",
      "Automation Scripts",
    ],
    color: "from-yellow-400 to-orange-500",
  },
  {
    title: "Tools & Workflow",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Docker",
      "Figma",
      "Linux CLI",
    ],
    color: "from-pink-400 to-rose-500",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-b from-gray-950 to-gray-900 text-white px-6 md:px-12 border-t border-gray-800"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          Technical Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/60 backdrop-blur-md p-8 rounded-2xl border border-gray-800 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
            >
              <h3
                className={`text-xl font-semibold mb-5 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
              >
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.08 }}
                    className="bg-gray-800/70 px-4 py-1.5 rounded-full text-gray-300 text-sm font-medium border border-gray-700 hover:border-blue-400 hover:text-blue-300 transition-all"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
