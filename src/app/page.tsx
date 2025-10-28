import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Navigation from "@/components/Navigation";
import Projects from "@/sections/Projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Navigation />
      <Projects />
    </main>
  );
}