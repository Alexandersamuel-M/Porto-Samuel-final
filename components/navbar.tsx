"use client"

import Link from "next/link"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="w-full border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-sm font-bold tracking-tight text-foreground">
              SAMUEL ALEXANDER <span className="text-muted-foreground font-normal">|</span> <span className="font-medium text-muted-foreground">REMOTE OPERATIONS MANAGER</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <Link 
              href="#solutions" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Solutions
            </Link>
            <Link 
              href="#impact" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Impact
            </Link>
            <Link 
              href="#about" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              About
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
            <Button className="bg-[#14A800] text-white hover:bg-[#118C00] text-xs font-mono tracking-wide">
  [UPWORK]
</Button>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="sm" className="text-foreground">
              Menu
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
