import { Filter, Cog, Brain } from "lucide-react"
import { WorkflowNode } from "./workflow-node"
import { SpecializationCard } from "./specialization-card"

const specializations = [
  {
    icon: Filter,
    number: "01",
    title: "Operations Management",
    items: [
      "Designing scalable processes & SOP frameworks.",
      "Distributed team coordination across time zones.",
      "Workflow standardization & documentation."
    ]
  },
  {
    icon: Cog,
    number: "02",
    title: "SOP Development",
      items: [
        "Comprehensive, maintainable operating procedures.",
        "Reducing decision fatigue and operational errors.",
        "Process automation & team empowerment."
      ]
  },
  {
    icon: Brain,
    number: "03",
    title: "Property & Vendor Operations",
    items: [
      "On-site and off-site resource coordination.",
      "Vendor management and supply chain optimization.",
      "On-ground SOP execution & quality assurance."
    ]
  }
]

export function BentoGrid() {
  return (
    <section id="solutions" className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          <div className="lg:col-span-3">
            <WorkflowNode />
          </div>
          
          <div className="lg:col-span-2 space-y-4">
            <div className="mb-2">
              <span className="text-xs font-mono text-muted-foreground tracking-wider">
                {">"} SPECIALIZATIONS
              </span>
            </div>
            {specializations.map((spec) => (
              <SpecializationCard
                key={spec.number}
                icon={spec.icon}
                number={spec.number}
                title={spec.title}
                items={spec.items}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
