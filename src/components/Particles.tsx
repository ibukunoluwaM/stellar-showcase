import { useMemo } from "react";

interface ParticlesProps {
  count?: number;
  className?: string;
}

const Particles = ({ count = 30, className = "" }: ParticlesProps) => {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 4 + 1.5,
        delay: Math.random() * 6,
        duration: Math.random() * 6 + 5,
        slow: Math.random() > 0.5,
        accent: Math.random() > 0.5,
      })),
    [count]
  );

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className={`absolute rounded-full ${p.accent ? "bg-accent" : "bg-primary"} ${p.slow ? "animate-float-slow" : "animate-float"}`}
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            filter: "blur(0.5px)",
            boxShadow: `0 0 ${p.size * 4}px currentColor`,
          }}
        />
      ))}
    </div>
  );
};

export default Particles;
