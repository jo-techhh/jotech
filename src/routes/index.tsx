import { createFileRoute } from '@tanstack/react-router'
import Hero from '../components/Hero'
import Ecosystem from '../components/Ecosystem'
import FeaturedProducts from '../components/FeaturedProducts'
import CurrentlyBuilding from '../components/CurrentlyBuilding'
import Capabilities from '../components/Capabilities'
import TechnologyStack from '../components/TechnologyStack'
import Founder from '../components/Founder'
import EngineeringNotes from '../components/EngineeringNotes'
import SEOContent from '../components/SEOContent'
import FinalCTA from '../components/FinalCTA'

export const Route = createFileRoute('/')({ component: HomePage })

function HomePage() {
  return (
    <main className="min-h-screen">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. JoTech Ecosystem Visualization */}
      <Ecosystem />

      {/* 3. Products Section (Weekly Planner, PocketFlow, JoTech Blog) */}
      <FeaturedProducts />

      {/* 4. Currently Building Live Board */}
      <CurrentlyBuilding />

      {/* 5. What I Build - Engineering Capabilities */}
      <Capabilities />

      {/* 6. Technologies Stack Badges */}
      <TechnologyStack />

      {/* 7. Founder Section - Built by Jobi S S */}
      <Founder />

      {/* 8. From the Engineering Desk - Technical Notes */}
      <EngineeringNotes />

      {/* 9. SEO Engineering Narrative */}
      <SEOContent />

      {/* 10. Final Call to Action */}
      <FinalCTA />
    </main>
  )
}
