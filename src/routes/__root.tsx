import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import Footer from '../components/Footer'
import Header from '../components/Header'

import appCss from '../styles.css?url'

const THEME_INIT_SCRIPT = `(function(){try{var stored=window.localStorage.getItem('theme');var mode=(stored==='light'||stored==='dark')?stored:'dark';var root=document.documentElement;root.classList.remove('light','dark');root.classList.add(mode);root.setAttribute('data-theme',mode);root.style.colorScheme=mode;}catch(e){}})();`

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
        title: 'JoTech — Independent Software, AI & Engineering by Jobi S S',
      },
      {
        name: 'description',
        content:
          'JoTech is an independent software ecosystem by Jobi S S, building practical products, AI applications, backend systems and modern engineering solutions.',
      },
      {
        name: 'keywords',
        content:
          'jotech, jobi s s, independent software builder, python backend development, fastapi, ai application development, model context protocol mcp, systems architecture, cloud infrastructure, weekly planner, pocketflow, software ecosystem',
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
        content:
          'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
      },
      {
        name: 'theme-color',
        content: '#08090a',
      },
      /* Open Graph / Social */
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
        content: 'JoTech — Independent Software, AI & Engineering by Jobi S S',
      },
      {
        property: 'og:description',
        content:
          'JoTech is an independent software ecosystem by Jobi S S, building practical products, AI applications, backend systems and modern engineering solutions.',
      },
      {
        property: 'og:url',
        content: 'https://www.jotech.in/',
      },
      {
        property: 'og:locale',
        content: 'en_US',
      },
      {
        property: 'og:image',
        content: 'https://www.jotech.in/logo.svg',
      },
      /* Twitter Card */
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:title',
        content: 'JoTech — Independent Software, AI & Engineering by Jobi S S',
      },
      {
        name: 'twitter:description',
        content:
          'JoTech is an independent software ecosystem by Jobi S S, building practical products, AI applications, backend systems and modern engineering solutions.',
      },
      {
        name: 'twitter:creator',
        content: '@jobiss',
      },
      {
        name: 'twitter:image',
        content: 'https://www.jotech.in/logo.svg',
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
        href: 'https://www.jotech.in/',
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
      jobTitle: 'Founder, Systems Engineer & Independent Builder',
      worksFor: {
        '@id': 'https://www.jotech.in/#organization',
      },
      description:
        'Founder and independent software builder behind JoTech, engineering practical products, backend systems, and AI workflows.',
      knowsAbout: [
        'Software Engineering',
        'Backend Systems',
        'Python',
        'FastAPI',
        'React',
        'TypeScript',
        'PostgreSQL',
        'Model Context Protocol (MCP)',
        'AI Engineering',
        'Cloud Infrastructure & Docker',
        'Distributed Systems',
      ],
      sameAs: [
        'https://jobiss.jotech.in',
        'https://github.com/jobiss',
        'https://linkedin.com/in/jobiss',
      ],
    },
    {
      '@type': 'Organization',
      '@id': 'https://www.jotech.in/#organization',
      name: 'JoTech',
      url: 'https://www.jotech.in',
      logo: 'https://www.jotech.in/logo.svg',
      slogan: 'Independent software. Practical engineering.',
      founder: {
        '@id': 'https://jobiss.jotech.in/#person',
      },
      description:
        'JoTech is an independent software ecosystem built by Jobi S S, focused on practical digital products, AI automation, and reliable backend systems.',
      makesOffer: [
        { '@id': 'https://weekly-planner.jotech.in/#software' },
        { '@id': 'https://pocket-flow.jotech.in/#software' },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.jotech.in/#website',
      url: 'https://www.jotech.in/',
      name: 'JoTech',
      headline: 'JoTech — Independent Software, AI & Engineering by Jobi S S',
      publisher: {
        '@id': 'https://www.jotech.in/#organization',
      },
      creator: {
        '@id': 'https://jobiss.jotech.in/#person',
      },
      inLanguage: 'en-US',
      description:
        'Official home of the JoTech independent software ecosystem.',
    },
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://weekly-planner.jotech.in/#software',
      name: 'Weekly Planner',
      alternateName: 'JoTech Weekly Planner',
      url: 'https://weekly-planner.jotech.in',
      applicationCategory: 'https://schema.org/BusinessApplication',
      operatingSystem: 'Web, All modern browsers',
      author: {
        '@id': 'https://jobiss.jotech.in/#person',
      },
      creator: {
        '@id': 'https://www.jotech.in/#organization',
      },
      description:
        'Plan your week, organize priorities and focus on what actually matters without cognitive clutter.',
    },
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://pocket-flow.jotech.in/#software',
      name: 'PocketFlow',
      alternateName: 'JoTech PocketFlow',
      url: 'https://pocket-flow.jotech.in',
      applicationCategory: 'https://schema.org/FinanceApplication',
      operatingSystem: 'Web, All modern browsers',
      author: {
        '@id': 'https://jobiss.jotech.in/#person',
      },
      creator: {
        '@id': 'https://www.jotech.in/#organization',
      },
      description:
        'Understand your money, track transactions and stay in control of your financial flow.',
    },
    {
      '@type': 'Blog',
      '@id': 'https://blog.jotech.in/#blog',
      name: 'JoTech Blog',
      url: 'https://blog.jotech.in',
      headline: 'Practical engineering notes, software architecture & AI.',
      publisher: {
        '@id': 'https://www.jotech.in/#organization',
      },
      author: {
        '@id': 'https://jobiss.jotech.in/#person',
      },
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
      <body className="font-sans antialiased selection:bg-indigo-500/30 selection:text-white">
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
