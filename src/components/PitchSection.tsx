import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface PitchSectionProps {
  id: string;
  backgroundImage?: string;
  darkOverlay?: boolean;
  children: React.ReactNode;
}

const PitchSection = ({ id, backgroundImage, darkOverlay = true, children }: PitchSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
      {darkOverlay && (
        <div
          className="absolute inset-0"
          style={{ background: "var(--overlay)" }}
        />
      )}
      {!backgroundImage && !darkOverlay && (
        <div className="absolute inset-0 bg-background" />
      )}
      {!backgroundImage && darkOverlay && (
        <div className="absolute inset-0 bg-background" />
      )}
      <motion.div
        className="relative z-10 w-full max-w-6xl mx-auto px-6 py-20"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default PitchSection;
