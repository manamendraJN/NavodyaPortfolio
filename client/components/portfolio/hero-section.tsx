import { motion } from "framer-motion";
import { TypingAnimation } from "../ui/typing-animation";
import { Button } from "../ui/button";
import { Canvas } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";
import { useRef } from "react";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      element.focus();
    }
  };

  const canvasRef = useRef(null);

  return (
    <section
      className="min-h-screen relative overflow-hidden bg-[hsl(213,50%,12%)] flex items-center justify-center transition-colors duration-300 pt-16 md:pt-20"
      role="banner"
      aria-label="Hero section introducing Navodya Manamendra"
    >
      {/* 3D Space Background with Stars */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <Canvas
          ref={canvasRef}
          camera={{ position: [0, 0, 10], fov: 75 }}
          style={{ background: "radial-gradient(circle, hsl(213,50%,16%) 0%, hsl(213,50%,10%) 100%)" }}
        >
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={0.8} />
          <Stars
            radius={150}
            depth={60}
            count={7000}
            factor={3}
            saturation={0.1}
            fade
            speed={0.1}
          />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={true}
            autoRotate
            autoRotateSpeed={0.2}
          />
        </Canvas>
      </div>

      {/* Subtle Background Geometric Patterns */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <motion.div
          className="absolute top-20 left-20 w-28 h-28 border border-[hsl(210,18%,82%)] rotate-45"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1.5, delay: 0.8 }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-20 h-20 border border-[hsl(210,18%,82%)] rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1.5, delay: 1.2 }}
        />
        <motion.div
          className="absolute top-1/2 left-10 w-14 h-14 bg-[hsl(172,85%,32%)]/10 rotate-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1.5, delay: 1.6 }}
        />
      </div>

      <div className="container relative z-10 px-6">
        <div className="text-center max-w-3xl mx-auto">
          {/* Professional Headshot with Slow Up-and-Down Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: [0, -10, 0],
            }}
            transition={{
              opacity: { duration: 0.8, ease: "easeOut" },
              y: {
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              },
            }}
            className="mb-10"
          >
            <img
              src="/client/components/portfolio/dp/IMG_20250627_172506.jpg"
              alt="Navodya Manamendra's profile picture"
              className="w-64 h-64 mx-auto rounded-full border-2 border-[hsl(210,18%,82%)] shadow-md object-cover focus:outline-none focus:ring-2 focus:ring-[hsl(172,85%,32%)] focus:ring-opacity-50"
              role="img"
              tabIndex={0}
            />
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