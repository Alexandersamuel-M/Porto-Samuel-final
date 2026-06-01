"use client"

import { ArrowLeft, Building2, Factory, Package, Workflow, Wrench, Beaker, Users, Settings } from "lucide-react"

const PROJECT_DATA: Record<string, any> = {
  // ==========================================
  // TEMPLATE A: OPERATIONAL EXPERIENCE
  // ==========================================
  "card1": {
    type: "experience",
    title: "Multi-Site Hospitality Operations",
    subheading: "Hospitality Property Operations",
    icon: Building2,
    overview: "Coordinated daily operational workflows and maintained service continuity across multiple short-term rental properties, acting as the central point between remote management and on-ground execution.",
    scope: "13 Villas, 14 Staff members, Multiple Operational Functions, Supervisor-Based Coordination.",
    team: "Coordinated with on-ground supervisors, local cleaning crews, pool maintenance technicians, and third-party contractors.",
    workflow: "Guest Booking ➔ Pre-arrival Comms ➔ Vendor Task Delegation ➔ Property Check-in/out Protocol ➔ Post-stay Feedback",
    challenges: [
      "Inconsistent on-ground execution leading to unpredictable turnover times between guest check-ins.",
      "Fragmented communication with local vendors across scattered sites.",
      "Lack of standardized incident-reporting protocols for emergency maintenance."
    ],
    actions: [
      "Implemented comprehensive SOPs to bridge remote coordination with physical execution.",
      "Centralized vendor scheduling and task delegation workflows.",
      "Standardized communication templates to manage guest expectations and streamline operational reporting."
    ],
    outcomes: [
      "Streamlined multi-site turnover processes to ensure readiness for back-to-back bookings.",
      "Improved SLA compliance for vendor response times.",
      "Elevated guest satisfaction metrics through proactive issue resolution."
    ],
    tools: ["Property Management Systems", "WhatsApp Business", "SOP Documentation", "Operational Spreadsheets"]
  },
  "card2": {
    type: "experience",
    title: "Production & Process Optimization",
    subheading: "Food Production Operations",
    icon: Factory,
    overview: "Led the operational restructuring and workforce management of a food production facility to meet aggressive seasonal demand spikes and optimize daily output.",
    scope: "Production Operations, Quality Control (QC), Packaging, Distribution, Seasonal Capacity Scaling.",
    team: "Supervised and coordinated temporary seasonal production helpers and supply chain vendors.",
    workflow: "Demand Forecasting ➔ Material Procurement ➔ Workforce Allocation ➔ Mass Production ➔ QC & Distribution",
    challenges: [
      "Physical production bottlenecks due to hardware capacity limits restricting maximum daily output.",
      "Inefficient workspace layout preventing seamless workflows during peak demand surges.",
      "Steep learning curve for temporary seasonal staff, risking production delays and quality drops."
    ],
    actions: [
      "Restructured the production layout to optimize the flow of raw materials to packaging stations.",
      "Coordinated structural hardware modifications to drastically increase per-batch output.",
      "Developed a rapid onboarding and standard operating procedure for temporary workforce scaling."
    ],
    outcomes: [
      "Successfully expanded hardware capacity by +300% to meet aggressive seasonal targets.",
      "Maximized operational output during peak season without compromising quality control.",
      "Maintained zero downtime during the high-volume production period."
    ],
    tools: ["Process Mapping", "Workforce Scheduling", "Hardware Modification Logging", "Inventory Control Sheets"]
  },
  "card3": {
    type: "experience",
    title: "Logistics & Inventory Operations",
    subheading: "Live Inventory & Fulfillment Operations",
    icon: Package,
    overview: "Managed complex logistics and inventory protocols for live assets, ensuring regulatory compliance, strict quarantine adherence, and timely customer fulfillment.",
    scope: "Animal Intake, Quarantine Procedures, Shipping Coordination, Inventory Tracking.",
    team: "Coordinated with quarantine technicians, logistics partners, and customs/compliance officers.",
    workflow: "Asset Intake ➔ Quarantine Protocol ➔ Live-Stock Sync ➔ Shipping Coordination ➔ Customer Fulfillment",
    challenges: [
      "High-risk inventory requiring strict adherence to operational timelines and biological constraints.",
      "Complex shipping coordination leading to potential delays in live asset fulfillment.",
      "Manual inventory tracking resulting in discrepancies between physical stock and digital records."
    ],
    actions: [
      "Standardized the intake and quarantine standard operating procedures to minimize asset loss.",
      "Synchronized physical inventory counts with digital tracking systems for real-time visibility.",
      "Coordinated shipping schedules with external logistics vendors to ensure compliance and rapid transit."
    ],
    outcomes: [
      "Reduced processing and fulfillment delays through strict vendor coordination.",
      "Achieved high accuracy in live-inventory tracking.",
      "Maintained strict operational compliance with risk management protocols."
    ],
    tools: ["Inventory Management Systems", "Logistics Trackers", "Compliance Checklists", "SOP Documentation"]
  },

  // ==========================================
  // TEMPLATE B: SYSTEMS DESIGN
  // ==========================================
  "card4": {
    type: "systems_design",
    title: "ERP & Workflow Integration",
    subheading: "Marine Commerce Operations System",
    icon: Workflow,
    context: "Designed the operational architecture to integrate a disconnected B2B/B2C supply chain, mapping workflows from e-commerce frontends to physical backend operations.",
    bottlenecks: [
      "Vendor coordination happening across fragmented channels with no central audit trail.",
      "No standardized SOP for logistics schedules, leading to severe processing delays.",
      "Team uncertainty on approval chains and decision authority across multiple locations."
    ],
    workflowMapping: {
      nodes: [
        { title: "E-COMMERCE FRONTEND", subtitle: "Order Capture" },
        { title: "WEB ANALYTICS", subtitle: "Data Tracking" },
        { title: "ERP INVENTORY", subtitle: "Stock Sync" },
        { title: "QUARANTINE SOP", subtitle: "Physical Execution", isAccent: true }
      ],
      desc: "Process Integration: Bridging digital order capture with physical fulfillment execution."
    },
    solution: [
      "Architected centralized SOP documentation with role-based access and version control.",
      "Designed a vendor portal structure with standardized booking, confirmation, and invoice workflows.",
      "Mapped approval automation processes to reduce manual operational handoffs."
    ],
    expectedOutcomes: [
      "Processing time SLA compliance significantly improved.",
      "Elimination of manual re-work through centralized documentation and ERP integration.",
      "High operational accuracy on first-time vendor confirmations."
    ],
    techStack: ["Odoo ERP", "Vercel", "Web Analytics", "Process Architecture"]
  },
  "card5": {
    type: "systems_design",
    title: "Automotive Operations Blueprint",
    subheading: "Service Business Operations Design",
    icon: Wrench,
    context: "Developed the foundational operational blueprint and standardized service workflows for a premium service-based business, ensuring scalability and strict quality control.",
    bottlenecks: [
      "Inconsistent service execution due to the absence of standardized operating procedures.",
      "Lack of a structured facility layout causing process bottlenecks during multi-step operations.",
      "Undefined operational metrics making service turnover times highly unpredictable."
    ],
    workflowMapping: {
      nodes: [
        { title: "INTAKE PROTOCOL", subtitle: "Asset Inspection" },
        { title: "DECONTAMINATION", subtitle: "Material Processing" },
        { title: "PRECISION EXECUTION", subtitle: "Rigid Workflows" },
        { title: "QUALITY CONTROL", subtitle: "Service Handover", isAccent: true }
      ],
      desc: "Operational Blueprinting: End-to-end service standardization and layout optimization."
    },
    solution: [
      "Designed a highly structured facility layout blueprint to optimize workflow movement.",
      "Drafted rigid operational SOPs mapping every step of the service delivery process.",
      "Created standardized material tracking and inventory management logs."
    ],
    expectedOutcomes: [
      "Established a highly scalable, premium operational blueprint ready for physical execution.",
      "Ensured consistent quality control and optimized operational resource usage.",
      "Standardized service turnover predictability."
    ],
    techStack: ["Business Model Canvas", "Workflow Mapping", "Operational SOPs", "Inventory Logs"]
  },
  "card6": {
    type: "systems_design",
    title: "Aquaculture Operations Architecture",
    subheading: "R&D Facility Planning & Operations Design",
    icon: Beaker,
    context: "Structured the phased operational scaling plan for an intensive R&D facility, establishing precise capacity milestones from an initial validation batch to long-term industrial execution.",
    bottlenecks: [
      "High initial capital and operational risk associated with scaling unproven biological systems.",
      "Complex facility requirements demanding precise synchronization between physical infrastructure and operational processes.",
      "Undefined operational milestones risking timeline creep and resource exhaustion."
    ],
    workflowMapping: {
      nodes: [
        { title: "FACILITY BLUEPRINT", subtitle: "System Architecture" },
        { title: "1,300-COUNT MVP", subtitle: "Validation Phase" },
        { title: "PRE-INDUCTION", subtitle: "Scaling Phase" },
        { title: "INDUSTRIAL EXECUTION", subtitle: "Mass Operations", isAccent: true }
      ],
      desc: "Capacity Planning: Phased scaling from controlled validation to industrial execution."
    },
    solution: [
      "Aggressively constrained the initial operational scope to a highly controlled 1,300-count validation batch.",
      "Mapped a rigid, multi-year operational timeline detailing the transition from R&D to expansion.",
      "Integrated capacity planning frameworks to audit resource efficiency during experimental phases."
    ],
    expectedOutcomes: [
      "Minimized initial operational risk through a tightly controlled, manageable validation phase.",
      "Established a clear, step-by-step operational roadmap.",
      "Ensured foundational operational metrics are met and documented prior to capacity scaling."
    ],
    techStack: ["Systems Architecture", "Capacity Planning", "Process Mapping", "Project Finance Frameworks"]
  }
}

interface ProjectDetailOverlayProps {
  projectId: string | null
  onClose: () => void
}

export function ProjectDetailOverlay({ projectId, onClose }: ProjectDetailOverlayProps) {
  if (!projectId || !PROJECT_DATA[projectId]) return null

  const data = PROJECT_DATA[projectId]
  const MainIcon = data.icon

  return (
    <div className="fixed inset-0 z-50 bg-background overflow-y-auto animate-in fade-in duration-300">
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          
          <div className="mb-10 border-b border-border pb-8">
            <button 
              onClick={onClose}
              className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              BACK TO PORTFOLIO
            </button>
            
            <div className="flex items-start gap-5 mb-2">
              <div className="p-4 rounded-xl bg-secondary border border-border shrink-0">
                <MainIcon className="w-7 h-7 text-foreground" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-foreground text-balance tracking-tight">
                  {data.title}
                </h1>
                <span className="text-base font-mono text-primary mt-3 block uppercase tracking-wide">
                  {data.subheading}
                </span>
              </div>
            </div>
          </div>

          {/* ============================================================== */}
          {/* TEMPLATE A: OPERATIONAL EXPERIENCE */}
          {/* ============================================================== */}
          {data.type === "experience" && (
            <div className="space-y-10">
              <div className="bg-card rounded-2xl border border-border p-8">
                <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-4 block">Overview</span>
                <p className="text-base text-foreground leading-relaxed max-w-4xl">{data.overview}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-card rounded-2xl border border-border p-8">
                  <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-5 block">Operational Scope</span>
                  <div className="flex items-start gap-3">
                    <Settings className="w-5 h-5 text-muted-foreground mt-0.5 shrink-0" />
                    <p className="text-sm text-foreground leading-relaxed">{data.scope}</p>
                  </div>
                </div>
                <div className="bg-card rounded-2xl border border-border p-8">
                  <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-5 block">Team Structure</span>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-muted-foreground mt-0.5 shrink-0" />
                    <p className="text-sm text-foreground leading-relaxed">{data.team}</p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary rounded-2xl border border-border p-8 text-center">
                <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-6 block">Operational Workflow</span>
                <p className="text-sm md:text-base font-mono text-foreground leading-relaxed">{data.workflow}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-card border border-border rounded-2xl p-8">
                  <h3 className="text-sm font-bold text-foreground mb-5 uppercase tracking-wide">Key Challenges</h3>
                  <ul className="space-y-4">
                    {data.challenges.map((item: string, i: number) => (
                      <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed"><span className="text-primary font-bold">•</span>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-2xl p-8">
                  <h3 className="text-sm font-bold text-foreground mb-5 uppercase tracking-wide">Actions & Improvements</h3>
                  <ul className="space-y-4">
                    {data.actions.map((item: string, i: number) => (
                      <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed"><span className="text-primary font-bold">•</span>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-2xl p-8">
                  <h3 className="text-sm font-bold text-foreground mb-5 uppercase tracking-wide">Outcomes</h3>
                  <ul className="space-y-4">
                    {data.outcomes.map((item: string, i: number) => (
                      <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed"><span className="text-primary font-bold">•</span>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4">
                 <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-4 block">Tools & Systems Used</span>
                 <div className="flex flex-wrap gap-3">
                    {data.tools.map((tag: string) => (
                      <span key={tag} className="px-4 py-2 text-xs font-mono bg-secondary text-foreground rounded-lg border border-border">
                        {tag}
                      </span>
                    ))}
                 </div>
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* TEMPLATE B: SYSTEMS DESIGN PROJECT */}
          {/* ============================================================== */}
          {data.type === "systems_design" && (
            <div className="space-y-10">
              <div className="bg-card rounded-2xl border border-border p-8">
                 <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-4 block">Business Context</span>
                 <p className="text-base text-foreground leading-relaxed max-w-4xl">{data.context}</p>
              </div>

              <div className="bg-card rounded-2xl border border-border p-8 sm:p-10">
                 <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-8 block">Architecture Diagram & Workflow Mapping</span>
                 <div className="overflow-x-auto pb-6">
                  <div className="flex items-center justify-between min-w-[700px] gap-2">
                    {data.workflowMapping.nodes.map((node: any, index: number) => (
                      <div key={index} className="flex items-center flex-1">
                        <div className="flex flex-col items-center flex-1">
                          <div className={`${node.isAccent ? 'bg-primary/10 border-primary' : 'bg-secondary border-border'} border rounded-xl px-5 py-4 text-center w-full shadow-sm`}>
                            <span className={`font-mono text-xs sm:text-sm font-bold ${node.isAccent ? 'text-primary' : 'text-foreground'}`}>
                              {node.title}
                            </span>
                          </div>
                          <span className="text-[11px] text-muted-foreground mt-3 text-center uppercase tracking-wider">{node.subtitle}</span>
                        </div>
                        {index < data.workflowMapping.nodes.length - 1 && (
                          <div className="h-px bg-border flex-shrink-0 w-10 relative mx-3">
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-[5px] border-l-muted-foreground border-y-[3px] border-y-transparent" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-xs font-mono text-muted-foreground mt-6 text-center">{data.workflowMapping.desc}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-card border border-border rounded-2xl p-8">
                  <h3 className="text-sm font-bold text-foreground mb-5 uppercase tracking-wide">Operational Bottlenecks</h3>
                  <ul className="space-y-4">
                    {data.bottlenecks.map((item: string, i: number) => (
                      <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed"><span className="text-primary font-bold">•</span>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-2xl p-8">
                  <h3 className="text-sm font-bold text-foreground mb-5 uppercase tracking-wide">Proposed Solution</h3>
                  <ul className="space-y-4">
                    {data.solution.map((item: string, i: number) => (
                      <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed"><span className="text-primary font-bold">•</span>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-2xl p-8">
                  <h3 className="text-sm font-bold text-foreground mb-5 uppercase tracking-wide">Expected Outcomes</h3>
                  <ul className="space-y-4">
                    {data.expectedOutcomes.map((item: string, i: number) => (
                      <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed"><span className="text-primary font-bold">•</span>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4">
                 <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-4 block">Technology Stack</span>
                 <div className="flex flex-wrap gap-3">
                    {data.techStack.map((tag: string) => (
                      <span key={tag} className="px-4 py-2 text-xs font-mono bg-secondary text-foreground rounded-lg border border-border">
                        {tag}
                      </span>
                    ))}
                 </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}