import { motion, useInView } from "framer-motion";
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
              <p className="my-[60px]">
                A Frontend developer since 2022, passionate about building beautiful, functional and user-friendly web experiences. I write clean code, obsess over responsive design, and make sure every site looks good and works seamlessly. When I'm not coding, I'm reading, writing, or watching football; YNWA!
              </p>
              <p>​</p>
              <p>​</p>
            </div>

            <div className="space-y-4">
              <motion.div whileHover={{ y: -3 }} className="rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition-colors duration-300">
                <p className="font-mono text-xs text-muted-foreground mb-3">Currently</p>
                <p className="text-sm text-foreground font-medium">Freelance Developer</p>
                <p className="text-sm text-muted-foreground">@ Acme Corp</p>
              </motion.div>
              <motion.div whileHover={{ y: -3 }} className="rounded-xl border border-border bg-card p-5 hover:border-accent/40 transition-colors duration-300">
                <p className="font-mono text-xs text-muted-foreground mb-3">Location</p>
                <p className="text-sm text-foreground">​Ogun State, Nigeria</p>
              </motion.div>
              <motion.div whileHover={{ y: -3 }} className="rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition-colors duration-300">
                <p className="font-mono text-xs text-muted-foreground mb-3">Education</p>
                <p className="text-sm text-foreground">AltSchool Africa</p>
                <p className="text-sm text-muted-foreground">Front-End Engineering</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
