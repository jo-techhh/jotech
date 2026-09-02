export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-24 border-t border-[var(--line)] px-4 pb-12 pt-12 text-[var(--sea-ink-soft)]">
      <div className="page-wrap">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 pb-10 border-b border-[var(--line)]">
          <div className="sm:col-span-2">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
              <span className="text-lg font-extrabold tracking-tight text-[var(--sea-ink)]">JoTech</span>
            </div>
            <p className="max-w-md text-sm text-[var(--sea-ink-soft)] leading-relaxed">
              Engineering high-performance software applications, modern cloud infrastructure, and AI-enabled digital solutions for next-generation teams.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--sea-ink)] mb-3">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-[var(--sea-ink)] transition">Home</a></li>
              <li><a href="/services" className="hover:text-[var(--sea-ink)] transition">Services</a></li>
              <li><a href="/about" className="hover:text-[var(--sea-ink)] transition">About</a></li>
              <li><a href="/contact" className="hover:text-[var(--sea-ink)] transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--sea-ink)] mb-3">Capabilities</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-[var(--sea-ink-soft)]">Web & App Engineering</li>
              <li className="text-[var(--sea-ink-soft)]">Cloud & DevOps</li>
              <li className="text-[var(--sea-ink-soft)]">AI & Workflow Systems</li>
              <li className="text-[var(--sea-ink-soft)]">Architecture Consulting</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-6 text-xs sm:flex-row">
          <p className="m-0">
            &copy; {year} JoTech Solutions. All rights reserved.
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
