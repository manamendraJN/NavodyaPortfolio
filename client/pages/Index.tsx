import { useState, useEffect } from "react";
import { MouseTrail } from "../components/ui/mouse-trail";
import { Navigation } from "../components/portfolio/navigation";
import { HeroSection } from "../components/portfolio/hero-section";
import { AboutSection } from "../components/portfolio/about-section";
import { TechnologiesSection } from "../components/portfolio/technologies-section";
import { ProjectsSection } from "../components/portfolio/projects-section";
import { CertificationsSection } from "../components/portfolio/certifications-section";
import { ContactSection } from "../components/portfolio/contact-section";
import { Footer } from "../components/portfolio/footer";

export default function Index() {
  const [isMouseTrailEnabled, setIsMouseTrailEnabled] = useState(() => {
    return localStorage.getItem("mouseTrailEnabled") !== "false";
  });

  useEffect(() => {
    localStorage.setItem("mouseTrailEnabled", isMouseTrailEnabled.toString());
  }, [isMouseTrailEnabled]);

  const toggleMouseTrail = () => {
    setIsMouseTrailEnabled((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-[hsl(0,0%,98%)] dark:bg-[hsl(213,50%,12%)] transition-colors duration-300">
      {isMouseTrailEnabled && <MouseTrail />}
      <Navigation isMouseTrailEnabled={isMouseTrailEnabled} toggleMouseTrail={toggleMouseTrail} />
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