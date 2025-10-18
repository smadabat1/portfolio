const AboutOld = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          About Me
        </h2>
        
        <div className="glass rounded-2xl p-8 md:p-12">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I'm a full-stack developer passionate about creating seamless digital experiences 
            that users love. With expertise in React Native and ReactJS for frontend, and FastAPI 
            for backend, I build applications that are fast, scalable, and intuitive.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            My philosophy is simple: quality over quantity, performance over features, and 
            user experience above all. Every line of code I write is with the end user in mind, 
            ensuring that technology serves people, not the other way around.
          </p>
          
          <div className="flex items-center gap-2 text-primary">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <p className="font-medium">
              Based in Hyderabad, India - Open to remote & global opportunities
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          About Me
        </h2>
        
        <div className="glass rounded-2xl p-8 md:p-12">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Hi, I’m <span className="font-semibold">Pavan Madabathula</span> — a full-stack developer and product builder. 
            I create seamless mobile and web experiences, and have shipped my main project, <span className="font-semibold">Storage Pod</span>.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I’m also working on upcoming projects like 
            <span className="font-semibold"> SecurePass</span> (a privacy-focused password manager) 
            and <span className="font-semibold">CoupleSync</span> (a shared finance tracker for couples), 
            which I plan to launch soon.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I’m also passionate about research — my paper on 
            <span className="font-semibold"> malware detection using swarm optimization and ML</span> was published in MDPI Journal.  
            Combining practical product building with scientific research shapes my approach: data-driven, user-centric, and privacy-focused.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            My philosophy is simple: build tools that solve real problems, prioritize quality and performance, 
            and always put the end user first. I’m constantly exploring new technologies to create smarter, faster, and more secure applications.
          </p>
          
          <div className="flex items-center gap-2 text-primary mt-4">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <p className="font-medium">
              Based in Hyderabad, India — open to remote and global opportunities
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

