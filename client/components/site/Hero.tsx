import GlassCard from "./GlassCard";

export default function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 pt-16">
        <GlassCard className="p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
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
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fc204d5ef3ac44e349ef5b320a536efad%2Fc2a81b492c0e47e3810513a75aee6727?format=webp&width=800"
              alt="Khalid portrait"
              className="w-40 h-40 md:w-56 md:h-56 rounded-2xl object-cover border border-primary/20 shadow-xl"
              loading="eager"
            />
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
