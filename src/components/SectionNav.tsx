import { useState, useEffect } from "react";

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

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
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
      {/* Dot nav */}
      <nav className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3 items-center">
        {sections.map((s, i) => (
          <button
            key={s.id}
            onClick={() => document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth" })}
            className="group relative flex items-center"
            aria-label={s.label}
          >
            <span className="absolute right-6 whitespace-nowrap text-xs font-medium text-foreground/70 opacity-0 group-hover:opacity-100 transition-opacity bg-card/80 backdrop-blur-sm px-2 py-1 rounded">
              {s.label}
            </span>
            <span
              className={`block rounded-full transition-all duration-300 ${
                i === active
                  ? "w-3 h-3 bg-primary shadow-[0_0_8px_hsl(160,84%,39%)]"
                  : "w-2 h-2 bg-foreground/30 hover:bg-foreground/60"
              }`}
            />
          </button>
        ))}
      </nav>

      {/* Next button */}
      {active < sections.length - 1 && (
        <button
          onClick={scrollToNext}
          className="fixed bottom-8 right-8 z-50 px-5 py-3 rounded-full font-semibold text-sm transition-all hover:scale-105"
          style={{ background: "var(--gradient-primary)", color: "white" }}
        >
          Next →
        </button>
      )}

      {/* Top bar */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/60 border-b border-border/30">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <span className="text-sm font-bold tracking-widest text-primary uppercase">RentFlow</span>
          <span className="text-xs text-muted-foreground hidden sm:block">Investor Pitch Deck</span>
        </div>
      </header>
    </>
  );
};

export default SectionNav;
