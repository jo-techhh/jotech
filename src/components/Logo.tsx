import type { FC } from 'react'

interface LogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  iconOnly?: boolean
  showText?: boolean
  className?: string
}

const SIZES = {
  xs: { icon: 20, text: 'text-sm', sub: 'text-[0.55rem]', gap: 'gap-1.5' },
  sm: { icon: 24, text: 'text-base', sub: 'text-[0.6rem]', gap: 'gap-2' },
  md: { icon: 32, text: 'text-lg', sub: 'text-[0.65rem]', gap: 'gap-2.5' },
  lg: { icon: 42, text: 'text-2xl', sub: 'text-[0.75rem]', gap: 'gap-3' },
  xl: { icon: 56, text: 'text-3xl', sub: 'text-[0.85rem]', gap: 'gap-3.5' },
}

/**
 * Modern JoTech Logo Component
 * Incorporates the geometric J+T fusion monogram emblem,
 * radiant tech gradients, and sleek typography.
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
      {/* JoTech Monogram Emblem SVG */}
      <div
        className="relative flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
        style={{ width: config.icon, height: config.icon }}
      >
        <svg
          viewBox="0 0 128 128"
          width="100%"
          height="100%"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="overflow-visible drop-shadow-xs"
        >
          <defs>
            {/* Background Gradient */}
            <linearGradient id="logo-bg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0b1329" />
              <stop offset="100%" stopColor="#030712" />
            </linearGradient>

            {/* Glowing Border Gradient */}
            <linearGradient id="logo-border" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#6366f1" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.85" />
            </linearGradient>

            {/* T-Bar Gradient */}
            <linearGradient id="logo-tbar" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#818cf8" />
            </linearGradient>

            {/* J-Stem Gradient */}
            <linearGradient id="logo-jstem" x1="50%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="35%" stopColor="#3b82f6" />
              <stop offset="75%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>

            {/* Ambient Radial Glow */}
            <radialGradient id="logo-ambient" cx="50%" cy="35%" r="45%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Squircle Badge Shell */}
          <rect
            x="4"
            y="4"
            width="120"
            height="120"
            rx="28"
            fill="url(#logo-bg)"
          />
          <rect
            x="4"
            y="4"
            width="120"
            height="120"
            rx="28"
            fill="none"
            stroke="url(#logo-border)"
            strokeWidth="2.5"
          />

          {/* Internal Glow Circle */}
          <circle cx="64" cy="42" r="32" fill="url(#logo-ambient)" />

          {/* T-Bar Horizontal Beam */}
          <rect
            x="28"
            y="32"
            width="72"
            height="14"
            rx="7"
            fill="url(#logo-tbar)"
          />

          {/* J-Stem Curved Path */}
          <path
            d="M64 38 V74 C64 88 52 96 40 96 C29 96 24 86 24 76"
            fill="none"
            stroke="url(#logo-jstem)"
            strokeWidth="14"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Emerald Energy / Node Accent */}
          <circle cx="92" cy="74" r="9" fill="#10b981" opacity="0.25" />
          <circle cx="92" cy="74" r="5.5" fill="#10b981" />
          <circle cx="92" cy="74" r="2.2" fill="#a7f3d0" />
        </svg>
      </div>

      {/* Brand Typography */}
      {!iconOnly && showText && (
        <div className="flex flex-col leading-none">
          <span
            className={`font-extrabold tracking-tight text-[var(--sea-ink)] ${config.text}`}
          >
            Jo
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent dark:from-blue-400 dark:via-indigo-300 dark:to-cyan-400">
              Tech
            </span>
          </span>
        </div>
      )}
    </div>
  )
}

export default Logo
