interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
  dark?: boolean;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  dark = false,
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-2xl"}>
      {badge && (
        <span
          className={`inline-block px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.15em] mb-5 ${
            dark
              ? "bg-white/10 text-white/70"
              : "bg-accent-light text-accent"
          }`}
        >
          {badge}
        </span>
      )}

      <h2
        className={`text-h2 font-bold tracking-tight leading-[1.15] ${
          dark ? "text-white" : "text-text-primary"
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-4 text-base lg:text-lg leading-relaxed ${
            dark ? "text-white/60" : "text-text-secondary"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}