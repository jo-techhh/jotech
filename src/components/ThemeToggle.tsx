import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'light'
  const stored = window.localStorage.getItem('theme')
  if (stored === 'light' || stored === 'dark') return stored
  return 'light'
}

function applyTheme(theme: Theme) {
  const root = document.documentElement
  root.classList.remove('light', 'dark')
  root.classList.add(theme)
  root.setAttribute('data-theme', theme)
  root.style.colorScheme = theme
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const initial = getInitialTheme()
    setTheme(initial)
    applyTheme(initial)
    setMounted(true)
  }, [])

  function toggleTheme() {
    const next: Theme = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    applyTheme(next)
    window.localStorage.setItem('theme', next)
  }

  if (!mounted) {
    return (
      <div className="h-7 w-16 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-slate-800" />
    )
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-[#0f1724]/90 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 shadow-2xs backdrop-blur-md transition-all hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-white/20 cursor-pointer"
    >
      {theme === 'dark' ? (
        <>
          <span className="text-amber-400 text-xs">🌙</span>
          <span className="tracking-wide">Dark</span>
        </>
      ) : (
        <>
          <span className="text-amber-500 text-xs">☀️</span>
          <span className="tracking-wide">Light</span>
        </>
      )}
    </button>
  )
}
