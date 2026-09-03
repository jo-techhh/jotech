const TECHNOLOGIES = [
  { name: 'Python', role: 'Backend / Data' },
  { name: 'FastAPI', role: 'High-Speed APIs' },
  { name: 'React', role: 'Interfaces' },
  { name: 'TypeScript', role: 'Type Safety' },
  { name: 'PostgreSQL', role: 'Relational DB' },
  { name: 'Docker', role: 'Containers' },
  { name: 'Cloud & VPS', role: 'Infrastructure' },
  { name: 'AI / LLMs', role: 'MCP & Workflows' },
]

export default function TechnologyStack() {
  return (
    <section className="py-12 sm:py-16 border-t border-[var(--line-subtle)]">
      <div className="page-wrap">
        <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface-glass)] p-6 sm:p-8 backdrop-blur-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <p className="mono-meta text-indigo-400 mb-1">
                Engineering Stack
              </p>
              <h3 className="display-title text-xl sm:text-2xl font-bold text-[var(--sea-ink)]">
                Built with modern engineering fundamentals.
              </h3>
            </div>
            <span className="mono-meta text-[0.68rem] text-[var(--sea-ink-muted)] self-start sm:self-auto">
              PRAGMATIC · BATTLE-TESTED
            </span>
          </div>

          {/* Monochrome Badges Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
            {TECHNOLOGIES.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center justify-center rounded-xl border border-[var(--line-subtle)] bg-[var(--surface)] p-3 text-center transition-all hover:border-[var(--line-strong)] hover:bg-[var(--surface-hover)]"
              >
                <span className="text-xs font-bold text-[var(--sea-ink)] tracking-tight">
                  {tech.name}
                </span>
                <span className="mono-meta text-[0.58rem] text-[var(--sea-ink-muted)] mt-0.5">
                  {tech.role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
