"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Download, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  // State untuk ngatur menu Tools buka/tutup
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Efek ini buat nutup menu kalau user ngeklik di luar kotak menu
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsToolsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="flex items-center justify-between px-6 py-6 bg-background relative z-50">
      {/* BAGIAN NAMA & TITLE */}
      <div className="flex flex-col">
        <span className="font-bold text-xl md:text-2xl text-foreground">Samuel Alexander</span>
        <span className="font-normal text-sm md:text-base text-muted-foreground mt-0.5">
          Remote Operations Manager & Team Coordinator
        </span>
      </div>
      
      {/* BAGIAN MENU KANAN */}
      <div className="hidden md:flex items-center gap-8 shrink-0">
        <Link href="#solutions" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          Solutions
        </Link>
        
        <Link href="#impact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          Impact
        </Link>
        
        {/* DROPDOWN MENU TOOLS */}
        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={() => setIsToolsOpen(!isToolsOpen)}
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors outline-none"
          >
            Tools
            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isToolsOpen ? "rotate-180" : ""}`} />
          </button>

          {/* KOTAK DAFTAR MENU YANG MUNCUL SAAT DIKLIK */}
          {isToolsOpen && (
            <div className="absolute top-full right-0 mt-4 w-48 bg-card border border-border rounded-lg shadow-xl py-2 flex flex-col animate-in fade-in slide-in-from-top-2">
              <Link 
                href="#hubspot" 
                className="px-4 py-2.5 text-sm text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
                onClick={() => setIsToolsOpen(false)}
              >
                HubSpot (CRM)
              </Link>
              <Link 
                href="#odoo" 
                className="px-4 py-2.5 text-sm text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
                onClick={() => setIsToolsOpen(false)}
              >
                Odoo ERP
              </Link>
              <Link 
                href="#vercel" 
                className="px-4 py-2.5 text-sm text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
                onClick={() => setIsToolsOpen(false)}
              >
                Vercel (Deployment)
              </Link>
              <Link 
                href="#notion" 
                className="px-4 py-2.5 text-sm text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
                onClick={() => setIsToolsOpen(false)}
              >
                Notion (SOPs)
              </Link>
            </div>
          )}
        </div>
        {/* END DROPDOWN MENU TOOLS */}
        
        <a 
  href="/samuel-cv.pdf" 
  download="CV_Samuel_Alexander.pdf"
  className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
>
  Curriculum Vitae
  <Download size={14} />
</a>

        <Button asChild className="bg-[#14A800] text-white hover:bg-[#118C00] text-xs font-mono tracking-wide rounded-md">
          <a href="https://www.alexandersamuel.space/upwork" target="_blank" rel="noopener noreferrer">
            [UPWORK]
          </a>
        </Button>
      </div>
    </nav>
  );
}