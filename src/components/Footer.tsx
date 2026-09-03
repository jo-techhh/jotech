import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="mt-28 border-t border-[var(--line)] bg-[var(--bg-subtle)]/60 px-4 pb-14 pt-16 text-[var(--sea-ink-soft)]">
      <div className="page-wrap">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-5 pb-12 border-b border-[var(--line)]">
          {/* Brand Info */}
          <div className="md:col-span-2">
            <div className="mb-3">
              <Logo size="md" showText={true} />
            </div>
            <p className="max-w-sm text-sm text-[var(--sea-ink-soft)] leading-relaxed mb-4">
              Independent software. Practical engineering.
            </p>
            <p className="max-w-sm text-xs text-[var(--sea-ink-muted)] leading-relaxed">
              JoTech is an independent software ecosystem engineered and
              maintained by Jobi S S. Focus on real products, system
              reliability, and practical AI applications.
            </p>
          </div>

          {/* Column 1: Products */}
          <div>
            <h3 className="mono-meta text-[var(--sea-ink)] mb-3.5 font-semibold">
              Products
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href="https://weekly-planner.jotech.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--sea-ink)] transition-colors inline-flex items-center gap-1 group"
                >
                  <span>Weekly Planner</span>
                  <span className="text-[0.65rem] opacity-50 group-hover:opacity-100 transition-opacity">
                    ↗
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://pocket-flow.jotech.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--sea-ink)] transition-colors inline-flex items-center gap-1 group"
                >
                  <span>PocketFlow</span>
                  <span className="text-[0.65rem] opacity-50 group-hover:opacity-100 transition-opacity">
                    ↗
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://blog.jotech.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--sea-ink)] transition-colors inline-flex items-center gap-1 group"
                >
                  <span>JoTech Blog</span>
                  <span className="text-[0.65rem] opacity-50 group-hover:opacity-100 transition-opacity">
                    ↗
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Engineering */}
          <div>
            <h3 className="mono-meta text-[var(--sea-ink)] mb-3.5 font-semibold">
              Engineering
            </h3>
            <ul className="space-y-2.5 text-xs text-[var(--sea-ink-soft)]">
              <li>
                <a
                  href="/#engineering"
                  className="hover:text-[var(--sea-ink)] transition-colors"
                >
                  Backend Systems
                </a>
              </li>
              <li>
                <a
                  href="/#engineering"
                  className="hover:text-[var(--sea-ink)] transition-colors"
                >
                  AI & Automation
                </a>
              </li>
              <li>
                <a
                  href="/#engineering"
                  className="hover:text-[var(--sea-ink)] transition-colors"
                >
                  Cloud & Infrastructure
                </a>
              </li>
              <li>
                <a
                  href="/#engineering"
                  className="hover:text-[var(--sea-ink)] transition-colors"
                >
                  System Architecture
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Founder & Connect */}
          <div>
            <h3 className="mono-meta text-[var(--sea-ink)] mb-3.5 font-semibold">
              Founder & Connect
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href="https://jobiss.jotech.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--sea-ink)] transition-colors inline-flex items-center gap-1 group text-[var(--sea-ink)] font-medium"
                >
                  <span>Jobi S S</span>
                  <span className="text-[0.65rem] opacity-50 group-hover:opacity-100 transition-opacity">
                    ↗
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/jobiss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--sea-ink)] transition-colors inline-flex items-center gap-1 group"
                >
                  <span>GitHub</span>
                  <span className="text-[0.65rem] opacity-50 group-hover:opacity-100 transition-opacity">
                    ↗
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/jobiss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--sea-ink)] transition-colors inline-flex items-center gap-1 group"
                >
                  <span>LinkedIn</span>
                  <span className="text-[0.65rem] opacity-50 group-hover:opacity-100 transition-opacity">
                    ↗
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@jotech.in"
                  className="hover:text-[var(--sea-ink)] transition-colors inline-flex items-center gap-1 group"
                >
                  <span>Email</span>
                  <span className="text-[0.65rem] opacity-50 group-hover:opacity-100 transition-opacity">
                    ↗
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-xs sm:flex-row text-[var(--sea-ink-muted)]">
          <p className="m-0">
            &copy; 2026 JoTech. Built independently by{' '}
            <a
              href="https://jobiss.jotech.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[var(--sea-ink)] hover:text-indigo-400 transition-colors"
            >
              Jobi S S
            </a>
            .
          </p>

          <div className="flex items-center gap-2">
            <span className="status-beacon">
              <span className="status-beacon-ping" />
              <span className="status-beacon-dot" />
            </span>
            <span className="text-xs font-mono text-[var(--sea-ink-soft)]">
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
