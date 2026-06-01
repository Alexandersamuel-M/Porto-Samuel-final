import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background text-foreground border-t border-border">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Bagian Foto */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-lg border border-border">
              {/* Pastikan file FotoX.JPG ada di dalam folder public */}
              <Image 
                src="/FotoX.jpg" 
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
                Hi, I'm Samuel. As an Operations Manager and Revenue Operations (RevOps) specialist, I focus on turning chaotic workflows into streamlined, scalable systems.
              </p>
              <p>
                My approach is deeply rooted in structured frameworks like the Business Model Canvas and OKRs. I don't just build systems for the sake of automation; I design processes that directly impact growth, eliminate bottlenecks, and improve the bottom line.
              </p>
              <p>
                Whether it's auditing existing operations, mapping out efficient workflows, or building scalable B2B architectures, my goal is to bridge the gap between strategy and seamless daily execution.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}