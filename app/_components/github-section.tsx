import { githubSummaries } from "../_lib/portfolio-data";
import { SectionHeading } from "./section-heading";

export function GitHubSection() {
  return (
    <section className="section-block">
      <div className="container-shell space-y-10">
        <SectionHeading
          title="Public work that gives teams another way to evaluate how I build."
          description="Beyond the portfolio itself, these public channels help organizations review code presence, project consistency, and the kind of work I choose to share openly."
        />
        <div className="grid gap-4 lg:grid-cols-2">
          {githubSummaries.map((summary) => (
            <article
              key={summary.href}
              className="surface-panel rounded-[1.5rem] p-6"
            >
              <div className="flex items-start justify-between gap-6">
                <div className="space-y-3">
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--accent)]">
                    {summary.label}
                  </p>
                  <p className="text-sm leading-7 text-[var(--text-secondary)]">
                    {summary.note}
                  </p>
                </div>
                <a
                  href={summary.href}
                  target="_blank"
                  rel="noreferrer"
                  className="button-ghost inline-flex h-10 items-center justify-center rounded-xl px-4 text-sm font-medium"
                >
                  Visit
                </a>
              </div>
              <dl className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="rounded-2xl border border-[var(--border)] bg-[rgba(7,11,17,0.55)] p-4">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
                    Repos
                  </dt>
                  <dd className="mt-2 text-2xl font-semibold">{summary.repositories}</dd>
                </div>
                <div className="rounded-2xl border border-[var(--border)] bg-[rgba(7,11,17,0.55)] p-4">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
                    Stars
                  </dt>
                  <dd className="mt-2 text-2xl font-semibold">{summary.stars}</dd>
                </div>
                <div className="rounded-2xl border border-[var(--border)] bg-[rgba(7,11,17,0.55)] p-4">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
                    Followers
                  </dt>
                  <dd className="mt-2 text-2xl font-semibold">{summary.followers}</dd>
                </div>
                <div className="rounded-2xl border border-[var(--border)] bg-[rgba(7,11,17,0.55)] p-4">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
                    Following
                  </dt>
                  <dd className="mt-2 text-2xl font-semibold">{summary.following}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
