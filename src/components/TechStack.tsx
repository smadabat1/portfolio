import { Code2, Database, Smartphone, Server, Cloud, Container } from "lucide-react";

const TechStack = () => {
  const technologies = [
    { name: "React", logo: "assets/logos/react.png" },
    { name: "React Native", logo: "assets/logos/react-native.png" },
    { name: "FastAPI", logo: "assets/logos/fastapi.png" },
    { name: "PostgreSQL", logo: "assets/logos/pg.png" },
    { name: "AWS", logo: "assets/logos/aws.png" },
    { name: "Python", logo: "assets/logos/python.png" },
    { name: "Docker", logo: "assets/logos/docker.png" },
    { name: "Redis", logo: "assets/logos/redis.png" },
    { name: "TypeScript", logo: "assets/logos/typescript.png" },
    { name: "Tailwind CSS", logo: "assets/logos/tailwind.png" },
    { name: "n8n", logo: "assets/logos/n8n.png" },
    { name: "Supabase", logo: "assets/logos/supabase.png" },
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
              className="flex flex-col items-center justify-center p-4   rounded-md border border-black hover:border-primary bg-background text-white text-sm hover:shadow-[6px_6px_0px_0px_theme(colors.primary.DEFAULT)] transition duration-200"
            >
              <img 
                src={tech.logo}
                alt={tech.name}
                className="h-12 w-12 object-contain group-hover:scale-110 transition-transform"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
