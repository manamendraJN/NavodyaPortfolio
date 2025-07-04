import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "../ui/button";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string; // Kept for modal compatibility
  images: string[]; // Added for multiple images
  status: "Ongoing" | "Completed"; // Added status field
}

const projects: Project[] = [
  {
    id: "1",
    title: "Remote Work Collaboration System",
    description:
      "A powerful platform for remote teams to manage projects, tasks, and files with Smart Workload Balancer.",
    fullDescription:
      "A comprehensive remote work collaboration platform featuring intelligent task distribution, real-time project management, and file sharing capabilities. The Smart Workload Balancer optimizes task assignments based on workload analysis, deadline prioritization, and task complexity assessment, ensuring efficient team productivity and balanced work distribution.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.io", "JWT"],
    githubUrl: "https://github.com/manamendraJN/Collab-Hub",
    image: "🏢",
    images: [
      "/client/components/project-images/project1-img1.png",
      "/client/components/project-images/project1-img2.png",
      "/client/components/project-images/project1-img3.png",
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
    image: "🎓",
    images: [
      "/client/components/project-images/project2-img1.png",
      "/client/components/project-images/project2-img2.png",
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
    image: "📦",
    images: [
      "/client/components/project-images/project3-img1.png",
      "/client/components/project-images/project3-img2.png",
      "/client/components/project-images/project3-img3.png",
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
    image: "📝",
    images: [
      "/client/components/project-images/project4-img1.jpg",
      "/client/components/project-images/project4-img2.jpg",
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
    image: "🏠",
    images: [
      "https://via.placeholder.com/600x400?text=MERN+Estate+1",
      "https://via.placeholder.com/600x400?text=MERN+Estate+2",
      "https://via.placeholder.com/600x400?text=MERN+Estate+3",
    ],
    status: "Ongoing",
  },
];

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="py-20 bg-[hsl(213,50%,16%)] dark:bg-[hsl(213,50%,12%)] text-white transition-colors duration-300"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Showcasing innovative solutions built with modern technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="project-card bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="flex justify-between items-center mb-4">
                <img
                  src={project.images[0]}
                  alt={`${project.title} preview`}
                  className="w-12 h-12 object-contain rounded-md"
                  loading="lazy"
                />
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium tracking-wide uppercase ${
                    project.status === "Ongoing"
                      ? "bg-amber-100 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400"
                      : "bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400"
                  }`}
                >
                  {project.status}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {project.title}
              </h3>
              <p className="text-white/70 mb-4 line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-teal/20 text-teal rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-3 py-1 bg-white/10 text-white/70 rounded-full text-sm">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>
              <Button
                variant="outline"
                className="w-full border-teal text-teal hover:bg-teal hover:text-white"
              >
                View Details
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="text-6xl mb-4">{selectedProject.image}</div>
                    <h3 className="text-2xl font-bold text-navy mb-2">
                      {selectedProject.title}
                    </h3>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium tracking-wide uppercase ${
                        selectedProject.status === "Ongoing"
                          ? "bg-amber-100 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400"
                          : "bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400"
                      }`}
                    >
                      {selectedProject.status}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-navy/50 hover:text-navy text-2xl"
                  >
                    ×
                  </button>
                </div>

                <p className="text-navy/80 mb-6 leading-relaxed">
                  {selectedProject.fullDescription}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-navy mb-3">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-teal/10 text-teal rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button
                    asChild
                    className="bg-navy hover:bg-navy/80 text-white flex items-center gap-2"
                  >
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={20} />
                      View Code
                    </a>
                  </Button>
                  {selectedProject.liveUrl && (
                    <Button
                      asChild
                      variant="outline"
                      className="border-teal text-teal hover:bg-teal hover:text-white flex items-center gap-2"
                    >
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={20} />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}