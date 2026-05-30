import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { BentoGrid } from "@/components/bento-grid"
import { CaseStudies } from "@/components/case-studies"
import { AboutSection } from "@/components/about-section"
import { ToolsSection } from "@/components/tools-section"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <BentoGrid />
      <CaseStudies />
      <AboutSection />
      <ToolsSection />
      
    </main>
  )
}