interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  title,
  subtitle,
  align = "left",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div className={`mb-12 ${isCenter ? "text-center" : ""}`}>
      <h2 className="font-mono text-3xl sm:text-4xl font-bold text-text">
        {title}
        <span className="text-primary">.</span>
      </h2>
      {subtitle && (
        <p className="mt-3 text-muted max-w-xl leading-relaxed text-sm sm:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}
