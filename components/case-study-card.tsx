"use client"
import { LucideIcon, ArrowUpRight } from "lucide-react"

interface CaseStudyCardProps {
  title: string
  icon: LucideIcon
  result: string
  onClick?: () => void
}

export function CaseStudyCard({ title, icon: Icon, result, onClick }: CaseStudyCardProps) {
  return (
    <div 
      onClick={onClick}
      className="group flex flex-col p-8 bg-card hover:bg-secondary/50 border border-border rounded-2xl cursor-pointer transition-all duration-300 relative overflow-hidden h-full"
    >
      {/* Icon Section */}
      <div className="mb-6">
        <div className="inline-flex p-3 rounded-xl bg-secondary border border-border group-hover:bg-background transition-colors">
          <Icon className="w-6 h-6 text-foreground" />
        </div>
      </div>

      {/* Content Section - Strict Hierarchy Rule Applied */}
      <div className="mt-auto space-y-4">
        {/* Capability (Title) - Most prominent */}
        <h3 className="text-xl font-bold text-foreground leading-tight tracking-tight pr-6">
          {title}
        </h3>
        
        {/* Industry/Subheading (Result) - Secondary visual weight */}
        <div className="inline-flex items-center">
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider bg-background/50 px-2.5 py-1 rounded-md border border-border">
            {result}
          </span>
        </div>
      </div>

      {/* Hover Arrow Indicator */}
      <div className="absolute top-8 right-8 opacity-0 -translate-y-2 translate-x-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300">
        <ArrowUpRight className="w-5 h-5 text-muted-foreground" />
      </div>
    </div>
  )
}