import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/services')({
  head: () => ({
    meta: [
      {
        title: 'Engineering Capabilities — JoTech | Built by Jobi S S',
      },
      {
        name: 'description',
        content:
          'Explore JoTech engineering capabilities by founder Jobi S S: Python, FastAPI, distributed systems, AI integrations, MCP protocol, and cloud deployments.',
      },
    ],
  }),
  component: ServicesPage,
})

function ServicesPage() {
  const capabilities = [
    {
      id: 'backend',
      number: '01',
      title: 'Backend Systems & Distributed APIs',
      tagline: 'High-speed, type-safe backends built with Python, FastAPI, and PostgreSQL.',
      features: [
        'Robust REST & streaming APIs engineered with Python (FastAPI, Django, Flask)',
        'Scalable TypeScript / Node.js microservices with Express and ElysiaJS',
        'High-concurrency, low-latency compiled backends in Golang & Gin',
        'Database architecture, query tuning, and transactional integrity with PostgreSQL and Redis',
        'Strict end-to-end contracts with automated schema generation and validation',
      ],
      technologies: [
        'Python (FastAPI / Django)',
        'PostgreSQL',
        'Redis',
        'Golang Gin',
        'TypeScript',
      ],
    },
    {
      id: 'ai',
      number: '02',
      title: 'AI & MCP Agent Integrations',
      tagline: 'Custom Model Context Protocol (MCP) integrations, intelligent workflows and tools.',
      features: [
        'Model Context Protocol (MCP) server & client architectures connecting LLMs to private business data',
        'Autonomous agent toolchains, schema enforcement, and validation guardrails',
        'Production AI-powered workflows with semantic search, embeddings, and RAG pipelines',
        'Pragmatic AI automation that replaces repetitive workflows with deterministic tasks',
      ],
      technologies: [
        'Model Context Protocol (MCP)',
        'Autonomous Agents',
        'Python & FastAPI',
        'Vector Embeddings',
        'LLM Tool Calling',
      ],
    },
    {
      id: 'cloud',
      number: '03',
      title: 'Cloud Infrastructure & Deployments',
      tagline: 'Cost-effective, reliable infrastructure engineered across AWS, Google Cloud, and VPS hosting.',
      features: [
        'Amazon Web Services (AWS) deployment: EC2, ECS, Lambda, S3, RDS, and CloudFront CDN',
        'Google Cloud (GCloud) infrastructure: Cloud Run, Compute Engine, and secure IAM policies',
        'Cost-effective high-performance VPS setups on Contabo with Nginx reverse proxy',
        'Automated Docker CI/CD deployment pipelines with zero-downtime rollouts',
      ],
      technologies: [
        'AWS',
        'Google Cloud',
        'Contabo VPS',
        'Docker & Containers',
        'CI/CD Pipelines',
      ],
    },
    {
      id: 'architecture',
      number: '04',
      title: 'System Architecture & Performance Profiling',
      tagline: 'Pragmatic technical reviews, latency reduction, and architectural modernization.',
      features: [
        'Codebase audits identifying performance bottlenecks, security vulnerabilities, and tech debt',
        'PostgreSQL indexing strategies and memory optimization for heavy workloads',
        'Modernization roadmaps transitioning legacy monoliths to clean, modular frameworks',
        'One-on-one architecture consulting directly with founder Jobi S S',
      ],
      technologies: [
        'System Design',
        'Database Optimization',
        'Latency Profiling',
        'Clean Architecture',
      ],
    },
  ]

  return (
    <main className="page-wrap py-12 sm:py-20">
      {/* Header */}
      <section className="mb-14 max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--chip-bg)] px-3.5 py-1 text-xs font-mono text-indigo-400 mb-4">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
          DIRECT ENGINEERING EXPERTISE
        </div>
        <h1 className="display-title text-4xl sm:text-6xl font-extrabold tracking-tight text-[var(--sea-ink)] mb-6">
          What I build and engineer.
        </h1>
        <p className="text-base sm:text-lg text-[var(--sea-ink-soft)] leading-relaxed">
          No layers of account managers or outsourced junior teams. You work directly with founder and systems engineer <strong>Jobi S S</strong> to scope, architect, and ship high-performance software.
        </p>
      </section>

      {/* Capabilities List */}
      <div className="space-y-8 mb-16">
        {capabilities.map((cap) => (
          <article
            key={cap.id}
            id={cap.id}
            className="rounded-2xl border border-[var(--line)] bg-[var(--surface-glass)] p-6 sm:p-10 backdrop-blur-md"
          >
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="mono-meta text-indigo-400 font-semibold text-xs">
                {cap.number} · CAPABILITY
              </span>
              <span className="inline-flex items-center gap-1 text-[0.68rem] font-mono text-emerald-400 border border-emerald-500/20 bg-emerald-500/10 rounded-full px-2.5 py-0.5">
                ● Direct Founder Delivery
              </span>
            </div>

            <h2 className="display-title text-2xl sm:text-3xl font-bold text-[var(--sea-ink)] mb-2">
              {cap.title}
            </h2>
            <p className="text-sm font-semibold text-indigo-300 mb-6">
              {cap.tagline}
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mono-meta text-[var(--sea-ink-muted)] text-[0.68rem] mb-3">
                  Key Focus Areas
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[var(--sea-ink-soft)]">
                  {cap.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <span className="text-indigo-400 font-bold mt-0.5">›</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:pl-6 md:border-l border-[var(--line-subtle)] flex flex-col justify-between">
                <div>
                  <h3 className="mono-meta text-[var(--sea-ink-muted)] text-[0.68rem] mb-3">
                    Technologies & Primitives
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {cap.technologies.map((t) => (
                      <span
                        key={t}
                        className="rounded-lg border border-[var(--line-subtle)] bg-[var(--surface)] px-3 py-1.5 text-xs font-mono text-[var(--sea-ink)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[var(--line-subtle)]">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    <span>Discuss this scope with Jobi</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* CTA Footer */}
      <section className="rounded-2xl border border-[var(--line)] bg-[var(--surface-glass)] p-8 text-center backdrop-blur-md">
        <h2 className="display-title text-2xl font-bold text-[var(--sea-ink)] mb-2">
          Ready to architect something resilient?
        </h2>
        <p className="text-sm text-[var(--sea-ink-soft)] mb-6 max-w-md mx-auto">
          Share your requirements or architectural challenge with Jobi.
        </p>
        <Link
          to="/contact"
          className="rounded-xl bg-indigo-600 hover:bg-indigo-500 px-6 py-2.5 text-xs font-semibold text-white shadow-md shadow-indigo-600/20 transition"
        >
          Let's talk engineering →
        </Link>
      </section>
    </main>
  )
}
