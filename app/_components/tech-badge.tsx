import { createElement } from "react";
import { getTechIcon } from "../_lib/tech-icons";

type TechBadgeProps = {
  item: string;
  size?: "sm" | "md";
  className?: string;
  previewOnly?: boolean;
  showLabel?: boolean;
};

function BadgeIcon({ item, className }: { item: string; className: string }) {
  const Icon = getTechIcon(item);

  return Icon
    ? createElement(Icon, {
        "aria-hidden": "true",
        className,
      })
    : null;
}

export function TechBadge({
  item,
  size = "sm",
  className = "",
  previewOnly = false,
  showLabel = false,
}: TechBadgeProps) {
  const heightClass = size === "md" ? "h-11" : "h-10";
  const iconClass = size === "md" ? "h-[1.125rem] w-[1.125rem]" : "h-4 w-4";
  const textClass = size === "md" ? "text-xs tracking-[0.12em]" : "text-[11px] tracking-[0.14em]";
  const hasIcon = getTechIcon(item) !== null;
  const labelClass = hasIcon && !showLabel
    ? `max-w-0 overflow-hidden whitespace-nowrap pl-0 opacity-0 transition-all duration-300 ease-out group-hover/tech:max-w-40 group-hover/tech:pl-3 group-hover/tech:opacity-100 ${textClass}`
    : `${hasIcon ? "pl-2" : ""} ${textClass}`;
  const paddingClass = previewOnly && hasIcon
    ? "max-w-10 justify-start px-3 group-hover/tech:max-w-40 group-hover/tech:pr-4"
    : "px-4";

  return (
    <div
      title={item}
      aria-label={item}
      className={`group/tech inline-flex ${heightClass} items-center overflow-hidden rounded-full border border-[var(--border)] bg-[var(--chip-bg)] font-mono uppercase text-[var(--text-secondary)] shadow-[var(--chip-shadow)] transition-all duration-300 ease-out hover:border-[var(--accent)] hover:bg-[var(--accent-soft)] hover:text-[var(--text)] ${paddingClass} ${className}`}
    >
      <BadgeIcon item={item} className={`${iconClass} shrink-0`} />
      <span className={labelClass}>
        {item}
      </span>
    </div>
  );
}
