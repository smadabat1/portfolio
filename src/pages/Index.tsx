import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { TimelineDemo } from "@/components/Timeline";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <TimelineDemo />
      <Contact />
    </div>
  );
};

export default Index;
