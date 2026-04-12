import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const socials = [
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Mail, label: "Email", href: "mailto:hello@example.com" },
];

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 px-6">
      <div ref={ref} className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm text-primary mb-2 tracking-wider">04 — Contact</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-6">Let's build something</h2>
          <p className="text-muted-foreground mb-10 leading-relaxed">
            I'm currently open to new opportunities and collaborations. Whether you have a
            project in mind or just want to say hi, my inbox is always open.
          </p>

          <a
            href="mailto:hello@example.com"
            className="inline-block px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:glow-strong transition-all duration-300 mb-12"
          >
            Say Hello
          </a>

          <div className="flex justify-center gap-6">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="p-3 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-200"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
