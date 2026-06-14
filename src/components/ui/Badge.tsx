import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  label: string;
  iconName?: string;
  className?: string;
}

export function Badge({ label, iconName, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-sm",
        "bg-surface border border-border text-muted hover:border-primary hover:text-text",
        "transition-all duration-200 cursor-default",
        className
      )}
    >
      {iconName && (
        <Icon icon={iconName} className="w-3.5 h-3.5 flex-shrink-0" />
      )}
      {label}
    </span>
  );
}
