import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: [
      {
        title: 'Connect with Jobi S S — JoTech Engineering',
      },
      {
        name: 'description',
        content:
          'Connect directly with founder and systems engineer Jobi S S to discuss web applications, AI automation, backend systems, or architectural roadmaps.',
      },
    ],
  }),
  component: ContactPage,
})

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    focus: 'Backend & APIs',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return
    setSubmitted(true)
  }

  return (
    <main className="page-wrap py-12 sm:py-20">
      {/* Header */}
      <section className="mb-14 max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--chip-bg)] px-3.5 py-1 text-xs font-mono text-indigo-400 mb-4">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
          DIRECT FOUNDER CHANNEL
        </div>
        <h1 className="display-title text-4xl sm:text-6xl font-extrabold tracking-tight text-[var(--sea-ink)] mb-6">
          Have something worth building?
        </h1>
        <p className="text-base sm:text-lg text-[var(--sea-ink-soft)] leading-relaxed">
          Tell me what you're trying to build. Let's figure out the architecture, scope and next step. No sales reps, no spam—you speak directly with <strong>Jobi S S</strong>.
        </p>
      </section>

      <div className="grid gap-10 lg:grid-cols-12 mb-16">
        {/* Contact Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface-glass)] p-6 sm:p-10 backdrop-blur-md">
            {submitted ? (
              <div className="py-12 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/20 text-indigo-400 text-2xl font-bold border border-indigo-500/40">
                  ✓
                </div>
                <h3 className="display-title text-2xl font-bold text-[var(--sea-ink)] mb-2">
                  Message Sent
                </h3>
                <p className="text-sm text-[var(--sea-ink-soft)] max-w-md mx-auto mb-6">
                  Thanks <strong>{formData.name}</strong>. I've received your inquiry regarding{' '}
                  <strong>{formData.focus}</strong> and will get back to you directly at{' '}
                  <strong>{formData.email}</strong>.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mono-meta text-xs font-semibold text-indigo-400 hover:text-indigo-300 cursor-pointer"
                >
                  Send another message →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block mono-meta text-xs text-[var(--sea-ink-muted)] mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Miller"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full rounded-xl border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--sea-ink)] placeholder-[var(--sea-ink-muted)] focus:border-indigo-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block mono-meta text-xs text-[var(--sea-ink-muted)] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@domain.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full rounded-xl border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--sea-ink)] placeholder-[var(--sea-ink-muted)] focus:border-indigo-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block mono-meta text-xs text-[var(--sea-ink-muted)] mb-2">
                    Project Focus
                  </label>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {[
                      'Backend & APIs',
                      'AI & MCP Tools',
                      'Cloud & DevOps',
                      'Full-Stack Web',
                      'Architecture Review',
                      'Other / General',
                    ].map((focus) => (
                      <button
                        type="button"
                        key={focus}
                        onClick={() => setFormData({ ...formData, focus })}
                        className={`rounded-lg border px-3 py-2 text-xs font-mono transition text-left cursor-pointer ${
                          formData.focus === focus
                            ? 'border-indigo-500 bg-indigo-950/50 text-white font-semibold'
                            : 'border-[var(--line-subtle)] bg-[var(--surface)] text-[var(--sea-ink-soft)] hover:border-[var(--line-strong)]'
                        }`}
                      >
                        {focus}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block mono-meta text-xs text-[var(--sea-ink-muted)] mb-2">
                    Message / Project Details
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe what you are trying to build, current challenges, or timeline..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full rounded-xl border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--sea-ink)] placeholder-[var(--sea-ink-muted)] focus:border-indigo-500 focus:outline-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-indigo-600 hover:bg-indigo-500 py-3.5 text-sm font-semibold text-white shadow-md shadow-indigo-600/20 transition-all duration-200 cursor-pointer hover:-translate-y-0.5"
                >
                  Send message to Jobi →
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Channels & Coordinates (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 sm:p-8">
            <span className="mono-meta text-indigo-400 mb-2 block">
              DIRECT REACH
            </span>
            <h3 className="display-title text-xl font-bold text-[var(--sea-ink)] mb-4">
              Direct Contact Details
            </h3>

            <div className="space-y-4 text-xs sm:text-sm">
              <div>
                <span className="mono-meta text-[0.62rem] text-[var(--sea-ink-muted)] block">
                  EMAIL
                </span>
                <a
                  href="mailto:contact@jotech.in"
                  className="font-mono text-[var(--sea-ink)] hover:text-indigo-400 transition"
                >
                  contact@jotech.in
                </a>
              </div>

              <div>
                <span className="mono-meta text-[0.62rem] text-[var(--sea-ink-muted)] block">
                  FOUNDER PORTFOLIO
                </span>
                <a
                  href="https://jobiss.jotech.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-indigo-400 hover:underline"
                >
                  jobiss.jotech.in ↗
                </a>
              </div>

              <div>
                <span className="mono-meta text-[0.62rem] text-[var(--sea-ink-muted)] block">
                  PUBLIC REPOSITORIES
                </span>
                <a
                  href="https://github.com/jobiss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[var(--sea-ink)] hover:text-indigo-400 transition"
                >
                  github.com/jobiss ↗
                </a>
              </div>

              <div>
                <span className="mono-meta text-[0.62rem] text-[var(--sea-ink-muted)] block">
                  PROFESSIONAL NETWORK
                </span>
                <a
                  href="https://linkedin.com/in/jobiss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[var(--sea-ink)] hover:text-indigo-400 transition"
                >
                  linkedin.com/in/jobiss ↗
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--line-subtle)] bg-[var(--surface-glass)] p-6 text-xs text-[var(--sea-ink-soft)] leading-relaxed">
            <span className="mono-meta text-emerald-400 mb-1 block">
              ● PROMPT RESPONSE
            </span>
            Messages are reviewed directly by Jobi S S, typically within 24 business hours. No outsourced screening.
          </div>
        </div>
      </div>
    </main>
  )
}
