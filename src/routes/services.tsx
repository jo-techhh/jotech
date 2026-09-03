import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/services')({
  head: () => ({
    meta: [
      {
        title: 'Engineering Services & Capabilities — JoTech',
      },
      {
        name: 'description',
        content:
          'Explore JoTech engineering capabilities: Python, Node.js, Golang, Angular, React, AI Solutions (MCP & ChatBots), and Cloud Deployment in AWS, Google Cloud, and Contabo.',
      },
    ],
  }),
  component: ServicesPage,
})

function ServicesPage() {
  const services = [
    {
      id: 'web',
      icon: '⚡',
      title: 'Full-Stack & Backend Engineering',
      badge: 'Core Competency',
      tagline: 'High-performance web and backend architectures built across Python, Node.js, Golang, Angular, and React.',
      features: [
        'Robust backend services and REST/GraphQL APIs engineered with Python (Django, FastAPI, Flask, and custom Python frameworks)',
        'Scalable Node.js & TypeScript microservices built with Express, NestJS, and ultra-fast ElysiaJS',
        'High-concurrency, low-latency compiled backends engineered with Golang and Gin',
        'Dynamic, responsive single-page applications and interactive portals crafted in Angular and React',
        'Type-safe end-to-end client-server contracts with rigorous validation, testing, and caching',
      ],
      technologies: [
        'Python (Django / FastAPI / Flask)',
        'Node.js (NestJS / Express / ElysiaJS)',
        'Golang (Gin)',
        'Angular',
        'React',
        'TypeScript',
        'PostgreSQL / Redis',
      ],
    },
    {
      id: 'ai',
      icon: '🤖',
      title: 'AI Solutions, MCP & Intelligent Applications',
      badge: 'Next-Gen AI',
      tagline: 'Model Context Protocol (MCP) integrations, conversational chatbots, and custom AI-powered applications.',
      features: [
        'Custom Model Context Protocol (MCP) server & client architectures connecting LLMs directly to your business data and tools',
        'Intelligent conversational AI & ChatBots engineered for customer interaction, support, and internal workflow co-pilots',
        'Production-ready AI-powered applications featuring semantic search, vector embeddings, and Retrieval-Augmented Generation (RAG)',
        'Autonomous agent toolchains, prompt engineering, validation guardrails, and enterprise LLM integrations',
      ],
      technologies: [
        'MCP (Model Context Protocol)',
        'AI ChatBots & Copilots',
        'AI-Powered Applications',
        'Python & FastAPI',
        'Vector Databases & RAG',
        'Autonomous Agents',
      ],
    },
    {
      id: 'cloud',
      icon: '☁️',
      title: 'Cloud Infrastructure & Deployment Solutions',
      badge: 'Zero-Downtime Reliability',
      tagline: 'Resilient production deployments and infrastructure across AWS, Google Cloud, and Contabo VPS.',
      features: [
        'Amazon Web Services (AWS) deployment: EC2, ECS, Lambda serverless, S3, RDS, and CloudFront CDN',
        'Google Cloud (GCloud) infrastructure setup: Cloud Run, Compute Engine, GKE Kubernetes, and IAM security',
        'Cost-effective, high-performance VPS hosting, bare-metal server setup, and clustering on Contabo VPS',
        'Automated CI/CD deployment pipelines with Docker containerization, Nginx reverse proxy, and zero-downtime rollouts',
      ],
      technologies: [
        'AWS (Amazon Web Services)',
        'Google Cloud (GCloud)',
        'Contabo VPS',
        'Docker & Containers',
        'CI/CD Pipelines',
        'Nginx & Cloudflare',
      ],
    },
    {
      id: 'advisory',
      icon: '🛡️',
      title: 'Architecture Advisory & Code Audits',
      badge: 'Strategic Value',
      tagline: 'Objective technical audits, performance tuning, and technical roadmapping for scalable systems.',
      features: [
        'Comprehensive codebase reviews for performance bottlenecks, security flaws, and tech debt',
        'Database optimization, query indexing, and schema design for heavy production workloads',
        'Modernization strategies for legacy codebases transitioning to modern Python, Node, Go, or Angular/React stacks',
        'Engineering team coaching on clean architecture, automated testing, and CI/CD best practices',
      ],
      technologies: [
        'System Architecture',
        'Database Optimization',
        'Security Hardening',
        'Legacy Modernization',
      ],
    },
  ]

  const techStackMatrix = [
    {
      category: 'Backend Engineering',
      icon: '⚙️',
      color: 'from-blue-500/10 to-indigo-500/10 border-blue-500/20',
      badge: 'Python • Node • Go',
      items: [
        { name: 'Python', desc: 'Django, FastAPI, Flask & any Python framework' },
        { name: 'JavaScript / Node.js', desc: 'Express, NestJS, and ultra-fast ElysiaJS' },
        { name: 'Golang', desc: 'High-throughput Gin web services & microservices' },
      ],
    },
    {
      category: 'Frontend Development',
      icon: '💻',
      color: 'from-cyan-500/10 to-blue-500/10 border-cyan-500/20',
      badge: 'Angular • React',
      items: [
        { name: 'Angular', desc: 'Enterprise-grade SPAs, reactive forms & state architecture' },
        { name: 'React', desc: 'Modern React 19, Vite, Next.js / TanStack Start' },
        { name: 'TypeScript & Styling', desc: 'Strict end-to-end typing, Tailwind CSS & clean design' },
      ],
    },
    {
      category: 'AI Solutions & Applications',
      icon: '🤖',
      color: 'from-purple-500/10 to-pink-500/10 border-purple-500/20',
      badge: 'MCP • ChatBots • AI Apps',
      items: [
        { name: 'MCP (Model Context Protocol)', desc: 'Standardized tools & context bridges connecting LLMs to data' },
        { name: 'AI ChatBots & Agents', desc: 'Custom conversational bots for support, sales, and internal workflows' },
        { name: 'AI-Powered Applications', desc: 'Semantic search, RAG pipelines, and intelligent automation' },
      ],
    },
    {
      category: 'Deployment & Cloud Solutions',
      icon: '☁️',
      color: 'from-emerald-500/10 to-teal-500/10 border-emerald-500/20',
      badge: 'AWS • GCloud • Contabo',
      items: [
        { name: 'AWS (Amazon Web Services)', desc: 'EC2, ECS, Lambda, S3, RDS, CloudFront & VPC networking' },
        { name: 'Google Cloud (GCloud)', desc: 'Cloud Run, Compute Engine, GKE & IAM security' },
        { name: 'Contabo VPS Hosting', desc: 'High-compute VPS servers, Docker clustering & Linux administration' },
      ],
    },
  ]

  const engagementModels = [
    {
      title: 'Sprint-Based Delivery',
      desc: 'Ideal for scoped projects, MVPs, and specific feature milestones with predictable sprints and clear deliverables.',
    },
    {
      title: 'Dedicated Engineering Pod',
      desc: 'An embedded senior team of engineers working closely with your leadership to build and scale your core product.',
    },
    {
      title: 'Technical Advisory & Audit',
      desc: 'On-demand architectural review, code inspections, and advisory sessions for CTOs and founders.',
    },
  ]

  return (
    <main className="page-wrap px-4 py-12">
      {/* Header */}
      <section className="island-shell relative overflow-hidden rounded-3xl p-8 sm:p-12 mb-12">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(79,184,178,0.25),transparent_70%)]" />
        <p className="island-kicker mb-2">Our Capabilities</p>
        <h1 className="display-title mb-4 text-3xl font-extrabold text-[var(--sea-ink)] sm:text-5xl">
          Engineered solutions for ambitious products.
        </h1>
        <p className="max-w-2xl text-base text-[var(--sea-ink-soft)] leading-relaxed sm:text-lg">
          At JoTech, we engineer resilient software across Python, Node.js, Golang, Angular, React, cutting-edge AI (MCP & ChatBots), and multi-cloud deployments in AWS, Google Cloud, and Contabo.
        </p>
      </section>

      {/* Services List */}
      <section className="space-y-8">
        {services.map((service, index) => (
          <article
            key={service.id}
            className="island-shell rise-in rounded-2xl p-6 sm:p-10 transition hover:shadow-lg"
            style={{ animationDelay: `${index * 90}ms` }}
          >
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{service.icon}</span>
                <h2 className="display-title text-xl font-bold text-[var(--sea-ink)] sm:text-2xl">
                  {service.title}
                </h2>
              </div>
              <span className="rounded-full border border-[var(--chip-line)] bg-[var(--chip-bg)] px-3 py-1 text-xs font-semibold text-[var(--lagoon-deep)]">
                {service.badge}
              </span>
            </div>

            <p className="text-sm font-medium text-[var(--sea-ink-soft)] mb-6 sm:text-base">
              {service.tagline}
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--sea-ink)] mb-3">
                  Key Capabilities
                </h3>
                <ul className="space-y-2.5 text-sm text-[var(--sea-ink-soft)]">
                  {service.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--sea-ink)] mb-3">
                  Technologies & Standards
                </h3>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-[var(--line)] bg-[var(--chip-bg)] px-2.5 py-1 text-xs font-medium text-[var(--sea-ink)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Technology Stack Matrix */}
      <section className="mt-16">
        <div className="max-w-2xl mb-8">
          <p className="island-kicker mb-2">Technology Ecosystem</p>
          <h2 className="display-title text-2xl font-bold text-[var(--sea-ink)] sm:text-3xl">
            Our Core Technology Stack
          </h2>
          <p className="mt-2 text-sm text-[var(--sea-ink-soft)]">
            Proven engineering technologies we deploy to solve real-world system challenges with speed and stability.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {techStackMatrix.map((block) => (
            <div
              key={block.category}
              className={`island-shell rounded-2xl p-6 sm:p-8 bg-gradient-to-br ${block.color} border transition hover:shadow-md`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <span className="text-2xl">{block.icon}</span>
                  <h3 className="text-lg font-bold text-[var(--sea-ink)]">{block.category}</h3>
                </div>
                <span className="rounded-full border border-[var(--chip-line)] bg-[var(--chip-bg)] px-2.5 py-0.5 text-[0.7rem] font-bold text-[var(--lagoon-deep)]">
                  {block.badge}
                </span>
              </div>

              <div className="space-y-3 mt-4">
                {block.items.map((item) => (
                  <div key={item.name} className="rounded-xl border border-[var(--line)] bg-[var(--chip-bg)]/80 p-3.5 backdrop-blur-xs">
                    <p className="text-sm font-bold text-[var(--sea-ink)] mb-0.5">{item.name}</p>
                    <p className="text-xs text-[var(--sea-ink-soft)] m-0 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Engagement Models */}
      <section className="island-shell mt-16 rounded-2xl p-8 sm:p-12">
        <div className="max-w-2xl mb-8">
          <p className="island-kicker mb-2">Flexible Collaboration</p>
          <h2 className="display-title text-2xl font-bold text-[var(--sea-ink)] sm:text-3xl">
            How we partner with you
          </h2>
          <p className="mt-2 text-sm text-[var(--sea-ink-soft)]">
            Every team operates differently. We offer transparent, structured engagement models to match your velocity and budget.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {engagementModels.map((model) => (
            <div
              key={model.title}
              className="rounded-xl border border-[var(--line)] bg-[var(--chip-bg)] p-6"
            >
              <h3 className="text-base font-bold text-[var(--sea-ink)] mb-2">
                {model.title}
              </h3>
              <p className="m-0 text-xs leading-relaxed text-[var(--sea-ink-soft)]">
                {model.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="mt-14 rounded-2xl bg-gradient-to-r from-[var(--sea-ink)] to-[var(--lagoon-deep)] p-8 text-center text-white sm:p-12 shadow-md">
        <h2 className="text-2xl font-black sm:text-3xl">Have a specific challenge in mind?</h2>
        <p className="mx-auto mt-2 max-w-xl text-sm text-emerald-100 opacity-90 sm:text-base">
          Let’s discuss your technical goals, review requirements, and craft a bespoke delivery strategy.
        </p>
        <Link
          to="/contact"
          className="mt-6 inline-block rounded-full bg-white px-8 py-3 text-sm font-bold text-[var(--sea-ink)] no-underline shadow transition hover:bg-emerald-50 hover:scale-105"
        >
          Book a Discovery Session
        </Link>
      </section>
    </main>
  )
}
