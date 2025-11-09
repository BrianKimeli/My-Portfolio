"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  // Centralized animation definitions for cleaner code
  const initial = { opacity: 0, y: 30 };

  const staggeredAnimation = {
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: "easeOut" },
  };

  return (
    <section
      id="hero"
      // Height Optimization: Min-height on mobile, full screen on desktop.
      className="min-h-[75vh] md:min-h-screen flex flex-col items-center justify-center
                 bg-gradient-to-b from-gray-950 to-gray-900 text-white
                 px-6 py-12 sm:px-12 md:px-16"
    >
      <div className="flex flex-col sm:flex-row items-center justify-center max-w-6xl w-full">
        
        {/* Profile Image (Top on mobile, Left on larger screens) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          // Spacing: Increased bottom margin on mobile (mb-8) for better content density.
          className="mb-8 sm:mb-0 sm:mr-12 lg:mr-20 flex justify-center w-full sm:w-auto"
        >
          {/* Image Sizing & Styling */}
          <div className="w-32 h-40 sm:w-48 sm:h-56 md:w-52 md:h-64 rounded-xl overflow-hidden border-4 border-blue-500 shadow-2xl shadow-blue-500/30">
            <Image
              src="/avatar-placeholder.png"
              alt="Brian Kimeli"
              width={208} 
              height={256} 
              className="object-cover w-full h-full"
              priority 
            />
          </div>
        </motion.div>

        {/* Text Content (Bottom on mobile, Right on larger ones) */}
        <div
          // Text Alignment: Center text on mobile, .
          className="text-center sm:text-left max-w-xl"
        >
          <motion.h1
            initial={initial}
            {...staggeredAnimation}
            className="text-5xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4"
          >
            Hi, I’m <span className="text-blue-400">Brian Kimeli</span>
          </motion.h1>

          <motion.p
            initial={initial}
            animate={{ ...staggeredAnimation.animate, transition: { ...staggeredAnimation.transition, delay: 0.2 } }}
            className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-8"
          >
            A passionate <span className="text-gray-200 font-semibold">Software Engineer</span> crafting
            sleek web and mobile experiences with modern tech and AI.
          </motion.p>

          <motion.div
            initial={initial}
            animate={{ ...staggeredAnimation.animate, transition: { ...staggeredAnimation.transition, delay: 0.4 } }}
            className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-5"
          >
            {/* To work CTA*/}
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-medium
                         px-4 py-2 sm:px-8 sm:py-3.5 rounded-full transition duration-300 ease-in-out
                         transform hover:scale-[1.02] shadow-md hover:shadow-lg shadow-blue-500/30"
            >
              Explore My Work <ArrowRight className="w-5 h-5" />
            </a>

            {/* To About CTA */}
            <a
              href="#about"
              className="inline-flex items-center gap-2 border border-gray-700 hover:border-blue-400 text-gray-300 hover:text-blue-400 font-medium
                         px-4 py-2 sm:px-8 sm:py-3.5 rounded-full transition duration-300 ease-in-out hover:bg-gray-800/50"
            >
              About Me
              <motion.span
                animate={{ y: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="ml-1"
              >
                ↓
              </motion.span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}