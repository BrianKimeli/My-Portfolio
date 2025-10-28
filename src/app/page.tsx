import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Navigation from "@/components/Navigation";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Navigation />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}