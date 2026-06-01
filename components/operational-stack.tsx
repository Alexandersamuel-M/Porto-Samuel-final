// file: components/operational-stack.tsx
import { FileText, Database, MessageSquare, Table2, PieChart, Globe } from "lucide-react"

const stacks = [
  {
    capability: "Operations Documentation",
    tool: "Notion",
    icon: FileText,
    uses: ["SOP Documentation", "Knowledge Base", "Process Documentation", "Project Tracking"]
  },
  {
    capability: "ERP & Workflow Management",
    tool: "Odoo ERP",
    icon: Database,
    uses: ["CRM Workflow", "Inventory Management", "Sales Pipeline Mapping", "Process Architecture", "Workflow Automation"]
  },
  {
    capability: "Team Communication & Coordination",
    tool: "WhatsApp",
    icon: MessageSquare,
    uses: ["Team Coordination", "Vendor Communication", "Escalation Management", "Daily Operational Reporting"]
  },
  {
    capability: "Operational Reporting & Planning",
    tool: "Google Sheets / Excel",
    icon: Table2,
    uses: ["Operational Tracking", "Reporting", "Planning", "Process Monitoring"]
  },
  {
    capability: "CRM & Pipeline Management",
    tool: "HubSpot",
    icon: PieChart,
    uses: ["Lead Tracking", "Pipeline Monitoring", "Customer Management"]
  },
  {
    capability: "Web & Documentation Projects",
    tool: "Vercel",
    icon: Globe,
    uses: ["Portfolio Deployment", "Documentation Projects", "Operational System Demonstrations"]
  }
]

export function OperationalStack() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-border bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 border-b border-border pb-4">
          <span className="text-sm font-mono text-muted-foreground tracking-widest uppercase">
            {">"} Operational Stack
          </span>
          <h2 className="text-2xl font-bold text-foreground mt-4">
            Tools Supporting Execution
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stacks.map((stack, index) => {
            const Icon = stack.icon
            return (
              <div 
                key={index} 
                className="flex flex-col p-8 bg-card border border-border rounded-2xl hover:border-primary/50 transition-colors h-full"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-secondary rounded-xl border border-border">
                    <Icon className="w-5 h-5 text-foreground" />
                  </div>
                  {/* Tool diletakkan sebagai badge sekunder */}
                  <span className="text-xs font-mono px-3 py-1 bg-secondary text-muted-foreground rounded-full border border-border">
                    {stack.tool}
                  </span>
                </div>
                
                <div className="mb-6">
                  {/* Capability sebagai fokus utama (Primary) */}
                  <h3 className="text-lg font-bold text-foreground leading-tight">
                    {stack.capability}
                  </h3>
                </div>

                <div className="mt-auto">
                  <ul className="space-y-3">
                    {stack.uses.map((use, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary font-bold mt-0.5">•</span>
                        <span>{use}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}