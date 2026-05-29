import { LucideIcon } from "lucide-react"

interface CaseStudyCardProps {
  title: string
  icon: LucideIcon
  result: string
  isFaded?: boolean
  placeholder?: string
  onClick?: () => void
}

export function CaseStudyCard({ title, icon: Icon, result, isFaded = false, placeholder, onClick }: CaseStudyCardProps) {
  if (isFaded && placeholder) {
    return (
      <div className="flex-shrink-0 w-[200px] bg-card/50 rounded-2xl border border-border/50 p-5 flex items-center justify-center">
        <span className="font-mono text-sm text-muted-foreground/50">{placeholder}</span>
      </div>
    )
  }

  return (
    <div 
      onClick={onClick}
      className={`flex-shrink-0 w-[280px] bg-card rounded-2xl border border-border p-5 hover:border-foreground/20 transition-colors duration-300 group ${onClick ? 'cursor-pointer' : ''}`}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 rounded-lg bg-secondary">
          <Icon className="w-4 h-4 text-foreground" />
        </div>
        <h3 className="font-semibold text-sm text-foreground leading-tight">{title}</h3>
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed">{result}</p>
    </div>
  )
}
