// file: components/workflow-philosophy.tsx
import { Target, FileSearch, Users, Activity } from "lucide-react"

const workflows = [
  {
    step: "01",
    title: "Process Mapping",
    description: "Auditing existing workflows, identifying operational bottlenecks, and mapping current-state architectures.",
    icon: FileSearch
  },
  {
    step: "02",
    title: "Systems Design & SOPs",
    description: "Structuring operational blueprints, ERP integrations, and rigid SOPs to standardize execution.",
    icon: Target
  },
  {
    step: "03",
    title: "Team Coordination",
    description: "Aligning cross-functional teams, managing vendors, and ensuring physical execution matches digital protocols.",
    icon: Users
  },
  {
    step: "04",
    title: "Continuous Optimization",
    description: "Tracking operational KPIs, maintaining SLA compliance, and removing structural friction points.",
    icon: Activity
  }
]

export function WorkflowPhilosophy() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-border bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="text-sm font-mono text-muted-foreground tracking-widest uppercase">
            {">"} Operational Philosophy
          </span>
          <h2 className="text-2xl font-bold text-foreground mt-4">
            How I Build & Run Systems
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workflows.map((item, index) => {
            const Icon = item.icon
            return (
              <div key={item.step} className="relative group">
                {/* Connector Line (Desktop only) */}
                {index < workflows.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(100%-1.5rem)] w-[calc(100%+1.5rem)] h-px bg-border z-0">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-[6px] border-l-border border-y-[4px] border-y-transparent" />
                  </div>
                )}
                
                <div className="relative z-10 bg-card border border-border p-6 rounded-2xl h-full hover:border-primary/50 transition-colors">
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-secondary rounded-xl border border-border">
                      <Icon className="w-5 h-5 text-foreground" />
                    </div>
                    <span className="text-xs font-mono text-muted-foreground font-bold">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-3 tracking-wide uppercase">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}