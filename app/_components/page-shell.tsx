import type { ReactNode } from "react";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-[var(--bg)] text-[var(--text)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(78,161,255,0.16),_transparent_35%),linear-gradient(180deg,_rgba(13,18,26,0.45),_transparent_30%)]" />
      <div className="relative">{children}</div>
    </main>
  );
}
