import { Mail, Github, Linkedin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 pt-20 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 items-start lg:items-center">
          <div className="flex flex-col justify-start pt-4">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-tight">
                Hi, I'm Khalid
              </h1>
              <p className="text-2xl md:text-3xl text-foreground/70 font-light mt-6 leading-relaxed max-w-2xl">
                Building privacy-focused software at the intersection of AI and cybersecurity
              </p>
            </div>
            
            <p className="text-lg text-foreground/60 max-w-2xl leading-relaxed mb-10">
              Moroccan developer crafting safe, empowering digital experiences. Here you'll find my projects, research, and work.
            </p>

            <div className="flex flex-col gap-6 mb-12">
              <div className="flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                >
                  View my work
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 border border-primary/30 text-foreground font-semibold rounded-lg hover:bg-primary/5 transition-colors"
                >
                  Get in touch
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="mailto:khalidibnfkih@gmail.com"
                className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-primary/30 hover:bg-primary/10 transition-colors"
                title="Email"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/IBNKHALID06"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-primary/30 hover:bg-primary/10 transition-colors"
                title="GitHub"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/khalidibnfkih"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-primary/30 hover:bg-primary/10 transition-colors"
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fc204d5ef3ac44e349ef5b320a536efad%2Fc2a81b492c0e47e3810513a75aee6727?format=webp&width=800"
              alt="Khalid portrait"
              className="w-64 h-64 lg:w-80 lg:h-80 rounded-2xl object-cover border border-primary/20 shadow-2xl"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
