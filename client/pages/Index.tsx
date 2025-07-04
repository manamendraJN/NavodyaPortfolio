import { MouseTrail } from "../components/ui/mouse-trail";
import { ThemeToggle } from "../components/ui/theme-toggle";
import { Navigation } from "../components/portfolio/navigation";
import { HeroSection } from "../components/portfolio/hero-section";
import { AboutSection } from "../components/portfolio/about-section";
import { TechnologiesSection } from "../components/portfolio/technologies-section";
import { ProjectsSection } from "../components/portfolio/projects-section";
import { CertificationsSection } from "../components/portfolio/certifications-section";
import { ContactSection } from "../components/portfolio/contact-section";
import { Footer } from "../components/portfolio/footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-[hsl(0,0%,98%)] dark:bg-[hsl(213,50%,12%)] transition-colors duration-300">
      <MouseTrail />
      <ThemeToggle />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <TechnologiesSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
