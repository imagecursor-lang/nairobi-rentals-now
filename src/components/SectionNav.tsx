import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  { id: "hero", label: "Opportunity" },
  { id: "problem", label: "Problem" },
  { id: "market", label: "Market" },
  { id: "gap", label: "Gap" },
  { id: "solution", label: "Solution" },
  { id: "revenue", label: "Revenue" },
  { id: "projections", label: "Projections" },
  { id: "extra", label: "Extra Revenue" },
  { id: "valuation", label: "Valuation" },
  { id: "funding", label: "Funding" },
  { id: "vision", label: "Vision" },
];

const SectionNav = () => {
  const [active, setActive] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(Math.min(window.scrollY / docHeight, 1));
      
      sections.forEach((s, i) => {
        const el = document.getElementById(s.id);
        if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          setActive(i);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToNext = () => {
    const next = Math.min(active + 1, sections.length - 1);
    document.getElementById(sections[next].id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-foreground/5 print:hidden">
        <motion.div
          className="h-full"
          style={{ background: "var(--gradient-primary)", width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Dot nav */}
      <nav className="fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2.5 items-center print:hidden">
        {sections.map((s, i) => (
          <button
            key={s.id}
            onClick={() => document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth" })}
            className="group relative flex items-center"
            aria-label={s.label}
          >
            <AnimatePresence>
              {i === active && (
                <motion.span
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="absolute right-7 whitespace-nowrap text-[10px] font-bold text-primary bg-card/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-primary/20"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {s.label}
                </motion.span>
              )}
            </AnimatePresence>
            <span
              className={`block rounded-full transition-all duration-500 ${
                i === active
                  ? "w-3 h-3 shadow-[0_0_12px_hsla(155,100%,45%,0.6)]"
                  : "w-1.5 h-1.5 bg-foreground/20 hover:bg-foreground/50"
              }`}
              style={i === active ? { background: "var(--gradient-primary)" } : undefined}
            />
          </button>
        ))}
      </nav>

      {/* Next button */}
      {active < sections.length - 1 && (
        <motion.button
          onClick={scrollToNext}
          className="fixed bottom-8 right-8 z-50 btn-cta text-sm print:hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Next →
        </motion.button>
      )}

      {/* Top bar */}
      <header className="fixed top-[2px] left-0 right-0 z-50 backdrop-blur-xl bg-background/40 border-b border-foreground/5 print:hidden">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <span className="text-sm font-bold tracking-widest uppercase" style={{ fontFamily: "var(--font-display)" }}>
            <span className="text-gradient-primary">Rent</span>Flow
          </span>
          <div className="hidden md:flex items-center gap-1 text-[10px] text-muted-foreground">
            <span className="text-primary font-bold">{String(active + 1).padStart(2, '0')}</span>
            <span>/</span>
            <span>{String(sections.length).padStart(2, '0')}</span>
            <span className="ml-2 text-foreground/50">—</span>
            <span className="ml-2 uppercase tracking-widest font-medium">{sections[active].label}</span>
          </div>
        </div>
      </header>
    </>
  );
};

export default SectionNav;
