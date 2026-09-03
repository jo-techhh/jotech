export default function FeaturedProducts() {
  return (
    <section
      id="products"
      aria-labelledby="built-by-jotech"
      className="py-16 sm:py-24 scroll-mt-20"
    >
      <div className="page-wrap">
        {/* Section Header */}
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mono-meta text-indigo-400 mb-2">
              Production Portfolio
            </p>
            <h2
              id="built-by-jotech"
              className="display-title text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--sea-ink)]"
            >
              Built by JoTech
            </h2>
            <p className="mt-3 text-base text-[var(--sea-ink-soft)] leading-relaxed">
              Real products. Built, deployed and continuously improved by an
              independent engineer.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start rounded-full border border-[var(--line)] bg-[var(--surface-glass)] px-3.5 py-1.5 text-xs font-mono text-[var(--sea-ink-soft)] md:self-end">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>100% Active Production</span>
          </div>
        </div>

        {/* Products Grid: 2 Side-by-Side Bento Cards + 1 Wide Editorial Card */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* ========================================================================= */}
          {/* PRODUCT 1: WEEKLY PLANNER */}
          {/* ========================================================================= */}
          <article className="product-card group flex flex-col justify-between p-6 sm:p-8">
            <div>
              {/* Card Meta Bar */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="mono-meta text-indigo-400">PRODUCTIVITY</span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--line)] bg-[var(--chip-bg)] px-2.5 py-0.5 text-[0.68rem] font-mono text-[var(--sea-ink)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  ACTIVE
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="display-title text-2xl sm:text-3xl font-bold text-[var(--sea-ink)] mb-2">
                Weekly Planner
              </h3>
              <p className="text-sm text-[var(--sea-ink-soft)] leading-relaxed mb-6">
                Plan your week, organize priorities and focus on what actually
                matters without cognitive clutter.
              </p>
            </div>

            {/* Product Preview: Weekly Planning Matrix UI */}
            <div className="product-mockup-wrapper rounded-xl border border-[var(--line)] bg-[var(--bg-base)] p-4 shadow-inner mb-6">
              {/* Mockup Header Bar */}
              <div className="flex items-center justify-between border-b border-[var(--line-subtle)] pb-2.5 mb-3.5 text-[0.68rem] font-mono text-[var(--sea-ink-muted)]">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                  <span className="ml-2 text-[var(--sea-ink-soft)]">
                    weekly-planner.jotech.in
                  </span>
                </div>
                <span className="text-indigo-400 font-semibold">
                  Week 36 · Focused
                </span>
              </div>

              {/* 7-Day Matrix Strip */}
              <div className="grid grid-cols-7 gap-1 text-center mb-3">
                {[
                  { d: 'M', dt: '01', active: false },
                  { d: 'T', dt: '02', active: false },
                  { d: 'W', dt: '03', active: true },
                  { d: 'T', dt: '04', active: false },
                  { d: 'F', dt: '05', active: false },
                  { d: 'S', dt: '06', active: false },
                  { d: 'S', dt: '07', active: false },
                ].map((col) => (
                  <div
                    key={col.d + col.dt}
                    className={`rounded-lg py-1.5 text-center text-xs transition ${
                      col.active
                        ? 'bg-indigo-600 text-white font-bold shadow-xs'
                        : 'border border-[var(--line-subtle)] bg-[var(--surface)] text-[var(--sea-ink-soft)]'
                    }`}
                  >
                    <span className="block text-[0.62rem] opacity-70">
                      {col.d}
                    </span>
                    <span className="block font-mono text-[0.72rem]">
                      {col.dt}
                    </span>
                  </div>
                ))}
              </div>

              {/* Task Items Snapshot */}
              <div className="space-y-2">
                <div className="flex items-center justify-between rounded-lg border border-[var(--line-subtle)] bg-[var(--surface)] px-3 py-2 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="h-3.5 w-3.5 rounded border border-indigo-400/80 bg-indigo-500/20 flex items-center justify-center text-[0.6rem] text-indigo-300">
                      ✓
                    </span>
                    <span className="text-[var(--sea-ink)] font-medium">
                      Architecture spec & event schema
                    </span>
                  </div>
                  <span className="mono-meta text-[0.6rem] text-indigo-400">
                    High Priority
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-lg border border-[var(--line-subtle)] bg-[var(--surface)] px-3 py-2 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="h-3.5 w-3.5 rounded border border-[var(--line-strong)]" />
                    <span className="text-[var(--sea-ink-soft)]">
                      PostgreSQL query index benchmarking
                    </span>
                  </div>
                  <span className="mono-meta text-[0.6rem] text-[var(--sea-ink-muted)]">
                    Deep Work
                  </span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <a
                href="https://weekly-planner.jotech.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--sea-ink)] group-hover:text-indigo-400 transition-colors"
              >
                <span>Explore Weekly Planner</span>
                <span className="cta-arrow text-indigo-400">→</span>
              </a>
            </div>
          </article>

          {/* ========================================================================= */}
          {/* PRODUCT 2: POCKETFLOW */}
          {/* ========================================================================= */}
          <article className="product-card group flex flex-col justify-between p-6 sm:p-8">
            <div>
              {/* Card Meta Bar */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="mono-meta text-emerald-400">
                  PERSONAL FINANCE
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--line)] bg-[var(--chip-bg)] px-2.5 py-0.5 text-[0.68rem] font-mono text-[var(--sea-ink)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  ACTIVE
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="display-title text-2xl sm:text-3xl font-bold text-[var(--sea-ink)] mb-2">
                PocketFlow
              </h3>
              <p className="text-sm text-[var(--sea-ink-soft)] leading-relaxed mb-6">
                Understand your money, track transactions and stay in control of
                your financial flow.
              </p>
            </div>

            {/* Product Preview: Financial Dashboard & Cashflow UI */}
            <div className="product-mockup-wrapper rounded-xl border border-[var(--line)] bg-[var(--bg-base)] p-4 shadow-inner mb-6">
              {/* Mockup Header Bar */}
              <div className="flex items-center justify-between border-b border-[var(--line-subtle)] pb-2.5 mb-3.5 text-[0.68rem] font-mono text-[var(--sea-ink-muted)]">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                  <span className="ml-2 text-[var(--sea-ink-soft)]">
                    pocket-flow.jotech.in
                  </span>
                </div>
                <span className="text-emerald-400 font-semibold">
                  Net Cashflow
                </span>
              </div>

              {/* Metrics Row */}
              <div className="grid grid-cols-2 gap-2 mb-3">
                <div className="rounded-lg border border-[var(--line-subtle)] bg-[var(--surface)] p-2.5">
                  <span className="mono-meta text-[0.58rem] text-[var(--sea-ink-muted)] block">
                    MONTHLY INFLOW
                  </span>
                  <span className="font-mono text-base font-bold text-[var(--sea-ink)] mt-0.5 block">
                    $8,450.00
                  </span>
                  <span className="text-[0.62rem] text-emerald-400 font-mono">
                    ↑ +14.2% MoM
                  </span>
                </div>

                <div className="rounded-lg border border-[var(--line-subtle)] bg-[var(--surface)] p-2.5">
                  <span className="mono-meta text-[0.58rem] text-[var(--sea-ink-muted)] block">
                    TOTAL EXPENSES
                  </span>
                  <span className="font-mono text-base font-bold text-[var(--sea-ink)] mt-0.5 block">
                    $3,120.40
                  </span>
                  <span className="text-[0.62rem] text-[var(--sea-ink-soft)] font-mono">
                    37% allocation
                  </span>
                </div>
              </div>

              {/* Segmented Stream Bar */}
              <div className="rounded-lg border border-[var(--line-subtle)] bg-[var(--surface)] p-2.5">
                <div className="flex justify-between text-[0.62rem] font-mono text-[var(--sea-ink-soft)] mb-1.5">
                  <span>Categories</span>
                  <span className="text-indigo-300">Disciplined Buffer</span>
                </div>
                <div className="flex h-2 w-full overflow-hidden rounded-full gap-0.5">
                  <div
                    className="h-full bg-indigo-500"
                    style={{ width: '45%' }}
                  />
                  <div
                    className="h-full bg-emerald-500"
                    style={{ width: '30%' }}
                  />
                  <div
                    className="h-full bg-cyan-500"
                    style={{ width: '15%' }}
                  />
                  <div
                    className="h-full bg-violet-500"
                    style={{ width: '10%' }}
                  />
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <a
                href="https://pocket-flow.jotech.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--sea-ink)] group-hover:text-emerald-400 transition-colors"
              >
                <span>Explore PocketFlow</span>
                <span className="cta-arrow text-emerald-400">→</span>
              </a>
            </div>
          </article>
        </div>

        {/* ========================================================================= */}
        {/* PRODUCT 3: JOTECH BLOG (Full-Width Bento Feature) */}
        {/* ========================================================================= */}
        <article className="product-card group mt-6 p-6 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            {/* Left Content */}
            <div className="lg:col-span-6">
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="mono-meta text-indigo-400">ENGINEERING</span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--line)] bg-[var(--chip-bg)] px-2.5 py-0.5 text-[0.68rem] font-mono text-[var(--sea-ink)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                  CONTINUOUSLY DEVELOPED
                </span>
              </div>

              <h3 className="display-title text-2xl sm:text-4xl font-bold text-[var(--sea-ink)] mb-3">
                JoTech Blog
              </h3>
              <p className="text-sm sm:text-base text-[var(--sea-ink-soft)] leading-relaxed mb-6">
                Practical notes on software architecture, backend engineering,
                AI and things being built at JoTech.
              </p>

              <div className="pt-2">
                <a
                  href="https://blog.jotech.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 px-5 py-2.5 text-xs font-semibold text-white shadow-md shadow-indigo-600/20 transition-all duration-200"
                >
                  <span>Read the Blog</span>
                  <span className="cta-arrow">→</span>
                </a>
              </div>
            </div>

            {/* Right Editorial / Code Window Mockup */}
            <div className="lg:col-span-6">
              <div className="product-mockup-wrapper rounded-xl border border-[var(--line)] bg-[var(--bg-base)] p-4 sm:p-5 shadow-inner">
                {/* Browser bar */}
                <div className="flex items-center justify-between border-b border-[var(--line-subtle)] pb-2.5 mb-3 text-[0.68rem] font-mono text-[var(--sea-ink-muted)]">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                    <span className="ml-2 text-[var(--sea-ink-soft)]">
                      blog.jotech.in/system-design
                    </span>
                  </div>
                  <span className="text-indigo-400">Article Snapshot</span>
                </div>

                {/* Article Header Card */}
                <div className="rounded-lg border border-[var(--line-subtle)] bg-[var(--surface)] p-3.5 mb-3">
                  <div className="flex items-center gap-2 mono-meta text-[0.6rem] text-indigo-400 mb-1">
                    <span>SYSTEM ARCHITECTURE</span>
                    <span>·</span>
                    <span>5 MIN READ</span>
                  </div>
                  <h4 className="text-sm font-bold text-[var(--sea-ink)] leading-snug">
                    Designing Low-Latency Event Streams with TanStack Start &
                    Nitro
                  </h4>
                  <p className="text-xs text-[var(--sea-ink-soft)] mt-1 line-clamp-2">
                    Pragmatic patterns for idempotent event processing,
                    distributed caching, and sub-100ms API response times.
                  </p>
                </div>

                {/* Code Window */}
                <div className="rounded-lg border border-[var(--line-subtle)] bg-[#050607] p-3 font-mono text-[0.7rem] text-slate-300">
                  <div className="text-slate-500 mb-1 text-[0.6rem] flex justify-between">
                    <span>pipeline.ts</span>
                    <span className="text-indigo-400">TypeScript</span>
                  </div>
                  <pre className="overflow-x-auto m-0">
                    <code>
                      <span className="text-indigo-400">
                        export async function
                      </span>{' '}
                      <span className="text-slate-200 font-semibold">
                        handleProductEvent
                      </span>
                      (<span className="text-slate-400">event:</span>{' '}
                      <span className="text-indigo-300">SystemEvent</span>)
                      &#123;{'\n'}
                      {'  '}
                      <span className="text-indigo-400">const</span> &#123;
                      traceId &#125; ={' '}
                      <span className="text-indigo-400">await</span> event.
                      <span className="text-slate-200">validate</span>();{'\n'}
                      {'  '}
                      <span className="text-indigo-400">return</span>{' '}
                      <span className="text-emerald-400">
                        `OK: $&#123;traceId&#125;`
                      </span>
                      ;{'\n'}
                      &#125;
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
