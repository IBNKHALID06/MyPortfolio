import GlassCard from "./GlassCard";

export default function Hero() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 pt-12 md:pt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="inline-block rounded-full border border-primary/30 bg-secondary px-3 py-1 text-xs text-primary mb-4">Khalid</div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-glow-purple">
            Building tools that merge AI, security, and empathy.
          </h1>
          <p className="mt-4 text-foreground/90 max-w-prose">
            I’m an independent developer exploring the intersection between artificial intelligence and cybersecurity. I’ve built apps like Consoly — a mental health platform — and CodeVail — a desktop coding environment for interview preparation. I love creating tools that make technology more human and accessible.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="/#projects" className="inline-flex items-center rounded-lg bg-primary text-primary-foreground px-5 py-3 font-semibold hover:scale-[1.03] transition-transform">
              View My Projects
            </a>
            <a href="/#contact" className="inline-flex items-center rounded-lg bg-primary/10 text-primary px-5 py-3 hover:bg-primary/20">
              Contact Me
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="mx-auto h-56 w-56 md:h-64 md:w-64 rounded-full grid place-items-center overflow-hidden bg-gradient-to-tr from-violet-500 to-fuchsia-400 ring-glow-purple select-none">
            <img src="https://cdn.builder.io/api/v1/image/assets%2Fc204d5ef3ac44e349ef5b320a536efad%2Fd6f5d34c35254f5ea57c6b287b47bc4b?format=webp&width=800" alt="Khalid portrait" className="h-full w-full object-cover" />
          </div>
          <div className="pointer-events-none absolute inset-0 blur-3xl -z-10 bg-primary/20 rounded-full" />
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
        <GlassCard className="p-4 text-foreground/80"><p>Independent developer from <span className="text-primary font-semibold">Morocco</span></p></GlassCard>
        <GlassCard className="p-4 text-foreground/80"><p><span className="text-primary font-semibold">AI × Security</span> focus</p></GlassCard>
        <GlassCard className="p-4 text-foreground/80"><p>Piano and car enthusiast</p></GlassCard>
      </div>
    </section>
  );
}
