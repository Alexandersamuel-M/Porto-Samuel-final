import { LucideIcon } from "lucide-react"

interface SpecializationCardProps {
  icon: LucideIcon
  number: string
  title: string
  items: string[]
}

export function SpecializationCard({ icon: Icon, number, title, items }: SpecializationCardProps) {
  return (
    <div className="bg-card rounded-2xl border border-border p-6 hover:border-foreground/20 transition-colors duration-300 group">
      <div className="flex items-start gap-4">
        <div className="p-2 rounded-lg bg-secondary">
          <Icon className="w-5 h-5 text-foreground" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-mono text-sm font-semibold text-foreground mb-3">
            [{number}] {title}
          </h3>
          <ul className="space-y-1.5">
            {items.map((item, index) => (
              <li key={index} className="text-sm text-muted-foreground font-mono">
                {">> "}{item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
