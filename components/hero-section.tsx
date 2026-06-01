// file: components/hero-section.tsx
import { ArrowRight, Terminal, CheckCircle2 } from "lucide-react"

export function Hero() {
  const capabilityChips = [
    "13 Villas Managed",
    "14 Staff Coordinated",
    "SOP Development",
    "Vendor Management",
    "Process Improvement",
    "Operations Systems"
  ]

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 border-b border-border">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary border border-border mb-8">
            <Terminal className="w-4 h-4 text-primary" />
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
              Available for Remote Operations Roles
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground tracking-tight mb-6 leading-[1.1]">
            Operations Manager <br />
            <span className="text-2xl sm:text-3xl md:text-4xl text-muted-foreground font-medium mt-4 block">
              Team Coordination, SOP Development & Process Optimization
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-10 max-w-3xl">
            Experienced coordinating hospitality, production, and logistics operations while improving workflows, operational standards, and team execution.
          </p>

          {/* Capability Chips */}
          <div className="flex flex-wrap gap-3 mb-10">
            {capabilityChips.map((chip, index) => (
              <div key={index} className="inline-flex items-center gap-2 bg-secondary border border-border px-3 py-1.5 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span className="text-sm font-mono text-foreground">{chip}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <a 
              href="#impact" 
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-medium hover:bg-primary/90 transition-colors"
            >
              View Operational Experience
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}