"use client"

import { ArrowLeft, Fish, BarChart3, Package, ClipboardList, Car, Factory, Building, TestTube } from "lucide-react"

// 1. KITA BIKIN DATABASE KECIL BUAT SEMUA PROJECT
const PROJECT_DATA: Record<string, any> = {
  "nefium": {
    title: "NEFIUM MARINE: Operational Coordination & Workflow Integration",
    tags: ["Odoo ERP", "Vercel", "Web Analytics", "Operations SOPs"],
    icon: Fish,
    bmc: {
      target: "B2B Wholesale Exporters & B2C Marine Aquarium Enthusiasts.",
      infra: "Synchronized e-commerce frontend with backend quarantine operations."
    },
    workflow: {
      nodes: [
        { title: "B2B/B2C E-COMMERCE", subtitle: "Customer Orders" },
        { title: "WEB ANALYTICS", subtitle: "Traffic Tracking" },
        { title: "ODOO INVENTORY", subtitle: "Live-Stock Sync" },
        { title: "QUARANTINE SOP", subtitle: "Technician Protocols", isAccent: true }
      ],
      desc: "End-to-end automation: from web order capture to physical facility operations"
    },
    par: {
      problems: [
        "Vendor coordination happening across WhatsApp, email, and manual spreadsheets with no audit trail.",
        "No standardized SOP for vessel schedules, leading to 8-12 hours of delays per shipment.",
        "Team uncertainty on approval chains and decision authority across three office locations."
      ],
      actions: [
        "Centralized SOP documentation with role-based access and version control.",
        "Vendor portal with standardized booking, confirmation, and invoice workflows.",
        "Approval automation reducing manual handoffs by 70%."
      ],
      results: [
        "Processing time: 8-12 hour delays reduced to 2-3 hour SLA compliance.",
        "Team coordination: 4 hours/week of re-work eliminated through documentation.",
        "Operational confidence: 95% accuracy on first-time vendor confirmations."
      ]
    }
  },
  "amerta": {
    title: "AMERTA AUTO CARE: Premium Service Blueprinting & Protocol Setup",
    tags: ["Automotive Detailing", "Chemical Formulation", "SOP Development", "Workflow Standardization"],
    icon: Car,
    bmc: {
      target: "Premium motorcycle owners and automotive enthusiasts seeking high-end detailing and systematic vehicle restoration.",
      infra: "Standardized detailing studio workflow equipped with proprietary, R&D-backed chemical formulations."
    },
    workflow: {
      nodes: [
        { title: "VEHICLE INTAKE", subtitle: "Intake Inspection" },
        { title: "DECONTAMINATION", subtitle: "Custom Chemicals" },
        { title: "PRECISION DETAIL", subtitle: "Rigid Workflows" },
        { title: "FINAL QC", subtitle: "Service Delivery", isAccent: true }
      ],
      desc: "End-to-end service standardization: from intake inspection to premium chemical application."
    },
    par: {
      problems: [
        "Inconsistent detailing quality across the industry due to reliance on generic chemicals and non-standardized workflows.",
        "Lack of structured facility layout causing bottlenecks during multi-step decontamination processes.",
        "Undefined operational metrics leading to unpredictable service turnover times."
      ],
      actions: [
        "Developed proprietary detailing chemicals to strictly control material costs and output quality.",
        "Designed a highly structured facility layout and implemented rigid operational SOPs using the Business Model Canvas.",
        "Standardized the marketing funnel and chemical inventory management ahead of the physical launch."
      ],
      results: [
        "Established a highly scalable, premium service blueprint ready for physical execution.",
        "Ensured consistent quality control, optimizing material usage and streamlining technician handoffs."
      ]
    }
  },
  "arini": {
    title: "KUE KACANG ARINI: Seasonal Scale-Up & Operations Restructuring",
    tags: ["F&B Operations", "Capacity Scaling", "Layout Restructuring", "Workforce Coordination"],
    icon: Factory,
    bmc: {
      target: "High-volume seasonal consumers and resellers during peak holiday periods (Ramadhan and Lebaran).",
      infra: "Scaled home-based production facility with optimized oven hardware and flexible temporary workforce integration."
    },
    workflow: {
      nodes: [
        { title: "DEMAND FORECAST", subtitle: "Target Setting" },
        { title: "OVEN MODIFICATION", subtitle: "Hardware Setup" },
        { title: "WORKFORCE SCALE", subtitle: "Temp Hires" },
        { title: "MASS PRODUCTION", subtitle: "Output Execution", isAccent: true }
      ],
      desc: "Rapid operational scaling: overcoming physical constraints for peak seasonal demand."
    },
    par: {
      problems: [
        "Physical production constraints due to limited oven capacity restricting maximum daily output.",
        "Inefficient workspace layout preventing seamless workflows during peak holiday demand surges.",
        "Steep learning curve for temporary seasonal helpers, leading to potential inconsistencies."
      ],
      actions: [
        "Restructured the production layout to optimize the flow of raw materials to baking and packaging stations.",
        "Executed structural oven modifications to drastically increase per-batch output.",
        "Developed a rapid onboarding SOP to efficiently integrate and manage temporary helpers."
      ],
      results: [
        "Successfully expanded oven capacity by +300% to meet aggressive seasonal targets.",
        "Maximized operational output during the Ramadhan/Lebaran season without compromising product consistency."
      ]
    }
  },
  "kmana": {
    title: "KMANA VILLAS: Remote Hospitality Operations & Guest Experience",
    tags: ["Property Management", "Vendor Coordination", "Guest Relations", "Operations SOPs"],
    icon: Building,
    bmc: {
      target: "Short-term luxury vacationers & digital nomads in the Bali region.",
      infra: "Decentralized villa management framework synchronizing guest communications with on-ground vendors."
    },
    workflow: {
      nodes: [
        { title: "GUEST BOOKING", subtitle: "Reservation" },
        { title: "PRE-ARRIVAL COMMS", subtitle: "Expectation Setup" },
        { title: "ON-SITE OPS", subtitle: "Vendor Execution" },
        { title: "POST-STAY REVIEW", subtitle: "Feedback Loop", isAccent: true }
      ],
      desc: "End-to-end hospitality automation: from reservation capture to on-ground vendor execution."
    },
    par: {
      problems: [
        "Inconsistent on-ground execution leading to unpredictable turnover times between guest check-ins.",
        "Fragmented communication with local vendors across scattered locations in Bali.",
        "Lack of standardized incident-reporting protocols for property damage or emergency maintenance."
      ],
      actions: [
        "Developed comprehensive property management SOPs bridging remote coordination with physical execution.",
        "Centralized vendor scheduling and task delegation to ensure zero-defect property handovers.",
        "Implemented standardized guest communication templates to reduce manual response times."
      ],
      results: [
        "Streamlined villa turnover processes, ensuring 100% readiness for back-to-back bookings.",
        "Elevated guest satisfaction metrics through proactive communication and rapid issue resolution."
      ]
    }
  },
  "amerta-biotech": {
    title: "AMERTA MARINE BIOTECH: Intensive System Blueprinting & R&D",
    tags: ["R&D Operations", "System Architecture", "Project Finance", "Capacity Scaling"],
    icon: TestTube,
    bmc: {
      target: "Commercial food supply chain and advanced aquaculture breeding markets.",
      infra: "Intensive pond systems integrated with biotechnology research and controlled breeding facilities."
    },
    workflow: {
      nodes: [
        { title: "FACILITY BLUEPRINT", subtitle: "System Design" },
        { title: "1,300-COUNT MVP", subtitle: "Validation Batch" },
        { title: "R&D PRE-INDUCTION", subtitle: "Phase 1 Scaling" },
        { title: "INDUSTRIAL SCALE", subtitle: "Mass Execution", isAccent: true }
      ],
      desc: "Phased operational scaling: from controlled biological models to industrial-scale execution."
    },
    par: {
      problems: [
        "High initial capital risk associated with scaling unproven biological growth models.",
        "Complex facility requirements needing precise synchronization between structural and biological constraints.",
        "Undefined operational milestones leading to potential timeline creep for industrial scaling."
      ],
      actions: [
        "Restructured the initial growth phase, aggressively scaling down to a highly controlled 1,300-count fish batch for the MVP.",
        "Designed a rigid, multi-year operational timeline mapping the R&D pre-induction phase through to full industrial expansion.",
        "Integrated project finance frameworks to audit capital efficiency during experimental phases."
      ],
      results: [
        "Minimized initial capital exposure by locking in a precise, manageable MVP validation phase.",
        "Established a clear, step-by-step operational roadmap ensuring foundational metrics are met before scaling."
      ]
    }
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
      <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <button 
              onClick={onClose}
              className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              BACK TO SYSTEMS
            </button>
            
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 text-balance">
              {data.title}
            </h1>
            
            <div className="flex flex-wrap gap-2">
              {data.tags.map((tag: string) => (
                <span 
                  key={tag}
                  className="px-3 py-1 text-xs font-mono bg-secondary text-foreground rounded-full border border-border"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Bento Section 1: Business Model Canvas */}
          <div className="mb-6">
            <span className="text-xs font-mono text-muted-foreground tracking-wider mb-4 block">
              {">"} BUSINESS MODEL CANVAS
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-card rounded-2xl border border-border p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-accent">
                    <MainIcon className="w-4 h-4 text-accent-foreground" />
                  </div>
                  <h3 className="font-semibold text-sm text-foreground">Target Market</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {data.bmc.target}
                </p>
              </div>
              <div className="bg-card rounded-2xl border border-border p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-accent">
                    <Package className="w-4 h-4 text-accent-foreground" />
                  </div>
                  <h3 className="font-semibold text-sm text-foreground">Core Infrastructure</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {data.bmc.infra}
                </p>
              </div>
            </div>
          </div>

          {/* Bento Section 2: Technical Workflow */}
          <div className="mb-6">
            <span className="text-xs font-mono text-muted-foreground tracking-wider mb-4 block">
              {">"} ARCHITECTURAL SCHEMATIC
            </span>
            <div className="bg-card rounded-2xl border border-border p-6 sm:p-8">
              <div className="overflow-x-auto pb-2">
                <div className="flex items-center justify-between min-w-[700px] gap-2">
                  {data.workflow.nodes.map((node: any, index: number) => (
                    <div key={index} className="flex items-center flex-1">
                      <div className="flex flex-col items-center flex-1">
                        <div className={`${node.isAccent ? 'bg-accent border-accent/50' : 'bg-secondary border-border'} border rounded-xl px-4 py-3 text-center w-full`}>
                          <span className={`font-mono text-xs sm:text-sm font-medium ${node.isAccent ? 'text-accent-foreground' : 'text-foreground'}`}>
                            {node.title}
                          </span>
                        </div>
                        <span className="text-[10px] text-muted-foreground mt-2 text-center">
                          {node.subtitle}
                        </span>
                      </div>
                      
                      {/* Connector - Don't show after the last node */}
                      {index < data.workflow.nodes.length - 1 && (
                        <div className="h-px bg-border flex-shrink-0 w-8 relative mx-2">
                          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-4 border-l-muted-foreground border-y-2 border-y-transparent" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-xs text-muted-foreground mt-6 text-center">
                {data.workflow.desc}
              </p>
            </div>
          </div>

          {/* Bento Section 3: P.A.R Results */}
          <div className="mb-6">
            <span className="text-xs font-mono text-muted-foreground tracking-wider mb-4 block">
              {">"} P.A.R. (PROBLEM → ACTION ➔ RESULT)
            </span>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-foreground mb-3">OPERATIONAL BOTTLENECKS IDENTIFIED</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {data.par.problems.map((item: string, i: number) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-primary font-bold flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-foreground mb-3">ARCHITECTURE & PROCESS INTEGRATION</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {data.par.actions.map((item: string, i: number) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-primary font-bold flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-foreground mb-3">RESULTS & TEAM EFFICIENCY</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {data.par.results.map((item: string, i: number) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-primary font-bold flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Visual Placeholder */}
          <div className="bg-card rounded-2xl border border-border p-8">
            <div className="aspect-video rounded-xl bg-gradient-to-br from-secondary via-muted to-secondary flex items-center justify-center">
              <div className="text-center">
                <BarChart3 className="w-12 h-12 text-muted-foreground/40 mx-auto mb-3" />
                <span className="font-mono text-sm text-muted-foreground/60">
                  [SYSTEM DASHBOARD PREVIEW]
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}