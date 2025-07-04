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
      className="pb-20  min-h-screen relative overflow-hidden flex items-center justify-center transition-colors duration-300 bg-[hsl(213,50%,12%)]"
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

          {/* Refined Typing Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-6"
          >
            <h1 className="text-4xl md:text-5xl font-semibold text-[hsl(0,0%,98%)] tracking-tight">
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
            className="mb-10"
          >
            <p className="text-lg md:text-xl font-medium text-[hsl(210,18%,82%)] tracking-wide">
              Full-Stack Developer  |  Web Developer  |  Innovator
            </p>
          </motion.div>

          {/* Refined Call-to-Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
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
              className="border-2 border-[hsl(172,85%,35%)] text-[hsl(172,85%,35%)] hover:bg-[hsl(172,85%,35%)] hover:text-white text-base font-medium px-6 py-3 rounded-md shadow-sm hover:shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[hsl(172,85%,35%)] focus:ring-opacity-50 min-w-[180px]"
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
        className="absolute bottom-30 left-1/2 transform -translate-x-1/2"
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
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 border-2 border-[hsl(210,18%,82%)] rounded-full flex justify-center items-start cursor-pointer hover:border-[hsl(172,85%,35%)] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[hsl(172,85%,32%)] focus:ring-opacity-50"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 bg-[hsl(172,85%,35%)] rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}