import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      {
        title: 'About JoTech — Built Independently by Jobi S S',
      },
      {
        name: 'description',
        content:
          'Learn about the JoTech philosophy: an independent software ecosystem built by Jobi S S, prioritizing craft, system reliability, and practical software products.',
      },
    ],
  }),
  component: AboutPage,
})

function AboutPage() {
  const principles = [
    {
      number: '01',
      title: 'Craft Over Hype',
      desc: 'Adopting technologies that solve real engineering problems with predictability, avoiding brittle churn and unneeded dependencies.',
    },
    {
      number: '02',
      title: 'Performance as a Core Feature',
      desc: 'Speed builds user trust. Applications are engineered to load instantly, respond with sub-100ms feedback, and conserve memory.',
    },
    {
      number: '03',
      title: 'End-to-End Type Safety',
      desc: 'Strict end-to-end contracts across backend APIs and frontend clients minimize runtime bugs and ensure rock-solid data integrity.',
    },
    {
      number: '04',
      title: 'One-Person Builder Velocity',
      desc: 'No corporate meetings, no bloated management overhead. Direct accountability from system architecture to production deployment.',
    },
  ]

  return (
    <main className="page-wrap py-12 sm:py-20">
      {/* Hero Header */}
      <section className="mb-14 max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--chip-bg)] px-3.5 py-1 text-xs font-mono text-indigo-400 mb-4">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
          INDEPENDENT BUILDER PHILOSOPHY
        </div>
        <h1 className="display-title text-4xl sm:text-6xl font-extrabold tracking-tight text-[var(--sea-ink)] mb-6">
          Software built with craft, discipline, and purpose.
        </h1>
        <p className="text-base sm:text-lg text-[var(--sea-ink-soft)] leading-relaxed">
          JoTech was created by <strong>Jobi S S</strong> to explore modern engineering, build practical products like Weekly Planner and PocketFlow, and share transparent technical lessons from production systems.
        </p>
      </section>

      {/* Story Grid */}
      <section className="grid gap-8 md:grid-cols-2 mb-16">
        <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface-glass)] p-6 sm:p-8 backdrop-blur-md">
          <span className="mono-meta text-indigo-400 mb-2 block">
            THE STORY
          </span>
          <h2 className="display-title text-xl font-bold text-[var(--sea-ink)] mb-3">
            Why JoTech exists
          </h2>
          <p className="text-xs sm:text-sm text-[var(--sea-ink-soft)] leading-relaxed mb-4">
            In an era where modern software is often bloated, slow, and buried beneath corporate committees, JoTech cuts through the noise. It is a personal digital workshop where ideas are rapidly prototyped, hardened, and deployed to production.
          </p>
          <p className="text-xs sm:text-sm text-[var(--sea-ink-soft)] leading-relaxed">
            Every product in the ecosystem is built to solve actual problems—whether that means organizing a busy week or monitoring financial flows without giving away your privacy.
          </p>
        </div>

        <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface-glass)] p-6 sm:p-8 backdrop-blur-md">
          <span className="mono-meta text-indigo-400 mb-2 block">
            THE ARCHITECTURE
          </span>
          <h2 className="display-title text-xl font-bold text-[var(--sea-ink)] mb-3">
            Built on solid foundations
          </h2>
          <p className="text-xs sm:text-sm text-[var(--sea-ink-soft)] leading-relaxed mb-4">
            The platform is built on modern primitives: <strong>TanStack Start</strong>, <strong>React 19</strong>, <strong>TypeScript</strong>, and <strong>Tailwind CSS</strong>. Backends are powered by <strong>Python (FastAPI / Django)</strong>, <strong>PostgreSQL</strong>, and Dockerized cloud microservices.
          </p>
          <p className="text-xs sm:text-sm text-[var(--sea-ink-soft)] leading-relaxed">
            By leveraging isomorphic execution, file-based routing, and progressive hydration, applications achieve instantaneous page loads and predictable reliability.
          </p>
        </div>
      </section>

      {/* Core Principles */}
      <section className="mb-16">
        <div className="max-w-xl mb-8">
          <p className="mono-meta text-indigo-400 mb-2">Core Values</p>
          <h2 className="display-title text-2xl sm:text-3xl font-bold text-[var(--sea-ink)]">
            Engineering Principles
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {principles.map((principle) => (
            <div
              key={principle.title}
              className="rounded-xl border border-[var(--line)] bg-[var(--surface)] p-6"
            >
              <span className="mono-meta text-indigo-400 font-bold block mb-2 text-xs">
                {principle.number}
              </span>
              <h3 className="text-base font-bold text-[var(--sea-ink)] mb-2">
                {principle.title}
              </h3>
              <p className="m-0 text-xs text-[var(--sea-ink-soft)] leading-relaxed">
                {principle.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Founder Direct CTA */}
      <section className="rounded-2xl border border-[var(--line)] bg-[var(--surface-glass)] p-8 text-center backdrop-blur-md">
        <h2 className="display-title text-2xl font-bold text-[var(--sea-ink)] mb-2">
          Want to discuss architecture or collaborate?
        </h2>
        <p className="text-sm text-[var(--sea-ink-soft)] mb-6 max-w-md mx-auto">
          Connect directly with founder Jobi S S to discuss systems engineering, AI integrations, or custom product builds.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/contact"
            className="rounded-xl bg-indigo-600 hover:bg-indigo-500 px-6 py-2.5 text-xs font-semibold text-white shadow-md shadow-indigo-600/20 transition"
          >
            Get in touch →
          </Link>
          <a
            href="https://jobiss.jotech.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-[var(--line)] bg-[var(--surface)] hover:bg-[var(--surface-hover)] px-5 py-2.5 text-xs font-semibold text-[var(--sea-ink)] transition"
          >
            Jobi's Portfolio ↗
          </a>
        </div>
      </section>
    </main>
  )
}
