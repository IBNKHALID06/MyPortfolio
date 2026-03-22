import {
  Mail,
  Github,
  Linkedin,
  Youtube,
  Book,
  Users,
  Laptop,
  LineChart,
  Calendar,
  Layers,
} from "lucide-react";

import GlassCard from "@/components/site/GlassCard";
import Hero from "@/components/site/Hero";
import SectionTitle from "@/components/site/SectionTitle";
import Slideshow from "@/components/site/Slideshow";

export default function Index() {
  return (
    <>
      <Hero />

      <section id="about" className="mx-auto max-w-6xl px-4 mt-14">
        <SectionTitle>About Me</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <GlassCard className="p-6 text-foreground/90">
            <p>
              I'm a Computer Science student at FSAC building privacy-focused
              software and experimenting with AI security systems. I'm passionate
              about the intersection of artificial intelligence and cybersecurity,
              developing applications that protect user privacy while advancing
              technological innovation.
            </p>
            <p className="mt-3">
              My work spans research on defenses against generative manipulation,
              secure development environments, and privacy-first applications.
              I've built several projects including{" "}
              <span className="text-primary font-semibold">Consoly</span>, an
              anonymous emotional-expression platform,{" "}
              <span className="text-primary font-semibold">CodeVail</span>, a
              secure coding interview practice environment, and{" "}
              <span className="text-primary font-semibold">SlideStage</span>, a
              privacy-first presentation recorder.
            </p>
            <p className="mt-3">
              I'm also an ALX Term 1 Valedictorian with certifications in
              cybersecurity from Harvard and Cybrary. Beyond development, I enjoy
              photography and exploring how technology can create safe,
              empowering digital experiences.
            </p>
          </GlassCard>
          <GlassCard className="p-6 text-foreground/90">
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <span className="text-foreground font-semibold">Focus:</span>{" "}
                Cybersecurity, Machine Learning, AI Systems
              </li>
              <li>
                <span className="text-foreground font-semibold">Languages:</span>{" "}
                Python, JavaScript, C, HTML, CSS
              </li>
              <li>
                <span className="text-foreground font-semibold">Tools &
                  Systems:
                </span>{" "}
                Linux, Git, GitHub
              </li>
              <li>
                <span className="text-foreground font-semibold">
                  Natural Languages:
                </span>{" "}
                Native: Darija · Fluent: Arabic · Professional: English, French
              </li>
            </ul>
          </GlassCard>
        </div>
      </section>

      <section id="research" className="mx-auto max-w-6xl px-4 mt-16">
        <SectionTitle>Research</SectionTitle>
        <GlassCard className="p-6 text-foreground/90">
          <h3 className="text-foreground font-semibold text-lg">
            PixelVeil — Image Defense Against Generative Manipulation
          </h3>
          <p className="mt-1 text-sm text-primary">Dec 2025 – Feb 2026 · Independent Research</p>
          <ul className="mt-4 space-y-2 list-disc list-inside">
            <li>
              Conducted a multi-layer experimental study on image-only defenses
              against generative AI manipulation.
            </li>
            <li>
              Evaluated techniques including color-space perturbations, geometric
              distortions, texture noise, and adversarial Vision Transformer
              attacks.
            </li>
            <li>
              Demonstrated limitations of image-only protection against multimodal
              generative models.
            </li>
            <li>
              Proposed future work exploring capture-time defenses using secure
              camera architectures.
            </li>
          </ul>
        </GlassCard>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-4 mt-16">
        <SectionTitle>Technical Projects</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <GlassCard className="p-6 text-foreground/90">
            <h3 className="text-foreground font-semibold text-lg">CodeVail</h3>
            <p className="mt-1 text-sm text-primary">Aug 2025 – Oct 2025</p>
            <p className="mt-2 text-sm font-semibold">Secure Coding Interview Practice Environment</p>
            <ul className="mt-3 space-y-2 list-disc list-inside text-sm">
              <li>
                Developed a Python desktop application for solving coding interview
                problems in a controlled environment.
              </li>
              <li>
                Implemented system process monitoring to detect external assistance
                tools during coding sessions.
              </li>
              <li>
                Integrated a code execution environment enabling real-time evaluation
                of solutions.
              </li>
              <li>
                Designed a modular interface using HTML/CSS integrated with
                Python-based UI components.
              </li>
            </ul>
          </GlassCard>

          <GlassCard className="p-6 text-foreground/90">
            <h3 className="text-foreground font-semibold text-lg">SlideStage</h3>
            <p className="mt-1 text-sm text-primary">2025 · Open Source Project</p>
            <p className="mt-2 text-sm font-semibold">Privacy-First Slide Presentation Recorder</p>
            <ul className="mt-3 space-y-2 list-disc list-inside text-sm">
              <li>
                Built a browser-based presentation recording tool capturing slides,
                webcam video, and live subtitles.
              </li>
              <li>
                Implemented client-side recording and rendering using JavaScript
                browser APIs.
              </li>
              <li>
                Designed to run entirely client-side, ensuring privacy without cloud
                storage or login requirements.
              </li>
              <li>
                Developed as a lightweight open-source alternative to presentation
                recording platforms.
              </li>
            </ul>
          </GlassCard>

          <GlassCard className="p-6 text-foreground/90">
            <h3 className="text-foreground font-semibold text-lg">Aquanour</h3>
            <p className="mt-1 text-sm text-primary">Mar 2025 – Jun 2025</p>
            <p className="mt-2 text-sm font-semibold">Smart Water Monitoring & Reporting System</p>
            <ul className="mt-3 space-y-2 list-disc list-inside text-sm">
              <li>
                Designed a system enabling communities to report water leaks and
                infrastructure issues.
              </li>
              <li>
                Proposed a low-cost technological approach supporting sustainable
                water management.
              </li>
              <li>
                Presented within the ENT100 entrepreneurship program.
              </li>
            </ul>
          </GlassCard>

          <GlassCard className="p-6 text-foreground/90">
            <h3 className="text-foreground font-semibold text-lg">Consoly</h3>
            <p className="mt-1 text-sm text-primary">Nov 2024 – Feb 2025</p>
            <p className="mt-2 text-sm font-semibold">Anonymous Emotional Support Platform</p>
            <ul className="mt-3 space-y-2 list-disc list-inside text-sm">
              <li>
                Developed a platform allowing users to share emotions anonymously
                without fear of judgment.
              </li>
              <li>
                Designed privacy-focused messaging and authentication flows.
              </li>
              <li>
                Focused on secure anonymous communication for sensitive discussions.
              </li>
            </ul>
          </GlassCard>
        </div>
      </section>

      <section id="professional" className="mx-auto max-w-6xl px-4 mt-16">
        <SectionTitle>Professional Experience</SectionTitle>
        <GlassCard className="p-6 text-foreground/90">
          <h3 className="text-foreground font-semibold text-lg">
            Expertise Auto Service
          </h3>
          <p className="mt-1 text-sm text-primary">
            IT & Insurance Operations Assistant · Jul 2025 – Sep 2025
          </p>
          <p className="text-sm text-foreground/70 mt-1">Casablanca, Morocco</p>
          <ul className="mt-4 space-y-2 list-disc list-inside">
            <li>Provided IT assistance and technical troubleshooting for internal systems.</li>
            <li>
              Managed client–insurance clearance procedures related to windshield
              replacement services.
            </li>
            <li>
              Processed insurance documentation and claim forms required for
              coverage approval.
            </li>
            <li>
              Coordinated between clients, the company, and insurance providers to
              ensure smooth claim processing.
            </li>
          </ul>
        </GlassCard>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-4 mt-16">
        <SectionTitle>Technical Skills</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-foreground/90">
          <GlassCard className="p-6">
            <h4 className="text-foreground font-semibold">Programming Languages</h4>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>Python</li>
              <li>JavaScript</li>
              <li>C</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </GlassCard>
          <GlassCard className="p-6">
            <h4 className="text-foreground font-semibold">Tools & Systems</h4>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>Linux</li>
              <li>Git</li>
              <li>GitHub</li>
            </ul>
          </GlassCard>
          <GlassCard className="p-6">
            <h4 className="text-foreground font-semibold">Domains</h4>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>Cybersecurity</li>
              <li>Machine Learning</li>
              <li>AI Systems</li>
            </ul>
          </GlassCard>
        </div>
      </section>

      <section id="certifications" className="mx-auto max-w-6xl px-4 mt-16">
        <SectionTitle>Certifications</SectionTitle>
        <GlassCard className="p-6 text-foreground/90">
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-primary font-semibold min-w-fit mt-1">✓</span>
              <span>
                <span className="font-semibold">CS50 Introduction to Cybersecurity</span>
                {" "}— Harvard University (2024)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-semibold min-w-fit mt-1">✓</span>
              <span>
                <span className="font-semibold">Cybrary Cybersecurity Fundamentals</span>
                {" "}(2024)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-semibold min-w-fit mt-1">✓</span>
              <span>
                <span className="font-semibold">ALX Pathway Certification</span>
              </span>
            </li>
          </ul>
        </GlassCard>
      </section>

      <section id="education" className="mx-auto max-w-6xl px-4 mt-16">
        <SectionTitle>Education</SectionTitle>
        <div className="space-y-4">
          <GlassCard className="p-6 text-foreground/90">
            <p className="text-foreground font-semibold">
              Faculté des Sciences Aïn Chock (FSAC) — University Hassan II
            </p>
            <p className="mt-1 text-sm text-primary">Bachelor's in Applied Computer Science</p>
            <p className="mt-1 text-sm">Sep 2025 – Present</p>
            <p className="mt-3 text-sm">
              <span className="font-semibold">Coursework:</span> Algorithms, Python &
              C Programming, Digital Electronics, Computer Architecture, Web
              Development, Signal Processing.
            </p>
          </GlassCard>
          <GlassCard className="p-6 text-foreground/90">
            <p className="text-foreground font-semibold">
              Jaber Bnou Hayan High School
            </p>
            <p className="mt-1 text-sm text-primary">Baccalaureate in Science</p>
            <p className="mt-1 text-sm">2024 · Casablanca, Morocco</p>
          </GlassCard>
        </div>
      </section>

      <section id="achievements" className="mx-auto max-w-6xl px-4 mt-16">
        <SectionTitle>Achievements</SectionTitle>
        <GlassCard className="p-6 text-foreground/90">
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="text-primary font-semibold min-w-fit">⭐</span>
              <span>ALX Term 1 Valedictorian</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-semibold min-w-fit">🔒</span>
              <span>
                Conducted advanced research on image defenses against generative AI
                manipulation (PixelVeil)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-semibold min-w-fit">🛡️</span>
              <span>
                Built CodeVail — A secure coding interview practice environment with
                system monitoring
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-semibold min-w-fit">💬</span>
              <span>
                Developed Consoly — An anonymous emotional support platform
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-semibold min-w-fit">🎯</span>
              <span>
                Founded SlideStage — Privacy-first open-source presentation recorder
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-semibold min-w-fit">💧</span>
              <span>
                Designed Aquanour — Smart water monitoring system for sustainable
                water management
              </span>
            </li>
          </ul>
        </GlassCard>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-4 mt-16 mb-20">
        <SectionTitle>Contact</SectionTitle>
        <GlassCard className="p-6 text-foreground/90">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p>
                Email:{" "}
                <a
                  href="mailto:khalidibnfkih@gmail.com"
                  className="text-primary underline-offset-2 hover:underline"
                >
                  khalidibnfkih@gmail.com
                </a>
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="https://github.com/IBNKHALID06"
                  className="inline-flex items-center gap-2 rounded-lg border border-primary/30 px-3 py-2 hover:bg-primary/10"
                >
                  <Github className="size-4" /> GitHub
                </a>
                <a
                  href="https://linkedin.com/in/khalidibnfkih"
                  className="inline-flex items-center gap-2 rounded-lg border border-primary/30 px-3 py-2 hover:bg-primary/10"
                >
                  <Linkedin className="size-4" /> LinkedIn
                </a>
                <a
                  href="https://www.youtube.com/@KhalidIBNFKIH"
                  className="inline-flex items-center gap-2 rounded-lg border border-primary/30 px-3 py-2 hover:bg-primary/10"
                >
                  <Youtube className="size-4" /> YouTube
                </a>
                <a
                  href="mailto:khalidibnfkih@gmail.com"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary text-primary-foreground px-3 py-2 font-semibold hover:scale-[1.03] transition-transform"
                >
                  <Mail className="size-4" /> Email Me
                </a>
              </div>
            </div>
            <div>
              <p>
                Open to collaborations, internships, and freelance projects at the
                intersection of AI and cybersecurity.
              </p>
            </div>
          </div>
        </GlassCard>
      </section>
    </>
  );
}
