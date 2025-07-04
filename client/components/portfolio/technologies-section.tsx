import { motion } from "framer-motion";
import { useState } from "react";

interface Technology {
  name: string;
  category: string;
  experience: string;
  projects: string;
  icon: string; // Now using emoji icons
  description?: string;
}

const technologies: Technology[] = [
  // Languages
  {
    name: "Java",
    category: "Languages",
    experience: "1.5 years",
    projects: "3 projects",
    icon: "☕",
    description: "Object-oriented programming and Spring framework",
  },
  {
    name: "JavaScript",
    category: "Languages",
    experience: "2 years",
    projects: "5 projects",
    icon: "🟨",
    description: "Modern ES6+ development and async programming",
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
  {
    name: "TypeScript",
    category: "Languages",
    experience: "1 year",
    projects: "2 projects",
    icon: "🔷",
    description: "Typed JavaScript for scalable applications",
  },
  // Frontend
  {
    name: "CSS3",
    category: "Frontend",
    experience: "3 years",
    projects: "6 projects",
    icon: "🎭",
    description: "Advanced styling, animations, and responsive design",
  },
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
    name: "Bootstrap",
    category: "Frontend",
    experience: "1 year",
    projects: "2 projects",
    icon: "🅱️",
    description: "Responsive component framework",
  },
  // Backend
  {
    name: "Express",
    category: "Backend",
    experience: "2 years",
    projects: "4 projects",
    icon: "🚀",
    description: "Web application framework for Node.js",
  },
  {
    name: "Node.js",
    category: "Backend",
    experience: "2 years",
    projects: "4 projects",
    icon: "🟢",
    description: "Server-side JavaScript and API development",
  },
  {
    name: "Spring Boot",
    category: "Backend",
    experience: "1.5 years",
    projects: "2 projects",
    icon: "🍃",
    description: "Enterprise Java application development",
  },
  // Other categories
  {
    name: "Kotlin",
    category: "Mobile",
    experience: "1 year",
    projects: "1 project",
    icon: "📱",
    description: "Android app development with modern syntax",
  },
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

  const filteredTechnologies =
    selectedCategory === "All"
      ? technologies
      : technologies.filter((tech) => tech.category === selectedCategory);

  const groupedTechnologies =
    selectedCategory === "All"
      ? categories
          .filter((cat) => cat !== "All")
          .map((cat) => ({
            category: cat,
            items: technologies.filter((tech) => tech.category === cat),
          }))
          .filter((group) => group.items.length > 0)
      : [{ category: selectedCategory, items: filteredTechnologies }];

  return (
    <section
      id="technologies"
      className="py-12 sm:py-20 bg-gray-50 dark:bg-slate-900 transition-colors duration-300"
      role="region"
      aria-labelledby="technologies-heading"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-16"
        >
          <h2
            id="technologies-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4 sm:mb-6"
          >
            Technologies & Skills
          </h2>
          <p className="text-base sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            A comprehensive toolkit built through continuous learning and hands-on experience, categorized for easy navigation
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12"
          role="tablist"
          aria-label="Technology categories"
        >
          {categories.map((category, index) => (
            <button
              key={category}
              id={`category-tab-${index}`}
              onClick={() => setSelectedCategory(category)}
              role="tab"
              aria-selected={selectedCategory === category}
              aria-controls="technologies-grid"
              className={`min-w-[120px] px-4 py-2 sm:px-6 sm:py-3 rounded-full transition-all duration-300 font-medium min-h-[44px] text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 ${
                selectedCategory === category
                  ? "bg-teal-600 dark:bg-teal-500 text-white shadow-lg scale-105"
                  : "bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 border border-gray-200 dark:border-slate-700 hover:bg-teal-100 dark:hover:bg-teal-900/50 hover:text-teal-600 dark:hover:text-teal-400"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-4 gap-6"
          id="technologies-grid"
          role="tabpanel"
        >
          {groupedTechnologies.length === 0 ? (
            <div className="col-span-full text-center text-slate-600 dark:text-slate-300">
              No technologies found for this category.
            </div>
          ) : (
            groupedTechnologies.map((group, index) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700 shadow-md hover:bg-teal-50 dark:hover:bg-teal-900/70 transition-all duration-300"
                tabIndex={0}
                role="region"
                aria-label={`${group.category} technologies`}
              >
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                    {group.category}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {group.items.length === 0 ? (
                    <li className="text-sm text-slate-600 dark:text-slate-300">
                      No items in this category.
                    </li>
                  ) : (
                    group.items.map((tech) => (
                      <li
                        key={tech.name}
                        className="flex items-center text-sm text-slate-600 dark:text-slate-300"
                      >
                        <span className="w-4 h-4 mr-2" aria-hidden="true">
                          {tech.icon}
                        </span>
                        {tech.name}
                      </li>
                    ))
                  )}
                </ul>
              </motion.div>
            ))
          )}
        </motion.div>
      </div>
    </section>
  );
}