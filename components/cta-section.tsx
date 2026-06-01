// file: components/cta-section.tsx
import { Download, Linkedin, Mail } from "lucide-react"

export function CtaSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-border bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div>
          <span className="text-sm font-mono text-muted-foreground tracking-widest uppercase block mb-4">
            {">"} Next Steps
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight text-balance">
            Open to Operations & Systems-Focused Opportunities
          </h2>
        </div>
        
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Available for Operations Coordinator, Operations Manager, Process Improvement, and Systems-Focused roles across remote and on-site teams.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a 
            href="[https://drive.google.com/uc?export=download&id=1DCZVD5GPS6cV0raADHoHaiVDIDTU-ya2](https://drive.google.com/uc?export=download&id=1DCZVD5GPS6cV0raADHoHaiVDIDTU-ya2)"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-medium hover:bg-primary/90 transition-colors"
          >
            <Download className="w-5 h-5" />
            Download CV
          </a>
          
          <a 
            href="https://linkedin.com" // Ganti dengan link LinkedIn asli lu
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-card text-foreground border border-border px-8 py-4 rounded-xl font-medium hover:bg-secondary transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>
          
          <a 
            href="mailto:sama1504200@gmail.com" // Ganti dengan email asli lu
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-card text-foreground border border-border px-8 py-4 rounded-xl font-medium hover:bg-secondary transition-colors"
          >
            <Mail className="w-5 h-5" />
            Email Contact
          </a>
        </div>
      </div>
    </section>
  )
}