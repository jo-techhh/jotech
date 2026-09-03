import Logo from './Logo'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-24 border-t border-[var(--line)] px-4 pb-12 pt-12 text-[var(--sea-ink-soft)]">
      <div className="page-wrap">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 pb-10 border-b border-[var(--line)]">
          <div className="sm:col-span-1">
            <div className="mb-3">
              <Logo size="md" showText={true} />
            </div>
            <p className="max-w-md text-sm text-[var(--sea-ink-soft)] leading-relaxed mb-3">
              Independent software ecosystem engineering resilient applications,
              cloud tools, and modern digital products.
            </p>
            <a
              href="https://jobiss.jotech.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--lagoon-deep)] hover:underline"
            >
              Built by Jobi S S ↗
            </a>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--sea-ink)] mb-3">
              Products
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://weekly-zen-planner.jotech.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--sea-ink)] transition flex items-center justify-between"
                >
                  <span>Weekly Planner</span>
                  <span className="text-[0.65rem] text-[var(--sea-ink-soft)] opacity-80">
                    ↗
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://pocket-flow.jotech.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--sea-ink)] transition flex items-center justify-between"
                >
                  <span>PocketFlow</span>
                  <span className="text-[0.65rem] text-[var(--sea-ink-soft)] opacity-80">
                    ↗
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://blog.jotech.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--sea-ink)] transition flex items-center justify-between"
                >
                  <span>Jotech Blog</span>
                  <span className="text-[0.65rem] text-[var(--sea-ink-soft)] opacity-80">
                    ↗
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--sea-ink)] mb-3">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-[var(--sea-ink)] transition">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/#products"
                  className="hover:text-[var(--sea-ink)] transition"
                >
                  Featured Products
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:text-[var(--sea-ink)] transition"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-[var(--sea-ink)] transition"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-[var(--sea-ink)] transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--sea-ink)] mb-3">
              Capabilities
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="text-[var(--sea-ink-soft)]">
                Backend (Python, Node, Go)
              </li>
              <li className="text-[var(--sea-ink-soft)]">
                Frontend (Angular & React)
              </li>
              <li className="text-[var(--sea-ink-soft)]">
                AI Solutions & MCP ChatBots
              </li>
              <li className="text-[var(--sea-ink-soft)]">
                Cloud (AWS, GCloud, Contabo)
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-6 text-xs sm:flex-row">
          <p className="m-0">
            &copy; {year} JoTech. Built & maintained by{' '}
            <a
              href="https://jobiss.jotech.in"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[var(--sea-ink)] hover:underline"
            >
              Jobi S S
            </a>
            .
          </p>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-[var(--lagoon-deep)] font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              Systems Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
