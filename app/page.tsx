// file: app/page.tsx
// (Ini untuk merangkai komponen Hero, Workflow, dan Case Studies sesuai sitemap lu)
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero-section"
import { WorkflowPhilosophy } from "@/components/workflow-philosophy"
import { CaseStudies } from "@/components/case-studies"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <Hero />
      <WorkflowPhilosophy />
      <CaseStudies />
      {/* Nanti kita tambahin <OperationalStack /> dan <About /> di bawah sini */}
      <Footer />
    </main>
  )
}