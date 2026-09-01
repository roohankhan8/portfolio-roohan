type SectionHeadingProps = {
  title: string;
  description?: string;
  align?: "left" | "center";
  align_description?: "left" | "center";
};

export function SectionHeading({
  title,
  description,
  align = "left",
  align_description = "left",
}: SectionHeadingProps) {
  const alignmentClass =
    align === "center" ? "items-center text-center" : "items-start text-left";
  const descriptionAlignmentClass =
    align_description === "center" ? "flex flex-col items-center" : "";

  return (
    <div className={`flex max-w-3xl flex-col gap-4 ${alignmentClass}`}>
      <div className={`space-y-3 ${descriptionAlignmentClass}`}>
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
