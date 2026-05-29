"use client"

import { useState } from "react"
import { Car, Factory, Fish } from "lucide-react"
import { CaseStudyCard } from "./case-study-card"
import { ProjectDetailOverlay } from "./project-detail-overlay"

const caseStudies = [
  {
    id: "amerta",
    title: "AMERTA AUTO CARE (Bandar Lampung)",
    icon: Car,
    result: "Premium service blueprinting & operational protocol setup."
  },
  {
    id: "arini",
    title: "KUE KACANG ARINI (Scale-up)",
    icon: Factory,
    result: "Oven modification & layout restructuring. +300% Capacity."
  },
  {
    id: "nefium",
    title: "NEFIUM MARINE (B2B & B2C)",
    icon: Fish,
    result: "Ornamental marine biota e-commerce & quarantine operations system."
  }
]

export function CaseStudies() {
  const [activeProject, setActiveProject] = useState<string | null>(null)

  return (
    <>
      <section id="impact" className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <span className="text-xs font-mono text-muted-foreground tracking-wider">
              {">"} CLIENT CASE STUDIES (7 AMUNISI / P.A.R. FORMAT)
            </span>
          </div>
          
          <div className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
            <div className="flex gap-4">
              {caseStudies.map((study) => (
                <CaseStudyCard
                  key={study.id}
                  title={study.title}
                  icon={study.icon}
                  result={study.result}
                  onClick={study.id === "nefium" ? () => setActiveProject("nefium") : undefined}
                />
              ))}
              <CaseStudyCard
                title=""
                icon={Fish}
                result=""
                isFaded
                placeholder="[BUILD 4]"
              />
              <CaseStudyCard
                title=""
                icon={Fish}
                result=""
                isFaded
                placeholder="[BUILD 5]"
              />
            </div>
          </div>
        </div>
      </section>

      <ProjectDetailOverlay 
        isOpen={activeProject === "nefium"} 
        onClose={() => setActiveProject(null)} 
      />
    </>
  )
}
