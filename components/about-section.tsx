"use client";

export function AboutSection() {
return ( <section id="tools" className="px-6 pb-16"> <h2 className="text-xs font-medium text-muted-foreground tracking-widest mb-6">
TOOLS & SYSTEMS </h2>

```
  <div className="grid md:grid-cols-3 gap-6">

    <div className="border border-border rounded-2xl bg-card p-6">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-foreground">
          Daily Operations Stack
        </h3>
        <p className="text-sm text-muted-foreground mt-1">
          Tools used regularly for coordination, reporting, and documentation.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {[
          "Google Workspace",
          "Google Sheets",
          "Microsoft Excel",
          "Microsoft Word",
          "Notion",
          "Canva",
          "ChatGPT",
        ].map((tool) => (
          <span
            key={tool}
            className="px-3 py-1 bg-secondary rounded-full text-sm text-muted-foreground"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>

    <div className="border border-border rounded-2xl bg-card p-6">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-foreground">
          Workflow & Systems
        </h3>
        <p className="text-sm text-muted-foreground mt-1">
          Process mapping, workflow visibility, and operational organization.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {[
          "Airtable",
          "ClickUp",
          "Trello",
          "Miro",
          "Whimsical",
          "Lucidchart",
        ].map((tool) => (
          <span
            key={tool}
            className="px-3 py-1 bg-secondary rounded-full text-sm text-muted-foreground"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>

    <div className="border border-border rounded-2xl bg-card p-6">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-foreground">
          ERP & Automation
        </h3>
        <p className="text-sm text-muted-foreground mt-1">
          Currently expanding expertise through self-directed projects and system simulations.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {[
          "Odoo",
          "HubSpot",
          "Make",
          "Zapier",
          "n8n",
          "Power BI",
        ].map((tool) => (
          <span
            key={tool}
            className="px-3 py-1 bg-secondary rounded-full text-sm text-muted-foreground"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>

  </div>
</section>
```

);
}
