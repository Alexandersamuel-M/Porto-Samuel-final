// file: components/footer.tsx
import { Mail, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border bg-background mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <span className="font-bold text-foreground block">Samuel Alexander</span>
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest mt-1 block">
            Operations Manager & Systems Thinker
          </span>
        </div>
          </a>
        </div>
      </div>
    </footer>
  )
}