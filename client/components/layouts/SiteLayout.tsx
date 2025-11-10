import { PropsWithChildren, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, Moon, Sun, X } from "lucide-react";
import LavaBackground from "@/components/site/LavaBackground";
import MusicPlayer from "@/components/site/MusicPlayer";

export default function SiteLayout({ children }: PropsWithChildren) {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const initial = stored ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(initial);
  }, []);

  useEffect(() => {
    if (!theme) return;
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark'); else root.classList.remove('dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const navItems = [
    { href: "/#about", label: "About" },
    { href: "/#projects", label: "Projects" },
    { href: "/#rural-girls", label: "Rural Girls" },
    { href: "/#progress", label: "Progress" },
    { href: "/#skills", label: "Skills" },
    { href: "/#achievements", label: "Achievements" },
    { href: "/#education", label: "Education" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <LavaBackground />
      <header className="sticky top-0 z-50 w-full">
        <div className="mx-auto max-w-6xl px-4 py-3">
          <div className="card-glass px-4 py-2">
            <div className="flex items-center justify-between">
              <a href="/#about" className="inline-flex items-center gap-3">
                <span className={cn("text-lg font-semibold text-glow-purple")}>Khalid IBNFKIH</span>
              </a>
              <nav className="hidden md:flex items-center gap-4">
                {navItems.map((n) => (
                  <a key={n.href} href={n.href} className="text-sm text-foreground/90 hover:text-primary transition-colors">
                    {n.label}
                  </a>
                ))}
                <a href="/#contact" className="inline-flex items-center rounded-lg bg-primary text-primary-foreground px-4 py-2 font-semibold hover:scale-[1.03] transition-transform">
                  Get in touch
                </a>
                <button aria-label="Toggle theme" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="ml-1 inline-flex items-center justify-center rounded-lg border border-primary/30 px-3 py-2 hover:bg-primary/10">
                  {theme === 'dark' ? <Sun className="size-4" /> : <Moon className="size-4" />}
                </button>
              </nav>
              <button className="md:hidden text-foreground" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
                {open ? <X className="size-6" /> : <Menu className="size-6" />}
              </button>
            </div>
            {open && (
              <div className="mt-3 grid gap-2 md:hidden">
                {navItems.map((n) => (
                  <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-foreground hover:bg-primary/10 hover:text-primary">
                    {n.label}
                  </a>
                ))}
                <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="block rounded-lg px-3 py-2 text-foreground hover:bg-primary/10 hover:text-primary text-left">Toggle theme</button>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      {/* Floating ambient music player */}
      <MusicPlayer />

      <footer className="mt-20">
        <div className="mx-auto max-w-6xl px-4 pb-10">
          <div className="card-glass p-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-foreground/70">© {new Date().getFullYear()} Khalid IBNFKIH — Made with ❤️</p>
              <div className="flex items-center gap-4 text-sm">
                <a className="hover:text-primary" href="/#projects">Projects</a>
                <a className="hover:text-primary" href="mailto:khalidibnfkih@gmail.com">Email</a>
                <a className="hover:text-primary" href="/#about">Top</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
