export default function SEOContent() {
  return (
    <section className="py-16 sm:py-20 border-t border-[var(--line-subtle)]">
      <div className="page-wrap">
        <div className="max-w-3xl">
          <p className="mono-meta text-indigo-400 mb-2">
            Engineering Principles
          </p>
          <h2 className="display-title text-2xl sm:text-3xl font-bold text-[var(--sea-ink)] mb-4">
            Pragmatic software architecture for high-utility systems
          </h2>

          <div className="space-y-4 text-xs sm:text-sm text-[var(--sea-ink-soft)] leading-relaxed">
            <p>
              In modern software development, architectural simplicity is the greatest competitive advantage. At JoTech, software is engineered from first principles with strong foundations in <strong>Python backend development</strong>, <strong>FastAPI development</strong>, and robust relational modeling with PostgreSQL. Rather than layering premature microservices, systems are structured with clear domain boundaries, strong type safety, and predictable execution paths.
            </p>
            <p>
              As intelligent agent toolchains mature, <strong>AI application development</strong> and <strong>AI automation</strong> require deterministic guardrails. JoTech specializes in custom <strong>MCP integrations</strong> (Model Context Protocol), enabling language models to safely interface with operational databases, internal APIs, and production workflows without compromising data privacy.
            </p>
            <p>
              From responsive <strong>React applications</strong> and modern <strong>SaaS development</strong> to resilient <strong>cloud infrastructure</strong> and distributed <strong>backend engineering</strong>, every system is engineered to minimize cognitive overhead, maximize runtime throughput, and maintain sub-100ms user responsiveness.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
