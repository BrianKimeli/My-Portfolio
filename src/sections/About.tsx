"use client";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Code } from "lucide-react";

const timeline = [
  {
    side: "left",
    icon: <GraduationCap className="w-6 h-6 text-blue-400" />,
    title: "BSc Software Engineering",
    subtitle: "Zetech University",
    period: "2021 — 2025",
    desc: "Built a solid foundation in algorithms, AI, and system design; discovering how to turn ideas into reliable, efficient, and meaningful software.",
  },
  {
    side: "right",
    icon: <Briefcase className="w-6 h-6 text-green-400" />,
    title: "Software Engineering Intern",
    subtitle: "SmartBS Technologies",
    period: "2025",
    desc: "Worked on production-level Android and web systems, designing scalable features and gaining key insight into the full product evolution lifecycle.",
  },
  {
    side: "left",
    icon: <Code className="w-6 h-6 text-yellow-400" />,
    title: "Research and Development",
    subtitle: "ShilingiApp · MatatuTrac · Uwazi254",
    desc: "Crafted evolving projects; each shaping how I approach system architecture, full-stack design, scalability, and real-world problem-solving.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-gray-900 to-gray-950 text-white px-6 relative overflow-hidden border-t border-gray-800"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-16 text-center"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-lg text-gray-300 leading-relaxed text-center max-w-3xl mx-auto mb-20"
      >
       I’ve always been drawn to how technology transforms ideas into reality. 
       What began as curiosity about how computers work, turned into a drive to
       build systems that think, learn, and make life easier.
      </motion.p>

      <div className="relative max-w-5xl mx-auto">
        <div className="absolute left-1/2 -translate-x-1/2 w-[3px] h-full bg-gradient-to-b from-blue-500 via-gray-700 to-purple-500 rounded-full"></div>

        <div className="space-y-16">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: item.side === "left" ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className={`relative flex flex-col md:flex-row items-center ${
                item.side === "left" ? "md:justify-start" : "md:justify-end"
              }`}
            >
              <div className="absolute left-1/2 -translate-x-1/2 bg-gray-900 border-2 border-blue-500 rounded-full w-12 h-12 flex items-center justify-center z-10">
                {item.icon}
              </div>

              <div
                className={`w-full md:w-5/12 bg-gray-900/60 border border-gray-800 rounded-2xl shadow-lg p-6 md:p-8 backdrop-blur-md ${
                  item.side === "left"
                    ? "md:mr-auto md:text-right md:pr-10"
                    : "md:ml-auto md:text-left md:pl-10"
                }`}
              >
                <h3 className="text-xl font-semibold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-blue-400 mb-2">
                  {item.subtitle}{" "}
                  {item.period && (
                    <span className="text-gray-500">• {item.period}</span>
                  )}
                </p>
                <p className="text-gray-300 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mt-24 max-w-3xl mx-auto"
      >
        <p className="text-lg text-gray-300 leading-relaxed mb-8">
          I&apos;m now exploring how <span className="text-blue-400 font-medium">AI, Android, and IoT</span> can merge to create connected, intelligent systems that sense, learn, and respond to their environment. I actively seek opportunities to push these boundaries further.
        </p>
        <motion.a
          href="#skills"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium transition"
        >
          View My Skills
        </motion.a>
      </motion.div>
    </section>
  );
}
