import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: [
      {
        title: 'Contact Engineering — JoTech | Start a Project',
      },
      {
        name: 'description',
        content:
          'Connect directly with lead engineer Jobi S S to discuss web application engineering, cloud systems, AI workflows, or architectural advisory.',
      },
    ],
  }),
  component: ContactPage,
})

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Full-Stack Web App',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return
    setSubmitted(true)
  }

  const faqs = [
    {
      q: 'How quickly can JoTech kick off a new engagement?',
      a: 'Following our initial technical discovery session, we typically finalize scoping and begin active sprint development within 3 to 5 business days.',
    },
    {
      q: 'Can we improve and expand this setup later?',
      a: 'Absolutely. This setup is intentionally constructed with modular route separation and clean boundaries so that authentication, server functions, databases, and third-party APIs can be added seamlessly whenever you are ready.',
    },
    {
      q: 'Do you work with existing codebases or only new projects?',
      a: 'We do both! We routinely conduct architecture audits, refactor legacy systems, and integrate modern features alongside building brand new greenfield applications.',
    },
    {
      q: 'What are your support and SLA terms?',
      a: 'We provide comprehensive post-deployment support, SLA-backed uptime monitoring, and retainer options to ensure continuous performance and stability.',
    },
  ]

  return (
    <main className="page-wrap px-4 py-12">
      {/* Header */}
      <section className="island-shell relative overflow-hidden rounded-3xl p-8 sm:p-12 mb-12">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(79,184,178,0.22),transparent_70%)]" />
        <p className="island-kicker mb-2">Get in Touch</p>
        <h1 className="display-title mb-4 text-3xl font-extrabold text-[var(--sea-ink)] sm:text-5xl">
          Let’s discuss your next breakthrough.
        </h1>
        <p className="max-w-2xl text-base text-[var(--sea-ink-soft)] leading-relaxed sm:text-lg">
          Have an idea, need an architecture review, or looking to scale your engineering? Drop us a note and let’s explore how JoTech can accelerate your journey.
        </p>
      </section>

      <div className="grid gap-10 lg:grid-cols-3 mb-16">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <div className="island-shell rounded-2xl p-6 sm:p-10">
            <h2 className="display-title text-xl font-bold text-[var(--sea-ink)] mb-2">
              Send us a Message
            </h2>
            <p className="text-sm text-[var(--sea-ink-soft)] mb-6">
              Fill in your details below and an engineering lead will reply within 24 hours.
            </p>

            {submitted ? (
              <div className="rounded-xl border border-emerald-300 bg-emerald-50/70 p-8 text-center dark:border-emerald-800 dark:bg-emerald-950/40">
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-2xl text-emerald-600 dark:bg-emerald-900 dark:text-emerald-300 font-bold">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-[var(--sea-ink)]">Thank You, {formData.name}!</h3>
                <p className="mt-2 text-sm text-[var(--sea-ink-soft)] max-w-md mx-auto">
                  Your message regarding <strong>{formData.service}</strong> has been received. We’ll follow up with you at <strong>{formData.email}</strong> shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false)
                    setFormData({ name: '', email: '', company: '', service: 'Full-Stack Web App', message: '' })
                  }}
                  className="mt-6 rounded-full bg-[var(--sea-ink)] px-6 py-2 text-xs font-semibold text-white transition hover:opacity-90 cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold text-[var(--sea-ink)] uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-lg border border-[var(--line)] bg-[var(--chip-bg)] px-3.5 py-2.5 text-sm text-[var(--sea-ink)] placeholder-[var(--sea-ink-soft)] focus:border-[var(--lagoon)] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[var(--sea-ink)] uppercase tracking-wider mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-lg border border-[var(--line)] bg-[var(--chip-bg)] px-3.5 py-2.5 text-sm text-[var(--sea-ink)] placeholder-[var(--sea-ink-soft)] focus:border-[var(--lagoon)] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold text-[var(--sea-ink)] uppercase tracking-wider mb-2">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      placeholder="Acme Innovations"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full rounded-lg border border-[var(--line)] bg-[var(--chip-bg)] px-3.5 py-2.5 text-sm text-[var(--sea-ink)] placeholder-[var(--sea-ink-soft)] focus:border-[var(--lagoon)] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[var(--sea-ink)] uppercase tracking-wider mb-2">
                      Service of Interest
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full rounded-lg border border-[var(--line)] bg-[var(--chip-bg)] px-3.5 py-2.5 text-sm text-[var(--sea-ink)] focus:border-[var(--lagoon)] focus:outline-none"
                    >
                      <option value="Full-Stack Web App">Full-Stack Web Application</option>
                      <option value="Cloud Infrastructure">Cloud Infrastructure & DevOps</option>
                      <option value="AI Automation">AI Systems & Automation</option>
                      <option value="Architecture Consulting">Architecture Advisory & Audit</option>
                      <option value="Other">Other Custom Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[var(--sea-ink)] uppercase tracking-wider mb-2">
                    Project Overview or Inquiry *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about what you are building, key milestones, or specific requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-lg border border-[var(--line)] bg-[var(--chip-bg)] px-3.5 py-2.5 text-sm text-[var(--sea-ink)] placeholder-[var(--sea-ink-soft)] focus:border-[var(--lagoon)] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="rounded-lg bg-[var(--sea-ink)] px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:opacity-90 hover:shadow-lg cursor-pointer"
                >
                  Send Inquiry &rarr;
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
          <div className="island-shell rounded-2xl p-6">
            <h3 className="text-base font-bold text-[var(--sea-ink)] mb-4">
              Direct Contact
            </h3>
            <div className="space-y-3 text-sm text-[var(--sea-ink-soft)]">
              <div>
                <span className="block text-xs font-bold uppercase text-[var(--sea-ink)]">Inquiries</span>
                <a href="mailto:contact@jotech.dev" className="text-[var(--lagoon-deep)] hover:underline">
                  contact@jotech.dev
                </a>
              </div>
              <div>
                <span className="block text-xs font-bold uppercase text-[var(--sea-ink)]">Support</span>
                <a href="mailto:support@jotech.dev" className="text-[var(--lagoon-deep)] hover:underline">
                  support@jotech.dev
                </a>
              </div>
              <div>
                <span className="block text-xs font-bold uppercase text-[var(--sea-ink)]">Availability</span>
                <span>Monday &ndash; Friday, Global Coverage</span>
              </div>
            </div>
          </div>

          <div className="island-shell rounded-2xl p-6 border border-emerald-200 dark:border-emerald-900">
            <div className="flex items-center gap-2 mb-2">
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
              <span className="text-xs font-bold uppercase text-[var(--sea-ink)]">24h SLA Guarantee</span>
            </div>
            <p className="text-xs text-[var(--sea-ink-soft)] leading-relaxed m-0">
              We respect your time. All direct client inquiries receive an in-depth response from a senior engineer within 24 business hours.
            </p>
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <section className="island-shell rounded-2xl p-8 sm:p-12">
        <div className="max-w-2xl mb-8">
          <p className="island-kicker mb-2">FAQ</p>
          <h2 className="display-title text-2xl font-bold text-[var(--sea-ink)] sm:text-3xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index
            return (
              <div
                key={faq.q}
                className="rounded-xl border border-[var(--line)] bg-[var(--chip-bg)] overflow-hidden transition"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="flex w-full items-center justify-between p-5 text-left text-sm font-bold text-[var(--sea-ink)] cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <span className="text-lg transition-transform duration-200">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                {isOpen && (
                  <div className="border-t border-[var(--line)] px-5 py-4 text-xs sm:text-sm text-[var(--sea-ink-soft)] leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>
    </main>
  )
}
