import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  href?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-background font-semibold hover:bg-primary/90 border border-primary",
  secondary:
    "bg-transparent text-primary border border-primary hover:bg-primary hover:text-background",
  ghost:
    "bg-transparent text-muted hover:text-text border border-transparent",
};

export function Button({
  variant = "primary",
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center gap-2 px-6 py-3 text-sm font-mono rounded-sm transition-all duration-200",
    variantClasses[variant],
    className
  );

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
