import {
  Mail,
  Github,
  Linkedin,
  Download,
} from "lucide-react";

import {
  ResearchIcon,
  ProjectIcon,
  SkillIcon,
  CertificationIcon,
  EducationIcon,
  AchievementIcon,
  ExperienceIcon,
  ContactIcon,
} from "@/components/icons";
import GlassCard from "@/components/site/GlassCard";
import Hero from "@/components/site/Hero";

export default function Index() {
  return (
    <>
      <Hero />

      <section id="about" className="mx-auto max-w-6xl px-4 mt-24 mb-24">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">About Me</h2>
          <p className="text-foreground/60 mt-2">CS student building privacy-focused software</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <GlassCard className="p-8 text-foreground/90">
            <p className="text-lg leading-relaxed">
              I'm a Computer Science student at FSAC building privacy-focused
              software and experimenting with AI security systems. I'm passionate
              about the intersection of artificial intelligence and cybersecurity,
              developing applications that protect user privacy while advancing
              technological innovation.
            </p>
            <p className="mt-6 text-lg leading-relaxed">
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
            <p className="mt-6 text-lg leading-relaxed">
              I'm also an ALX Term 1 Valedictorian with certifications in
              cybersecurity from Harvard and Cybrary. Beyond development, I enjoy
              photography and exploring how technology can create safe,
              empowering digital experiences.
            </p>
          </GlassCard>
          <GlassCard className="p-8 text-foreground/90">
            <ul className="space-y-4">
              <li>
                <p className="text-foreground font-semibold text-lg">Focus</p>
                <p className="text-foreground/70 mt-2">Cybersecurity, Machine Learning, AI Systems</p>
              </li>
              <li>
                <p className="text-foreground font-semibold text-lg">Languages</p>
                <p className="text-foreground/70 mt-2">Python, JavaScript, C, HTML, CSS</p>
              </li>
              <li>
                <p className="text-foreground font-semibold text-lg">Tools & Systems</p>
                <p className="text-foreground/70 mt-2">Linux, Git, GitHub</p>
              </li>
              <li>
                <p className="text-foreground font-semibold text-lg">Natural Languages</p>
                <p className="text-foreground/70 mt-2">Native: Darija · Fluent: Arabic · Professional: English, French</p>
              </li>
            </ul>
          </GlassCard>
        </div>
      </section>

      <section id="research" className="mx-auto max-w-6xl px-4 mb-24">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <ResearchIcon />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Research</h2>
          </div>
          <p className="text-foreground/60 mt-2">Exploring image defenses against generative manipulation</p>
        </div>
        <GlassCard className="p-8 text-foreground/90">
          <h3 className="text-foreground font-bold text-2xl">
            PixelVeil — Image Defense Against Generative Manipulation
          </h3>
          <p className="mt-2 text-foreground/60">Dec 2025 – Feb 2026 · Independent Research</p>
          <ul className="mt-6 space-y-3 text-lg">
            <li className="flex gap-3">
              <span className="text-primary mt-1">→</span>
              <span>
                Conducted a multi-layer experimental study on image-only defenses
                against generative AI manipulation.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary mt-1">→</span>
              <span>
                Evaluated techniques including color-space perturbations, geometric
                distortions, texture noise, and adversarial Vision Transformer
                attacks.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary mt-1">→</span>
              <span>
                Demonstrated limitations of image-only protection against multimodal
                generative models.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary mt-1">→</span>
              <span>
                Proposed future work exploring capture-time defenses using secure
                camera architectures.
              </span>
            </li>
          </ul>
        </GlassCard>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-4 mb-24">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <ProjectIcon />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Technical Projects</h2>
          </div>
          <p className="text-foreground/60 mt-2">Privacy-focused applications and secure environments</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <GlassCard className="p-8 text-foreground/90 flex flex-col">
            <h3 className="text-foreground font-bold text-2xl">CodeVail</h3>
            <p className="mt-2 text-foreground/60 text-lg">Secure Coding Interview Practice Environment</p>
            <p className="mt-1 text-foreground/70">Aug 2025 – Oct 2025</p>
            <ul className="mt-6 space-y-3 text-lg flex-1">
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span>
                  Developed a Python desktop application for solving coding interview
                  problems in a controlled environment.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span>
                  Implemented system process monitoring to detect external assistance
                  tools during coding sessions.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span>
                  Integrated a code execution environment enabling real-time evaluation
                  of solutions.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span>
                  Designed a modular interface using HTML/CSS integrated with
                  Python-based UI components.
                </span>
              </li>
            </ul>
          </GlassCard>

          <GlassCard className="p-8 text-foreground/90 flex flex-col">
            <h3 className="text-foreground font-bold text-2xl">SlideStage</h3>
            <p className="mt-2 text-foreground/60 text-lg">Privacy-First Slide Presentation Recorder</p>
            <p className="mt-1 text-foreground/70">2025 · Open Source Project</p>
            <ul className="mt-6 space-y-3 text-lg flex-1">
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span>
                  Built a browser-based presentation recording tool capturing slides,
                  webcam video, and live subtitles.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span>
                  Implemented client-side recording and rendering using JavaScript
                  browser APIs.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span>
                  Designed to run entirely client-side, ensuring privacy without cloud
                  storage or login requirements.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span>
                  Developed as a lightweight open-source alternative to presentation
                  recording platforms.
                </span>
              </li>
            </ul>
          </GlassCard>

          <GlassCard className="p-8 text-foreground/90 flex flex-col">
            <h3 className="text-foreground font-bold text-2xl">Aquanour</h3>
            <p className="mt-2 text-foreground/60 text-lg">Smart Water Monitoring & Reporting System</p>
            <p className="mt-1 text-foreground/70">Mar 2025 – Jun 2025</p>
            <ul className="mt-6 space-y-3 text-lg flex-1">
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span>
                  Designed a system enabling communities to report water leaks and
                  infrastructure issues.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span>
                  Proposed a low-cost technological approach supporting sustainable
                  water management.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span>
                  Presented within the ENT100 entrepreneurship program.
                </span>
              </li>
            </ul>
          </GlassCard>

          <GlassCard className="p-8 text-foreground/90 flex flex-col">
            <h3 className="text-foreground font-bold text-2xl">Consoly</h3>
            <p className="mt-2 text-foreground/60 text-lg">Anonymous Emotional Support Platform</p>
            <p className="mt-1 text-foreground/70">Nov 2024 – Feb 2025</p>
            <ul className="mt-6 space-y-3 text-lg flex-1">
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span>
                  Developed a platform allowing users to share emotions anonymously
                  without fear of judgment.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span>
                  Designed privacy-focused messaging and authentication flows.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span>
                  Focused on secure anonymous communication for sensitive discussions.
                </span>
              </li>
            </ul>
          </GlassCard>
        </div>
      </section>

      <section id="professional" className="mx-auto max-w-6xl px-4 mb-24">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <ExperienceIcon />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Professional Experience</h2>
          </div>
          <p className="text-foreground/60 mt-2">IT and insurance operations background</p>
        </div>
        <GlassCard className="p-8 text-foreground/90">
          <h3 className="text-foreground font-bold text-2xl">
            Expertise Auto Service
          </h3>
          <p className="mt-2 text-foreground/60 text-lg">
            IT & Insurance Operations Assistant · Jul 2025 – Sep 2025
          </p>
          <p className="text-foreground/70 mt-2">Casablanca, Morocco</p>
          <ul className="mt-6 space-y-3 text-lg">
            <li className="flex gap-3">
              <span className="text-primary">•</span>
              <span>Provided IT assistance and technical troubleshooting for internal systems.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">•</span>
              <span>
                Managed client–insurance clearance procedures related to windshield
                replacement services.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">•</span>
              <span>
                Processed insurance documentation and claim forms required for
                coverage approval.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">•</span>
              <span>
                Coordinated between clients, the company, and insurance providers to
                ensure smooth claim processing.
              </span>
            </li>
          </ul>
        </GlassCard>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-4 mb-24">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <SkillIcon />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Technical Skills</h2>
          </div>
          <p className="text-foreground/60 mt-2">Languages, tools, and domains</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-foreground/90">
          <GlassCard className="p-8">
            <h4 className="text-foreground font-bold text-lg">Programming Languages</h4>
            <ul className="mt-4 space-y-2 text-lg">
              <li className="flex gap-2 items-center">
                <span className="text-primary">▸</span>
                <span>Python</span>
              </li>
              <li className="flex gap-2 items-center">
                <span className="text-primary">▸</span>
                <span>JavaScript</span>
              </li>
              <li className="flex gap-2 items-center">
                <span className="text-primary">▸</span>
                <span>C</span>
              </li>
              <li className="flex gap-2 items-center">
                <span className="text-primary">▸</span>
                <span>HTML</span>
              </li>
              <li className="flex gap-2 items-center">
                <span className="text-primary">▸</span>
                <span>CSS</span>
              </li>
            </ul>
          </GlassCard>
          <GlassCard className="p-8">
            <h4 className="text-foreground font-bold text-lg">Tools & Systems</h4>
            <ul className="mt-4 space-y-2 text-lg">
              <li className="flex gap-2 items-center">
                <span className="text-primary">▸</span>
                <span>Linux</span>
              </li>
              <li className="flex gap-2 items-center">
                <span className="text-primary">▸</span>
                <span>Git</span>
              </li>
              <li className="flex gap-2 items-center">
                <span className="text-primary">▸</span>
                <span>GitHub</span>
              </li>
            </ul>
          </GlassCard>
          <GlassCard className="p-8">
            <h4 className="text-foreground font-bold text-lg">Domains</h4>
            <ul className="mt-4 space-y-2 text-lg">
              <li className="flex gap-2 items-center">
                <span className="text-primary">▸</span>
                <span>Cybersecurity</span>
              </li>
              <li className="flex gap-2 items-center">
                <span className="text-primary">▸</span>
                <span>Machine Learning</span>
              </li>
              <li className="flex gap-2 items-center">
                <span className="text-primary">▸</span>
                <span>AI Systems</span>
              </li>
            </ul>
          </GlassCard>
        </div>
      </section>

      <section id="certifications" className="mx-auto max-w-6xl px-4 mb-24">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <CertificationIcon />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Certifications</h2>
          </div>
          <p className="text-foreground/60 mt-2">Professional credentials and achievements</p>
        </div>
        <GlassCard className="p-8 text-foreground/90">
          <ul className="space-y-4">
            <li className="flex items-start gap-4 text-lg">
              <span className="text-primary font-bold text-xl mt-0.5">✓</span>
              <div>
                <p className="font-semibold">CS50 Introduction to Cybersecurity</p>
                <p className="text-foreground/60 text-sm mt-1">Harvard University (2024)</p>
              </div>
            </li>
            <li className="flex items-start gap-4 text-lg">
              <span className="text-primary font-bold text-xl mt-0.5">✓</span>
              <div>
                <p className="font-semibold">Cybrary Cybersecurity Fundamentals</p>
                <p className="text-foreground/60 text-sm mt-1">2024</p>
              </div>
            </li>
            <li className="flex items-start gap-4 text-lg">
              <span className="text-primary font-bold text-xl mt-0.5">✓</span>
              <div>
                <p className="font-semibold">ALX Pathway Certification</p>
              </div>
            </li>
          </ul>
        </GlassCard>
      </section>

      <section id="education" className="mx-auto max-w-6xl px-4 mb-24">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <EducationIcon />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Education</h2>
          </div>
          <p className="text-foreground/60 mt-2">Academic background and coursework</p>
        </div>
        <div className="space-y-6">
          <GlassCard className="p-8 text-foreground/90">
            <p className="text-foreground font-bold text-xl">
              Faculté des Sciences Aïn Chock (FSAC) — University Hassan II
            </p>
            <p className="mt-2 text-foreground/60 text-lg">Bachelor's in Applied Computer Science</p>
            <p className="mt-1 text-foreground/70">Sep 2025 – Present</p>
            <p className="mt-4 text-lg">
              <span className="font-semibold">Coursework:</span> Algorithms, Python &
              C Programming, Digital Electronics, Computer Architecture, Web
              Development, Signal Processing.
            </p>
          </GlassCard>
          <GlassCard className="p-8 text-foreground/90">
            <p className="text-foreground font-bold text-xl">
              Jaber Bnou Hayan High School
            </p>
            <p className="mt-2 text-foreground/60 text-lg">Baccalaureate in Science</p>
            <p className="mt-1 text-foreground/70">2024 · Casablanca, Morocco</p>
          </GlassCard>
        </div>
      </section>

      <section id="achievements" className="mx-auto max-w-6xl px-4 mb-24">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <AchievementIcon />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Achievements</h2>
          </div>
          <p className="text-foreground/60 mt-2">Highlights and recognitions</p>
        </div>
        <GlassCard className="p-8 text-foreground/90">
          <ul className="space-y-4">
            <li className="flex items-start gap-4 text-lg">
              <span className="text-primary font-bold text-xl">★</span>
              <span>ALX Term 1 Valedictorian</span>
            </li>
            <li className="flex items-start gap-4 text-lg">
              <span className="text-primary font-bold text-xl">★</span>
              <span>
                Conducted advanced research on image defenses against generative AI
                manipulation (PixelVeil)
              </span>
            </li>
            <li className="flex items-start gap-4 text-lg">
              <span className="text-primary font-bold text-xl">★</span>
              <span>
                Built CodeVail — A secure coding interview practice environment with
                system monitoring
              </span>
            </li>
            <li className="flex items-start gap-4 text-lg">
              <span className="text-primary font-bold text-xl">★</span>
              <span>
                Developed Consoly — An anonymous emotional support platform
              </span>
            </li>
            <li className="flex items-start gap-4 text-lg">
              <span className="text-primary font-bold text-xl">★</span>
              <span>
                Founded SlideStage — Privacy-first open-source presentation recorder
              </span>
            </li>
            <li className="flex items-start gap-4 text-lg">
              <span className="text-primary font-bold text-xl">★</span>
              <span>
                Designed Aquanour — Smart water monitoring system for sustainable
                water management
              </span>
            </li>
          </ul>
        </GlassCard>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-4 mb-20">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <ContactIcon />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Get in Touch</h2>
          </div>
          <p className="text-foreground/60 mt-2">Let's connect and collaborate</p>
        </div>
        <GlassCard className="p-8 text-foreground/90">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-lg mb-8">
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:khalidibnfkih@gmail.com"
                  className="text-primary hover:underline underline-offset-2"
                >
                  khalidibnfkih@gmail.com
                </a>
              </p>
              <p className="text-lg font-semibold mb-4">Connect with me:</p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/IBNKHALID06"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-lg border border-primary/30 hover:bg-primary/5 transition-colors text-lg"
                >
                  <Github className="w-5 h-5" /> GitHub
                </a>
                <a
                  href="https://linkedin.com/in/khalidibnfkih"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-lg border border-primary/30 hover:bg-primary/5 transition-colors text-lg"
                >
                  <Linkedin className="w-5 h-5" /> LinkedIn
                </a>
                <a
                  href="https://www.researchgate.net/profile/Khalid-Ibnfkih"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-lg border border-primary/30 hover:bg-primary/5 transition-colors text-lg"
                >
                  <Mail className="w-5 h-5" /> ResearchGate
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-start lg:justify-center">
              <p className="text-lg leading-relaxed mb-8">
                I'm open to collaborations, internships, and freelance projects at the
                intersection of AI and cybersecurity. Feel free to reach out with any opportunities or ideas.
              </p>
              <a
                href="/api/resume"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors w-fit text-lg"
              >
                <Download className="w-5 h-5" /> Download Resume
              </a>
            </div>
          </div>
        </GlassCard>
      </section>
    </>
  );
}
