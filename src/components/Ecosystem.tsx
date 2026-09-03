import { useState } from 'react'

interface NodeData {
  id: string
  name: string
  category: string
  status: string
  statusColor: string
  description: string
  url: string
  role?: string
}

const NODES: NodeData[] = [
  {
    id: 'weekly-planner',
    name: 'Weekly Planner',
    category: 'Productivity Application',
    status: 'ACTIVE',
    statusColor: 'bg-emerald-400',
    description:
      'Plan your week, organize priorities and focus on what actually matters without cognitive clutter.',
    url: 'https://weekly-planner.jotech.in/',
  },
  {
    id: 'pocketflow',
    name: 'PocketFlow',
    category: 'Personal Finance',
    status: 'ACTIVE',
    statusColor: 'bg-emerald-400',
    description:
      'Understand your money, track transactions and stay in control of your financial flow.',
    url: 'https://pocket-flow.jotech.in/',
  },
  {
    id: 'blog',
    name: 'JoTech Blog',
    category: 'Engineering Publication',
    status: 'CONTINUOUSLY DEVELOPED',
    statusColor: 'bg-indigo-400',
    description:
      'Practical notes on software architecture, backend engineering, AI and things being built at JoTech.',
    url: 'https://blog.jotech.in/',
  },
  {
    id: 'jobi',
    name: 'Jobi S S',
    category: 'Founder & Builder',
    status: 'SOLO ARCHITECT',
    statusColor: 'bg-violet-400',
    description:
      'Independent systems engineer, cloud architect, and founder behind the entire JoTech ecosystem.',
    url: 'https://jobiss.jotech.in/',
  },
]

export default function Ecosystem() {
  const [activeNode, setActiveNode] = useState<NodeData>(NODES[0])

  return (
    <section
      id="ecosystem"
      className="py-16 sm:py-24 border-t border-[var(--line-subtle)] scroll-mt-20"
    >
      <div className="page-wrap">
        {/* Section Heading */}
        <div className="max-w-2xl mb-12">
          <p className="mono-meta text-indigo-400 mb-2">
            Independent Constellation
          </p>
          <h2 className="display-title text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--sea-ink)] mb-4">
            One builder.
            <br />
            Multiple products.
          </h2>
          <p className="text-base text-[var(--sea-ink-soft)] leading-relaxed">
            JoTech is where products, experiments, engineering systems and ideas
            come together. Every node is engineered with purpose, zero corporate
            overhead, and continuous refinement.
          </p>
        </div>

        {/* Interactive Visualization Container */}
        <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface-glass)] p-6 sm:p-10 backdrop-blur-xl relative overflow-hidden shadow-sm">
          {/* Subtle background ambient mesh */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.06),transparent_70%)]" />

          <div className="grid gap-8 lg:grid-cols-12 lg:items-center relative z-10">
            {/* Constellation Nodes Interactive Area (7 cols) */}
            <div className="lg:col-span-7 flex flex-col items-center justify-center min-h-[340px] py-4">
              {/* Central Hub Node */}
              <div className="relative mb-8 sm:mb-12">
                <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl border border-indigo-500/40 bg-gradient-to-b from-indigo-950/80 to-[#101216] shadow-lg shadow-indigo-500/20">
                  <div className="text-center">
                    <span className="display-title block text-base font-extrabold text-white">
                      JO TECH
                    </span>
                    <span className="mono-meta block text-[0.58rem] text-indigo-300">
                      NEXUS
                    </span>
                  </div>
                </div>
                {/* Subtle pulse ring around central hub */}
                <div className="absolute -inset-2 rounded-2xl border border-indigo-500/20 animate-pulse pointer-events-none" />
              </div>

              {/* Connected Satellites Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-xl">
                {NODES.map((node) => {
                  const isSelected = activeNode.id === node.id
                  return (
                    <button
                      key={node.id}
                      type="button"
                      onClick={() => setActiveNode(node)}
                      onMouseEnter={() => setActiveNode(node)}
                      className={`group relative flex flex-col items-center justify-center rounded-xl border p-3.5 text-center transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? 'border-indigo-500/80 bg-indigo-950/40 shadow-md shadow-indigo-500/15 -translate-y-1'
                          : 'border-[var(--line)] bg-[var(--surface)] hover:border-[var(--line-strong)] hover:bg-[var(--surface-hover)]'
                      }`}
                      aria-label={`Inspect ${node.name}`}
                    >
                      <span className="flex items-center gap-1.5 mb-1.5">
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${node.statusColor}`}
                        />
                        <span className="mono-meta text-[0.6rem] text-[var(--sea-ink-muted)]">
                          {node.category.split(' ')[0]}
                        </span>
                      </span>

                      <span
                        className={`text-xs font-bold leading-snug ${isSelected ? 'text-white' : 'text-[var(--sea-ink)]'}`}
                      >
                        {node.name}
                      </span>
                    </button>
                  )
                })}
              </div>

              <p className="mono-meta text-[var(--sea-ink-muted)] mt-6 text-center text-[0.65rem]">
                Hover or click any node to inspect telemetry & details
              </p>
            </div>

            {/* Active Node Inspector Panel (5 cols) */}
            <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-[var(--line)] pt-6 lg:pt-0 lg:pl-8">
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="mono-meta text-[var(--sea-ink-muted)] text-[0.68rem]">
                  Telemetry Inspector
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--line)] bg-[var(--chip-bg)] px-2.5 py-0.5 text-[0.68rem] font-mono font-medium text-[var(--sea-ink)]">
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${activeNode.statusColor}`}
                  />
                  {activeNode.status}
                </span>
              </div>

              <h3 className="display-title text-2xl font-bold text-[var(--sea-ink)] mb-1">
                {activeNode.name}
              </h3>
              <p className="mono-meta text-indigo-400 mb-3 text-[0.72rem]">
                {activeNode.category}
              </p>

              <p className="text-sm text-[var(--sea-ink-soft)] leading-relaxed mb-6 min-h-[56px]">
                {activeNode.description}
              </p>

              <div className="pt-4 border-t border-[var(--line-subtle)] flex items-center justify-between">
                <a
                  href={activeNode.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[var(--surface-strong)] hover:bg-indigo-600 border border-[var(--line)] hover:border-indigo-500 px-4 py-2 text-xs font-semibold text-[var(--sea-ink)] hover:text-white transition-all duration-200 group"
                >
                  <span>Open {activeNode.name}</span>
                  <span className="cta-arrow text-indigo-400 group-hover:text-white">
                    →
                  </span>
                </a>

                <span className="mono-meta text-[0.62rem] text-[var(--sea-ink-muted)]">
                  {new URL(activeNode.url).hostname}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
