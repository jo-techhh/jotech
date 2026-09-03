import type { FC } from 'react'

interface LogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  iconOnly?: boolean
  showText?: boolean
  className?: string
}

const SIZES = {
  xs: { icon: 18, text: 'text-sm tracking-tight', gap: 'gap-1.5' },
  sm: { icon: 22, text: 'text-[0.95rem] tracking-tight', gap: 'gap-2' },
  md: { icon: 26, text: 'text-base tracking-tight', gap: 'gap-2.5' },
  lg: { icon: 34, text: 'text-xl tracking-tight', gap: 'gap-3' },
  xl: { icon: 44, text: 'text-2xl tracking-tight', gap: 'gap-3.5' },
}

/**
 * Minimal, Premium JoTech Wordmark & Monogram
 * Engineered with precision geometric lines and crisp Antigravity aesthetics.
 */
export const Logo: FC<LogoProps> = ({
  size = 'md',
  iconOnly = false,
  showText = true,
  className = '',
}) => {
  const config = SIZES[size] || SIZES.md

  return (
    <div
      className={`inline-flex items-center select-none ${config.gap} ${className}`}
      aria-label="JoTech"
    >
      {/* Precision Geometric Monogram Emblem */}
      <div
        className="relative flex-shrink-0 transition-transform duration-200 group-hover:scale-105"
        style={{ width: config.icon, height: config.icon }}
      >
        <svg
          viewBox="0 0 100 100"
          width="100%"
          height="100%"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="overflow-visible"
        >
          <defs>
            <linearGradient id="jt-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#818CF8" />
              <stop offset="100%" stopColor="#4F46E5" />
            </linearGradient>
            <linearGradient id="jt-border" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
            </linearGradient>
          </defs>

          {/* Precision Squircle Frame */}
          <rect
            x="4"
            y="4"
            width="92"
            height="92"
            rx="24"
            fill="#101216"
            stroke="url(#jt-border)"
            strokeWidth="2.5"
          />

          {/* Minimalist J+T Interlocking Architecture */}
          {/* Top T-beam */}
          <rect
            x="24"
            y="26"
            width="52"
            height="10"
            rx="5"
            fill="url(#jt-grad)"
          />
          {/* J-curve stem */}
          <path
            d="M50 30 V62 C50 72 42 78 32 78 C24 78 20 71 20 64"
            stroke="#F5F5F7"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Precision Energy Beacon */}
          <circle cx="72" cy="62" r="4.5" fill="#6366F1" />
        </svg>
      </div>

      {/* Brand Wordmark */}
      {!iconOnly && showText && (
        <div className="flex items-center leading-none">
          <span className={`font-bold text-[var(--sea-ink)] ${config.text}`}>
            JoTech
          </span>
          <span className="ml-1.5 hidden sm:inline-block text-[0.62rem] font-mono font-medium text-[var(--sea-ink-muted)] tracking-wider uppercase border border-[var(--line)] rounded px-1 py-0.2">
            ecosystem
          </span>
        </div>
      )}
    </div>
  )
}

export default Logo
