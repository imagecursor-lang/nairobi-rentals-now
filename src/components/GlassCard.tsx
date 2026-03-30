import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "glow" | "accent";
}

const GlassCard = ({ children, className = "", variant = "default" }: GlassCardProps) => {
  const variantClass =
    variant === "glow" ? "glass-card-glow" :
    variant === "accent" ? "glass-card-accent" :
    "glass-card";

  return (
    <div className={`rounded-2xl p-6 ${variantClass} ${className}`}>
      {children}
    </div>
  );
};

export default GlassCard;
