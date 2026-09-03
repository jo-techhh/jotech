import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import Footer from '../components/Footer'
import Header from '../components/Header'

import appCss from '../styles.css?url'

const THEME_INIT_SCRIPT = `(function(){try{var stored=window.localStorage.getItem('theme');var mode=(stored==='light'||stored==='dark')?stored:'light';var root=document.documentElement;root.classList.remove('dark');root.classList.add(mode);root.setAttribute('data-theme',mode);root.style.colorScheme=mode;}catch(e){}})();`

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'JoTech — Products Built with Purpose | Modern Software Studio',
      },
      {
        name: 'description',
        content:
          'JoTech is an independent software ecosystem created by Jobi S S. Explore our practical digital products: Weekly Planner, PocketFlow, and the Jotech Engineering Blog.',
      },
      {
        name: 'keywords',
        content:
          'jotech, jobi s s, weekly planner, pocketflow, jotech blog, software engineering, digital products, productivity planner, personal finance app, system design, modern web applications, founder-led software studio',
      },
      {
        name: 'author',
        content: 'Jobi S S',
      },
      {
        name: 'publisher',
        content: 'JoTech',
      },
      {
        name: 'robots',
        content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
      },
      {
        name: 'theme-color',
        content: '#ffffff',
      },
      /* Open Graph / Facebook */
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:site_name',
        content: 'JoTech',
      },
      {
        property: 'og:title',
        content: 'JoTech — Products Built with Purpose | Modern Software Studio',
      },
      {
        property: 'og:description',
        content:
          'Discover practical digital products, tools, and system engineering insights built under the Jotech ecosystem by founder Jobi S S.',
      },
      {
        property: 'og:url',
        content: 'https://jotech.in/',
      },
      {
        property: 'og:locale',
        content: 'en_US',
      },
      /* Twitter Card */
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:title',
        content: 'JoTech — Products Built with Purpose',
      },
      {
        name: 'twitter:description',
        content:
          'Independent software ecosystem engineered by Jobi S S: Weekly Planner, PocketFlow, and the Jotech Blog.',
      },
      {
        name: 'twitter:creator',
        content: '@jobiss',
      },
      {
        property: 'og:image',
        content: 'https://jotech.in/logo.svg',
      },
    ],
    links: [
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: '/favicon.svg',
      },
      {
        rel: 'alternate icon',
        href: '/favicon.ico',
      },
      {
        rel: 'apple-touch-icon',
        href: '/favicon.svg',
      },
      {
        rel: 'canonical',
        href: 'https://jotech.in/',
      },
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
})

const SCHEMA_ORG_GRAPH = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://jobiss.jotech.in/#person',
      name: 'Jobi S S',
      url: 'https://jobiss.jotech.in',
      jobTitle: 'Founder & Software Systems Engineer',
      worksFor: {
        '@id': 'https://jotech.in/#organization',
      },
      description:
        'Founder and creator of the Jotech software ecosystem, engineering digital products and exploring modern application architectures.',
      knowsAbout: [
        'Software Engineering',
        'Full-Stack Web Development',
        'Cloud Architecture',
        'System Design',
        'Distributed Systems',
        'AI Toolchains',
        'TypeScript',
        'React',
        'Python',
      ],
      sameAs: ['https://jobiss.jotech.in'],
    },
    {
      '@type': 'Organization',
      '@id': 'https://jotech.in/#organization',
      name: 'JoTech',
      legalName: 'JoTech Solutions',
      url: 'https://jotech.in',
      logo: 'https://jotech.in/logo.svg',
      slogan: 'Products built with purpose.',
      founder: {
        '@id': 'https://jobiss.jotech.in/#person',
      },
      description:
        'Independent software studio and digital product ecosystem founded by Jobi S S, dedicated to engineering resilient digital tools and cloud solutions.',
      knowsAbout: [
        'Web Application Development',
        'Cloud Infrastructure',
        'DevOps & CI/CD',
        'AI Automation',
        'Productivity Software',
        'Personal Finance Software',
      ],
      makesOffer: [
        { '@id': 'https://weekly-planner.jotech.in/#software' },
        { '@id': 'https://pocket-flow.jotech.in/#software' },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://jotech.in/#website',
      url: 'https://jotech.in/',
      name: 'JoTech',
      headline: 'JoTech — Products Built with Purpose',
      publisher: {
        '@id': 'https://jotech.in/#organization',
      },
      creator: {
        '@id': 'https://jobiss.jotech.in/#person',
      },
      inLanguage: 'en-US',
      description:
        'Official home and product ecosystem for JoTech applications and tools.',
    },
    {
      '@type': 'WebPage',
      '@id': 'https://jotech.in/#webpage',
      url: 'https://jotech.in/',
      name: 'JoTech — Products Built with Purpose | Modern Software Studio',
      isPartOf: {
        '@id': 'https://jotech.in/#website',
      },
      about: {
        '@id': 'https://jotech.in/#organization',
      },
      mainEntity: {
        '@id': 'https://jotech.in/#products-list',
      },
      description:
        'Explore practical digital products built under the JoTech ecosystem: Weekly Planner, PocketFlow, and the Jotech Blog.',
    },
    {
      '@type': 'ItemList',
      '@id': 'https://jotech.in/#products-list',
      name: 'JoTech Featured Products Collection',
      description:
        'Collection of practical digital products, tools, and platforms built and maintained under the Jotech ecosystem.',
      numberOfItems: 3,
      itemListOrder: 'https://schema.org/ItemListOrderAscending',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Weekly Planner',
          item: {
            '@id': 'https://weekly-planner.jotech.in/#software',
          },
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'PocketFlow',
          item: {
            '@id': 'https://pocket-flow.jotech.in/#software',
          },
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Jotech Blog',
          item: {
            '@id': 'https://blog.jotech.in/#blog',
          },
        },
      ],
    },
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://weekly-planner.jotech.in/#software',
      name: 'Weekly Planner',
      alternateName: 'JoTech Weekly Planner',
      url: 'https://weekly-planner.jotech.in',
      applicationCategory: 'https://schema.org/BusinessApplication',
      operatingSystem: 'Web, All modern browsers (Chrome, Firefox, Safari, Edge)',
      author: {
        '@id': 'https://jobiss.jotech.in/#person',
      },
      creator: {
        '@id': 'https://jotech.in/#organization',
      },
      maintainer: {
        '@id': 'https://jobiss.jotech.in/#person',
      },
      description:
        'A simple and focused weekly planning application designed to help you organize tasks, priorities, and goals in one place.',
      keywords:
        'weekly planner, online weekly planner, productivity planner, weekly task planner, digital weekly planner, weekly planning tool',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
      featureList: [
        'Weekly calendar layout with active today highlights',
        'Task management and completion checkoffs',
        'Priority categorization (High, Medium, Low)',
        'Weekly goal progress tracking',
        'Deep-work focus time blocks',
      ],
    },
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://pocket-flow.jotech.in/#software',
      name: 'PocketFlow',
      alternateName: 'JoTech PocketFlow',
      url: 'https://pocket-flow.jotech.in',
      applicationCategory: 'https://schema.org/FinanceApplication',
      operatingSystem: 'Web, All modern browsers (Chrome, Firefox, Safari, Edge)',
      author: {
        '@id': 'https://jobiss.jotech.in/#person',
      },
      creator: {
        '@id': 'https://jotech.in/#organization',
      },
      maintainer: {
        '@id': 'https://jobiss.jotech.in/#person',
      },
      description:
        'PocketFlow is a personal finance application designed to help users track expenses, understand spending patterns, and manage their financial activity with clarity.',
      keywords:
        'personal finance app, expense tracker, expense management, personal expense tracker, finance management app, spending tracker',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
      featureList: [
        'Real-time cash flow monitoring',
        'Monthly inflow vs outflow tracking',
        'Categorized expense allocation charts',
        'Transaction ledger with deposit/withdrawal indicators',
        'Budget discipline and spending analysis',
      ],
    },
    {
      '@type': 'Blog',
      '@id': 'https://blog.jotech.in/#blog',
      name: 'Jotech Blog',
      url: 'https://blog.jotech.in',
      headline: 'Ideas, engineering, and things worth building.',
      description:
        'The Jotech Blog shares practical insights about software engineering, system design, application architecture, AI, development, and lessons learned while building products.',
      keywords:
        'software engineering blog, system design, software architecture, backend development, AI engineering, programming, application development',
      about: [
        { '@type': 'Thing', name: 'Software Engineering' },
        { '@type': 'Thing', name: 'System Design' },
        { '@type': 'Thing', name: 'Cloud Architecture' },
        { '@type': 'Thing', name: 'AI Engineering' },
      ],
      publisher: {
        '@id': 'https://jotech.in/#organization',
      },
      author: {
        '@id': 'https://jobiss.jotech.in/#person',
      },
      inLanguage: 'en-US',
    },
  ],
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_ORG_GRAPH) }}
        />
        <HeadContent />
      </head>
      <body className="font-sans antialiased [overflow-wrap:anywhere] selection:bg-[rgba(79,184,178,0.24)]">
        <Header />
        {children}
        <Footer />
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
