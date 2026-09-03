export default function Founder() {
  return (
    <section id="founder" className="py-16 sm:py-24 border-t border-[var(--line-subtle)] scroll-mt-20">
      <div className="page-wrap">
        <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface-glass)] p-8 sm:p-12 lg:p-16 backdrop-blur-xl shadow-sm relative overflow-hidden">
          {/* Subtle background ambient glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.08),transparent_70%)]" />

          <div className="grid gap-10 lg:grid-cols-12 lg:items-center relative z-10">
            {/* Left: Founder Story (8 cols) */}
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--chip-bg)] px-3 py-1 text-xs font-mono text-indigo-400 mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                FOUNDER-LED ENGINEERING
              </div>

              <h2 className="display-title text-3xl sm:text-5xl font-extrabold text-[var(--sea-ink)] mb-2">
                Built by Jobi S S.
              </h2>
              <p className="mono-meta text-indigo-300 text-xs sm:text-sm mb-6">
                Founder · Systems Engineer · Independent Builder
              </p>

              <div className="space-y-4 text-sm sm:text-base text-[var(--sea-ink-soft)] leading-relaxed max-w-2xl">
                <p>
                  JoTech is independently designed, engineered, deployed and maintained by Jobi S S.
                </p>
                <p>
                  From backend systems and cloud infrastructure to AI-powered applications, JoTech is a place to turn ideas into useful software. No bloated management hierarchies, no fabricated agency case studies — just pure engineering craft, high ownership, and software shipped to production.
                </p>
              </div>

              {/* Founder CTA & External Profile */}
              <div className="mt-8 flex flex-wrap items-center gap-4 pt-4 border-t border-[var(--line-subtle)]">
                <a
                  href="https://jobiss.jotech.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 px-5 py-2.5 text-xs font-semibold text-white shadow-md shadow-indigo-600/20 transition-all duration-200"
                >
                  <span>Learn more about Jobi</span>
                  <span className="cta-arrow">→</span>
                </a>

                <a
                  href="https://github.com/jobiss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-[var(--line)] bg-[var(--surface)] hover:bg-[var(--surface-hover)] px-4 py-2.5 text-xs font-semibold text-[var(--sea-ink)] transition-colors"
                >
                  <span>GitHub</span>
                  <span className="text-[0.65rem] opacity-60">↗</span>
                </a>

                <a
                  href="https://linkedin.com/in/jobiss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-[var(--line)] bg-[var(--surface)] hover:bg-[var(--surface-hover)] px-4 py-2.5 text-xs font-semibold text-[var(--sea-ink)] transition-colors"
                >
                  <span>LinkedIn</span>
                  <span className="text-[0.65rem] opacity-60">↗</span>
                </a>
              </div>
            </div>

            {/* Right: Minimalist Engineering Identity Badge / Emblem (4 cols) */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-xs rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 text-center shadow-lg">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl border border-indigo-500/30 bg-gradient-to-br from-indigo-950 to-[#08090a] shadow-inner">
                  <span className="display-title font-extrabold text-2xl text-white tracking-tight">
                    JSS
                  </span>
                </div>

                <h3 className="display-title text-base font-bold text-[var(--sea-ink)]">
                  Jobi S S
                </h3>
                <p className="mono-meta text-[0.68rem] text-indigo-400 mt-0.5">
                  Full-Lifecycle Builder
                </p>

                <div className="mt-4 pt-4 border-t border-[var(--line-subtle)] space-y-2 text-left">
                  <div className="flex justify-between text-xs">
                    <span className="text-[var(--sea-ink-muted)]">Position:</span>
                    <span className="font-mono text-[var(--sea-ink)]">Independent Founder</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-[var(--sea-ink-muted)]">Core Focus:</span>
                    <span className="font-mono text-[var(--sea-ink)]">AI + Systems + Cloud</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-[var(--sea-ink-muted)]">Ecosystem:</span>
                    <span className="font-mono text-indigo-400">JoTech (India / Global)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
