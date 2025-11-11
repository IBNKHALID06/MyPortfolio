import { Sun, Moon } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

import BackgroundFluid from "@/components/site/BackgroundFluid";
import { useTheme } from "@/components/ui/theme";
import { cn } from "@/lib/utils";

function DarkModeToggle() {
  const { theme, toggle } = useTheme();
  const Icon = theme === "dark" ? Sun : Moon;
  return (
    <button
      aria-label="Toggle dark mode"
      onClick={toggle}
      className="inline-flex items-center justify-center rounded-md border border-primary/30 px-3 py-1 text-sm hover:bg-primary/10"
    >
      <Icon className="size-4" />
    </button>
  );
}

export default function SiteLayout({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("min-h-screen flex flex-col", className)}>
      <BackgroundFluid />
      <header className="sticky top-0 z-20 backdrop-blur-md bg-background/70 border-b border-primary/10">
        <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between gap-4">
          <Link
            to="/"
            className="font-extrabold tracking-tight text-lg text-foreground"
          >
            Khalid IBNFKIH
          </Link>
          <nav className="hidden md:flex gap-4 text-sm text-foreground/80">
            <a href="#about" className="hover:text-foreground">
              About
            </a>
            <a href="#projects" className="hover:text-foreground">
              Projects
            </a>
            <a href="#progress" className="hover:text-foreground">
              Process
            </a>
            <a href="#gallery" className="hover:text-foreground">
              Gallery
            </a>
            <a href="#skills" className="hover:text-foreground">
              Skills
            </a>
            <a href="#education" className="hover:text-foreground">
              Education
            </a>
            <a href="#contact" className="hover:text-foreground">
              Contact
            </a>
          </nav>
          <DarkModeToggle />
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
