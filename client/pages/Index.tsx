import GlassCard from "@/components/site/GlassCard";
import SectionTitle from "@/components/site/SectionTitle";
import Hero from "@/components/site/Hero";
import { Mail, Github, Linkedin, Youtube } from "lucide-react";

export default function Index() {
  return (
    <>
      <Hero />

      <section id="about" className="mx-auto max-w-6xl px-4 mt-14">
        <SectionTitle>About Me</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <GlassCard className="p-6 text-foreground/90">
            <p>
              I’m a Moroccan developer passionate about combining artificial intelligence and cybersecurity to create meaningful, safe, and empowering digital experiences.
            </p>
            <p className="mt-3">
              During my gap year, I built two projects — <span className="text-primary font-semibold">Consoly</span>, an anonymous emotional-expression app designed to help people share their feelings without fear of judgment, and <span className="text-primary font-semibold">CodeVail</span>, a Windows desktop app that helps developers practice coding interviews in a secure, focused environment.
            </p>
            <p className="mt-3">
              Outside of coding, I enjoy photography, especially capturing skies and everyday beauty through my lens — a passion I share with my late father. I also love learning new languages and exploring how tech can connect people across cultures. I’m also passionate about playing piano and I’m a car enthusiast.
            </p>
          </GlassCard>
          <GlassCard className="p-6 text-foreground/90">
            <ul className="space-y-2 list-disc list-inside">
              <li><span className="text-foreground font-semibold">Focus:</span> AI, Cybersecurity, Cloud Computing</li>
              <li><span className="text-foreground font-semibold">Tools:</span> GitHub, Linux, Framer, Figma</li>
              <li><span className="text-foreground font-semibold">Programming:</span> Python, HTML, CSS, JavaScript</li>
              <li><span className="text-foreground font-semibold">Soft Skills:</span> Leadership, Communication, Critical Thinking, Public Speaking</li>
              <li><span className="text-foreground font-semibold">Languages:</span> Native: Darija · Fluent: Arabic · Advanced: English, French</li>
            </ul>
          </GlassCard>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-4 mt-16">
        <SectionTitle>Projects Summary</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <GlassCard className="p-6 text-foreground/90">
            <h3 className="text-foreground font-semibold text-lg">Consoly</h3>
            <p className="mt-1 text-sm">Type: Web App</p>
            <p className="mt-2">Goal: Provide a safe, anonymous space for people to express emotions without fear or guilt.</p>
            <p className="mt-2">Highlights: Built with Python and Flask; focuses on mental health and community well-being.</p>
            <p className="mt-2">Role: Full-stack developer, UI designer, and founder.</p>
            <p className="mt-2">Result: Functional prototype with smooth user flow and anonymous posting system.</p>
          </GlassCard>
          <GlassCard className="p-6 text-foreground/90">
            <h3 className="text-foreground font-semibold text-lg">CodeVail</h3>
            <p className="mt-1 text-sm">Type: Desktop App</p>
            <p className="mt-2">Goal: Help developers practice coding interviews in a controlled environment.</p>
            <p className="mt-2">Highlights: Built with Python; features in-app coding interface and system monitoring.</p>
            <p className="mt-2">Role: Developer and designer.</p>
            <p className="mt-2">Result: Fully functional Windows app ready for download and use.</p>
          </GlassCard>
          <GlassCard className="p-6 text-foreground/90">
            <h3 className="text-foreground font-semibold text-lg">Aquanour (Concept)</h3>
            <p className="mt-1 text-sm">Type: Sustainability Concept</p>
            <p className="mt-2">Goal: Innovate water access for rural communities.</p>
            <p className="mt-2">Context: Part of an entrepreneurship course milestone.</p>
          </GlassCard>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-4 mt-16">
        <SectionTitle>Skills</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-foreground/90">
          <GlassCard className="p-6"><h4 className="text-foreground font-semibold">Programming</h4><ul className="mt-2 list-disc list-inside space-y-1"><li>Python</li><li>HTML</li><li>CSS</li><li>JavaScript</li></ul></GlassCard>
          <GlassCard className="p-6"><h4 className="text-foreground font-semibold">Tools</h4><ul className="mt-2 list-disc list-inside space-y-1"><li>GitHub</li><li>Linux</li><li>Framer</li></ul></GlassCard>
          <GlassCard className="p-6"><h4 className="text-foreground font-semibold">Focus Areas</h4><ul className="mt-2 list-disc list-inside space-y-1"><li>AI</li><li>Cybersecurity</li><li>Cloud Computing</li></ul></GlassCard>
          <GlassCard className="p-6"><h4 className="text-foreground font-semibold">Soft Skills</h4><ul className="mt-2 list-disc list-inside space-y-1"><li>Leadership</li><li>Communication</li><li>Critical Thinking</li><li>Public Speaking</li></ul></GlassCard>
          <GlassCard className="p-6"><h4 className="text-foreground font-semibold">Languages</h4><ul className="mt-2 list-disc list-inside space-y-1"><li>Native: Darija</li><li>Fluent: Arabic</li><li>Advanced: English, French</li></ul></GlassCard>
        </div>
      </section>

      <section id="achievements" className="mx-auto max-w-6xl px-4 mt-16">
        <SectionTitle>Achievements</SectionTitle>
        <GlassCard className="p-6 text-foreground/90">
          <ul className="space-y-2">
            <li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" className="size-4 mt-1 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 21h8l-4-9-4 9z"/><path d="M7 7h10"/><path d="M12 3v4"/></svg><span>Developed Consoly – A mental health web app merging empathy and anonymity.</span></li>
            <li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" className="size-4 mt-1 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M8 21h8"/></svg><span>Built CodeVail – A Windows app for coding interview prep.</span></li>
            <li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" className="size-4 mt-1 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 14v7"/><rect x="5" y="3" width="14" height="10" rx="2"/></svg><span>Top 1% National Public Speaking Contest – Spoke on COVID-19’s social impact.</span></li>
            <li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" className="size-4 mt-1 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3l8 4v5c0 5-3.5 9-8 9s-8-4-8-9V7l8-4z"/><path d="M9 12l2 2 4-4"/></svg><span>CS50 Cybersecurity & Cybrary Certifications – Strengthened technical foundation.</span></li>
            <li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" className="size-4 mt-1 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8"/><path d="M21 8v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8"/></svg><span>Photography Hobbyist – Passionate about capturing everyday beauty.</span></li>
            <li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" className="size-4 mt-1 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8a6 6 0 00-9 5.197"/><path d="M21 12a9 9 0 01-15 6"/></svg><span>Community Volunteer – Led Ramadan charity drive for the homeless.</span></li>
          </ul>
        </GlassCard>
      </section>

      <section id="education" className="mx-auto max-w-6xl px-4 mt-16">
        <SectionTitle>Education</SectionTitle>
        <GlassCard className="p-6 text-foreground/90">
          <p className="text-foreground font-semibold">Faculty of Science Ain Chock / Computer Science Major</p>
          <p className="mt-1">Currently studying</p>
        </GlassCard>
        <div className="h-4" />
        <GlassCard className="p-6 text-foreground/90">
          <p className="text-foreground font-semibold">Jaber Bnou Hayan High School — Casablanca, Morocco</p>
          <p className="mt-1">GPA: 3.7 / 4.0 (≈ 15/20 on Moroccan scale)</p>
          <p className="mt-1">Public Curriculum (No AP/IB Courses)</p>
        </GlassCard>
      </section>

      <section id="resume" className="mx-auto max-w-6xl px-4 mt-16">
        <SectionTitle>Resume</SectionTitle>
        <GlassCard className="p-6 text-foreground/90">
          <p>If you’d like a copy of my resume, you can request it by email. I’ll reply with the latest PDF.</p>
          <div className="mt-4">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=khalidibnfkih@gmail.com&su=Resume%20Request&body=Hi%20Khalid%2C%20please%20share%20your%20latest%20resume." target="_blank" rel="noopener" className="inline-flex items-center rounded-lg bg-primary text-primary-foreground px-5 py-2 font-semibold hover:scale-[1.03] transition-transform">Request Resume by Email</a>
          </div>
        </GlassCard>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-4 mt-16 mb-20">
        <SectionTitle>Contact</SectionTitle>
        <GlassCard className="p-6 text-foreground/90">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p>Email: <a href="mailto:khalidibnfkih@gmail.com" className="text-primary underline-offset-2 hover:underline">khalidibnfkih@gmail.com</a></p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href="https://github.com/IBNKHALID06" className="inline-flex items-center gap-2 rounded-lg border border-primary/30 px-3 py-2 hover:bg-primary/10"><Github className="size-4"/> GitHub</a>
                <a href="https://linkedin.com/in/khalidibnfkih" className="inline-flex items-center gap-2 rounded-lg border border-primary/30 px-3 py-2 hover:bg-primary/10"><Linkedin className="size-4"/> LinkedIn</a>
                <a href="https://www.youtube.com/@KhalidIBNFKIH" className="inline-flex items-center gap-2 rounded-lg border border-primary/30 px-3 py-2 hover:bg-primary/10"><Youtube className="size-4"/> YouTube</a>
                <a href="https://tiktok.com/@khalidposts" className="inline-flex items-center gap-2 rounded-lg border border-primary/30 px-3 py-2 hover:bg-primary/10">TikTok</a>
                <a href="mailto:khalidibnfkih@gmail.com" className="inline-flex items-center gap-2 rounded-lg bg-primary text-primary-foreground px-3 py-2 font-semibold hover:scale-[1.03] transition-transform"><Mail className="size-4"/> Email Me</a>
              </div>
            </div>
            <div>
              <p>Open to collaborations, internships, and freelance projects at the intersection of AI and cybersecurity.</p>
            </div>
          </div>
        </GlassCard>
      </section>
    </>
  );
}
