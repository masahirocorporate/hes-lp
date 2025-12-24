'use client'

import HeroSection from '@/components/sections/HeroSection'
import TargetSelectorSection from '@/components/sections/TargetSelectorSection'
import SocialChangeSection from '@/components/sections/SocialChangeSection'
import RiskSection from '@/components/sections/RiskSection'
import StandardSection from '@/components/sections/StandardSection'
import SimulationSection from '@/components/sections/SimulationSection'
import MeritSection from '@/components/sections/MeritSection'
import SolutionSection from '@/components/sections/SolutionSection'
import SubsidySection from '@/components/sections/SubsidySection'
import TestimonialSection from '@/components/sections/TestimonialSection'
import FlowSection from '@/components/sections/FlowSection'
import FAQSection from '@/components/sections/FAQSection'
import ClosingSection from '@/components/sections/ClosingSection'
import Navigation from '@/components/Navigation'
import { useTarget } from '@/contexts/TargetContext'

export default function Home() {
  const { isSelected } = useTarget()

  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        {!isSelected && <TargetSelectorSection />}
        <SocialChangeSection />
        <RiskSection />
        <StandardSection />
        <SimulationSection />
        <MeritSection />
        <SolutionSection />
        <SubsidySection />
        <TestimonialSection />
        <FlowSection />
        <FAQSection />
        <ClosingSection />
      </main>
    </>
  )
}
