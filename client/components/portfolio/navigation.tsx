import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

interface NavItem {
  id: string;
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { id: "home", label: "Home", href: "#" },
  { id: "about", label: "About", href: "#about" },
  { id: "technologies", label: "Skills", href: "#technologies" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "certifications", label: "Credentials", href: "#certifications" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(
          sectionId === "home" ? "" : sectionId,
        );
        if (element) {
          const offsetTop = sectionId === "home" ? 0 : element.offsetTop;
          const offsetBottom =
            offsetTop +
            (sectionId === "home" ? window.innerHeight : element.offsetHeight);

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);

    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.getElementById(href.substring(1));
    if (element) {
      const offset = 80; // Account for fixed nav height
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, href: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      scrollToSection(href);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 dark:bg-[hsl(213,50%,12%)]/95 backdrop-blur-lg shadow-lg border-b border-[hsl(210,18%,85%)]/20 dark:border-[hsl(172,85%,45%)]/20"
            : "bg-transparent"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo/Name */}
            <motion.button
              onClick={() => scrollToSection("#")}
              className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-[hsl(172,85%,35%)] focus:ring-opacity-50 rounded-lg p-2 -ml-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Go to homepage"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-[hsl(172,85%,35%)] to-[hsl(213,50%,16%)] dark:from-[hsl(172,85%,45%)] dark:to-[hsl(213,50%,20%)] rounded-full flex items-center justify-center text-white font-bold text-sm">
                NM
              </div>
              <span className="text-lg font-bold text-[hsl(213,50%,16%)] dark:text-[hsl(0,0%,98%)] hidden sm:block">
                Navodya Manamendra
              </span>
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.href)}
                  onKeyDown={(e) => handleKeyDown(e, item.href)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[hsl(172,85%,35%)] focus:ring-opacity-50 relative ${
                    activeSection === item.id
                      ? "text-[hsl(172,85%,35%)] dark:text-[hsl(172,85%,45%)]"
                      : "text-[hsl(213,50%,16%)] dark:text-[hsl(0,0%,85%)] hover:text-[hsl(172,85%,35%)] dark:hover:text-[hsl(172,85%,45%)]"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-current={activeSection === item.id ? "page" : undefined}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[hsl(172,85%,35%)] dark:bg-[hsl(172,85%,45%)] rounded-full"
                      layoutId="activeSection"
                      initial={false}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-[hsl(213,50%,16%)] dark:text-[hsl(0,0%,98%)] hover:bg-[hsl(210,18%,85%)]/20 dark:hover:bg-[hsl(213,50%,20%)] focus:outline-none focus:ring-2 focus:ring-[hsl(172,85%,35%)] focus:ring-opacity-50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/95 dark:bg-[hsl(213,50%,12%)]/95 backdrop-blur-lg border-t border-[hsl(210,18%,85%)]/20 dark:border-[hsl(172,85%,45%)]/20"
            >
              <div className="container mx-auto px-4 py-4">
                <div className="flex flex-col space-y-2">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.href)}
                      onKeyDown={(e) => handleKeyDown(e, item.href)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[hsl(172,85%,35%)] focus:ring-opacity-50 ${
                        activeSection === item.id
                          ? "text-[hsl(172,85%,35%)] dark:text-[hsl(172,85%,45%)] bg-[hsl(172,85%,35%)]/10 dark:bg-[hsl(172,85%,45%)]/10"
                          : "text-[hsl(213,50%,16%)] dark:text-[hsl(0,0%,85%)] hover:bg-[hsl(210,18%,85%)]/20 dark:hover:bg-[hsl(213,50%,20%)]"
                      }`}
                      aria-current={
                        activeSection === item.id ? "page" : undefined
                      }
                    >
                      {item.label}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer to prevent content from hiding behind fixed nav */}
      <div className="h-16 md:h-20" aria-hidden="true" />
    </>
  );
}
