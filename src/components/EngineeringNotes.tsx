interface NoteItem {
  category: string
  title: string
  desc: string
  readTime: string
  date: string
  url: string
}

const NOTES: NoteItem[] = [
  {
    category: 'SYSTEM DESIGN',
    title: 'Designing Low-Latency Event-Driven Microservices with TanStack Start & Nitro',
    desc: 'Exploring real-world distributed architectures, idempotent event processing patterns, and resilient pipelines for horizontal scaling.',
    readTime: '6 min read',
    date: 'Aug 2026',
    url: 'https://blog.jotech.in/',
  },
  {
    category: 'AI ENGINEERING',
    title: 'Building Context-Aware MCP Servers with Python, FastAPI, and Structured Tools',
    desc: 'How to implement the Model Context Protocol (MCP) to safely expose private databases, execution runtimes, and local APIs to LLM agents.',
    readTime: '8 min read',
    date: 'Jul 2026',
    url: 'https://blog.jotech.in/',
  },
  {
    category: 'BACKEND',
    title: 'Pragmatic PostgreSQL Query Optimization & Indexing Strategies Under Load',
    desc: 'Tactical lessons on analyzing execution plans, composite B-Tree indexes, connection pooling with PgBouncer, and eliminating latency spikes.',
    readTime: '5 min read',
    date: 'Jun 2026',
    url: 'https://blog.jotech.in/',
  },
]

export default function EngineeringNotes() {
  return (
    <section className="py-16 sm:py-24 border-t border-[var(--line-subtle)]">
      <div className="page-wrap">
        {/* Header */}
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mono-meta text-indigo-400 mb-2">
              Field Notes & Architecture
            </p>
            <h2 className="display-title text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--sea-ink)]">
              From the engineering desk
            </h2>
            <p className="mt-3 text-base text-[var(--sea-ink-soft)] leading-relaxed">
              Things learned while building real systems. Deep dives into backend engineering, system design, and AI automation.
            </p>
          </div>

          <a
            href="https://blog.jotech.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--sea-ink)] hover:text-indigo-400 transition-colors group"
          >
            <span>Explore all engineering notes</span>
            <span className="cta-arrow text-indigo-400">→</span>
          </a>
        </div>

        {/* 3 Blog Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {NOTES.map((note) => (
            <a
              key={note.title}
              href={note.url}
              target="_blank"
              rel="noopener noreferrer"
              className="feature-card group rounded-2xl p-6 flex flex-col justify-between hover:border-indigo-500/40 transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="mono-meta text-indigo-400 font-semibold text-[0.68rem]">
                    {note.category}
                  </span>
                  <span className="mono-meta text-[0.62rem] text-[var(--sea-ink-muted)]">
                    {note.readTime}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[var(--sea-ink)] group-hover:text-indigo-300 transition-colors leading-snug mb-2.5">
                  {note.title}
                </h3>

                <p className="text-xs text-[var(--sea-ink-soft)] leading-relaxed mb-6">
                  {note.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-[var(--line-subtle)] flex items-center justify-between text-xs text-[var(--sea-ink-muted)]">
                <span className="font-mono text-[0.68rem]">{note.date}</span>
                <span className="cta-arrow text-indigo-400 font-semibold text-sm">→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
