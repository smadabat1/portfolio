import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-glow" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-glow"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Building seamless
            <br />
            <span className="gradient-text">mobile & web experiences</span>
          </h1>
        </div>

        <div className="animate-fade-in-delay">
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Full-stack developer crafting intuitive apps with React, React Native, and FastAPI.
            <br />
            Turning ideas into performant, user-centric digital products.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button size="lg" onClick={() => scrollToSection("projects")} className="group">
              View Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="glass border-primary/20 hover:border-primary/40"
            >
              Get in Touch
            </Button>
          </div>

          <div className="flex gap-4 justify-center">
            <a
              href="https://github.com/smadabat1"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full glass hover:bg-primary/10 transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/venkata-sai-pavan-madabathula/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full glass hover:bg-primary/10 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:mvspavan001@gmail.com"
              className="p-2 rounded-full glass hover:bg-primary/10 transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
