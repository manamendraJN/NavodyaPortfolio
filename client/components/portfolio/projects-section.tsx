import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "../ui/button";
import { ExternalLink, Github, ChevronLeft, ChevronRight, X, Expand, Minimize } from "lucide-react";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const childVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  images: string[];
  status: "Ongoing" | "Completed";
}

const projects: Project[] = [
  {
    id: "1",
    title: "Remote Work Collaboration System",
    description:
      "A powerful platform for remote teams to manage projects, tasks, and files with Smart Workload Balancer.",
    fullDescription:
      "A comprehensive remote work collaboration platform featuring intelligent task distribution, real-time project management, and file sharing capabilities. The Smart Workload Balancer optimizes task assignments based on workload analysis, deadline prioritization, and task complexity assessment, ensuring efficient team productivity and balanced work distribution.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "Socket.io",
      "JWT",
    ],
    githubUrl: "https://github.com/manamendraJN/Collab-Hub",
    images: [
      "/client/components/portfolio/project-images/project1-img1.png",
      "/client/components/portfolio/project-images/project1-img2.png",
      "/client/components/portfolio/project-images/project1-img3.png",
    ],
    status: "Completed",
  },
  {
    id: "2",
    title: "SkillSphere",
    description:
      "Interactive skill-sharing platform with structured learning plans and community-driven Q&A forum.",
    fullDescription:
      "An innovative platform that connects learners and instructors across various skills including coding, photography, and creative arts. Features include personalized learning paths, real-time progress tracking, interactive video sessions, community forums, and achievement systems to gamify the learning experience.",
    technologies: ["React", "Spring Boot", "MySQL", "WebRTC", "OAuth 2.0"],
    githubUrl: "https://github.com/manamendraJN/SkillSphere",
    images: [
      "/client/components/portfolio/project-images/project2-img1.png",
      "/client/components/portfolio/project-images/project2-img2.png",
    ],
    status: "Completed",
  },
  {
    id: "3",
    title: "Warehouse Management System",
    description:
      "Comprehensive warehouse operations solution focusing on employee management and inventory control.",
    fullDescription:
      "A full-featured warehouse management system designed to streamline operations through efficient staff management, intelligent shift scheduling, and comprehensive inventory tracking. Includes automated stock alerts, detailed reporting analytics, and role-based access control for enhanced security and operational efficiency.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Angular", "Docker"],
    githubUrl: "https://github.com/Shiranakther/Warehouse_Management_Syatem",
    images: [
      "/client/components/portfolio/project-images/project3-img1.png",
      "/client/components/portfolio/project-images/project3-img2.png",
      "/client/components/portfolio/project-images/project3-img3.png",
    ],
    status: "Completed",
  },
  {
    id: "4",
    title: "Notes App with SQLite",
    description:
      "Minimalist mobile application for creating and managing notes with offline functionality.",
    fullDescription:
      "A clean and efficient mobile notes application built with native Android development. Features include offline-first architecture, intuitive note organization with categories and tags, search functionality, data synchronization, and a beautiful material design interface optimized for productivity.",
    technologies: ["Kotlin", "SQLite", "Android SDK", "Material Design"],
    githubUrl: "https://github.com/manamendraJN/Notes_App_with_SQLite",
    images: [
      "/client/components/portfolio/project-images/project4-img1.jpg",
      "/client/components/portfolio/project-images/project4-img2.jpg",
    ],
    status: "Completed",
  },
  {
    id: "5",
    title: "MERN-Estate",
    description:
      "Real estate application with advanced search functionality and secure authentication system.",
    fullDescription:
      "A modern real estate platform featuring property listings, advanced search filters, interactive maps, virtual tours, and secure user authentication. Currently in development with planned features including property recommendations, mortgage calculator, and real-time chat with agents.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "JWT", "Mapbox"],
    githubUrl: "https://github.com/manamendraJN/mern-estate",
    images: [
      "https://via.placeholder.com/600x400?text=MERN+Estate+1",
    ],
    status: "Ongoing",
  },
];

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSliderExpanded, setIsSliderExpanded] = useState(false);

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? (selectedProject?.images.length || 1) - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === (selectedProject?.images.length || 1) - 1 ? 0 : prev + 1
    );
  };

  const handleToggleExpand = () => {
    setIsSliderExpanded((prev) => !prev);
  };

  return (
    <section
      id="projects"
      className="py-12 sm:py-16 lg:py-20 bg-gray-100 dark:bg-[hsl(213,50%,12%)] text-gray-900 dark:text-white transition-colors duration-300 touch-auto"
      role="region"
      aria-labelledby="projects-heading"
      style={{ touchAction: "auto" }}
    >
      <div className="container px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
<div className="text-center mb-4 sm:mb-5 md:mb-6">
  <h2
    id="projects-heading"
    className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
  >
    Featured <span className="text-emerald-600 dark:text-emerald-400">Projects</span>
  </h2>
  <div className="mx-auto mt-4 h-1 w-20 bg-emerald-500 rounded-full" />
</div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-white/70 max-w-3xl mx-auto">
            Showcasing innovative solutions built with modern technologies
          </p>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              className="bg-white dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900 p-4 sm:p-6 rounded-2xl border border-gray-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => {
                setSelectedProject(project);
                setCurrentImageIndex(0);
                setIsSliderExpanded(false);
              }}
            >
              <motion.div variants={childVariants} className="mb-4">
                <img
                  src={project.images[0] || "https://via.placeholder.com/600x400?text=No+Image"}
                  alt={`${project.title} preview`}
                  className="w-full h-40 sm:h-48 object-cover rounded-lg"
                  loading="lazy"
                />
                <div className="flex justify-between items-center mt-2">
                  <span
                    className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium tracking-wide uppercase ${
                      project.status === "Ongoing"
                        ? "bg-amber-100 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400"
                        : "bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </motion.div>

              <motion.h3
                variants={childVariants}
                className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 line-clamp-1"
              >
                {project.title}
              </motion.h3>

              <motion.p
                variants={childVariants}
                className="text-sm sm:text-base text-gray-600 dark:text-slate-400 mb-4 line-clamp-3 leading-relaxed"
              >
                {project.description}
              </motion.p>

              <motion.div variants={childVariants} className="flex flex-wrap gap-2 sm:gap-3 mb-4">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm bg-gray-200 text-gray-700 dark:bg-slate-700 dark:text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm bg-gray-300 text-gray-600 dark:bg-slate-600 dark:text-slate-400">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </motion.div>

              <motion.div variants={childVariants}>
                <Button
                  variant="outline"
                  className="w-full px-4 sm:px-5 py-2 bg-gradient-to-r from-teal-700 to-cyan-600 text-white font-medium rounded-lg hover:from-teal-600 hover:to-cyan-700 dark:hover:from-teal-400 dark:hover:to-cyan-500 shadow-md min-h-[44px]"
                  style={{ touchAction: "manipulation" }}
                >
                  View Details
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Modal */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 dark:bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
            onClick={() => setSelectedProject(null)}
            style={{ touchAction: "auto" }}
          >
            {isSliderExpanded ? (
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={handleToggleExpand}
                  className="fixed top-4 sm:top-6 right-4 sm:right-6 bg-gray-800/70 dark:bg-gray-200/70 text-white dark:text-gray-800 p-2 sm:p-3 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 min-h-[44px] min-w-[44px] flex items-center justify-center z-10"
                  aria-label="Collapse image"
                  style={{ touchAction: "manipulation" }}
                >
                  <Minimize className="w-5 sm:w-6 h-5 sm:h-6" />
                </button>
                <div className="relative w-full max-w-[95vw] max-h-[90vh] overflow-hidden rounded-lg">
                  {selectedProject.images.map((image, index) => (
                    <img
                      key={index}
                      src={image || "https://via.placeholder.com/600x400?text=No+Image"}
                      alt={`${selectedProject.title} screenshot ${index + 1}`}
                      className={`w-full h-auto max-h-[90vh] object-contain transition-opacity duration-300 cursor-pointer ${
                        index === currentImageIndex ? "opacity-100" : "opacity-0 absolute top-0"
                      }`}
                      onClick={handleToggleExpand}
                      loading="lazy"
                      aria-label="Click to collapse image"
                    />
                  ))}
                  {selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={handlePrevImage}
                        className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-gray-800/70 dark:bg-gray-200/70 text-white dark:text-gray-800 p-2 sm:p-3 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 min-h-[44px] min-w-[44px] flex items-center justify-center"
                        aria-label="Previous image"
                        style={{ touchAction: "manipulation" }}
                      >
                        <ChevronLeft className="w-5 sm:w-6 h-5 sm:h-6" />
                      </button>
                      <button
                        onClick={handleNextImage}
                        className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-gray-800/70 dark:bg-gray-200/70 text-white dark:text-gray-800 p-2 sm:p-3 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 min-h-[44px] min-w-[44px] flex items-center justify-center"
                        aria-label="Next image"
                        style={{ touchAction: "manipulation" }}
                      >
                        <ChevronRight className="w-5 sm:w-6 h-5 sm:h-6" />
                      </button>
                      <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                        {selectedProject.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                              index === currentImageIndex
                                ? "bg-teal-500"
                                : "bg-gray-400 dark:bg-gray-500"
                            }`}
                            aria-label={`Go to image ${index + 1}`}
                            style={{ touchAction: "manipulation" }}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="relative bg-white dark:bg-slate-800 rounded-3xl shadow-xl w-full max-w-[95vw] sm:max-w-3xl max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-gray-800/70 dark:bg-gray-200/70 text-white dark:text-gray-800 p-2 sm:p-3 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 min-h-[44px] min-w-[44px] flex items-center justify-center z-10"
                  aria-label="Close modal"
                  style={{ touchAction: "manipulation" }}
                >
                  <X className="w-5 sm:w-6 h-5 sm:h-6" />
                </button>
                <div className="p-4 sm:p-6 md:p-8">
                  <div className="relative mb-4 sm:mb-6">
                    <div className="relative w-full aspect-[16/9] max-h-64 sm:max-h-80 md:max-h-96 rounded-lg overflow-hidden">
                      {selectedProject.images.map((image, index) => (
                        <img
                          key={index}
                          src={image || "https://via.placeholder.com/600x400?text=No+Image"}
                          alt={`${selectedProject.title} screenshot ${index + 1}`}
                          className={`w-full h-full object-cover transition-opacity duration-300 cursor-pointer ${
                            index === currentImageIndex ? "opacity-100" : "opacity-0 absolute top-0"
                          }`}
                          onClick={handleToggleExpand}
                          loading="lazy"
                          aria-label="Click to expand image"
                        />
                      ))}
                      {selectedProject.images.length > 1 && (
                        <>
                          <button
                            onClick={handlePrevImage}
                            className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-gray-800/70 dark:bg-gray-200/70 text-white dark:text-gray-800 p-2 sm:p-3 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 min-h-[44px] min-w-[44px] flex items-center justify-center"
                            aria-label="Previous image"
                            style={{ touchAction: "manipulation" }}
                          >
                            <ChevronLeft className="w-5 sm:w-6 h-5 sm:h-6" />
                          </button>
                          <button
                            onClick={handleNextImage}
                            className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-gray-800/70 dark:bg-gray-200/70 text-white dark:text-gray-800 p-2 sm:p-3 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 min-h-[44px] min-w-[44px] flex items-center justify-center"
                            aria-label="Next image"
                            style={{ touchAction: "manipulation" }}
                          >
                            <ChevronRight className="w-5 sm:w-6 h-5 sm:h-6" />
                          </button>
                          <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                            {selectedProject.images.map((_, index) => (
                              <button
                                key={index}
                                onClick={() => setCurrentImageIndex(index)}
                                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                                  index === currentImageIndex
                                    ? "bg-teal-500"
                                    : "bg-gray-400 dark:bg-gray-500"
                                }`}
                                aria-label={`Go to image ${index + 1}`}
                                style={{ touchAction: "manipulation" }}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="flex items-start justify-between mb-4 sm:mb-6">
                    <div>
                      <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                        <span
                          className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase ${
                            selectedProject.status === "Ongoing"
                              ? "bg-emerald-600/10 text-emerald-500 dark:bg-emerald-500/20 dark:text-emerald-400"
                              : "bg-green-500/10 text-green-500 dark:bg-green-500/20 dark:text-green-400"
                          }`}
                        >
                          {selectedProject.status}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-1">
                        {selectedProject.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                    {selectedProject.fullDescription}
                  </p>

                  <div className="mb-4 sm:mb-6">
                    <h4 className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white mb-2 sm:mb-3">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 sm:px-3 py-1 rounded-full bg-teal-600/10 text-teal-700 dark:bg-teal-500/20 dark:text-teal-300 text-xs sm:text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 sm:gap-4">
                    <Button
                      asChild
                      className="bg-slate-900 dark:bg-slate-700 hover:bg-slate-800 dark:hover:bg-slate-600 text-white flex items-center gap-2 rounded-lg px-4 sm:px-5 py-2 text-sm sm:text-base min-h-[44px]"
                      style={{ touchAction: "manipulation" }}
                    >
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-[18px] sm:w-5 h-[18px] sm:h-5" />
                        View Code
                      </a>
                    </Button>

                    {selectedProject.liveUrl && (
                      <Button
                        asChild
                        variant="outline"
                        className="border-teal-600 text-teal-600 dark:border-teal-400 dark:text-teal-400 hover:bg-teal-600 hover:text-white dark:hover:bg-teal-400 dark:hover:text-slate-900 flex items-center gap-2 rounded-lg px-4 sm:px-5 py-2 text-sm sm:text-base min-h-[44px]"
                        style={{ touchAction: "manipulation" }}
                      >
                        <a
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-[18px] sm:w-5 h-[18px] sm:h-5" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}