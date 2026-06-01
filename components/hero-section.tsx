// file: components/hero-section.tsx
import { ArrowRight, Terminal, Network, Users, Workflow } from "lucide-react"

export function Hero() {
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
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-foreground tracking-tight mb-8 leading-[1.1]">
            Operations Manager & <br />
            <span className="text-muted-foreground">Systems Thinker.</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-12 max-w-3xl">
            Bridging the gap between high-level systems architecture and on-ground team execution. I build scalable workflows, design rigid SOPs, and manage complex cross-functional operations across hospitality, production, and logistics.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <a 
              href="#impact" 
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-medium hover:bg-primary/90 transition-colors"
            >
              View Operational Projects
              <ArrowRight className="w-4 h-4" />
            </a>
            
            <div className="flex items-center gap-4 text-sm font-mono text-muted-foreground">
              <span className="flex items-center gap-1.5"><Network className="w-4 h-4" /> Systems Design</span>
              <span className="flex items-center gap-1.5"><Users className="w-4 h-4" /> Team Coordination</span>
              <span className="flex items-center gap-1.5"><Workflow className="w-4 h-4" /> Process Optimization</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}