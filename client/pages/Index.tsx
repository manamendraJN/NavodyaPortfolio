import { useState, useEffect } from "react";
import { MouseTrail } from "../components/ui/mouse-trail";
import { ThemeToggle } from "../components/ui/theme-toggle";
import { Button } from "../components/ui/button";
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

      {/* Fixed control panel */}
      <div className="fixed right-5 top-24 z-50 flex flex-col items-center gap-4">
        <ThemeToggle />
<Button
  onClick={toggleMouseTrail}
  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-md backdrop-blur-sm
    ${isMouseTrailEnabled
      ? "bg-teal-600 text-white hover:bg-teal-700"
      : "bg-white text-gray-800 hover:bg-gray-200 dark:bg-[hsl(213,50%,16%)] dark:text-white dark:hover:bg-[hsl(213,50%,18%)]"}
    border border-gray-300 dark:border-[hsl(172,85%,32%)]/30
    focus:outline-none focus:ring-2 focus:ring-[hsl(172,85%,32%)] focus:ring-opacity-50`}
  aria-label={isMouseTrailEnabled ? "Disable mouse trail effect" : "Enable mouse trail effect"}
>
  {isMouseTrailEnabled ? "🌀 Disable Trail" : "✨ Enable Trail"}
</Button>
      </div>

      {/* Main content */}
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
