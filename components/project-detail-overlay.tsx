"use client"

import { ArrowLeft, Fish, BarChart3, Package, ClipboardList } from "lucide-react"

interface ProjectDetailOverlayProps {
  isOpen: boolean
  onClose: () => void
}

export function ProjectDetailOverlay({ isOpen, onClose }: ProjectDetailOverlayProps) {
  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 z-50 bg-background overflow-y-auto animate-in fade-in duration-300"
    >
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
              NEFIUM: MARINE BIOTA E-COMMERCE & OPERATIONS
            </h1>
            
            <div className="flex flex-wrap gap-2">
              {["Odoo ERP", "Vercel", "Web Analytics", "Operations SOPs"].map((tag) => (
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
                    <Fish className="w-4 h-4 text-accent-foreground" />
                  </div>
                  <h3 className="font-semibold text-sm text-foreground">Target Market</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  B2B Wholesale Exporters & B2C Marine Aquarium Enthusiasts.
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
                  Synchronized e-commerce frontend with backend quarantine operations.
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
              {/* Workflow Visualization */}
              <div className="overflow-x-auto pb-2">
                <div className="flex items-center justify-between min-w-[700px] gap-2">
                  {/* Node 1 */}
                  <div className="flex flex-col items-center flex-1">
                    <div className="bg-secondary border border-border rounded-xl px-4 py-3 text-center w-full">
                      <span className="font-mono text-xs sm:text-sm font-medium text-foreground">
                        B2B/B2C E-COMMERCE
                      </span>
                    </div>
                    <span className="text-[10px] text-muted-foreground mt-2 text-center">
                      Customer Orders
                    </span>
                  </div>

                  {/* Connector */}
                  <div className="h-px bg-border flex-shrink-0 w-8 relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-4 border-l-muted-foreground border-y-2 border-y-transparent" />
                  </div>

                  {/* Node 2 */}
                  <div className="flex flex-col items-center flex-1">
                    <div className="bg-secondary border border-border rounded-xl px-4 py-3 text-center w-full">
                      <span className="font-mono text-xs sm:text-sm font-medium text-foreground">
                        WEB ANALYTICS
                      </span>
                    </div>
                    <span className="text-[10px] text-muted-foreground mt-2 text-center">
                      Traffic Tracking
                    </span>
                  </div>

                  {/* Connector */}
                  <div className="h-px bg-border flex-shrink-0 w-8 relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-4 border-l-muted-foreground border-y-2 border-y-transparent" />
                  </div>

                  {/* Node 3 */}
                  <div className="flex flex-col items-center flex-1">
                    <div className="bg-secondary border border-border rounded-xl px-4 py-3 text-center w-full">
                      <span className="font-mono text-xs sm:text-sm font-medium text-foreground">
                        ODOO INVENTORY
                      </span>
                    </div>
                    <span className="text-[10px] text-muted-foreground mt-2 text-center">
                      Live-Stock Sync
                    </span>
                  </div>

                  {/* Connector */}
                  <div className="h-px bg-border flex-shrink-0 w-8 relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-4 border-l-muted-foreground border-y-2 border-y-transparent" />
                  </div>

                  {/* Node 4 */}
                  <div className="flex flex-col items-center flex-1">
                    <div className="bg-accent border border-accent/50 rounded-xl px-4 py-3 text-center w-full">
                      <span className="font-mono text-xs sm:text-sm font-medium text-accent-foreground">
                        QUARANTINE SOP
                      </span>
                    </div>
                    <span className="text-[10px] text-muted-foreground mt-2 text-center">
                      Technician Protocols
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-muted-foreground mt-6 text-center">
                End-to-end automation: from web order capture to physical facility operations
              </p>
            </div>
          </div>

          {/* Bento Section 3: P.A.R Results */}
          <div className="mb-6">
            <span className="text-xs font-mono text-muted-foreground tracking-wider mb-4 block">
              {">"} P.A.R. (PROBLEM → ACTION → RESULT)
            </span>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Problem */}
              <div className="bg-card rounded-2xl border border-border p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-mono text-xs font-bold text-foreground bg-secondary px-2 py-1 rounded">P</span>
                  <h3 className="font-semibold text-sm text-foreground">Problem</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Managing live marine biota inventory across separate B2B and B2C channels caused operational bottlenecks and inaccurate stock tracking.
                </p>
              </div>

              {/* Action */}
              <div className="bg-card rounded-2xl border border-border p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-mono text-xs font-bold text-foreground bg-secondary px-2 py-1 rounded">A</span>
                  <h3 className="font-semibold text-sm text-foreground">Action</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Deployed a centralized e-commerce system seamlessly connected to physical quarantine SOPs and Odoo ERP.
                </p>
              </div>

              {/* Result */}
              <div className="bg-card rounded-2xl border border-border p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-mono text-xs font-bold text-accent-foreground bg-accent px-2 py-1 rounded">R</span>
                  <h3 className="font-semibold text-sm text-foreground">Result</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Streamlined multi-channel sales flow and established clear operational blueprints for quarantine technicians.
                </p>
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
