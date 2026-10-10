import type { ReactNode } from "react";
export function PageShell({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen overflow-x-clip bg-[var(--bg)] text-[var(--text)]">
      {children}
    </main>
  );
}
