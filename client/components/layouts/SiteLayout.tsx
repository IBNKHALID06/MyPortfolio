import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export default function SiteLayout({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("min-h-screen flex flex-col", className)}>
      <header className="sticky top-0 z-20 backdrop-blur-md bg-background/70 border-b border-primary/10">
        <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
          <Link to="/" className="font-extrabold tracking-tight text-lg text-foreground">Khalid IBNFKIH</Link>
          <nav className="hidden md:flex gap-4 text-sm text-foreground/80">
            <a href="#about" className="hover:text-foreground">About</a>
            <a href="#projects" className="hover:text-foreground">Projects</a>
            <a href="#progress" className="hover:text-foreground">Process</a>
            <a href="#gallery" className="hover:text-foreground">Gallery</a>
            <a href="#skills" className="hover:text-foreground">Skills</a>
            <a href="#education" className="hover:text-foreground">Education</a>
            <a href="#contact" className="hover:text-foreground">Contact</a>
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="mt-16 border-t border-primary/10">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-foreground/60">
          © {new Date().getFullYear()} Khalid IBNFKIH. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
