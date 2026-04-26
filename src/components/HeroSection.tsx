import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Particles from "./Particles";

const phrases = [
  "Frontend Developer.",
  "React Developer.",
  "WordPress Developer.",
];

const HeroSection = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const current = phrases[phraseIndex];
    const speed = deleting ? 40 : 80;

    if (!deleting && charIndex === current.length) {
      setTimeout(() => setDeleting(true), 1800);
      return;
    }
    if (deleting && charIndex === 0) {
      setDeleting(false);
      setPhraseIndex((i) => (i + 1) % phrases.length);
      return;
    }

    const timer = setTimeout(() => {
      setCharIndex((c) => c + (deleting ? -1 : 1));
    }, speed);
    return () => clearTimeout(timer);
  }, [charIndex, deleting, phraseIndex]);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (!rect) return;
      setMouse({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    };
    const el = sectionRef.current;
    el?.addEventListener("mousemove", handleMove);
    return () => el?.removeEventListener("mousemove", handleMove);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Animated grid */}
      <motion.div
        animate={{ backgroundPosition: ["0px 0px", "60px 60px"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Cursor-follow spotlight */}
      <div
        className="absolute inset-0 transition-[background] duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mouse.x * 100}% ${mouse.y * 100}%, hsl(var(--primary) / 0.18), transparent 60%)`,
        }}
      />

      {/* Drifting mesh orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/25 blur-[140px] animate-mesh-drift"
      />
      <motion.div
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-1/4 right-1/4 w-[550px] h-[550px] rounded-full bg-accent/25 blur-[140px] animate-mesh-drift"
        style={{ animationDelay: "3s" }}
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute top-1/2 right-1/3 w-[400px] h-[400px] rounded-full bg-primary/20 blur-[120px]"
      />

      {/* Floating particles */}
      <Particles count={60} />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-3xl text-center"
      >
        <motion.p
          variants={item}
          className="font-mono text-sm text-primary mb-6 tracking-wider"
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          variants={item}
          className="font-heading text-5xl lg:text-7xl font-bold tracking-tight leading-tight mb-4 sm:text-5xl"
        >
          <span
            className="bg-clip-text text-transparent inline-block"
            style={{
              backgroundImage:
                "linear-gradient(120deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)))",
              backgroundSize: "200% auto",
              animation: "gradient-shift 6s ease infinite",
            }}
          >
            Ibukunoluwanimi Olateju
          </span>
        </motion.h1>

        <motion.div
          variants={item}
          className="text-xl sm:text-2xl text-muted-foreground mb-8 h-10"
        >
          <span>I'm a </span>
          <span className="text-primary font-mono">
            {phrases[phraseIndex].slice(0, charIndex)}
          </span>
          <span className="animate-blink text-primary">|</span>
        </motion.div>

        <motion.div
          variants={item}
          className="flex gap-4 justify-center flex-wrap"
        >
          <motion.a
            whileHover={{ scale: 1.06, y: -3 }}
            whileTap={{ scale: 0.96 }}
            href="#projects"
            className="px-7 py-3 rounded-lg bg-gradient-sunset text-primary-foreground font-semibold text-sm shadow-lg animate-pulse-glow transition-all duration-300"
          >
            View My Work
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.06, y: -3, borderColor: "hsl(var(--accent))" }}
            whileTap={{ scale: 0.96 }}
            href="#contact"
            className="px-7 py-3 rounded-lg border border-border text-foreground font-semibold text-sm hover:text-accent transition-colors duration-300"
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
          <ArrowDown size={20} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
