import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-6">
      <div ref={ref} className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm text-primary mb-2 tracking-wider">01 — About</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-8">A bit about me</h2>

          <div className="grid md:grid-cols-[3fr_2fr] gap-12 items-start">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a frontend-focused developer with 5+ years of experience building polished,
                performant web applications. I care deeply about design systems, accessibility,
                and creating interfaces that feel effortless to use.
              </p>
              <p>
                When I'm not shipping code, I'm probably exploring new creative coding
                techniques, contributing to open source, or writing about modern web development.
              </p>
              <p>
                Currently, I'm focused on building scalable design systems and exploring the
                intersection of motion design and engineering.
              </p>
            </div>

            <div className="space-y-4">
              <div className="rounded-xl border border-border bg-card p-5">
                <p className="font-mono text-xs text-muted-foreground mb-3">Currently</p>
                <p className="text-sm text-foreground font-medium">Senior Frontend Engineer</p>
                <p className="text-sm text-muted-foreground">@ Acme Corp</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5">
                <p className="font-mono text-xs text-muted-foreground mb-3">Location</p>
                <p className="text-sm text-foreground">San Francisco, CA</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5">
                <p className="font-mono text-xs text-muted-foreground mb-3">Education</p>
                <p className="text-sm text-foreground">B.S. Computer Science</p>
                <p className="text-sm text-muted-foreground">Stanford University</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
