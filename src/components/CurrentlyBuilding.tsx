interface BuildingItem {
  name: string
  category: string
  status: 'ACTIVE' | 'EXPLORING' | 'MAINTAINED'
  activity: string
  version?: string
}

const ITEMS: BuildingItem[] = [
  {
    name: 'Weekly Planner',
    category: 'Productivity Application',
    status: 'ACTIVE',
    activity: 'Deep-work calendar integrations & keyboard shortcuts engine',
    version: 'v1.4.2',
  },
  {
    name: 'PocketFlow',
    category: 'Personal Finance',
    status: 'ACTIVE',
    activity: 'Multi-currency ledger & client-side encrypted storage',
    version: 'v1.1.0',
  },
  {
    name: 'JoTech Blog',
    category: 'Technical Publication',
    status: 'ACTIVE',
    activity: 'System design essays & Model Context Protocol (MCP) guides',
    version: 'Published weekly',
  },
  {
    name: 'New Experiments',
    category: 'Autonomous AI & Agents',
    status: 'EXPLORING',
    activity: 'Local LLM tool orchestration, MCP agents, and automated test runners',
    version: 'Lab phase',
  },
]

export default function CurrentlyBuilding() {
  return (
    <section className="py-12 sm:py-16 border-t border-[var(--line-subtle)]">
      <div className="page-wrap">
        <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface-glass)] p-6 sm:p-8 backdrop-blur-md">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-5 border-b border-[var(--line-subtle)]">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="status-beacon">
                  <span className="status-beacon-ping" />
                  <span className="status-beacon-dot" />
                </span>
                <h3 className="display-title text-lg sm:text-xl font-bold text-[var(--sea-ink)]">
                  Currently building
                </h3>
              </div>
              <p className="text-xs text-[var(--sea-ink-soft)]">
                JoTech is always evolving. Continuous engineering iterations and live deployments.
              </p>
            </div>

            <div className="mono-meta text-[0.68rem] text-[var(--sea-ink-muted)] self-start sm:self-auto bg-[var(--chip-bg)] border border-[var(--line)] rounded-lg px-3 py-1">
              LIVE TELEMETRY BOARD
            </div>
          </div>

          {/* Compact Engineering Board Grid */}
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {ITEMS.map((item) => {
              const isExploring = item.status === 'EXPLORING'
              return (
                <div
                  key={item.name}
                  className="rounded-xl border border-[var(--line-subtle)] bg-[var(--surface)] p-4 hover:border-[var(--line-strong)] transition-all duration-200"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="mono-meta text-[0.62rem] text-[var(--sea-ink-muted)]">
                      {item.category}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[0.62rem] font-mono font-semibold ${
                        isExploring
                          ? 'border border-violet-500/30 bg-violet-500/10 text-violet-300'
                          : 'border border-emerald-500/30 bg-emerald-500/10 text-emerald-300'
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          isExploring ? 'bg-violet-400' : 'bg-emerald-400'
                        }`}
                      />
                      {item.status}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-[var(--sea-ink)] mb-1">
                    {item.name}
                  </h4>

                  <p className="text-xs text-[var(--sea-ink-soft)] line-clamp-2 leading-relaxed mb-3">
                    {item.activity}
                  </p>

                  <div className="pt-2 border-t border-[var(--line-subtle)] flex items-center justify-between mono-meta text-[0.6rem] text-[var(--sea-ink-muted)]">
                    <span>STATUS: {item.version}</span>
                    <span className="text-indigo-400 font-mono">● LIVE</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
