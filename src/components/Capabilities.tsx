const CAPABILITIES = [
  {
    number: '01',
    title: 'Backend Systems',
    desc: 'Python, FastAPI, APIs, PostgreSQL, distributed systems and scalable backend architecture engineered for concurrency and data integrity.',
    techs: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Distributed Systems'],
  },
  {
    number: '02',
    title: 'AI & Automation',
    desc: 'AI applications, autonomous agents, LLM integrations, MCP (Model Context Protocol), intelligent workflows and end-to-end automation pipelines.',
    techs: [
      'MCP Protocol',
      'Autonomous Agents',
      'LLM Tooling',
      'RAG',
      'Vector Search',
    ],
  },
  {
    number: '03',
    title: 'Cloud & Infrastructure',
    desc: 'Production cloud deployments, Docker containerization, automated CI/CD, proactive telemetry monitoring, infrastructure and resilient servers.',
    techs: ['AWS', 'Google Cloud', 'Docker', 'Linux / VPS', 'CI/CD Pipelines'],
  },
  {
    number: '04',
    title: 'System Architecture',
    desc: 'Architecture design, latency and performance optimization, security hardening, reliability benchmarks and scalable application design.',
    techs: [
      'Performance Profiling',
      'Database Indexing',
      'Modular Contracts',
      'API Design',
    ],
  },
]

export default function Capabilities() {
  return (
    <section
      id="engineering"
      className="py-16 sm:py-24 border-t border-[var(--line-subtle)] scroll-mt-20"
    >
      <div className="page-wrap">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <p className="mono-meta text-indigo-600 dark:text-indigo-400 mb-2 font-semibold">
            Engineering Scope
          </p>
          <h2 className="display-title text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--sea-ink)] mb-4">
            What I build
          </h2>
          <p className="text-base text-[var(--sea-ink-soft)] leading-relaxed">
            Direct, specialized capabilities focused on system resilience,
            modern AI integrations, and high-performance backends.
          </p>
        </div>

        {/* 4 Compact Capability Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CAPABILITIES.map((cap, idx) => {
            const accents = [
              {
                text: 'text-indigo-600 dark:text-indigo-400',
                dot: 'bg-indigo-500',
              },
              {
                text: 'text-violet-600 dark:text-violet-400',
                dot: 'bg-violet-500',
              },
              { text: 'text-sky-600 dark:text-sky-400', dot: 'bg-sky-500' },
              { text: 'text-teal-600 dark:text-teal-400', dot: 'bg-teal-500' },
            ][idx % 4]

            return (
              <div
                key={cap.title}
                className="feature-card rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`mono-meta font-bold text-[0.75rem] ${accents.text}`}
                    >
                      {cap.number}
                    </span>
                    <span
                      className={`h-2 w-2 rounded-full ${accents.dot} shadow-xs`}
                    />
                  </div>

                  <h3 className="text-base font-bold text-[var(--sea-ink)] mb-2.5">
                    {cap.title}
                  </h3>

                  <p className="text-xs text-[var(--sea-ink-soft)] leading-relaxed mb-4">
                    {cap.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[var(--line-subtle)] flex flex-wrap gap-1.5">
                  {cap.techs.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-indigo-100/70 dark:border-[var(--line-subtle)] bg-indigo-50/50 dark:bg-[var(--chip-bg)] px-2 py-0.5 text-[0.62rem] font-mono text-slate-700 dark:text-[var(--sea-ink-muted)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
