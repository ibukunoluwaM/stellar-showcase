import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Nebula UI",
    description: "A modern component library with built-in theming, dark mode, and accessibility-first design patterns.",
    tech: ["React", "TypeScript", "Tailwind"],
    color: "from-primary/20 to-primary/5",
  },
  {
    title: "CodeSync",
    description: "Real-time collaborative code editor with WebSocket-powered sync and multi-cursor support.",
    tech: ["Next.js", "Socket.io", "Monaco"],
    color: "from-[hsl(250,80%,68%)]/20 to-[hsl(250,80%,68%)]/5",
  },
  {
    title: "DataPulse",
    description: "Analytics dashboard with interactive charts, custom date ranges, and export functionality.",
    tech: ["React", "D3.js", "Node.js"],
    color: "from-[hsl(170,70%,50%)]/20 to-[hsl(170,70%,50%)]/5",
  },
  {
    title: "Markdraft",
    description: "Distraction-free markdown writing app with live preview, themes, and local-first storage.",
    tech: ["Svelte", "IndexedDB", "Rust"],
    color: "from-[hsl(30,80%,55%)]/20 to-[hsl(30,80%,55%)]/5",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 px-6">
      <div ref={ref} className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm text-primary mb-2 tracking-wider">03 — Projects</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-12">Selected work</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className="group rounded-xl border border-border bg-card overflow-hidden hover:border-primary/30 transition-all duration-300"
            >
              {/* Color bar */}
              <div className={`h-32 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                <span className="font-mono text-xs text-muted-foreground opacity-50 group-hover:opacity-100 transition-opacity">
                  // preview
                </span>
              </div>

              <div className="p-6">
                <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2 flex-wrap">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs font-mono text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 text-muted-foreground">
                    <a href="#" className="hover:text-primary transition-colors">
                      <Github size={16} />
                    </a>
                    <a href="#" className="hover:text-primary transition-colors">
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
