import type { ReactNode } from "react";
import { ScrollOrbitBackground } from "./scroll-orbit-background";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-[var(--bg)] text-[var(--text)]">
      <ScrollOrbitBackground />
      <div className="page-shell-overlay pointer-events-none absolute inset-0" />
      <div className="relative">{children}</div>
    </main>
  );
}
