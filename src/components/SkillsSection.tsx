import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const categories = [
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Rust", "HTML/CSS"],
  },
  {
    title: "Frameworks",
    items: ["React", "Next.js", "Vue", "Svelte", "Node.js"],
  },
  {
    title: "Tools & Platforms",
    items: ["Git", "Docker", "AWS", "Figma", "Vercel"],
  },
  {
    title: "Other",
    items: ["GraphQL", "REST APIs", "CI/CD", "Testing", "Design Systems"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 px-6 bg-card/30">
      <div ref={ref} className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm text-primary mb-2 tracking-wider">02 — Skills</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-12">What I work with</h2>

          <div className="grid sm:grid-cols-2 gap-8">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-xl border border-border bg-card p-6"
              >
                <h3 className="font-heading font-semibold text-sm text-primary mb-4 tracking-wide uppercase">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground text-xs font-mono hover:border-glow hover:bg-primary/10 transition-all duration-200 cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
