import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost" | "outline" | "white" | "outline-light";
  size?: "sm" | "md" | "lg";
  className?: string;
  icon?: boolean;
  onClick?: () => void;
}

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  icon = false,
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 whitespace-nowrap";

  const variants = {
    primary:
      "bg-accent hover:bg-accent-hover text-white shadow-sm hover:shadow-md",
    secondary:
      "bg-bg-dark text-white hover:bg-bg-dark/90 shadow-sm",
    ghost:
      "text-text-secondary hover:text-text-primary hover:bg-bg-light",
    outline:
      "border-2 border-border text-text-primary hover:border-accent hover:text-accent",
    white:
      "bg-white text-slate-900 hover:bg-white/90 shadow-sm",
    "outline-light":
      "border-2 border-white/40 text-white hover:border-white hover:text-white hover:bg-white/10",
  };

  const sizes = {
    sm: "px-4 py-2 text-[13px]",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-[15px]",
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        {icon && <ArrowRight className="w-4 h-4" />}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {children}
      {icon && <ArrowRight className="w-4 h-4" />}
    </button>
  );
}
