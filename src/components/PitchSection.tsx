import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface PitchSectionProps {
  id: string;
  backgroundImage?: string;
  children: ReactNode;
  orbColor?: string;
  orbPosition?: string;
}

const PitchSection = ({ id, backgroundImage, children, orbColor = "hsla(155,100%,45%,0.15)", orbPosition = "top-right" }: PitchSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const orbStyles: Record<string, React.CSSProperties> = {
    "top-right": { top: "-10%", right: "-10%", width: "500px", height: "500px" },
    "bottom-left": { bottom: "-10%", left: "-10%", width: "400px", height: "400px" },
    "center": { top: "30%", left: "50%", transform: "translateX(-50%)", width: "600px", height: "600px" },
  };

  return (
    <section
      id={id}
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: backgroundImage
            ? "var(--overlay-vibrant)"
            : `linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--card)) 50%, hsl(var(--background)) 100%)`,
        }}
      />

      {/* Floating orb */}
      <div
        className="floating-orb"
        style={{ ...orbStyles[orbPosition], background: orbColor }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsla(0,0%,100%,0.1) 1px, transparent 1px), linear-gradient(90deg, hsla(0,0%,100%,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <motion.div
        className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-10 py-24"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default PitchSection;
