interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

const GlassCard = ({ children, className = "" }: GlassCardProps) => (
  <div
    className={`rounded-xl border border-foreground/10 backdrop-blur-md p-6 ${className}`}
    style={{ background: "var(--gradient-card)" }}
  >
    {children}
  </div>
);

export default GlassCard;
