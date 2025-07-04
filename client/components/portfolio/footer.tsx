import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-[hsl(213,50%,16%)] dark:bg-[hsl(213,50%,12%)] border-t border-[hsl(210,18%,85%)] dark:border-[hsl(172,85%,45%)]/30 py-8 sm:py-12 relative transition-colors duration-300 touch-auto"
      style={{ touchAction: "auto" }}
    >
      <div className="container px-4 sm:px-6">
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white/90 dark:text-white/80 text-sm sm:text-base mb-4 sm:mb-6"
          >
            Built with 💙 by{" "}
            <span className="text-[hsl(172,85%,45%)] dark:text-[hsl(172,85%,45%)] font-medium">
              Navodya Manamendra
            </span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-white/70 dark:text-white/60 text-xs sm:text-sm mb-6 sm:mb-8"
          >
            © {currentYear} All rights reserved. Designed & Developed with
            React, TypeScript & Tailwind CSS
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2 sm:gap-4 text-white/70 dark:text-white/60 text-xs sm:text-sm"
          >
            <span>Full-Stack Developer</span>
            <span className="hidden sm:inline">•</span>
            <span>Problem Solver</span>
            <span className="hidden sm:inline">•</span>
            <span>Innovation Enthusiast</span>
          </motion.div>
        </div>

        {/* Scroll to top button */}
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          onClick={scrollToTop}
          className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 bg-[hsl(172,85%,35%)] hover:bg-[hsl(172,85%,30%)] dark:bg-[hsl(172,85%,45%)] dark:hover:bg-[hsl(172,85%,40%)] text-white p-3 sm:p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[hsl(172,85%,35%)] focus:ring-offset-2 focus:ring-offset-[hsl(213,50%,16%)] min-h-[44px] min-w-[44px] flex items-center justify-center"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Scroll to top"
          style={{ touchAction: "manipulation" }}
        >
          <ArrowUp className="w-[18px] sm:w-5 h-[18px] sm:h-5" />
        </motion.button>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-1 left-1/4 w-24 sm:w-32 h-px bg-gradient-to-r from-transparent via-[hsl(172,85%,45%)] to-transparent"></div>
        <div className="absolute -top-1 right-1/4 w-24 sm:w-32 h-px bg-gradient-to-r from-transparent via-[hsl(210,18%,85%)] dark:via-[hsl(172,85%,45%)] to-transparent"></div>
      </div>
    </footer>
  );
}