import { motion } from "framer-motion";
import { TypingAnimation } from "../ui/typing-animation";
import { Button } from "../ui/button";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      // Focus management for accessibility
      element.focus();
    }
  };

  return (
    <section
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[hsl(213,50%,16%)] to-[hsl(0,0%,98%)] dark:from-[hsl(213,50%,12%)] dark:to-[hsl(213,50%,18%)] flex items-center justify-center transition-colors duration-300 pt-16 md:pt-20"
      role="banner"
      aria-label="Hero section introducing Navodya Manamendra"
    >
      {/* Background geometric patterns with reduced motion */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-[hsl(172,85%,32%)] rotate-45"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-24 h-24 border border-[hsl(172,85%,32%)] rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
        />
        <motion.div
          className="absolute top-1/2 left-10 w-16 h-16 bg-[hsl(172,85%,32%)]/20 rotate-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 2 }}
        />
        <motion.div
          className="absolute bottom-20 left-1/3 w-20 h-20 border border-[hsl(210,18%,82%)] rotate-45"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 2.5 }}
        />
      </div>

      <div className="container relative z-10 px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Professional headshot placeholder - optimized for Fitts's Law */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <div
              className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-[hsl(172,85%,32%)] to-[hsl(213,50%,16%)] border-4 border-[hsl(210,18%,82%)] shadow-2xl flex items-center justify-center text-white text-4xl font-bold focus:outline-none focus:ring-4 focus:ring-[hsl(172,85%,32%)] focus:ring-opacity-50"
              role="img"
              aria-label="Navodya Manamendra's profile picture placeholder"
              tabIndex={0}
            >
              NM
            </div>
          </motion.div>

          {/* Typing animation for main heading - WCAG compliant */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-[hsl(213,50%,16%)] dark:text-[hsl(0,0%,98%)] mb-4">
              <TypingAnimation
                text="Hi, I'm Navodya Manamendra 👋"
                className="inline-block"
                speed={80}
              />
            </h1>
          </motion.div>

          {/* Subheading with high contrast - WCAG AA compliant */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="mb-8"
          >
            <p className="text-xl md:text-2xl text-[hsl(172,85%,35%)] dark:text-[hsl(172,85%,45%)] font-medium">
              <span className="gradient-text drop-shadow-lg">
                Full-Stack Developer | Web Developer | Innovator
              </span>
            </p>
          </motion.div>

          {/* Call-to-action buttons - Fitts's Law optimized with 48px minimum touch target */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Button
              className="bg-[hsl(172,85%,35%)] hover:bg-[hsl(172,85%,30%)] text-white text-base font-medium px-6 py-5 rounded-md shadow-sm hover:shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[hsl(172,85%,35%)] focus:ring-opacity-50 min-w-[180px]"
              
            >
            <a href="/client/components/CV/Navodya_Manamendra_CV.pdf" download="NavodyaManamendra_CV.pdf">
    <button>Download My CV</button>
</a>
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="border-2 border-[hsl(172,85%,35%)] text-[hsl(172,85%,35%)] hover:bg-[hsl(172,85%,35%)] hover:text-white dark:border-[hsl(172,85%,45%)] dark:text-[hsl(172,85%,45%)] dark:hover:bg-[hsl(172,85%,45%)] dark:hover:text-[hsl(213,50%,12%)] transition-all duration-300 text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[hsl(172,85%,35%)] focus:ring-opacity-50 min-w-[200px] min-h-[48px]"
              aria-label="Navigate to contact section"
            >
              Connect With Me 💬
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator with accessibility considerations */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        role="button"
        tabIndex={0}
        aria-label="Scroll down to continue"
        onClick={() => scrollToSection("about")}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            scrollToSection("about");
          }
        }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-[hsl(172,85%,32%)] rounded-full flex justify-center cursor-pointer hover:border-[hsl(213,50%,16%)] transition-colors focus:outline-none focus:ring-2 focus:ring-[hsl(172,85%,32%)] focus:ring-opacity-50"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-[hsl(172,85%,32%)] rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
