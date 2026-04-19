import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import convoAiImg from "@/assets/project-convo-ai.png";
import fintechImg from "@/assets/project-fintech.png";
import todoImg from "@/assets/project-todo.png";
import universityImg from "@/assets/project-university.png";

const projects = [
  {
    title: "Convo AI",
    description: "Full-stack chatbot web app with dynamic conversation history and a responsive messaging UI.",
    tech: ["React", "Node.js", "AI"],
    image: convoAiImg,
    link: "https://chatbot-triall.netlify.app/",
  },
  {
    title: "Fintech Dashboard",
    description: "A React.js web app for managing fintech operations, featuring multi-section navigation across Dashboard, Products, Analytics, Loans, and more — built with Vite and React Router.",
    tech: ["React", "Vite", "React Router"],
    image: fintechImg,
    link: "https://lighthousefinances.netlify.app/",
  },
  {
    title: "Todo App",
    description: "A React + Tailwind CSS task manager with full CRUD functionality, completion tracking, and localStorage persistence for offline support.",
    tech: ["React", "Tailwind", "LocalStorage"],
    image: todoImg,
    link: "https://incandescent-starburst-3dd135.netlify.app/",
  },
  {
    title: "University Website",
    description: "A responsive website delivering an intuitive academic experience for prospective and current students.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: universityImg,
    link: "https://edufordwebsite-ibukunoluwa.netlify.app/",
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
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              whileHover={{ y: -6 }}
              className="group rounded-xl border border-border bg-card overflow-hidden hover:border-primary/40 hover:shadow-[0_20px_60px_-20px_hsl(var(--primary)/0.3)] transition-all duration-500 block"
            >
              <div className="h-48 overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
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
                  <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
