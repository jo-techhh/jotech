export default function FeaturedProducts() {
  return (
    <section
      id="products"
      aria-labelledby="featured-products"
      className="mt-20 scroll-mt-24 sm:mt-28"
    >
      {/* Section Header */}
      <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/80 px-3.5 py-1 text-xs font-bold tracking-wide text-blue-700 shadow-xs dark:border-blue-900/50 dark:bg-blue-950/50 dark:text-blue-300">
            <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
            Independent Product Ecosystem
          </div>
          <h2
            id="featured-products"
            className="display-title mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-white"
          >
            Products built with purpose.
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed sm:text-lg dark:text-slate-300">
            A growing collection of practical digital products, tools, and ideas built and maintained under the Jotech ecosystem.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start rounded-full border border-slate-200/80 bg-white/80 px-4 py-2 text-xs font-semibold text-slate-700 shadow-xs md:self-end dark:border-white/10 dark:bg-[#0f1724]/80 dark:text-slate-300">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          <span>Active & Maintained</span>
        </div>
      </div>

      {/* Products Grid - Asymmetric Bento Layout */}
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Product 1: Weekly Planner */}
        <article
          className="product-card group flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white/95 p-6 sm:p-8 shadow-sm transition-all duration-300 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/10 dark:border-white/10 dark:bg-[#0f1724]/90 backdrop-blur-xl"
          aria-label="Weekly Planner productivity planning dashboard"
        >
          <div>
            {/* Badges & Meta */}
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600 text-lg border border-blue-100 dark:bg-blue-950/50 dark:border-blue-900/50">
                  📅
                </span>
                <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-[0.7rem] font-bold uppercase tracking-wider text-slate-600 dark:border-white/10 dark:bg-slate-800/80 dark:text-slate-300">
                  Productivity
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200/60 px-2.5 py-0.5 text-[0.7rem] font-bold text-emerald-700 dark:bg-emerald-950/40 dark:border-emerald-900/40 dark:text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Live Web App
              </span>
            </div>

            {/* Product Title & Tagline */}
            <h3 className="display-title text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
              Weekly Planner
            </h3>
            <p className="mt-1 font-semibold text-blue-600 text-sm sm:text-base dark:text-blue-400">
              Plan your week. Focus on what matters.
            </p>

            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              A simple and focused weekly planning application designed to help you organize tasks, priorities, and goals in one place. Streamline your productivity without the cognitive bloat.
            </p>

            {/* SEO Keywords tags */}
            <div className="mt-4 flex flex-wrap gap-1.5 text-[0.68rem]">
              {['weekly planner', 'productivity planner', 'weekly task planner', 'digital weekly planner'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-slate-200/80 bg-slate-50/80 px-2 py-0.5 text-slate-600 dark:border-white/10 dark:bg-slate-800/60 dark:text-slate-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Browser / UI Mockup */}
          <div className="product-mockup-wrapper relative mt-6 rounded-2xl border border-slate-200/90 bg-slate-50/60 p-3 sm:p-4 shadow-inner dark:border-white/10 dark:bg-[#090d14]/90">
            {/* Window Chrome Header */}
            <div className="mb-3 flex items-center justify-between border-b border-slate-200/80 pb-2.5 dark:border-white/10">
              <div className="flex items-center gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <span className="ml-2 hidden font-mono text-[0.7rem] font-medium text-slate-500 sm:inline dark:text-slate-400">
                  weekly-zen-planner.jotech.in
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[0.65rem] font-bold">
                <span className="rounded bg-white px-2 py-0.5 border border-slate-200 text-slate-600 shadow-2xs dark:bg-[#131b2a] dark:border-white/10 dark:text-slate-300">
                  Week 36
                </span>
                <span className="rounded bg-blue-100 px-2 py-0.5 text-blue-700 font-bold dark:bg-blue-950 dark:text-blue-300">
                  Today
                </span>
              </div>
            </div>

            {/* Mini Weekly Strip */}
            <div className="grid grid-cols-7 gap-1.5 text-center mb-3">
              {[
                { day: 'M', date: '01', active: false },
                { day: 'T', date: '02', active: true },
                { day: 'W', date: '03', active: false },
                { day: 'T', date: '04', active: false },
                { day: 'F', date: '05', active: false },
                { day: 'S', date: '06', active: false },
                { day: 'S', date: '07', active: false },
              ].map((item) => (
                <div
                  key={item.day + item.date}
                  className={`rounded-xl py-1.5 text-center transition ${
                    item.active
                      ? 'bg-blue-600 text-white font-bold shadow-sm shadow-blue-500/20'
                      : 'bg-white text-slate-600 border border-slate-200/70 hover:bg-slate-50 dark:bg-[#131b2a] dark:border-white/10 dark:text-slate-300'
                  }`}
                >
                  <div className="text-[0.6rem] uppercase opacity-75">{item.day}</div>
                  <div className="text-[0.75rem] font-bold">{item.date}</div>
                </div>
              ))}
            </div>

            {/* Tasks Dashboard View */}
            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between rounded-xl border border-emerald-200/80 bg-white px-3 py-2 shadow-2xs dark:border-emerald-900/50 dark:bg-[#131b2a]">
                <div className="flex items-center gap-2">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-[9px] text-white font-bold">
                    ✓
                  </span>
                  <span className="line-through text-slate-400 font-medium text-[0.75rem] dark:text-slate-500">
                    Ship production build v2.4
                  </span>
                </div>
                <span className="rounded-md bg-emerald-50 px-1.5 py-0.5 text-[0.62rem] font-bold text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300">
                  Done
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl border border-slate-200/80 bg-white px-3 py-2 shadow-2xs dark:border-white/10 dark:bg-[#131b2a]">
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full border-2 border-blue-600" />
                  <span className="font-semibold text-slate-800 text-[0.75rem] dark:text-white">
                    Architecture review & benchmarks
                  </span>
                </div>
                <span className="rounded-md bg-amber-50 border border-amber-200/60 px-1.5 py-0.5 text-[0.62rem] font-bold text-amber-700 dark:bg-amber-950/50 dark:border-amber-900/50 dark:text-amber-300">
                  Priority High
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl border border-slate-200/80 bg-white px-3 py-2 shadow-2xs dark:border-white/10 dark:bg-[#131b2a]">
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full border border-slate-300 dark:border-slate-600" />
                  <span className="text-slate-600 text-[0.75rem] dark:text-slate-300">
                    Deep Work Block (10:00 - 12:30)
                  </span>
                </div>
                <span className="rounded-md bg-slate-100 px-1.5 py-0.5 text-[0.62rem] text-slate-600 font-medium dark:bg-slate-800 dark:text-slate-300">
                  Focus
                </span>
              </div>
            </div>

            {/* Weekly Goal Progress Bar */}
            <div className="mt-3 border-t border-slate-200/80 pt-2 text-[0.7rem] dark:border-white/10">
              <div className="flex justify-between font-semibold text-slate-600 mb-1 dark:text-slate-300">
                <span>Weekly Objectives</span>
                <span className="text-emerald-600 font-bold dark:text-emerald-400">75% Completed</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200/80 dark:bg-slate-800">
                <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500" />
              </div>
            </div>
          </div>

          {/* Card CTA */}
          <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/10">
            <a
              href="https://weekly-zen-planner.jotech.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-blue-600 transition group-hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
              aria-label="Explore Weekly Planner - Opens in a new tab"
            >
              <span>Explore Weekly Planner</span>
              <span className="cta-arrow text-base">→</span>
            </a>
          </div>
        </article>

        {/* Product 2: PocketFlow */}
        <article
          className="product-card group flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white/95 p-6 sm:p-8 shadow-sm transition-all duration-300 hover:border-emerald-400 hover:shadow-xl hover:shadow-emerald-500/10 dark:border-white/10 dark:bg-[#0f1724]/90 backdrop-blur-xl"
          aria-label="PocketFlow personal finance and expense tracking dashboard"
        >
          <div>
            {/* Badges & Meta */}
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 text-lg border border-emerald-100 dark:bg-emerald-950/50 dark:border-emerald-900/50">
                  💳
                </span>
                <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-[0.7rem] font-bold uppercase tracking-wider text-slate-600 dark:border-white/10 dark:bg-slate-800/80 dark:text-slate-300">
                  Personal Finance
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200/60 px-2.5 py-0.5 text-[0.7rem] font-bold text-emerald-700 dark:bg-emerald-950/40 dark:border-emerald-900/40 dark:text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Live Web App
              </span>
            </div>

            {/* Product Title & Tagline */}
            <h3 className="display-title text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
              PocketFlow
            </h3>
            <p className="mt-1 font-semibold text-emerald-600 text-sm sm:text-base dark:text-emerald-400">
              Understand your money. Control your flow.
            </p>

            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              PocketFlow is a personal finance application designed to help users track expenses, understand spending patterns, and manage their financial activity with clarity and total privacy.
            </p>

            {/* SEO Keywords tags */}
            <div className="mt-4 flex flex-wrap gap-1.5 text-[0.68rem]">
              {['personal finance app', 'expense tracker', 'spending tracker', 'expense management'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-slate-200/80 bg-slate-50/80 px-2 py-0.5 text-slate-600 dark:border-white/10 dark:bg-slate-800/60 dark:text-slate-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Finance Dashboard Mockup */}
          <div className="product-mockup-wrapper relative mt-6 rounded-2xl border border-slate-200/90 bg-slate-50/60 p-3 sm:p-4 shadow-inner dark:border-white/10 dark:bg-[#090d14]/90">
            {/* Window Chrome */}
            <div className="mb-3 flex items-center justify-between border-b border-slate-200/80 pb-2.5 dark:border-white/10">
              <div className="flex items-center gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <span className="ml-2 hidden font-mono text-[0.7rem] font-medium text-slate-500 sm:inline dark:text-slate-400">
                  pocket-flow.jotech.in
                </span>
              </div>
              <span className="rounded-md bg-white border border-slate-200 px-2 py-0.5 text-[0.65rem] font-bold text-slate-700 shadow-2xs dark:bg-[#131b2a] dark:border-white/10 dark:text-slate-300">
                Net Cash Flow
              </span>
            </div>

            {/* Financial Overview Card */}
            <div className="grid grid-cols-2 gap-2 mb-3">
              <div className="rounded-xl border border-slate-200/80 bg-white p-3 shadow-2xs dark:border-white/10 dark:bg-[#131b2a]">
                <div className="text-[0.62rem] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Monthly Inflow
                </div>
                <div className="mt-1 text-lg font-extrabold text-slate-900 dark:text-white">
                  $8,450.00
                </div>
                <div className="text-[0.62rem] font-bold text-emerald-600 dark:text-emerald-400">
                  ↑ +14.2% vs last mo
                </div>
              </div>

              <div className="rounded-xl border border-slate-200/80 bg-white p-3 shadow-2xs dark:border-white/10 dark:bg-[#131b2a]">
                <div className="text-[0.62rem] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Total Expenses
                </div>
                <div className="mt-1 text-lg font-extrabold text-slate-900 dark:text-white">
                  $3,120.40
                </div>
                <div className="text-[0.62rem] font-medium text-slate-500 dark:text-slate-400">
                  Under budget (37%)
                </div>
              </div>
            </div>

            {/* Visual Expense Breakdown */}
            <div className="rounded-xl border border-slate-200/80 bg-white p-3 shadow-2xs mb-3 dark:border-white/10 dark:bg-[#131b2a]">
              <div className="flex justify-between text-[0.65rem] font-bold text-slate-600 mb-1.5 dark:text-slate-300">
                <span>Expense Categories</span>
                <span className="text-slate-500 dark:text-slate-400">4 Active Allocations</span>
              </div>
              <div className="flex h-2.5 w-full overflow-hidden rounded-full gap-0.5">
                <div className="h-full bg-blue-500" style={{ width: '40%' }} title="Infrastructure: 40%" />
                <div className="h-full bg-emerald-500" style={{ width: '30%' }} title="Living: 30%" />
                <div className="h-full bg-indigo-500" style={{ width: '20%' }} title="Savings: 20%" />
                <div className="h-full bg-amber-500" style={{ width: '10%' }} title="Tools: 10%" />
              </div>
              <div className="mt-2 flex justify-between text-[0.62rem] text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1 font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500" /> Infra (40%)
                </span>
                <span className="flex items-center gap-1 font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Living (30%)
                </span>
                <span className="flex items-center gap-1 font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" /> Savings (20%)
                </span>
              </div>
            </div>

            {/* Recent Transaction Feed */}
            <div className="space-y-1.5 text-xs">
              <div className="flex items-center justify-between rounded-xl bg-white px-3 py-2 border border-slate-200/80 shadow-2xs dark:border-white/10 dark:bg-[#131b2a]">
                <div className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-lg bg-emerald-100 text-[10px] text-emerald-700 font-bold dark:bg-emerald-950 dark:text-emerald-300">
                    ↓
                  </span>
                  <div>
                    <div className="text-[0.72rem] font-bold text-slate-900 dark:text-white">Client Project Retainer</div>
                    <div className="text-[0.6rem] text-slate-500 dark:text-slate-400">Direct Deposit · Today</div>
                  </div>
                </div>
                <div className="text-[0.75rem] font-bold text-emerald-600 dark:text-emerald-400">
                  +$3,500.00
                </div>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-white px-3 py-2 border border-slate-200/80 shadow-2xs dark:border-white/10 dark:bg-[#131b2a]">
                <div className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-lg bg-slate-100 text-[10px] text-slate-600 font-bold dark:bg-slate-800 dark:text-slate-300">
                    ↑
                  </span>
                  <div>
                    <div className="text-[0.72rem] font-bold text-slate-900 dark:text-white">Cloud Infrastructure (AWS)</div>
                    <div className="text-[0.6rem] text-slate-500 dark:text-slate-400">DevOps Server · Yesterday</div>
                  </div>
                </div>
                <div className="text-[0.75rem] font-bold text-slate-700 dark:text-slate-200">
                  -$184.20
                </div>
              </div>
            </div>
          </div>

          {/* Card CTA */}
          <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/10">
            <a
              href="https://pocket-flow.jotech.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-emerald-600 transition group-hover:text-emerald-600 dark:text-white dark:hover:text-emerald-400"
              aria-label="Explore PocketFlow - Opens in a new tab"
            >
              <span>Explore PocketFlow</span>
              <span className="cta-arrow text-base">→</span>
            </a>
          </div>
        </article>
      </div>

      {/* Product 3: Jotech Blog (Wide Horizontal Bento Card) */}
      <article
        className="product-card group mt-8 rounded-3xl border border-slate-200/90 bg-white/95 p-6 sm:p-8 shadow-sm transition-all duration-300 hover:border-purple-400 hover:shadow-xl hover:shadow-purple-500/10 dark:border-white/10 dark:bg-[#0f1724]/90 backdrop-blur-xl"
        aria-label="Jotech Blog software engineering articles"
      >
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Context & Positioning */}
          <div className="lg:col-span-6">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-purple-50 text-purple-600 text-lg border border-purple-100 dark:bg-purple-950/50 dark:border-purple-900/50">
                  ✍️
                </span>
                <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-[0.7rem] font-bold uppercase tracking-wider text-slate-600 dark:border-white/10 dark:bg-slate-800/80 dark:text-slate-300">
                  Engineering Knowledge
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-50 border border-purple-200/60 px-2.5 py-0.5 text-[0.7rem] font-bold text-purple-700 dark:bg-purple-950/40 dark:border-purple-900/40 dark:text-purple-300">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                Technical Publication
              </span>
            </div>

            <h3 className="display-title text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
              Jotech Blog
            </h3>
            <p className="mt-1 font-semibold text-purple-600 text-base dark:text-purple-400">
              Ideas, engineering, and things worth building.
            </p>

            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              The Jotech Blog shares practical insights about software engineering, system design, application architecture, AI, development, and lessons learned while building products in production.
            </p>

            {/* SEO Keywords tags */}
            <div className="mt-4 flex flex-wrap gap-1.5 text-[0.68rem]">
              {[
                'software engineering blog',
                'system design',
                'software architecture',
                'backend development',
                'AI engineering',
                'programming',
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-slate-200/80 bg-slate-50/80 px-2 py-0.5 text-slate-600 dark:border-white/10 dark:bg-slate-800/60 dark:text-slate-300"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/10">
              <a
                href="https://blog.jotech.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-purple-600 transition group-hover:text-purple-600 dark:text-white dark:hover:text-purple-400"
                aria-label="Read the Jotech Blog - Opens in a new tab"
              >
                <span>Read the Jotech Blog</span>
                <span className="cta-arrow text-base">→</span>
              </a>
            </div>
          </div>

          {/* Right Column: Code & Article Visual Mockup */}
          <div className="lg:col-span-6">
            <div className="product-mockup-wrapper rounded-2xl border border-slate-200/90 bg-slate-50/70 p-3 sm:p-5 shadow-inner dark:border-white/10 dark:bg-[#090d14]/90">
              {/* Browser bar */}
              <div className="mb-3 flex items-center justify-between border-b border-slate-200/80 pb-2.5 dark:border-white/10">
                <div className="flex items-center gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  <span className="ml-2 font-mono text-[0.68rem] text-slate-500 dark:text-slate-400">
                    blog.jotech.in/system-design/event-streams
                  </span>
                </div>
                <span className="rounded-md bg-white px-2 py-0.5 text-[0.62rem] font-bold text-slate-600 border border-slate-200 shadow-2xs dark:bg-[#131b2a] dark:border-white/10 dark:text-slate-300">
                  5 min read
                </span>
              </div>

              {/* Article Preview Card */}
              <div className="rounded-xl border border-slate-200/80 bg-white p-3.5 sm:p-4 mb-3 shadow-2xs dark:border-white/10 dark:bg-[#131b2a]">
                <div className="flex items-center gap-2 text-[0.65rem] font-bold text-purple-600 mb-1 uppercase tracking-wider dark:text-purple-400">
                  <span>Architecture Deep Dive</span>
                  <span>•</span>
                  <span>By Jobi S S</span>
                </div>
                <h4 className="font-bold text-sm sm:text-base text-slate-900 leading-snug dark:text-white">
                  Designing Low-Latency Event-Driven Microservices with TanStack Start & Nitro
                </h4>
                <p className="mt-1.5 text-xs text-slate-600 line-clamp-2 dark:text-slate-300">
                  Exploring real-world distributed architectures, idempotent processing patterns, and resilient event pipelines built for horizontal scale.
                </p>
              </div>

              {/* Modern Dark-Themed Syntax Highlighting Code Window */}
              <div className="rounded-xl border border-slate-800 bg-[#080d14] p-3.5 sm:p-4 text-xs font-mono shadow-md dark:border-white/10">
                <div className="flex items-center justify-between text-[0.62rem] text-slate-400 border-b border-slate-800 pb-2 mb-2">
                  <span className="font-semibold text-slate-300">pipeline.ts</span>
                  <span className="text-blue-400">TypeScript</span>
                </div>
                <pre className="overflow-x-auto text-[0.72rem] leading-relaxed text-slate-200">
                  <code>
                    <span className="text-blue-400 font-bold">export async function</span>{' '}
                    <span className="text-indigo-300 font-semibold">handleEventStream</span>(
                    <span className="text-slate-400">event:</span>{' '}
                    <span className="text-purple-300 font-medium">ProductEvent</span>
                    ) &#123;{'\n'}
                    {'  '}
                    <span className="text-blue-400 font-bold">const</span> &#123; traceId, payload &#125; =
                    <span className="text-blue-400 font-bold"> await</span> event.
                    <span className="text-indigo-300">verify</span>();{'\n'}
                    {'  '}
                    <span className="text-blue-400 font-bold">return</span> telemetry.
                    <span className="text-indigo-300">span</span>(
                    <span className="text-emerald-400">'jotech.pipeline'</span>, &#123; traceId &#125;,
                    () =&gt; &#123;{'\n'}
                    {'    '}
                    <span className="text-blue-400 font-bold">return</span> db.
                    <span className="text-slate-200">transactions</span>.
                    <span className="text-indigo-300">ingest</span>(payload);{'\n'}
                    {'  '}&#125;);{'\n'}
                    &#125;
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Founder / Owner Spotlight Card */}
      <div className="mt-8 rounded-3xl border border-slate-200/90 bg-white/95 p-6 sm:p-8 shadow-sm dark:border-white/10 dark:bg-[#0f1724]/90 backdrop-blur-xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-xl font-extrabold text-white shadow-md shadow-blue-500/25">
              <span>J</span>
              <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 border-2 border-white dark:border-[#0f1724]">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
              </span>
            </div>

            <div>
              <div className="inline-flex items-center gap-2">
                <h3 className="display-title text-xl font-bold text-slate-900 sm:text-2xl dark:text-white">
                  Built by Jobi S S
                </h3>
                <span className="rounded-full bg-slate-100 border border-slate-200 px-2.5 py-0.5 text-[0.68rem] font-bold text-slate-700 dark:bg-slate-800 dark:border-white/10 dark:text-slate-200">
                  Founder & Systems Engineer
                </span>
              </div>
              <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                Jotech is an independent software ecosystem created and maintained by <strong>Jobi S S</strong>, focused on building practical digital products, experimenting with modern technology, and sharing what is learned along the way.
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 dark:text-slate-400">
                <span className="font-mono text-[0.72rem] text-blue-600 font-semibold dark:text-blue-400">
                  Jobi S S &rarr; Jotech &rarr; Weekly Planner · PocketFlow · Jotech Blog
                </span>
              </div>
            </div>
          </div>

          <div className="sm:shrink-0">
            <a
              href="https://jobiss.jotech.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-500 px-6 py-2.5 text-xs font-bold text-white no-underline shadow-md shadow-blue-500/20 transition hover:-translate-y-0.5 cursor-pointer"
              aria-label="Meet the Builder Jobi S S - Opens jobiss.jotech.in in a new tab"
            >
              <span>Meet the Builder</span>
              <span className="text-sm">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
