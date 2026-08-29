type SectionHeadingProps = {
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignmentClass =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex max-w-3xl flex-col gap-4 ${alignmentClass}`}>
      {/* <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--accent)]">
        {eyebrow}
      </p> */}
      <div className="space-y-3">
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight tracking-[-0.04em]">
          {title}
        </h2>
        {description ? (
          <p className="max-w-2xl text-base leading-7 text-[var(--text-secondary)] sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
