import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background text-foreground border-t border-border">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Bagian Foto */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-lg border border-border">
              {/* Pastikan file fotonyakepinhahah.jpg ada di dalam folder public */}
              <Image 
                src="/fotonyakepinhahah.jpg" 
                alt="Samuel - Operations Manager" 
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
          </div>

          {/* Bagian Teks */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              About Me
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Hi, I'm Samuel. I work at the intersection of day-to-day operations and process improvement. My experience spans team coordination, vendor management, SOP development, and workflow implementation that makes operations easier to execute, monitor, and scale.
              </p>
              <p>
                My focus is not simply ensuring today's work gets done. I build structured processes that continue to perform reliably as workload, team size, and operational complexity grow.
              </p>
              <p>
                WWhether coordinating distributed teams, improving operational workflows, or documenting repeatable systems, I aim to create clarity, accountability, and consistency across every stage of execution.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}