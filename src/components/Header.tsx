import { Link } from '@tanstack/react-router'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--header-bg)] px-4 backdrop-blur-lg">
      <nav className="page-wrap flex flex-wrap items-center justify-between gap-x-4 gap-y-2 py-3 sm:py-4">
        <h2 className="m-0 flex-shrink-0 text-base font-semibold tracking-tight">
          <Link
            to="/"
            className="inline-flex items-center gap-2.5 rounded-full border border-[var(--chip-line)] bg-[var(--chip-bg)] px-3.5 py-1.5 text-sm font-bold text-[var(--sea-ink)] no-underline shadow-[0_4px_20px_rgba(30,90,72,0.08)] transition hover:shadow-md sm:px-4 sm:py-2"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
            </span>
            <span className="bg-gradient-to-r from-[var(--sea-ink)] via-[var(--lagoon-deep)] to-[var(--palm)] bg-clip-text font-black tracking-tight text-transparent">
              JoTech
            </span>
          </Link>
        </h2>

        <div className="order-3 flex w-full items-center justify-center gap-x-6 gap-y-1 pb-1 text-sm font-semibold sm:order-none sm:w-auto sm:justify-start sm:pb-0">
          <Link
            to="/"
            className="nav-link"
            activeProps={{ className: 'nav-link is-active' }}
          >
            Home
          </Link>
          <Link
            to="/services"
            className="nav-link"
            activeProps={{ className: 'nav-link is-active' }}
          >
            Services
          </Link>
          <Link
            to="/about"
            className="nav-link"
            activeProps={{ className: 'nav-link is-active' }}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="nav-link"
            activeProps={{ className: 'nav-link is-active' }}
          >
            Contact
          </Link>
        </div>

        <div className="ml-auto flex items-center gap-2 sm:ml-0">
          <Link
            to="/contact"
            className="hidden rounded-full bg-[var(--sea-ink)] px-4 py-1.5 text-xs font-semibold text-white no-underline shadow-sm transition hover:opacity-90 sm:inline-flex"
          >
            Let's Talk
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
