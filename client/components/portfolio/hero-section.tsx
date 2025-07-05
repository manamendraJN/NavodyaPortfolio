import { motion } from "framer-motion";
import { TypingAnimation } from "../ui/typing-animation";
import { Button } from "../ui/button";
import { Canvas } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import dpImage from "@/components/portfolio/dp/Untitled-Pica.png";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      element.focus();
    }
  };

  const canvasRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile devices and manage touch events
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 640); // Tailwind's sm breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    const canvas = canvasRef.current;
    if (canvas) {
      // Explicitly allow all touch actions
      canvas.style.touchAction = "auto";

      // Prevent Canvas from capturing touch events on mobile
      const preventCanvasTouch = (e) => {
        if (isMobile) {
          // Allow default scrolling behavior
          e.stopPropagation();
        }
      };

      canvas.addEventListener("touchstart", preventCanvasTouch, { passive: true });
      canvas.addEventListener("touchmove", preventCanvasTouch, { passive: true });
      canvas.addEventListener("touchend", preventCanvasTouch, { passive: true });

      return () => {
        canvas.removeEventListener("touchstart", preventCanvasTouch);
        canvas.removeEventListener("touchmove", preventCanvasTouch);
        canvas.removeEventListener("touchend", preventCanvasTouch);
        window.removeEventListener("resize", checkMobile);
      };
    }
  }, [isMobile]);

  return (
    <section
      className="pb-12 sm:pb-20 min-h-[80vh] sm:min-h-screen relative overflow-hidden flex items-center justify-center transition-colors duration-300 bg-[hsl(213,50%,12%)] touch-auto"
      role="banner"
      aria-label="Hero section introducing Navodya Manamendra"
      style={{ touchAction: "auto" }}
    >
      {/* Fallback Background for WebGL Failure */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(circle, hsl(213,50%,16%) 0%, hsl(213,50%,10%) 100%)",
        }}
        aria-hidden="true"
      >
        <Canvas
          ref={canvasRef}
          camera={{ position: [0, 0, 10], fov: 80 }}
          style={{
            background: "transparent",
            touchAction: "auto",
            pointerEvents: isMobile ? "none" : "auto", // Disable all pointer/touch events on mobile
          }}
          gl={{ antialias: true, pixelRatio: Math.min(window.devicePixelRatio, 2) }}
        >
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={0.6} />
          <Stars
            radius={150}
            depth={50}
            count={5000}
            factor={2}
            saturation={0.1}
            speed={0.03}
            fade={false}
          />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={!isMobile} // Disable manual rotation on mobile
            autoRotate
            autoRotateSpeed={0.15}
            enableDamping={true}
            dampingFactor={0.05}
          />
        </Canvas>
      </div>

      <div className="container relative z-10 px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto">
          {/* Professional Headshot with Slow Up-and-Down Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: [0, -8, 0],
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
            className="mb-6 sm:mb-10"
          >
            <img
              src={dpImage}
              alt="Navodya Manamendra's profile picture"
              className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto rounded-full border-2 border-[hsl(210,18%,82%)] shadow-md object-cover focus:outline-none focus:ring-2 focus:ring-[hsl(172,85%,32%)] focus:ring-opacity-50"
              role="img"
              tabIndex={0}
            />
          </motion.div>

          {/* Refined Typing Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-4 sm:mb-6"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[hsl(0,0%,98%)] tracking-tight">
              <TypingAnimation
                text="Navodya Manamendra"
                className="inline-block bg-gradient-to-r from-[hsl(172,85%,35%)] to-[hsl(210,18%,82%)] bg-clip-text text-transparent"
                speed={50}
              />
            </h1>
          </motion.div>

          {/* Professional Subheading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mb-6 sm:mb-10"
          >
            <p className="text-base sm:text-lg md:text-xl font-medium text-[hsl(210,18%,82%)] tracking-wide">
              Full-Stack Developer | Web Developer | Innovator
            </p>
          </motion.div>

          {/* Refined Call-to-Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
          >
            <Button
              className="bg-[hsl(172,85%,35%)] hover:bg-[hsl(172,85%,30%)] text-white text-sm sm:text-base font-medium px-5 sm:px-6 py-4 sm:py-5 rounded-md shadow-sm hover:shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[hsl(172,85%,35%)] focus:ring-opacity-50 min-w-[160px] sm:min-w-[180px]"
            >
              <a href="/client/components/CV/Navodya_Manamendra_CV.pdf" download="NavodyaManamendra_CV.pdf">
                Download My CV
              </a>
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="border-2 border-[hsl(172,85%,35%)] text-[hsl(172,85%,35%)] hover:bg-[hsl(172,85%,35%)] hover:text-white text-sm sm:text-base font-medium px-5 sm:px-6 py-3 sm:py-3 rounded-md shadow-sm hover:shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[hsl(172,85%,35%)] focus:ring-opacity-50 min-w-[160px] sm:min-w-[180px]"
              aria-label="Navigate to contact section"
            >
              Contact Me
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Elegant Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 z-20"
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
        style={{ touchAction: "manipulation" }} // Optimize for touch interaction
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-4 h-7 sm:w-5 sm:h-8 border-2 border-[hsl(210,18%,82%)] rounded-full flex justify-center items-start cursor-pointer hover:border-[hsl(172,85%,35%)] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[hsl(172,85%,32%)] focus:ring-opacity-50"
          style={{ pointerEvents: "auto" }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 bg-[hsl(172,85%,35%)] rounded-full mt-1 sm:mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}