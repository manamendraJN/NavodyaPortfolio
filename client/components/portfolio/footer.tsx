import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[hsl(213,50%,16%)] dark:bg-[hsl(213,50%,12%)] border-t border-[hsl(210,18%,85%)] dark:border-[hsl(172,85%,45%)]/30 py-12 relative transition-colors duration-300">
      <div className="container">
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white/90 dark:text-white/80 mb-6"
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
            className="text-white/70 dark:text-white/60 text-sm mb-8"
          >
            © {currentYear} All rights reserved. Designed & Developed with
            React, TypeScript & Tailwind CSS
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-6 text-white/70 dark:text-white/60 text-sm"
          >
            <span>Full-Stack Developer</span>
            <span>•</span>
            <span>Problem Solver</span>
            <span>•</span>
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
          className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-[hsl(172,85%,35%)] hover:bg-[hsl(172,85%,30%)] dark:bg-[hsl(172,85%,45%)] dark:hover:bg-[hsl(172,85%,40%)] text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[hsl(172,85%,35%)] focus:ring-offset-2 focus:ring-offset-[hsl(213,50%,16%)]"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </motion.button>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-1 left-1/4 w-32 h-px bg-gradient-to-r from-transparent via-[hsl(172,85%,45%)] to-transparent"></div>
        <div className="absolute -top-1 right-1/4 w-32 h-px bg-gradient-to-r from-transparent via-[hsl(210,18%,85%)] dark:via-[hsl(172,85%,45%)] to-transparent"></div>
      </div>
    </footer>
  );
}
