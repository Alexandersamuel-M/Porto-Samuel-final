// file: components/footer.tsx
import { Mail, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border bg-background mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <span className="font-bold text-foreground block">Samuel Alexander</span>
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest mt-1 block">
            Operations Manager & Team Coordinator
          </span>
        </div>
        
        <div className="flex items-center gap-6">
          <a href="mailto:sama1504200@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
            <Mail className="w-5 h-5" />
          </a>
          {/* https://www.linkedin.com/in/samuel-alexander-marolop-79489b240/ */}
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}