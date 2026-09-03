import { useEffect, useState } from 'react'
import { Link, useLocation } from '@tanstack/react-router'
import ThemeToggle from './ThemeToggle'
import Logo from './Logo'

export default function Header() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const [activeHash, setActiveHash] = useState<string>('')

  useEffect(() => {
    if (!isHomePage) {
      setActiveHash('')
      return
    }

    const checkSection = () => {
      const hash = window.location.hash.replace('#', '')
      const productsEl = document.getElementById('products')
      if (productsEl) {
        const rect = productsEl.getBoundingClientRect()
        // Highlight products when its section occupies viewport
        if (rect.top <= window.innerHeight * 0.45 && rect.bottom >= 150) {
          setActiveHash('products')
          return
        }
      }
      if (hash === 'products') {
        setActiveHash('products')
      } else {
        setActiveHash('')
      }
    }

    checkSection()
    window.addEventListener('scroll', checkSection, { passive: true })
    window.addEventListener('hashchange', checkSection)
    return () => {
      window.removeEventListener('scroll', checkSection)
      window.removeEventListener('hashchange', checkSection)
    }
  }, [isHomePage, location.hash])

  const isProductsActive = isHomePage && activeHash === 'products'
  const isHomeActive = isHomePage && !isProductsActive

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--header-bg)] px-4 backdrop-blur-xl transition-colors">
      <nav className="page-wrap flex flex-wrap items-center justify-between gap-x-4 gap-y-2 py-3 sm:py-3.5">
        <h2 className="m-0 flex-shrink-0 text-base font-semibold tracking-tight">
          <Link
            to="/"
            className="group inline-flex items-center rounded-full border border-slate-200/80 dark:border-white/10 bg-white/90 dark:bg-[#0f1724]/90 px-3 py-1.5 text-sm font-bold no-underline shadow-2xs backdrop-blur-md transition hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-xs sm:px-3.5 sm:py-1.5"
          >
            <Logo size="sm" showText={true} />
          </Link>
        </h2>

        <div className="order-3 flex w-full items-center justify-center gap-x-1 sm:gap-x-2 pb-1 text-sm font-semibold sm:order-none sm:w-auto sm:justify-start sm:pb-0">
          <Link
            to="/"
            onClick={() => {
              if (isHomePage) {
                window.scrollTo({ top: 0, behavior: 'smooth' })
                history.replaceState(null, '', window.location.pathname)
                setActiveHash('')
              }
            }}
            className={`nav-link ${isHomeActive ? 'is-active' : ''}`}
          >
            Home
          </Link>
          <a
            href="/#products"
            onClick={(e) => {
              if (isHomePage) {
                e.preventDefault()
                const el = document.getElementById('products')
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' })
                  history.pushState(null, '', '#products')
                  setActiveHash('products')
                }
              }
            }}
            className={`nav-link ${isProductsActive ? 'is-active' : ''}`}
          >
            Products
          </a>
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

        <div className="ml-auto flex items-center gap-2.5 sm:ml-0">
          <Link
            to="/contact"
            className="hidden rounded-full bg-blue-600 hover:bg-blue-500 px-4 py-1.5 text-xs font-bold text-white no-underline shadow-sm shadow-blue-500/20 transition hover:-translate-y-0.5 sm:inline-flex"
          >
            Let's Talk
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
