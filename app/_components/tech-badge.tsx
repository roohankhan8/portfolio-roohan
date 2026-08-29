import { getTechIcon } from "../_lib/tech-icons";

type TechBadgeProps = {
  item: string;
  size?: "sm" | "md";
  className?: string;
};

export function TechBadge({ item, size = "sm", className = "" }: TechBadgeProps) {
  const Icon = getTechIcon(item);
  const heightClass = size === "md" ? "h-11" : "h-10";
  const iconClass = size === "md" ? "h-[1.125rem] w-[1.125rem]" : "h-4 w-4";
  const textClass = size === "md" ? "text-xs tracking-[0.12em]" : "text-[11px] tracking-[0.14em]";

  return (
    <div
      title={item}
      aria-label={item}
      className={`group inline-flex ${heightClass} items-center overflow-hidden rounded-full border border-[var(--border)] bg-[rgba(17,24,36,0.56)] px-4 font-mono uppercase text-[var(--text-secondary)] transition-all duration-300 ease-out hover:border-[var(--accent)] hover:bg-[var(--accent-soft)] hover:text-[var(--text)] ${className}`}
    >
      {Icon ? <Icon aria-hidden="true" className={`${iconClass} shrink-0`} /> : null}
      <span
        className={`max-w-0 overflow-hidden whitespace-nowrap pl-0 opacity-0 transition-all duration-300 ease-out group-hover:max-w-40 group-hover:pl-3 group-hover:opacity-100 ${textClass}`}
      >
        {item}
      </span>
    </div>
  );
}
