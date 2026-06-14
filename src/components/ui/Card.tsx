import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export function Card({ hover = true, className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "bg-surface border border-border rounded-sm p-6",
        hover && "hover:border-primary/50 hover:glow-cyan-sm transition-all duration-300",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
