import { useState } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: HomePage })

function HomePage() {
  const [inquiryType, setInquiryType] = useState('Web Application')
  const [timeline, setTimeline] = useState('1-3 months')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <main className="page-wrap px-4 pb-16 pt-10 sm:pt-14">
      {/* Hero Section */}
      <section className="island-shell rise-in relative overflow-hidden rounded-[2.5rem] px-6 py-12 sm:px-12 sm:py-16">
        <div className="pointer-events-none absolute -left-20 -top-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(79,184,178,0.35),transparent_70%)]" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(47,106,74,0.22),transparent_70%)]" />

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--chip-line)] bg-[var(--chip-bg)] px-3 py-1 text-xs font-semibold text-[var(--sea-ink)] mb-4 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Modern Digital Engineering Studio
          </div>

          <h1 className="display-title mb-6 text-4xl leading-[1.06] font-extrabold tracking-tight text-[var(--sea-ink)] sm:text-6xl">
            Building software, cloud, and AI solutions that <span className="bg-gradient-to-r from-[var(--lagoon-deep)] to-[var(--palm)] bg-clip-text text-transparent">scale with speed</span>.
          </h1>

          <p className="mb-8 text-base leading-relaxed text-[var(--sea-ink-soft)] sm:text-xl">
            JoTech designs and engineers resilient digital systems. From high-throughput web applications to automated cloud infrastructure and intelligent workflows, we turn vision into production-ready software.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="rounded-full bg-[var(--sea-ink)] px-6 py-3 text-sm font-semibold text-white no-underline shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Start a Project &rarr;
            </Link>
            <Link
              to="/services"
              className="rounded-full border border-[rgba(50,143,151,0.3)] bg-[rgba(79,184,178,0.14)] px-6 py-3 text-sm font-semibold text-[var(--lagoon-deep)] no-underline transition hover:-translate-y-0.5 hover:bg-[rgba(79,184,178,0.24)]"
            >
              Explore Services
            </Link>
          </div>
        </div>

        {/* Live Metrics Grid */}
        <div className="relative z-10 mt-12 grid grid-cols-2 gap-4 border-t border-[var(--line)] pt-8 sm:grid-cols-4">
          <div>
            <div className="text-2xl font-black text-[var(--sea-ink)] sm:text-3xl">99.9%</div>
            <div className="text-xs font-medium text-[var(--sea-ink-soft)] uppercase tracking-wider mt-1">Uptime Reliability</div>
          </div>
          <div>
            <div className="text-2xl font-black text-[var(--sea-ink)] sm:text-3xl">&lt;100ms</div>
            <div className="text-xs font-medium text-[var(--sea-ink-soft)] uppercase tracking-wider mt-1">Target Latency</div>
          </div>
          <div>
            <div className="text-2xl font-black text-[var(--sea-ink)] sm:text-3xl">100%</div>
            <div className="text-xs font-medium text-[var(--sea-ink-soft)] uppercase tracking-wider mt-1">Type-Safe Stack</div>
          </div>
          <div>
            <div className="text-2xl font-black text-[var(--sea-ink)] sm:text-3xl">24/7</div>
            <div className="text-xs font-medium text-[var(--sea-ink-soft)] uppercase tracking-wider mt-1">Continuous Monitoring</div>
          </div>
        </div>
      </section>

      {/* Core Services Preview */}
      <section className="mt-14">
        <div className="mb-8 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
          <div>
            <p className="island-kicker mb-1">What We Deliver</p>
            <h2 className="display-title text-2xl font-bold tracking-tight text-[var(--sea-ink)] sm:text-3xl">
              End-to-end engineering excellence
            </h2>
          </div>
          <Link
            to="/services"
            className="text-sm font-semibold text-[var(--lagoon-deep)] hover:underline"
          >
            View all capabilities &rarr;
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: '⚡',
              title: 'Full-Stack Web Apps',
              desc: 'High-speed React, Vite, and SSR architectures engineered for instant responsiveness and peak SEO.',
            },
            {
              icon: '☁️',
              title: 'Cloud & DevOps',
              desc: 'Infrastructure as Code, zero-downtime CI/CD pipelines, and secure cloud management.',
            },
            {
              icon: '🤖',
              title: 'AI & Automation',
              desc: 'Empower your teams with intelligent agent workflows, LLM toolchains, and process automation.',
            },
            {
              icon: '🛡️',
              title: 'System Consulting',
              desc: 'Architectural blueprints, performance optimization, and legacy modernization for high-scale needs.',
            },
          ].map((service, index) => (
            <article
              key={service.title}
              className="island-shell feature-card rise-in rounded-2xl p-6 transition hover:-translate-y-1 hover:shadow-md"
              style={{ animationDelay: `${index * 80 + 60}ms` }}
            >
              <div className="mb-4 text-3xl">{service.icon}</div>
              <h3 className="mb-2 text-base font-bold text-[var(--sea-ink)]">
                {service.title}
              </h3>
              <p className="m-0 text-sm leading-relaxed text-[var(--sea-ink-soft)]">
                {service.desc}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Why Choose JoTech */}
      <section className="island-shell mt-14 rounded-2xl p-8 sm:p-12">
        <div className="max-w-2xl mb-8">
          <p className="island-kicker mb-2">The JoTech Philosophy</p>
          <h2 className="display-title text-2xl font-bold tracking-tight text-[var(--sea-ink)] sm:text-3xl">
            Engineered with craft, shipped with discipline.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--sea-ink-soft)] sm:text-base">
            We avoid bloat and fragile frameworks. Every application created by JoTech is built on battle-tested fundamentals, clean modular boundaries, and seamless scaling paths.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          <div className="rounded-xl border border-[var(--line)] bg-[var(--chip-bg)] p-5">
            <div className="font-bold text-[var(--sea-ink)] mb-2">01. Minimal & Clean</div>
            <p className="m-0 text-xs text-[var(--sea-ink-soft)] leading-relaxed">
              Lean dependencies and intentional architecture mean lightning load times and predictable maintainability.
            </p>
          </div>

          <div className="rounded-xl border border-[var(--line)] bg-[var(--chip-bg)] p-5">
            <div className="font-bold text-[var(--sea-ink)] mb-2">02. Modern Tooling</div>
            <p className="m-0 text-xs text-[var(--sea-ink-soft)] leading-relaxed">
              Built on React 19, TypeScript, TanStack Start, and modern styling for maximum developer velocity and UX delight.
            </p>
          </div>

          <div className="rounded-xl border border-[var(--line)] bg-[var(--chip-bg)] p-5">
            <div className="font-bold text-[var(--sea-ink)] mb-2">03. Growth Ready</div>
            <p className="m-0 text-xs text-[var(--sea-ink-soft)] leading-relaxed">
              Start with a lightweight footprint today, effortlessly scale to hundreds of routes and microservices tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Project Estimator / Inquiry Widget */}
      <section className="island-shell mt-14 rounded-2xl p-8 sm:p-12">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="island-kicker mb-2">Quick Consultation</p>
            <h2 className="display-title text-2xl font-bold tracking-tight text-[var(--sea-ink)] sm:text-3xl">
              Plan your next project with JoTech
            </h2>
            <p className="mt-3 text-sm text-[var(--sea-ink-soft)] leading-relaxed">
              Select what you are looking to build and drop your email. Our lead solutions architect will get back to you with an exploratory outline within 24 hours.
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-xs text-[var(--sea-ink-soft)]">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 font-bold">✓</span>
                No commitment or pushy sales calls
              </div>
              <div className="flex items-center gap-3 text-xs text-[var(--sea-ink-soft)]">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 font-bold">✓</span>
                Tailored architectural roadmap
              </div>
              <div className="flex items-center gap-3 text-xs text-[var(--sea-ink-soft)]">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 font-bold">✓</span>
                Direct access to senior engineering talent
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-[var(--line)] bg-[var(--surface-strong)] p-6 sm:p-8">
            {submitted ? (
              <div className="py-8 text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900 dark:text-emerald-300 text-xl font-bold">
                  ✓
                </div>
                <h3 className="text-lg font-bold text-[var(--sea-ink)]">Inquiry Received!</h3>
                <p className="mt-2 text-sm text-[var(--sea-ink-soft)]">
                  Thank you! We have received your request for <strong>{inquiryType}</strong> ({timeline}). We will reach out to <strong>{email}</strong> shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-5 text-xs font-semibold text-[var(--lagoon-deep)] hover:underline cursor-pointer"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[var(--sea-ink)] uppercase tracking-wider mb-2">
                    Project Focus
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {['Web Application', 'Cloud Infrastructure', 'AI Automation', 'System Advisory'].map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setInquiryType(type)}
                        className={`rounded-lg border px-3 py-2 text-xs font-medium transition cursor-pointer text-left ${
                          inquiryType === type
                            ? 'border-[var(--lagoon-deep)] bg-[rgba(79,184,178,0.18)] text-[var(--sea-ink)] font-bold'
                            : 'border-[var(--line)] bg-[var(--chip-bg)] text-[var(--sea-ink-soft)] hover:border-[var(--lagoon)]'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[var(--sea-ink)] uppercase tracking-wider mb-2">
                    Expected Timeline
                  </label>
                  <div className="flex gap-2">
                    {['< 1 month', '1-3 months', 'Flexible'].map((time) => (
                      <button
                        type="button"
                        key={time}
                        onClick={() => setTimeline(time)}
                        className={`flex-1 rounded-lg border px-3 py-1.5 text-xs font-medium transition cursor-pointer text-center ${
                          timeline === time
                            ? 'border-[var(--lagoon-deep)] bg-[rgba(79,184,178,0.18)] text-[var(--sea-ink)] font-bold'
                            : 'border-[var(--line)] bg-[var(--chip-bg)] text-[var(--sea-ink-soft)] hover:border-[var(--lagoon)]'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[var(--sea-ink)] uppercase tracking-wider mb-2">
                    Your Work Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-lg border border-[var(--line)] bg-[var(--chip-bg)] px-3.5 py-2 text-sm text-[var(--sea-ink)] placeholder-[var(--sea-ink-soft)] focus:border-[var(--lagoon)] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-[var(--sea-ink)] py-2.5 text-sm font-semibold text-white shadow transition hover:opacity-90 cursor-pointer"
                >
                  Request Consultation Roadmap
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
