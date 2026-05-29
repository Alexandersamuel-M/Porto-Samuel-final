"use client"

export function WorkflowNode() {
  return (
    <div className="relative w-full h-full min-h-[400px] lg:min-h-[500px] flex items-center justify-center bg-card rounded-2xl border border-border p-6 overflow-hidden group hover:border-foreground/20 transition-colors duration-300">
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 400 400">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      <svg className="w-full max-w-sm h-auto" viewBox="0 0 300 280" fill="none">
        <rect x="20" y="20" width="60" height="36" rx="4" className="fill-secondary stroke-border" strokeWidth="1.5"/>
        <text x="50" y="42" className="fill-muted-foreground text-[8px] font-mono" textAnchor="middle">INPUT</text>
        
        <rect x="120" y="80" width="60" height="36" rx="4" className="fill-secondary stroke-border" strokeWidth="1.5"/>
        <text x="150" y="102" className="fill-muted-foreground text-[8px] font-mono" textAnchor="middle">PROCESS</text>
        
        <rect x="220" y="20" width="60" height="36" rx="4" className="fill-secondary stroke-border" strokeWidth="1.5"/>
        <text x="250" y="42" className="fill-muted-foreground text-[8px] font-mono" textAnchor="middle">VALIDATE</text>
        
        <rect x="220" y="140" width="60" height="36" rx="4" className="fill-secondary stroke-border" strokeWidth="1.5"/>
        <text x="250" y="162" className="fill-muted-foreground text-[8px] font-mono" textAnchor="middle">EXECUTE</text>
        
        <rect x="120" y="200" width="60" height="36" rx="4" className="fill-secondary stroke-border" strokeWidth="1.5"/>
        <text x="150" y="222" className="fill-muted-foreground text-[8px] font-mono" textAnchor="middle">OUTPUT</text>
        
        <rect x="20" y="140" width="60" height="36" rx="4" className="fill-secondary stroke-border" strokeWidth="1.5"/>
        <text x="50" y="162" className="fill-muted-foreground text-[8px] font-mono" textAnchor="middle">MONITOR</text>

        <line x1="80" y1="38" x2="120" y2="80" className="stroke-border" strokeWidth="1.5"/>
        <line x1="180" y1="98" x2="220" y2="56" className="stroke-border" strokeWidth="1.5"/>
        <line x1="250" y1="56" x2="250" y2="140" className="stroke-border" strokeWidth="1.5"/>
        <line x1="220" y1="158" x2="180" y2="200" className="stroke-border" strokeWidth="1.5"/>
        <line x1="120" y1="218" x2="80" y2="176" className="stroke-border" strokeWidth="1.5"/>
        <line x1="50" y1="140" x2="50" y2="56" className="stroke-border" strokeWidth="1.5"/>
        <line x1="80" y1="158" x2="120" y2="116" className="stroke-border" strokeWidth="1.5"/>

        <circle cx="150" cy="140" r="8" className="fill-border"/>
        <circle cx="150" cy="140" r="4" className="fill-muted-foreground"/>
      </svg>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="bg-accent text-accent-foreground px-4 py-2 rounded-lg font-mono text-xs font-medium shadow-lg border border-accent/50 animate-pulse">
          [VIEW_BUILD_LOGS]
        </div>
      </div>
      
      <div className="absolute bottom-4 left-4">
        <span className="text-xs font-mono text-muted-foreground">The Workflow Node</span>
      </div>
    </div>
  )
}
