import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutSkills } from "@/components/AboutSkills";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import LiquidGradient from "@/components/ui/flow-gradient-hero-section";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-transparent text-foreground overflow-x-hidden">
      <LiquidGradient />
      <Navbar />

      <section id="about">
        <Hero />
      </section>

      <section id="experience">
        <ExperienceTimeline />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="skills">
        <AboutSkills />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </main>
  );
}
