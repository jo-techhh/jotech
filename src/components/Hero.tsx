import { useEffect, useRef } from 'react'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    let animationFrameId: number
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800)
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500)

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return
      width = canvas.width = canvas.parentElement.clientWidth
      height = canvas.height = canvas.parentElement.clientHeight
    }

    window.addEventListener('resize', handleResize)

    // Subtle particle nodes
    const particleCount = Math.min(Math.floor(width / 45), 32)
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      radius: Math.random() * 1.5 + 1,
    }))

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      // Connect near particles with ultra-faint lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 130) {
            const alpha = (1 - dist / 130) * 0.12
            ctx.strokeStyle = `rgba(99, 102, 241, ${alpha})`
            ctx.lineWidth = 0.8
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      // Draw subtle nodes
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy

        // Wrap boundaries
        if (p.x < 0) p.x = width
        if (p.x > width) p.x = 0
        if (p.y < 0) p.y = height
        if (p.y > height) p.y = 0

        ctx.fillStyle = 'rgba(165, 180, 252, 0.45)'
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fill()
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      history.pushState(null, '', `#${id}`)
    }
  }

  return (
    <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 overflow-hidden">
      {/* Background Interactive Particle Mesh */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-70">
        <canvas ref={canvasRef} className="h-full w-full block" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--bg-base)]" />
      </div>

      {/* Subtle Ambient Radial Light */}
      <div className="pointer-events-none absolute left-1/2 top-4 -translate-x-1/2 h-[350px] w-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.12),transparent_70%)] blur-2xl -z-10" />

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface-strong)] px-3.5 py-1 text-xs font-mono text-[var(--sea-ink-soft)] mb-6 shadow-2xs">
          <span className="status-beacon">
            <span className="status-beacon-ping" />
            <span className="status-beacon-dot" />
          </span>
          <span className="tracking-widest uppercase text-[0.68rem] font-semibold text-[var(--sea-ink)]">
            INDEPENDENT SOFTWARE ECOSYSTEM
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="display-title text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[var(--sea-ink)] leading-[1.08] mb-6">
          Software built independently.
          <br />
          <span className="bg-gradient-to-r from-indigo-300 via-white to-slate-300 bg-clip-text text-transparent">
            Products built to be useful.
          </span>
        </h1>

        {/* Supporting text */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-[var(--sea-ink-soft)] leading-relaxed mb-10 font-normal">
          JoTech is an independent software ecosystem by{' '}
          <a
            href="https://jobiss.jotech.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--sea-ink)] font-semibold hover:text-indigo-400 underline decoration-[var(--line-strong)] underline-offset-4 transition-colors"
          >
            Jobi S S
          </a>{' '}
          — building practical products, engineering reliable systems, exploring AI, and sharing what works.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <button
            type="button"
            onClick={() => scrollToSection('products')}
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/30 transition-all duration-200 cursor-pointer hover:-translate-y-0.5"
          >
            <span>Explore Products</span>
            <span className="cta-arrow">→</span>
          </button>

          <a
            href="#founder"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('founder')
            }}
            className="inline-flex items-center gap-2 rounded-xl border border-[var(--line)] bg-[var(--surface)] hover:bg-[var(--surface-hover)] px-6 py-3 text-sm font-semibold text-[var(--sea-ink)] transition-all duration-200 cursor-pointer hover:-translate-y-0.5"
          >
            <span>Meet the Builder</span>
            <span className="text-[var(--sea-ink-muted)]">→</span>
          </a>
        </div>

        {/* Technical Status Row */}
        <div className="inline-flex flex-wrap items-center justify-center gap-x-6 gap-y-2 rounded-xl border border-[var(--line-subtle)] bg-[var(--surface-glass)]/60 px-5 py-2.5 backdrop-blur-md text-[0.72rem] font-mono text-[var(--sea-ink-soft)]">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
            <span className="tracking-wider uppercase font-semibold text-[var(--sea-ink)]">
              3 PRODUCTS
            </span>
          </div>
          <span className="hidden sm:inline text-[var(--sea-ink-muted)] opacity-40">|</span>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="tracking-wider uppercase font-semibold text-[var(--sea-ink)]">
              1 BUILDER
            </span>
          </div>
          <span className="hidden sm:inline text-[var(--sea-ink-muted)] opacity-40">|</span>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
            <span className="tracking-wider uppercase font-semibold text-[var(--sea-ink)]">
              AI + SOFTWARE + SYSTEMS
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
