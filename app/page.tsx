// file: app/page.tsx
import { Navbar } from "@/components/navbar-upwork"
import { Hero } from "@/components/hero-section"
import { WorkflowPhilosophy } from "@/components/workflow-philosophy"
import { CaseStudies } from "@/components/case-studies"
import { OperationalStack } from "@/components/operational-stack"
import { AboutSection } from "@/components/about-section"
import { CtaSection } from "@/components/cta-section-upwork"
import { Footer } from "@/components/footer-upwork"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbarupwork />
      <Hero />
      <WorkflowPhilosophy />
      <CaseStudies />
      <OperationalStack />
      <AboutSection />
      <CtaSectionupwork />
      <Footerupwork />
    </main>
  )
}