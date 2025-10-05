import { Code2, Database, Smartphone, Server, Cloud, Container } from "lucide-react";

const TechStack = () => {
  const technologies = [
    { name: "React", icon: Code2, color: "text-[#61DAFB]" },
    { name: "React Native", icon: Smartphone, color: "text-[#61DAFB]" },
    { name: "FastAPI", icon: Server, color: "text-[#009688]" },
    { name: "PostgreSQL", icon: Database, color: "text-[#336791]" },
    { name: "AWS", icon: Cloud, color: "text-[#FF9900]" },
    { name: "Docker", icon: Container, color: "text-[#2496ED]" },
  ];

  return (
    <section className="py-24 px-4 bg-background/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Tech Stack
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="glass rounded-xl p-6 flex flex-col items-center gap-3 hover:bg-primary/5 transition-all duration-300 hover:scale-105 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <tech.icon className={`h-12 w-12 ${tech.color} group-hover:scale-110 transition-transform`} />
              <span className="text-sm font-medium text-center">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
