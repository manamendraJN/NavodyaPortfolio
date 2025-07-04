import { motion } from "framer-motion";
import { useState } from "react";

interface Technology {
  name: string;
  category: string;
  experience: string;
  projects: string;
  icon: string;
  description?: string;
}

const technologies: Technology[] = [
  // Languages - Updated with user-specified experience
  {
    name: "JavaScript",
    category: "Languages",
    experience: "2 years",
    projects: "5 projects",
    icon: "🟨",
    description: "Modern ES6+ development and async programming",
  },
  {
    name: "Java",
    category: "Languages",
    experience: "1.5 years",
    projects: "3 projects",
    icon: "☕",
    description: "Object-oriented programming and Spring framework",
  },
  {
    name: "PHP",
    category: "Languages",
    experience: "1 year",
    projects: "2 projects",
    icon: "🐘",
    description: "Server-side scripting and web development",
  },
  {
    name: "Python",
    category: "Languages",
    experience: "2 years",
    projects: "4 projects",
    icon: "🐍",
    description: "Data analysis, automation, and backend development",
  },
  {
    name: "C",
    category: "Languages",
    experience: "1 year",
    projects: "1 project",
    icon: "⚡",
    description: "System programming and algorithmic thinking",
  },

  // Frontend - Updated with user-specified experience
  {
    name: "React",
    category: "Frontend",
    experience: "2 years",
    projects: "5 projects",
    icon: "⚛️",
    description: "Component-based UI development and hooks",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    experience: "1.5 years",
    projects: "4 projects",
    icon: "🎨",
    description: "Utility-first CSS framework for rapid styling",
  },
  {
    name: "HTML5",
    category: "Frontend",
    experience: "3 years",
    projects: "6 projects",
    icon: "🌐",
    description: "Semantic markup and accessibility standards",
  },
  {
    name: "CSS3",
    category: "Frontend",
    experience: "3 years",
    projects: "6 projects",
    icon: "🎭",
    description: "Advanced styling, animations, and responsive design",
  },
  {
    name: "Bootstrap",
    category: "Frontend",
    experience: "1 year",
    projects: "2 projects",
    icon: "🅱️",
    description: "Responsive component framework",
  },

  // Backend - Updated with user-specified experience
  {
    name: "Node.js",
    category: "Backend",
    experience: "2 years",
    projects: "4 projects",
    icon: "🟢",
    description: "Server-side JavaScript and API development",
  },
  {
    name: "Express",
    category: "Backend",
    experience: "2 years",
    projects: "4 projects",
    icon: "🚀",
    description: "Web application framework for Node.js",
  },
  {
    name: "Spring Boot",
    category: "Backend",
    experience: "1.5 years",
    projects: "2 projects",
    icon: "🍃",
    description: "Enterprise Java application development",
  },

  // Mobile - Updated with user-specified experience
  {
    name: "Kotlin",
    category: "Mobile",
    experience: "1 year",
    projects: "1 project",
    icon: "📱",
    description: "Android app development with modern syntax",
  },

  // Databases - Updated with user-specified experience
  {
    name: "MongoDB",
    category: "Databases",
    experience: "2 years",
    projects: "3 projects",
    icon: "🍃",
    description: "NoSQL document database for modern apps",
  },
  {
    name: "MySQL",
    category: "Databases",
    experience: "1.5 years",
    projects: "2 projects",
    icon: "🐬",
    description: "Relational database management and optimization",
  },
  {
    name: "SQLite",
    category: "Databases",
    experience: "1 year",
    projects: "1 project",
    icon: "💽",
    description: "Lightweight database for mobile applications",
  },
  {
    name: "PostgreSQL",
    category: "Databases",
    experience: "1 year",
    projects: "1 project",
    icon: "🐘",
    description: "Advanced relational database with JSON support",
  },

  // Design - Updated with user-specified experience
  {
    name: "Figma",
    category: "Design",
    experience: "1 year",
    projects: "3 projects",
    icon: "🎨",
    description: "UI/UX design and collaborative prototyping",
  },
  {
    name: "UI/UX Design",
    category: "Design",
    experience: "1 year",
    projects: "3 projects",
    icon: "✨",
    description: "User-centered design and accessibility principles",
  },
  {
    name: "Responsive Design",
    category: "Design",
    experience: "2 years",
    projects: "5 projects",
    icon: "📐",
    description: "Mobile-first and adaptive design strategies",
  },

  // Tools & DevOps - Updated with user-specified experience
  {
    name: "Git",
    category: "Tools & DevOps",
    experience: "3 years",
    projects: "6 projects",
    icon: "📚",
    description: "Version control and collaborative development",
  },
  {
    name: "GitHub",
    category: "Tools & DevOps",
    experience: "3 years",
    projects: "6 projects",
    icon: "🐙",
    description: "Code hosting and project management",
  },
  {
    name: "Postman",
    category: "Tools & DevOps",
    experience: "1.5 years",
    projects: "4 projects",
    icon: "📮",
    description: "API testing and documentation",
  },
  {
    name: "GitHub Actions",
    category: "Tools & DevOps",
    experience: "1 year",
    projects: "2 projects",
    icon: "⚙️",
    description: "CI/CD automation and deployment",
  },
  {
    name: "Docker",
    category: "Tools & DevOps",
    experience: "1 year",
    projects: "2 projects",
    icon: "🐳",
    description: "Containerization and deployment",
  },

  // Key Technologies - Updated with user-specified experience
  {
    name: "MERN Stack",
    category: "Key Technologies",
    experience: "2 years",
    projects: "4 projects",
    icon: "🔥",
    description: "Full-stack development with MongoDB, Express, React, Node.js",
  },
  {
    name: "AI/ML",
    category: "Key Technologies",
    experience: "1 year",
    projects: "1 project",
    icon: "🤖",
    description: "Machine learning and artificial intelligence",
  },
  {
    name: "OAuth 2.0",
    category: "Key Technologies",
    experience: "1 year",
    projects: "2 projects",
    icon: "🔐",
    description: "Secure authentication and authorization",
  },
];

const categories = [
  "All",
  "Languages",
  "Frontend",
  "Backend",
  "Mobile",
  "Databases",
  "Design",
  "Tools & DevOps",
  "Key Technologies",
];

export function TechnologiesSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const filteredTechnologies =
    selectedCategory === "All"
      ? technologies
      : technologies.filter((tech) => tech.category === selectedCategory);

  return (
    <section
      id="technologies"
      className="py-20 bg-gradient-to-br from-[hsl(0,0%,98%)] to-[hsl(210,18%,85%)]/20 dark:from-[hsl(213,50%,12%)] dark:to-[hsl(213,50%,16%)] transition-colors duration-300"
      role="region"
      aria-labelledby="technologies-heading"
    >
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            id="technologies-heading"
            className="text-4xl md:text-5xl font-bold text-[hsl(213,50%,16%)] dark:text-[hsl(0,0%,98%)] mb-6"
          >
            Technologies & Skills
          </h2>
          <p className="text-xl text-[hsl(213,50%,16%)]/70 dark:text-[hsl(0,0%,85%)] max-w-3xl mx-auto">
            A comprehensive toolkit built through continuous learning and
            hands-on experience, categorized for easy navigation
          </p>
        </motion.div>

        {/* Category filter - Hick's Law optimization with clear grouping */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
          role="tablist"
          aria-label="Technology categories"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              role="tab"
              aria-selected={selectedCategory === category}
              aria-controls="technologies-grid"
              className={`px-6 py-3 rounded-full transition-all duration-300 font-medium min-h-[44px] focus:outline-none focus:ring-2 focus:ring-[hsl(172,85%,35%)] focus:ring-opacity-50 ${
                selectedCategory === category
                  ? "bg-[hsl(172,85%,35%)] dark:bg-[hsl(172,85%,45%)] text-white shadow-lg scale-105"
                  : "bg-white dark:bg-[hsl(213,50%,16%)] text-[hsl(213,50%,16%)] dark:text-[hsl(0,0%,95%)] border border-[hsl(210,18%,85%)] dark:border-[hsl(213,50%,22%)] hover:border-[hsl(172,85%,35%)] dark:hover:border-[hsl(172,85%,45%)] hover:text-[hsl(172,85%,35%)] dark:hover:text-[hsl(172,85%,45%)]"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Technologies grid - Progressive disclosure principle */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
          id="technologies-grid"
          role="tabpanel"
        >
          {filteredTechnologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="tech-card bg-white rounded-xl p-6 border border-[hsl(210,18%,82%)] shadow-lg hover:shadow-2xl cursor-pointer relative overflow-hidden group focus-within:ring-2 focus-within:ring-[hsl(172,85%,32%)] focus-within:ring-opacity-50"
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
              tabIndex={0}
              role="button"
              aria-label={`${tech.name} - ${tech.experience} experience, ${tech.projects}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setHoveredTech(hoveredTech === tech.name ? null : tech.name);
                }
              }}
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(172,85%,32%)]/5 to-[hsl(213,50%,16%)]/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10 text-center">
                <div className="text-4xl mb-3" aria-hidden="true">
                  {tech.icon}
                </div>
                <h3 className="font-semibold text-[hsl(213,50%,16%)] mb-2">
                  {tech.name}
                </h3>
                <p className="text-sm text-[hsl(213,50%,16%)]/60 mb-1">
                  {tech.category}
                </p>

                {/* Hover details - Progressive disclosure */}
                {hoveredTech === tech.name && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 bg-white/98 backdrop-blur-sm rounded-xl border-2 border-[hsl(172,85%,32%)] flex flex-col justify-center items-center p-4 z-20"
                  >
                    <div className="text-3xl mb-2" aria-hidden="true">
                      {tech.icon}
                    </div>
                    <h4 className="font-bold text-[hsl(213,50%,16%)] mb-2">
                      {tech.name}
                    </h4>
                    <p className="text-sm text-[hsl(172,85%,32%)] font-medium mb-1">
                      {tech.experience}
                    </p>
                    <p className="text-xs text-[hsl(213,50%,16%)]/70 mb-2">
                      {tech.projects}
                    </p>
                    {tech.description && (
                      <p className="text-xs text-[hsl(213,50%,16%)]/60 text-center leading-tight">
                        {tech.description}
                      </p>
                    )}
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills summary for quick overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[hsl(210,18%,82%)] max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-[hsl(213,50%,16%)] mb-4">
              Skills Overview
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-[hsl(172,85%,32%)] mb-2">
                  25+
                </div>
                <p className="text-[hsl(213,50%,16%)]/70">
                  Technologies Mastered
                </p>
              </div>
              <div>
                <div className="text-3xl font-bold text-[hsl(172,85%,32%)] mb-2">
                  40+
                </div>
                <p className="text-[hsl(213,50%,16%)]/70">Projects Completed</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-[hsl(172,85%,32%)] mb-2">
                  3+
                </div>
                <p className="text-[hsl(213,50%,16%)]/70">Years Experience</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
