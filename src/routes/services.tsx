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
          'Explore JoTech engineering capabilities: Full-Stack React & Node Applications, Cloud Infrastructure & DevOps, AI Automation Workflows, and System Advisory.',
      },
    ],
  }),
  component: ServicesPage,
})

function ServicesPage() {
  const services = [
    {
      id: 'web',
      icon: '🚀',
      title: 'Full-Stack Application Development',
      badge: 'Core Competency',
      tagline: 'High-performance web apps built with modern React, TypeScript, and SSR.',
      features: [
        'Responsive, accessible, and fast web applications using React 19 and TanStack Router',
        'State-of-the-art server-side rendering (SSR) for instant time-to-interactive and strong SEO',
        'Custom interactive dashboards, administrative portals, and client-facing web tools',
        'Type-safe end-to-end APIs with rigorous validation and testing',
      ],
      technologies: ['React 19', 'TypeScript', 'TanStack Start', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    },
    {
      id: 'cloud',
      icon: '☁️',
      title: 'Cloud Infrastructure & DevOps',
      badge: 'High Reliability',
      tagline: 'Automated, resilient cloud platforms engineered for zero downtime.',
      features: [
        'Infrastructure as Code (IaC) with automated provisioning and reproducible environments',
        'Continuous Integration & Continuous Deployment (CI/CD) pipelines',
        'Edge computing and serverless architectures with near-zero latency globally',
        'Containerization and microservices orchestration with Docker and modern orchestrators',
      ],
      technologies: ['AWS', 'Cloudflare Workers', 'Docker', 'GitHub Actions', 'Terraform', 'Vercel / Nitro'],
    },
    {
      id: 'ai',
      icon: '🤖',
      title: 'AI Solutions & Workflow Automation',
      badge: 'Cutting Edge',
      tagline: 'Intelligent automation and generative AI integration tailored to your operations.',
      features: [
        'Autonomous agentic workflows that remove repetitive engineering and business tasks',
        'Retrieval-Augmented Generation (RAG) and semantic knowledge base search for internal data',
        'Custom LLM fine-tuning, prompt engineering, and guardrail validation',
        'Seamless integration with third-party tools, ERPs, CRMs, and messaging systems',
      ],
      technologies: ['LLM APIs', 'Vector Embeddings', 'Python', 'FastAPI', 'TanStack Intent'],
    },
    {
      id: 'advisory',
      icon: '🛡️',
      title: 'Architecture Advisory & Code Audits',
      badge: 'Strategic Value',
      tagline: 'Objective technical audits, performance tuning, and technical roadmapping.',
      features: [
        'Comprehensive codebase reviews for performance bottlenecks, security flaws, and tech debt',
        'Database optimization, query indexing, and schema design for heavy workloads',
        'Modernization strategies for legacy codebases transitioning to modern frameworks',
        'Engineering team coaching on clean code, automated testing, and CI best practices',
      ],
      technologies: ['Architecture Audits', 'Database Tuning', 'Security Hardening', 'Refactoring Plans'],
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
          At JoTech, we combine deep engineering rigor with modern aesthetics. Here is how we help businesses build robust, maintainable, and scalable software.
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
