import { motion } from "framer-motion";
import { Code, Database, Palette, Zap } from "lucide-react";

export function AboutSection() {
  const skillHighlights = [
    {
      icon: Code,
      title: "Frontend Development",
      skills: ["React", "Tailwind CSS", "JavaScript", "TypeScript", "HTML5", "CSS3"],
      color: "text-[hsl(172,85%,35%)] dark:text-[hsl(172,85%,45%)]",
    },
    {
      icon: Database,
      title: "Backend Development",
      skills: ["Node.js", "Express", "Spring Boot", "MongoDB", "MySQL"],
      color: "text-[hsl(213,50%,16%)] dark:text-[hsl(0,0%,95%)]",
    },
    {
      icon: Palette,
      title: "Design & UX",
      skills: ["Figma", "UI/UX Design", "Responsive Design", "Accessibility"],
      color: "text-[hsl(172,85%,35%)] dark:text-[hsl(172,85%,45%)]",
    },
    {
      icon: Zap,
      title: "Tools & DevOps",
      skills: ["Git", "Docker", "GitHub Actions", "Postman"],
      color: "text-[hsl(213,50%,16%)] dark:text-[hsl(0,0%,95%)]",
    },
  ];

  return (
    <section
      id="about"
      className="py-12 sm:py-16 lg:py-20 bg-[hsl(0,0%,98%)] dark:bg-[hsl(213,50%,14%)] transition-colors duration-300 touch-auto"
      role="region"
      aria-labelledby="about-heading"
      style={{ touchAction: "auto" }}
    >
      <div className="container px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12 lg:mb-16">
            <h2
              id="about-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
            >
              About <span className="text-emerald-600 dark:text-emerald-400">Me</span>
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 bg-emerald-500 rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {/* Bio Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-[hsl(213,50%,16%)] rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl border border-[hsl(210,18%,82%)] dark:border-[hsl(172,85%,32%)]/30"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-base sm:text-lg leading-relaxed text-[hsl(213,50%,16%)] dark:text-[hsl(150,3%,96%)]"
              >
                <p className="mb-4 sm:mb-6">
                  I'm an enthusiastic{" "}
                  <span className="text-[hsl(172,85%,32%)] font-semibold">
                    Full-Stack Developer
                  </span>{" "}
                  currently pursuing a BSc (Hons) in Information Technology at
                  SLIIT, where I'm honing my skills in building modern, scalable
                  web applications that solve real-world problems.
                </p>

                <p className="mb-4 sm:mb-6">
                  With a strong foundation in the{" "}
                  <span className="text-[hsl(172,85%,32%)] font-semibold">
                    MERN stack
                  </span>{" "}
                  (MongoDB, Express.js, React, Node.js), I enjoy creating
                  seamless user experiences with{" "}
                  <span className="text-[hsl(172,85%,32%)] font-semibold">
                    React and Tailwind CSS
                  </span>
                  , while also developing robust backend systems with{" "}
                  <span className="text-[hsl(172,85%,32%)] font-semibold">
                    Node.js and Spring Boot
                  </span>
                  .
                </p>

                <p className="mb-4 sm:mb-6">
                  As a student-developer, I'm eager to apply my academic
                  knowledge to real-world challenges, constantly experimenting
                  with modern tools like{" "}
                  <span className="text-[hsl(172,85%,32%)] font-semibold">
                    Figma
                  </span>{" "}
                  for user-centered design and{" "}
                  <span className="text-[hsl(172,85%,32%)] font-semibold">
                    Docker
                  </span>{" "}
                  for efficient deployment workflows.
                </p>

                <p>
                  I'm passionate about learning new technologies, collaborating
                  on innovative projects, and contributing to solutions that
                  make a meaningful difference in people's lives. Let's build
                  something extraordinary together! 🚀
                </p>
              </motion.div>

                            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br mt-5 from-[hsl(172,85%,32%)]/10 to-[hsl(213,50%,16%)]/5 dark:from-[hsl(172,85%,32%)]/20 dark:to-[hsl(213,50%,16%)]/10 rounded-xl p-4 sm:p-6 border border-[hsl(172,85%,32%)]/20 dark:border-[hsl(172,85%,32%)]/30"
              >
                <h4 className="font-semibold text-base sm:text-lg text-[hsl(213,50%,16%)] dark:text-[hsl(150,3%,96%)] mb-2 sm:mb-3">
                  🎯 Currently Exploring
                </h4>
                <ul className="space-y-2 text-[hsl(213,50%,16%)]/80 dark:text-[hsl(150,3%,96%)]/80 text-sm sm:text-base">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[hsl(172,85%,32%)] rounded-full"></div>
                    Advanced React patterns and performance optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[hsl(172,85%,32%)] rounded-full"></div>
                    AI/ML integration in web applications
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[hsl(172,85%,32%)] rounded-full"></div>
                    Cloud architecture and microservices
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[hsl(172,85%,32%)] rounded-full"></div>
                    Accessibility and inclusive design principles
                  </li>
                </ul>
              </motion.div>

              {/* Stats (Commented Out) */}
              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-[hsl(210,18%,82%)] dark:border-[hsl(172,85%,32%)]/30"
              >
                <div className="grid grid-cols-3 gap-4 sm:gap-6 text-center">
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-[hsl(172,85%,32%)] mb-1">
                      2+
                    </div>
                    <p className="text-xs sm:text-sm text-[hsl(213,50%,16%)]/70 dark:text-[hsl(150,3%,96%)]/70">
                      Years Coding
                    </p>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-[hsl(172,85%,32%)] mb-1">
                      25+
                    </div>
                    <p className="text-xs sm:text-sm text-[hsl(213,50%,16%)]/70 dark:text-[hsl(150,3%,96%)]/70">
                      Technologies
                    </p>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-[hsl(172,85%,32%)] mb-1">
                      40+
                    </div>
                    <p className="text-xs sm:text-sm text-[hsl(213,50%,16%)]/70 dark:text-[hsl(150,3%,96%)]/70">
                      Projects
                    </p>
                  </div>
                </div>
              </motion.div> */}
            </motion.div>

            {/* Skill Showcase */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4 sm:space-y-6"
            >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  <span className="border-b-2 border-emerald-500 pb-1">Core</span> Competencies
                </h3>

              {skillHighlights.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-[hsl(213,50%,16%)] rounded-xl p-4 sm:p-6 border border-[hsl(210,18%,82%)] dark:border-[hsl(172,85%,32%)]/30 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div
                      className={`p-2 sm:p-3 rounded-lg bg-[hsl(172,85%,32%)]/10 dark:bg-[hsl(172,85%,32%)]/20 ${category.color} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <category.icon size={20} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-base sm:text-lg text-[hsl(213,50%,16%)] dark:text-[hsl(150,3%,96%)] mb-2 sm:mb-3 group-hover:text-[hsl(172,85%,32%)] transition-colors">
                        {category.title}
                      </h4>
                      <div className="flex flex-wrap gap-2 sm:gap-3">
                        {category.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 sm:px-3 py-1 bg-[hsl(172,85%,32%)]/10 dark:bg-[hsl(172,85%,32%)]/20 text-[hsl(172,85%,32%)] rounded-full text-xs sm:text-sm font-medium hover:bg-[hsl(172,85%,32%)]/20 dark:hover:bg-[hsl(172,85%,32%)]/30 transition-colors min-h-[28px] sm:min-h-[32px]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Current Focus */}

            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}