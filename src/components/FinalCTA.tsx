import { Link } from '@tanstack/react-router'

export default function FinalCTA() {
  const scrollToProducts = () => {
    const el = document.getElementById('products')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      history.pushState(null, '', '#products')
    }
  }

  return (
    <section className="py-16 sm:py-24 border-t border-[var(--line-subtle)]">
      <div className="page-wrap">
        <div className="rounded-3xl border border-indigo-100 dark:border-[var(--line)] bg-white/90 dark:bg-[var(--surface-glass)] p-8 sm:p-14 md:p-18 text-center relative overflow-hidden backdrop-blur-xl shadow-xl shadow-indigo-500/5">
          {/* Subtle Ambient Glows */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-[420px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.18),transparent_70%)] blur-2xl" />
          <div className="pointer-events-none absolute right-10 bottom-4 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(14,165,233,0.12),transparent_70%)] blur-xl" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="mono-meta text-indigo-600 dark:text-indigo-400 mb-4 inline-block font-semibold">
              START A CONVERSATION
            </span>

            <h2 className="display-title text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--sea-ink)] mb-4 leading-tight">
              Have something worth building?
            </h2>

            <p className="text-base sm:text-lg text-[var(--sea-ink-soft)] leading-relaxed mb-8 max-w-xl mx-auto">
              Tell me what you're trying to build. Let's figure out the
              architecture, scope and next step.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/35 transition-all duration-200 cursor-pointer hover:-translate-y-0.5"
              >
                <span>Let's build something</span>
                <span className="cta-arrow">→</span>
              </Link>

              <button
                type="button"
                onClick={scrollToProducts}
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--line)] bg-[var(--surface)] hover:bg-[var(--surface-hover)] px-6 py-3.5 text-sm font-semibold text-[var(--sea-ink)] transition-all duration-200 cursor-pointer hover:-translate-y-0.5"
              >
                <span>Explore JoTech</span>
                <span className="text-[var(--sea-ink-muted)]">↓</span>
              </button>
            </div>

            <p className="mono-meta text-[0.68rem] text-[var(--sea-ink-muted)] mt-8">
              Direct founder access · Zero agency bureaucracy · Architecture
              first
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
