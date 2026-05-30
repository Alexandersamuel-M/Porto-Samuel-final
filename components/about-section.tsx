"use client";

import { User } from "lucide-react";

export function AboutSection() {
  const badges = [
    "Ready for EST TIME",
    "Property Manager",
    "ERP Administration",
    "Back-Office Support",
    "Operations Asisstant",
  ];

  return (
    <section className="px-6 pb-16">
      <h2 className="text-xs font-medium text-muted-foreground tracking-widest mb-6">
        ABOUT SAMUEL 
      </h2>

      <div className="border border-border rounded-2xl bg-card p-8 md:p-10">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Left Column - Profile Photo Placeholder */}
          <div className="md:w-1/3 flex justify-center md:justify-start">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl bg-gradient-to-br from-secondary to-border flex items-center justify-center">
              <img 
  src="/Foto X.webp"
  alt="Samuel Alexander" 
  className="w-full h-full object-cover rounded-2xl" 
/>              
            </div>
          </div>

          {/* Right Column - Bio Content */}
          <div className="md:w-2/3 flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Samuel Alexander
            </h3>
            <p className="text-blue-600 font-medium mb-6">
              Operations Manager & Business Workflow Architect
            </p>

            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                I provide the reliable back-office support that businesses need to keep their daily operations running smoothly. With hands-on experience handling property management administration in Bali, overseeing daily detailing workflows for Whoozh in Surabaya, and managing the operational setup for Amerta Auto Care in Bandar Lampung, I excel at organizing messy field data into structured systems.
              </p>
              <p>
                My focus is on practical administration. Whether it's managing daily inputs in an ERP, maintaining standard operating procedures, or keeping remote property workflows organized, I ensure your business data is accurate and your teams know exactly what to do.
              </p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="px-4 py-1.5 bg-secondary text-muted-foreground text-sm rounded-full"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
