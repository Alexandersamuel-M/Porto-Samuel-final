// file: app/page.tsx
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero-section"
import { WorkflowPhilosophy } from "@/components/workflow-philosophy"
import { CaseStudies } from "@/components/case-studies"
import { OperationalStack } from "@/components/operational-stack"
import { AboutSection } from "@/components/about-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <Hero />
      <WorkflowPhilosophy />
      <CaseStudies />
      <OperationalStack />
      <AboutSection />
      <CtaSection />
      <Footer />
    </main>
  )
}