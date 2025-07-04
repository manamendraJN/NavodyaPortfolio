import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ReactSVG } from 'react-svg';

interface Technology {
  name: string;
  category: string;
  icon: string;
  description?: string;
}

const technologies: Technology[] = [
  // Languages
  { name: 'Java', category: 'Languages', icon: 'https://cdn.jsdelivr.net/npm/@programming-languages-logos/java@latest/java.svg', description: 'Object-oriented programming and Spring framework' },
  { name: 'JavaScript', category: 'Languages', icon: 'https://cdn.simpleicons.org/javascript', description: 'Modern ES6+ development and async programming' },
  { name: 'PHP', category: 'Languages', icon: 'https://cdn.simpleicons.org/php', description: 'Server-side scripting and web development' },
  { name: 'Python', category: 'Languages', icon: 'https://cdn.simpleicons.org/python', description: 'Data analysis, automation, and backend development' },
  { name: 'C', category: 'Languages', icon: 'https://cdn.simpleicons.org/c', description: 'System programming and algorithmic thinking' },
  { name: 'TypeScript', category: 'Languages', icon: 'https://cdn.simpleicons.org/typescript', description: 'Typed JavaScript for scalable applications' },
  // Frontend
  { name: 'CSS3', category: 'Frontend', icon: 'https://api.iconify.design/simple-icons/css3.svg', description: 'Advanced styling, animations, and responsive design' },
  { name: 'React', category: 'Frontend', icon: 'https://cdn.simpleicons.org/react', description: 'Component-based UI development and hooks' },
  { name: 'Tailwind CSS', category: 'Frontend', icon: 'https://cdn.simpleicons.org/tailwindcss', description: 'Utility-first CSS framework for rapid styling' },
  { name: 'HTML5', category: 'Frontend', icon: 'https://cdn.simpleicons.org/html5', description: 'Semantic markup and accessibility standards' },
  { name: 'Bootstrap', category: 'Frontend', icon: 'https://cdn.simpleicons.org/bootstrap', description: 'Responsive component framework' },
  // Backend
  { name: 'Express', category: 'Backend', icon: 'https://cdn.simpleicons.org/express', description: 'Web application framework for Node.js' },
  { name: 'Node.js', category: 'Backend', icon: 'https://cdn.simpleicons.org/nodedotjs', description: 'Server-side JavaScript and API development' },
  { name: 'Spring Boot', category: 'Backend', icon: 'https://cdn.simpleicons.org/spring', description: 'Enterprise Java application development' },
  // Other categories
  { name: 'Kotlin', category: 'Mobile', icon: 'https://cdn.simpleicons.org/kotlin', description: 'Android app development with modern syntax' },
  { name: 'MongoDB', category: 'Databases', icon: 'https://cdn.simpleicons.org/mongodb', description: 'NoSQL document database for modern apps' },
  { name: 'MySQL', category: 'Databases', icon: 'https://cdn.simpleicons.org/mysql', description: 'Relational database management and optimization' },
  { name: 'SQLite', category: 'Databases', icon: 'https://cdn.simpleicons.org/sqlite', description: 'Lightweight database for mobile applications' },
  { name: 'PostgreSQL', category: 'Databases', icon: 'https://cdn.simpleicons.org/postgresql', description: 'Advanced relational database with JSON support' },
  { name: 'Figma', category: 'Design', icon: 'https://cdn.simpleicons.org/figma', description: 'UI/UX design and collaborative prototyping' },
  { name: 'UI/UX Design', category: 'Design', icon: 'https://cdn.simpleicons.org/figma', description: 'User-centered design and accessibility principles' },
  { name: 'Responsive Design', category: 'Design', icon: 'https://cdn.simpleicons.org/html5', description: 'Mobile-first and adaptive design strategies' },
  { name: 'Git', category: 'Tools & DevOps', icon: 'https://cdn.simpleicons.org/git', description: 'Version control and collaborative development' },
  { name: 'GitHub', category: 'Tools & DevOps', icon: 'https://cdn.simpleicons.org/github', description: 'Code hosting and project management' },
  { name: 'Postman', category: 'Tools & DevOps', icon: 'https://cdn.simpleicons.org/postman', description: 'API testing and documentation' },
  { name: 'GitHub Actions', category: 'Tools & DevOps', icon: 'https://cdn.simpleicons.org/githubactions', description: 'CI/CD automation and deployment' },
  { name: 'Docker', category: 'Tools & DevOps', icon: 'https://cdn.simpleicons.org/docker', description: 'Containerization and deployment' },
  { name: 'MERN Stack', category: 'Key Technologies', icon: 'https://cdn.simpleicons.org/react', description: 'Full-stack development with MongoDB, Express, React, Node.js' },
  { name: 'AI/ML', category: 'Key Technologies', icon: 'https://cdn.simpleicons.org/tensorflow', description: 'Machine learning and artificial intelligence' },
  { name: 'OAuth 2.0', category: 'Key Technologies', icon: 'https://cdn.simpleicons.org/auth0', description: 'Secure authentication and authorization' },
];

const categories = [
  'All',
  'Languages',
  'Frontend',
  'Backend',
  'Mobile',
  'Databases',
  'Design',
  'Tools & DevOps',
  'Key Technologies',
];

export function TechnologiesSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const filteredTechnologies =
    selectedCategory === 'All'
      ? technologies
      : technologies.filter((tech) => tech.category === selectedCategory);

  const groupedTechnologies = categories
    .filter((cat) => cat !== 'All')
    .map((cat) => ({
      category: cat,
      items: technologies.filter((tech) => tech.category === cat),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <section
      id="technologies"
      className="py-8 sm:py-12 lg:py-16 bg-gray-50 dark:bg-slate-900 transition-colors duration-300 touch-auto"
      role="region"
      aria-labelledby="technologies-heading"
      style={{ touchAction: "auto" }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-6 sm:mb-8 lg:mb-12"
        >
<div className="text-center mb-4 sm:mb-5 md:mb-6">
  <h2
    id="technologies-heading"
    className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
  >
    Technologies & <span className="text-emerald-600 dark:text-emerald-400">Skills</span>
  </h2>
  <div className="mx-auto mt-4 h-1 w-20 bg-emerald-500 rounded-full" />
</div>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            A comprehensive toolkit built through continuous learning and hands-on experience
          </p>
        </motion.div>

        {/* Category Filters - Hidden on Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="hidden sm:flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8"
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
              className={`min-w-[90px] sm:min-w-[110px] px-3 sm:px-4 py-2 sm:py-2.5 rounded-full transition-all duration-300 font-medium text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 min-h-[40px] sm:min-h-[44px] touch-action-manipulation ${
                selectedCategory === category
                  ? 'bg-teal-600 dark:bg-teal-500 text-white shadow-lg scale-105'
                  : 'bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 border border-gray-200 dark:border-slate-700 hover:bg-teal-100 dark:hover:bg-teal-900/50 hover:text-teal-600 dark:hover:text-teal-400 active:bg-teal-200 dark:active:bg-teal-800'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Technologies Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6"
          id="technologies-grid"
          role="tabpanel"
        >
          {groupedTechnologies.length === 0 ? (
            <div className="col-span-full text-center text-slate-600 dark:text-slate-300 text-sm sm:text-base">
              No technologies found for this category.
            </div>
          ) : (
            (selectedCategory === 'All' ? groupedTechnologies : groupedTechnologies.filter(group => group.category === selectedCategory)).map((group, index) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-800 rounded-xl p-3 sm:p-5 border border-gray-200 dark:border-slate-700 shadow-md hover:bg-teal-50 dark:hover:bg-teal-900/70 transition-all duration-300"
                tabIndex={0}
                role="region"
                aria-label={`${group.category} technologies`}
              >
                <div className="mb-2 sm:mb-4">
                  <h3 className="text-sm sm:text-lg font-semibold text-slate-900 dark:text-slate-100 line-clamp-1">
                    {group.category}
                  </h3>
                </div>
                <ul className="space-y-1 sm:space-y-3">
                  {group.items.length === 0 ? (
                    <li className="text-xs sm:text-base text-slate-600 dark:text-slate-300">
                      No items in this category.
                    </li>
                  ) : (
                    group.items.map((tech) => (
                      <li
                        key={tech.name}
                        className="flex items-center text-xs sm:text-base text-slate-600 dark:text-slate-300 group"
                        title={tech.description}
                      >
                        {isMounted ? (
                          <ReactSVG
                            src={tech.icon}
                            className="w-4 sm:w-6 h-4 sm:h-6 mr-1 sm:mr-3 flex-shrink-0"
                            aria-hidden="true"
                            loading={() => (
                              <span className="w-4 h-4 sm:w-6 sm:h-6 mr-1 sm:mr-3 bg-gray-200 dark:bg-slate-700 rounded animate-pulse" />
                            )}
                            beforeInjection={(svg) => {
                              svg.setAttribute('style', 'width: 16px; height: 16px;');
                              svg.setAttribute('class', 'sm:w-6 sm:h-6');
                            }}
                            onError={(error) => console.error(`Failed to load SVG for ${tech.name}:`, error)}
                          />
                        ) : (
                          <span className="w-4 h-4 sm:w-6 sm:h-6 mr-1 sm:mr-3 bg-gray-200 dark:bg-slate-700 rounded animate-pulse" />
                        )}
                        <span className="group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-200 line-clamp-1">
                          {tech.name}
                        </span>
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