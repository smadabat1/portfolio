import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Let's Work Together
        </h2>
        <p className="text-muted-foreground text-center mb-12">
          Have a project in mind? Drop me a message and let's create something amazing.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background/50 border-primary/20"
                  required
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-background/50 border-primary/20"
                  required
                />
              </div>
              
              <div>
                <Textarea
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-background/50 border-primary/20 min-h-[150px]"
                  required
                />
              </div>
              
              <Button type="submit" className="w-full group">
                Send Message
                <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </div>
          
          <div className="flex flex-col justify-center space-y-6">
            <div className="glass rounded-2xl p-6">
              <h3 className="font-semibold mb-4 text-lg">Connect With Me</h3>
              
              <div className="space-y-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span>github.com/smadabat1</span>
                </a>
                
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span>linkedin.com/in/venkata-sai-pavan-madabathula/</span>
                </a>
                
                <a
                  href="mailto:mvspavan001@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span>mvspavan001@gmail.com</span>
                </a>
              </div>
            </div>
            
            <div className="glass rounded-2xl p-6">
              <p className="text-sm text-muted-foreground">
                📍 Based in Hyderabad, India
                <br />
                🌍 Available for remote work worldwide
                <br />
                ⚡ Response time: Usually within 60 mins
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="mt-24 text-center text-sm text-muted-foreground">
        <p>© 2025 • Built with React, TypeScript & Tailwind CSS</p>
      </footer>
    </section>
  );
};

export default Contact;
