import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      {
        title: 'About JoTech — Engineering Craft & Philosophy | Jobi S S',
      },
      {
        name: 'description',
        content:
          'Learn about JoTech and founder Jobi S S: our philosophy of craft over hype, sub-100ms performance, and rigorous software architecture.',
      },
    ],
  }),
  component: AboutPage,
})

function AboutPage() {
  const principles = [
    {
      title: 'Craft Over Hype',
      desc: 'We adopt technologies that solve real engineering problems with predictability, avoiding brittle churn and unneeded complexity.',
    },
    {
      title: 'Performance as a Feature',
      desc: 'Speed is user trust. We design applications that load instantly, respond with sub-100ms feedback, and conserve client resources.',
    },
    {
      title: 'Security & Type Safety',
      desc: 'Strict end-to-end type safety across client and server boundaries drastically minimizes runtime bugs and data inconsistency.',
    },
    {
      title: 'Built to Evolve',
      desc: 'Clean interfaces, modular routes, and decoupled services ensure that systems built today can expand smoothly tomorrow.',
    },
  ]

  return (
    <main className="page-wrap px-4 py-12">
      {/* Hero */}
      <section className="island-shell relative overflow-hidden rounded-3xl p-8 sm:p-12 mb-12">
        <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(79,184,178,0.22),transparent_70%)]" />
        <p className="island-kicker mb-2">About JoTech</p>
        <h1 className="display-title mb-4 text-3xl font-extrabold text-[var(--sea-ink)] sm:text-5xl">
          We engineer systems that help ambitious businesses thrive.
        </h1>
        <p className="max-w-2xl text-base text-[var(--sea-ink-soft)] leading-relaxed sm:text-lg">
          JoTech was founded with a singular purpose: to bring architectural clarity, modern developer velocity, and rigorous software craft to web applications and cloud services.
        </p>
      </section>

      {/* Story & Philosophy */}
      <section className="grid gap-8 md:grid-cols-2 mb-14">
        <div className="island-shell rounded-2xl p-6 sm:p-8">
          <h2 className="display-title text-xl font-bold text-[var(--sea-ink)] mb-3">
            Our Mission
          </h2>
          <p className="text-sm text-[var(--sea-ink-soft)] leading-relaxed mb-4">
            In an era where software stacks are increasingly fragmented, JoTech cuts through the noise. We believe software should be lean, delightful to interact with, and rock-solid under load.
          </p>
          <p className="text-sm text-[var(--sea-ink-soft)] leading-relaxed">
            Whether starting with a minimal, high-velocity prototype or modernizing an enterprise-grade platform, we engineer systems that teams love to maintain and scale.
          </p>
        </div>

        <div className="island-shell rounded-2xl p-6 sm:p-8">
          <h2 className="display-title text-xl font-bold text-[var(--sea-ink)] mb-3">
            The Modern Foundation
          </h2>
          <p className="text-sm text-[var(--sea-ink-soft)] leading-relaxed mb-4">
            This platform is built on modern full-stack primitives: <strong>TanStack Start</strong>, <strong>React 19</strong>, <strong>Vite</strong>, and <strong>Tailwind CSS</strong>.
          </p>
          <p className="text-sm text-[var(--sea-ink-soft)] leading-relaxed">
            By leveraging isomorphic execution, file-based routing, and progressive streaming, we achieve top-tier performance without sacrificing developer velocity.
          </p>
        </div>
      </section>

      {/* Core Principles */}
      <section className="island-shell rounded-2xl p-8 sm:p-12 mb-14">
        <div className="max-w-xl mb-8">
          <p className="island-kicker mb-2">How We Think</p>
          <h2 className="display-title text-2xl font-bold text-[var(--sea-ink)] sm:text-3xl">
            Our Core Principles
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {principles.map((principle) => (
            <div
              key={principle.title}
              className="rounded-xl border border-[var(--line)] bg-[var(--chip-bg)] p-6"
            >
              <h3 className="text-base font-bold text-[var(--sea-ink)] mb-2">
                {principle.title}
              </h3>
              <p className="m-0 text-sm text-[var(--sea-ink-soft)] leading-relaxed">
                {principle.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Ready to improve later banner */}
      <section className="island-shell rounded-2xl p-8 text-center sm:p-10 border border-[rgba(50,143,151,0.3)]">
        <h2 className="display-title text-xl font-bold text-[var(--sea-ink)] sm:text-2xl mb-2">
          Ready for continuous improvement
        </h2>
        <p className="max-w-xl mx-auto text-sm text-[var(--sea-ink-soft)] mb-6">
          This setup is designed for frictionless iterations. From adding authentication and persistent databases to deploying AI agent tools, JoTech's modular architecture expands with your vision.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-[var(--sea-ink)] px-6 py-2.5 text-sm font-semibold text-white no-underline transition hover:opacity-90"
        >
          Contact Our Engineering Team &rarr;
        </Link>
      </section>
    </main>
  )
}
