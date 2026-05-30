"use client";

import Link from "next/link";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-6 bg-background">
      {/* BAGIAN NAMA YG UDAH DIGEDEIN & DITAMBAHIN TITLE */}
      <div className="font-bold text-lg md:text-xl truncate">
        Samuel Alexander <span className="font-normal text-sm md:text-base text-muted-foreground hidden lg:inline-block ml-1">| Remote Operations Manager & Team Coordinator</span>
      </div>
      
      {/* Bagian Kanan - Deretan Menu */}
      <div className="hidden md:flex items-center gap-8 shrink-0">
        <Link href="#solutions" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          Solutions
        </Link>
        
        <Link href="#impact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          Impact
        </Link>
        
        {/* Balikin pake Link bawaan Next.js aja biar rapi */}
        <Link href="#tools" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          Tools
        </Link>
        
        <a 
          href="https://drive.google.com/file/d/1DCZVD5GPS6cV0raADHoHaiVDIDTU-ya2/view" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Curriculum Vitae
          <Download size={14} />
        </a>

        <Button asChild className="bg-[#14A800] text-white hover:bg-[#118C00] text-xs font-mono tracking-wide rounded-md">
          <a href="https://www.upwork.com/" target="_blank" rel="noopener noreferrer">
            [UPWORK]
          </a>
        </Button>
      </div>
    </nav>
  );
}