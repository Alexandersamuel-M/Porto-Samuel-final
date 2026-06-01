"use client"

import { useState } from "react"
import { Building2, Factory, Package, Workflow, Wrench, Beaker } from "lucide-react"
import { CaseStudyCard } from "./case-study-card"
import { ProjectDetailOverlay } from "./project-detail-overlay"

const experienceProjects = [
  {
    id: "card1",
    title: "Multi-Site Hospitality Operations",
    icon: Building2,
    result: "Hospitality Property Operations"
  },
  {
    id: "card2",
    title: "Production & Process Optimization",
    icon: Factory,
    result: "Food Production Operations"
  },
  {
    id: "card3",
    title: "Logistics & Inventory Operations",
    icon: Package,
    result: "Live Inventory & Fulfillment Operations"
  }
]

const systemProjects = [
  {
    id: "card4",
    title: "ERP & Workflow Integration",
    icon: Workflow,
    result: "Marine Commerce Operations System"
  },
  {
    id: "card5",
    title: "Automotive Operations Blueprint",
    icon: Wrench,
    result: "Service Business Operations Design"
  },
  {
    id: "card6",
    title: "Aquaculture Operations Architecture",
    icon: Beaker,
    result: "R&D Facility Planning & Operations Design"
  }
]

export function CaseStudies() {
  const [activeProject, setActiveProject] = useState<string | null>(null)

  return (
    <>
      <section id="impact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-20">
          
          <div>
            <div className="mb-8 border-b border-border pb-4">
              <span className="text-sm font-mono text-muted-foreground tracking-widest uppercase">
                {">"} Operational Experience
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {experienceProjects.map((study) => (
                <CaseStudyCard
                  key={study.id}
                  title={study.title}
                  icon={study.icon}
                  result={study.result}
                  onClick={() => setActiveProject(study.id)}
                />
              ))}
            </div>
          </div>

          <div>
            <div className="mb-8 border-b border-border pb-4">
              <span className="text-sm font-mono text-muted-foreground tracking-widest uppercase">
                {">"} Operational Projects & Systems Design
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {systemProjects.map((study) => (
                <CaseStudyCard
                  key={study.id}
                  title={study.title}
                  icon={study.icon}
                  result={study.result}
                  onClick={() => setActiveProject(study.id)}
                />
              ))}
            </div>
          </div>

        </div>
      </section>

      <ProjectDetailOverlay
        projectId={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </>
  )
}