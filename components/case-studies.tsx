"use client"

import { useState } from "react"
import { Car, Factory, Fish, Building, TestTube } from "lucide-react"
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
  },
  {
    id: "kmana",
    title: "KMANA VILLAS (Bali)",
    icon: Building,
    result: "Luxury property co-hosting operations. Standardized guest protocols & on-ground vendor coordination."
  },
  {
    id: "amerta-biotech",
    title: "AMERTA MARINE BIOTECH (R&D)",
    icon: TestTube,
    result: "Intensive aquaculture blueprinting. Scaled 1,300-count MVP batch execution & operational timeline mapping."
  }
]

export function CaseStudies() {
  const [activeProject, setActiveProject] = useState<string | null>(null)

  return (
    <>
      <section id="impact" className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <span className="text-xs font-mono text-muted-foreground tracking-wider">
              {">"} OPERATIONAL PROJECTS & OUTCOMES
            </span>
          </div>

          {/* Grid Layout Biar Gak Kepotong */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study) => (
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
      </section>

      {/* Komponen Overlay Dipanggil Di Sini */}
      <ProjectDetailOverlay
        projectId={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </>
  )
}