// file: components/about-section.tsx
import Image from "next/image"

export function AboutSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card/30 border-b border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Kolom Foto */}
          <div className="relative group mx-auto lg:mx-0 w-full max-w-md">
            <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border bg-secondary">
              <Image 
                src="/image_5f3338.jpg" 
                alt="Samuel Alexander - Operations Manager"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                sizes="(max-width: 768px) 100vw, 500px"
              />
            </div>
          </div>

          {/* Kolom Teks Profil */}
          <div className="space-y-8">
            <div>
              <span className="text-sm font-mono text-muted-foreground tracking-widest uppercase">
                {">"} Operations & Execution
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-4 leading-tight">
                From ground-level execution to operational architecture.
              </h2>
            </div>
            
            <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
              <p>
                My background is rooted heavily in hands-on operations. I progressed from direct operational execution into workflow improvement, SOP optimization, and team coordination.
              </p>
              <p>
                Whether it is coordinating a 14-person staff across 13 villa properties, standardizing workflows for a seasonal production peak, or mapping logistics for live inventory, my role remains the same: I am an operator who builds processes. I ensure that high-level operational planning translates smoothly into rigid on-ground execution.
              </p>
              <p>
                As an Operations Manager, my focus is always on team coordination, vendor management, and identifying the structural bottlenecks that slow down daily execution. I build systems so teams can operate with clarity and standards.
              </p>
              <Image 
                src="/FotoX.jpg" 
                alt="Samuel - Operations Manager" 
                width={500} 
                height={500} 
                className="rounded-lg shadow-md" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}