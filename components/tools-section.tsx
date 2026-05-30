export function ToolsSection() {
  return (
    <section id="tools" className="py-24 px-6 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight mb-2">Remote Operations Stack</h2>
        <p className="text-muted-foreground mb-12">
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="p-8 rounded-2xl bg-card border border-border">
            <h3 className="font-semibold text-lg mb-6 text-foreground flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Mastered Stack
            </h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>• <strong className="text-foreground font-medium">Google Workspace</strong> (Drive, Docs, Sheets)</li>
              <li>• <strong className="text-foreground font-medium">Notion</strong> (Workspace Architecture & SOPs)</li>
              <li>• <strong className="text-foreground font-medium">ChatGPT / Gemini</strong> (Research & Brainstorming)</li>
              <li>• <strong className="text-foreground font-medium">Odoo Ecosystem</strong> (Async Process Documentation)</li>
              <li>• <strong className="text-foreground font-medium">Monday.com </strong> (Integration & Automation)</li>
              <li>• <strong className="text-foreground font-medium">Guesty</strong> (Async Process Documentation)</li>
              <li>• <strong className="text-foreground font-medium">OTA</strong> (Airbnb, Booking.com)</li>
            </ul>
          </div>

          <div className="p-8 rounded-2xl bg-card border border-border">
            <h3 className="font-semibold text-lg mb-6 text-foreground flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              Proficient
            </h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>• <strong className="text-foreground font-medium">HubSpot CRM</strong> (Pipeline & Data Management)</li>
              <li>• <strong className="text-foreground font-medium">Make.com</strong> (API Integration & Automation)</li>
              <li>• <strong className="text-foreground font-medium">Figma</strong> (Process Mapping & Wireframing)</li>
              <li>• <strong className="text-foreground font-medium">Slack / Discord</strong> (Team Comms Setup)</li>
            </ul>
          </div>

          <div className="p-8 rounded-2xl bg-card border border-border">
            <h3 className="font-semibold text-lg mb-6 text-foreground flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              Currently Learning
            </h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>• <strong className="text-foreground font-medium">Python</strong> (Data Automation & Scripting)</li>
              <li>• <strong className="text-foreground font-medium">SQL</strong> (Database Querying & Analytics)</li>
              <li>• <strong className="text-foreground font-medium">Docker</strong> (Basic System Containerization)</li>
              <li>• <strong className="text-foreground font-medium">Revenue Operations</strong> (RevOps Frameworks)</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}