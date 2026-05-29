import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { BentoGrid } from "@/components/bento-grid"
import { CaseStudies } from "@/components/case-studies"
import { AboutSection } from "@/components/about-section"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <BentoGrid />
      <CaseStudies />
      <AboutSection />
      
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs font-mono text-muted-foreground">
              © 2026 SAMUEL ALEXANDER. ALL SYSTEMS OPERATIONAL.
            </span>
            <div className="flex items-center gap-4">
              <span className="text-xs font-mono text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                [LINKEDIN]
              </span>
              <span className="text-xs font-mono text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                [EMAIL]
              </span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
