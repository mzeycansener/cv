import { CustomCursor } from "@/components/ui/CustomCursor";
import { Hero } from "@/components/Hero";
import { AboutSkills } from "@/components/AboutSkills";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <CustomCursor />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 glass border-b-0 border-white/20 px-6 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold tracking-tighter text-primary">ZC.</div>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-foreground/80">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <Hero />
      <AboutSkills />
      <ExperienceTimeline />
      <Projects />
      <Contact />

      {/* Footer */}
      <footer className="py-8 text-center text-muted-foreground border-t border-border/50 bg-background/80 glass">
        <p className="font-medium">© {new Date().getFullYear()} Zeynel | YBS Expert. Advanced Portfolio Built with Next.js & Framer Motion.</p>
      </footer>
    </main>
  );
}
