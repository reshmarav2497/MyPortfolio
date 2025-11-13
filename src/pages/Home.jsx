import { ToggleTheme } from "@/components/ToggleTheme";
import { NavBar } from "@/components/NavBar";
import { HeroSection } from "@/components/HeroSection";
import { AboutMeSection } from "@/components/AboutMeSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactMeSection } from "@/components/ContactMeSection";
import { Footer } from "@/components/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Toggle Theme */}
      <ToggleTheme />

      {/* NavBar */}
      <NavBar />

      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutMeSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactMeSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
