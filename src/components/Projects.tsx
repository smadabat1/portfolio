import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "StoragePod",
      description: "Personal cloud storage solution with FastAPI backend and React Native mobile app. Features include file encryption, sharing, and real-time sync.",
      tags: ["React Native", "FastAPI", "PostgreSQL", "AWS S3"],
      category: "Mobile",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Corporate Carpool",
      description: "Intelligent ride-matching application for office commutes using PostGIS for location-based matching. Reduced commute costs by 60% for users.",
      tags: ["React Native", "FastAPI", "PostGIS", "Redis"],
      category: "Mobile",
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "Portfolio Builder",
      description: "Modern developer portfolio generator with customizable themes and real-time preview. Built with React and Tailwind CSS.",
      tags: ["React", "Tailwind CSS", "TypeScript"],
      category: "Web App",
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "API Gateway Service",
      description: "High-performance API gateway with rate limiting, authentication, and request routing. Handles 10k+ requests per second.",
      tags: ["FastAPI", "Redis", "Docker", "PostgreSQL"],
      category: "Backend",
      gradient: "from-orange-500/20 to-red-500/20"
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with inventory management, payment integration, and analytics dashboard.",
      tags: ["React", "FastAPI", "Stripe", "PostgreSQL"],
      category: "Web App",
      gradient: "from-indigo-500/20 to-blue-500/20"
    }
  ];

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured Projects
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          A selection of projects showcasing my expertise in mobile, web, and backend development
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-6 hover:bg-primary/5 transition-all duration-300 hover:scale-[1.02] group"
            >
              <div className={`h-32 rounded-lg bg-gradient-to-br ${project.gradient} mb-4 flex items-center justify-center`}>
                <Badge variant="secondary" className="text-xs">
                  {project.category}
                </Badge>
              </div>
              
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="outline" className="text-xs border-primary/20">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <div className="flex gap-2">
                <Button size="sm" variant="ghost" className="group/btn">
                  <Github className="h-4 w-4 mr-1 group-hover/btn:text-primary transition-colors" />
                  Code
                </Button>
                <Button size="sm" variant="ghost" className="group/btn">
                  <ExternalLink className="h-4 w-4 mr-1 group-hover/btn:text-primary transition-colors" />
                  Demo
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
