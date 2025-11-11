import GlassCard from "./GlassCard";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none select-none opacity-30 blur-3xl">
        <div className="blob w-72 h-72 rounded-full bg-fuchsia-500/40 absolute -top-10 -left-10" />
        <div className="blob blob-delay w-72 h-72 rounded-full bg-violet-500/30 absolute top-32 -right-10" />
        <div className="blob blob-delay-2 w-72 h-72 rounded-full bg-indigo-500/30 absolute -bottom-10 left-1/3" />
      </div>
      <div className="mx-auto max-w-6xl px-4 pt-16">
        <GlassCard className="p-8 md:p-12">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
            Hi, I’m Khalid — building at the intersection of AI and cybersecurity
          </h1>
          <p className="mt-4 text-foreground/80 max-w-3xl">
            Moroccan developer crafting safe, empowering digital experiences. Here you’ll find a quick overview of my projects, process, and interests.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center rounded-lg bg-primary text-primary-foreground px-5 py-2 font-semibold hover:scale-[1.03] transition-transform">
              See projects
            </a>
            <a href="#contact" className="inline-flex items-center rounded-lg border border-primary/30 px-5 py-2 font-semibold hover:bg-primary/10">
              Get in touch
            </a>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
