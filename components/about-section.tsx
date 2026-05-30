"use client";

import { User } from "lucide-react";

export function AboutSection() {
  return (
    <section className="px-6 pb-16">
      <h2 className="text-xs font-medium text-muted-foreground tracking-widest mb-6">
        ABOUT SAMUEL 
      </h2>

      <div className="border border-border rounded-2xl bg-card p-8 md:p-10">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          
          {/* Left Column - Profile Photo */}
          <div className="md:w-1/3 flex justify-center md:justify">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden">
              <img 
                src="/FotoX.jpg" 
                alt="Samuel Alexander" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column - Bio Content */}
          <div className="md:w-2/3 flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Samuel Alexander
            </h3>
            <p className="text-blue-600 font-medium mb-6">
              Remote Operations Manager & Team Coordinator
            </p>

            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                I don't just manage operations—I architect them. With hands-on experience coordinating distributed teams and optimizing workflows across Surabaya, Bali, and Bandar Lampung, I understand the real friction between remote coordination and on-site execution.
              </p>
              <p>
                From standardizing SOPs to implementing vendor management systems, my focus is on designing scalable, documented processes that eliminate decision fatigue while respecting team autonomy and maximizing operational efficiency.
              </p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-1.5 bg-secondary text-muted-foreground text-sm rounded-full">
                Based in Bandar Lampung
              </span>
              <span className="px-4 py-1.5 bg-secondary text-muted-foreground text-sm rounded-full">
                Team Coordination
              </span>
              <span className="px-4 py-1.5 bg-secondary text-muted-foreground text-sm rounded-full">
                SOP Development
              </span>
              <span className="px-4 py-1.5 bg-secondary text-muted-foreground text-sm rounded-full">
                Process Improvement
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}