import { useEffect, useState } from 'react'
import { Link, useLocation } from '@tanstack/react-router'
import ThemeToggle from './ThemeToggle'
import Logo from './Logo'

export default function Header() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeHash, setActiveHash] = useState<string>('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      if (!isHomePage) {
        setActiveHash('')
        return
      }

      const hash = window.location.hash.replace('#', '')
      const productsEl = document.getElementById('products')
      const engineeringEl = document.getElementById('engineering')
      const ecosystemEl = document.getElementById('ecosystem')

      const scrollPos = window.scrollY + 180

      if (engineeringEl && scrollPos >= engineeringEl.offsetTop) {
        setActiveHash('engineering')
      } else if (productsEl && scrollPos >= productsEl.offsetTop) {
        setActiveHash('products')
      } else if (ecosystemEl && scrollPos >= ecosystemEl.offsetTop) {
        setActiveHash('ecosystem')
      } else if (hash) {
        setActiveHash(hash)
      } else {
        setActiveHash('')
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('hashchange', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('hashchange', handleScroll)
    }
  }, [isHomePage, location.hash])

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false)
    if (isHomePage) {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        history.pushState(null, '', `#${id}`)
        setActiveHash(id)
      }
    } else {
      window.location.href = `/#${id}`
    }
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-[var(--line)] bg-[var(--header-bg)] backdrop-blur-xl py-3 shadow-sm'
          : 'border-b border-transparent bg-transparent py-4'
      }`}
    >
      <nav
        className="page-wrap flex items-center justify-between gap-4"
        aria-label="Main Navigation"
      >
        {/* Left: Custom Minimal JoTech Wordmark */}
        <Link
          to="/"
          className="group inline-flex items-center gap-2"
          onClick={() => {
            if (isHomePage) {
              window.scrollTo({ top: 0, behavior: 'smooth' })
              history.replaceState(null, '', window.location.pathname)
              setActiveHash('')
            }
          }}
        >
          <Logo size="sm" showText={true} />
        </Link>

        {/* Center: Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1 rounded-full border border-[var(--line)] bg-[var(--surface-glass)] px-3 py-1.5 shadow-2xs backdrop-blur-md">
          <button
            type="button"
            onClick={() => scrollToSection('products')}
            className={`nav-link cursor-pointer ${
              activeHash === 'products' ? 'is-active' : ''
            }`}
          >
            Products
          </button>
          <button
            type="button"
            onClick={() => scrollToSection('ecosystem')}
            className={`nav-link cursor-pointer ${
              activeHash === 'ecosystem' ? 'is-active' : ''
            }`}
          >
            Ecosystem
          </button>
          <button
            type="button"
            onClick={() => scrollToSection('engineering')}
            className={`nav-link cursor-pointer ${
              activeHash === 'engineering' ? 'is-active' : ''
            }`}
          >
            Engineering
          </button>
          <Link
            to="/about"
            className="nav-link"
            activeProps={{ className: 'nav-link is-active' }}
          >
            About
          </Link>
          <a
            href="https://blog.jotech.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link group inline-flex items-center gap-1"
          >
            <span>Blog</span>
            <span className="text-[0.65rem] opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>
          </a>
        </div>

        {/* Right CTA & Controls */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-[var(--line)] bg-[var(--surface-strong)] px-4 py-1.5 text-xs font-semibold text-[var(--sea-ink)] hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all duration-200"
          >
            <span>Build with me</span>
            <span className="cta-arrow text-indigo-400">→</span>
          </Link>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--line)] bg-[var(--surface)] text-[var(--sea-ink)] hover:bg-[var(--surface-hover)] transition cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close Navigation' : 'Open Navigation'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" y1="8" x2="20" y2="8" />
                <line x1="4" y1="16" x2="20" y2="16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Full-Screen Navigation Panel */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[57px] z-40 flex flex-col justify-between bg-[var(--bg-base)]/98 p-6 backdrop-blur-2xl md:hidden border-t border-[var(--line)] overflow-y-auto animate-fadeIn">
          <div className="flex flex-col gap-3 pt-4">
            <span className="mono-meta text-[var(--sea-ink-muted)] mb-2">
              Navigation
            </span>
            <button
              type="button"
              onClick={() => scrollToSection('products')}
              className="text-left text-xl font-semibold text-[var(--sea-ink)] py-2 border-b border-[var(--line-subtle)]"
            >
              Products
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('ecosystem')}
              className="text-left text-xl font-semibold text-[var(--sea-ink)] py-2 border-b border-[var(--line-subtle)]"
            >
              Ecosystem
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('engineering')}
              className="text-left text-xl font-semibold text-[var(--sea-ink)] py-2 border-b border-[var(--line-subtle)]"
            >
              Engineering
            </button>
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xl font-semibold text-[var(--sea-ink)] py-2 border-b border-[var(--line-subtle)]"
            >
              About
            </Link>
            <a
              href="https://blog.jotech.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold text-[var(--sea-ink)] py-2 border-b border-[var(--line-subtle)] flex items-center justify-between"
            >
              <span>JoTech Blog</span>
              <span className="text-sm opacity-60">↗</span>
            </a>
            <a
              href="https://jobiss.jotech.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold text-[var(--sea-ink)] py-2 border-b border-[var(--line-subtle)] flex items-center justify-between"
            >
              <span>Jobi S S (Founder)</span>
              <span className="text-sm opacity-60">↗</span>
            </a>
          </div>

          <div className="pt-8 pb-4">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-600/20 transition"
            >
              <span>Build with me</span>
              <span>→</span>
            </Link>
            <p className="mt-4 text-center mono-meta text-[var(--sea-ink-muted)]">
              Independent Software Ecosystem
            </p>
          </div>
        </div>
      )}
    </header>
  )
}
