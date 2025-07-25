import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink } from "lucide-react";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  type: "certification" | "education";
  url?: string;
  status?: string;
}

const achievements: Certification[] = [
  {
    title: "AI/ML Engineer",
    issuer: "SLIIT",
    date: "2024",
    type: "certification",
    url: "https://code.sliit.org/certificates/muy9c4mfjv",
  },
  {
    title: "Python (Basic)",
    issuer: "Sololearn",
    date: "2024",
    type: "certification",
    url: "https://www.sololearn.com/certificates/CC-S7UZM0GN",
  },
  {
    title: "JavaScript (Basic)",
    issuer: "HackerRank",
    date: "2023",
    type: "certification",
    url: "https://www.hackerrank.com/certificates/ef62b645d0bd",
  },
  {
    title: "React (Basic)",
    issuer: "HackerRank",
    date: "2023",
    type: "certification",
    url: "https://www.hackerrank.com/certificates/206119c6659f",
  },
  {
    title: "SQL (Basic)",
    issuer: "HackerRank",
    date: "2023",
    type: "certification",
    url: "https://www.hackerrank.com/certificates/12e449396716",
  },
  {
    title: "Java (Basic)",
    issuer: "HackerRank",
    date: "2023",
    type: "certification",
    url: "https://www.hackerrank.com/certificates/768a9f87f70c",
  },
  {
    title: "BSc (Hons) in Information Technology",
    issuer: "SLIIT",
    date: "Oct 2022 – Present",
    type: "education",
    status: "Ongoing",
  },
];

export function CertificationsSection() {
  const certifications = achievements.filter((item) => item.type === "certification");
  const education = achievements.filter((item) => item.type === "education");

  return (
    <section
      id="certifications"
      className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-slate-900 transition-colors duration-300 touch-auto"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
<div className="text-center mb-4 sm:mb-5 md:mb-6">
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
    Academic & <span className="text-emerald-600 dark:text-emerald-400">Certifications</span>
  </h2>
  <div className="mx-auto mt-4 h-1 w-20 bg-emerald-500 rounded-full" />
</div>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Continuous learning and professional development journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
              <Award className="text-teal-600 dark:text-teal-400 w-5 sm:w-6 h-5 sm:h-6" />
              Professional Certifications
            </h3>
            <div className="space-y-4 sm:space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-slate-800 rounded-xl p-4 sm:p-6 border border-gray-200 dark:border-slate-700 shadow-md hover:bg-teal-50 dark:hover:bg-teal-900/70 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-bold text-base sm:text-lg md:text-xl text-slate-900 dark:text-slate-100 mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-teal-600 dark:text-teal-400 font-medium mb-2 text-sm sm:text-base">
                        {cert.issuer}
                      </p>
                      <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs sm:text-sm">
                        <Calendar className="w-4 sm:w-[18px] h-4 sm:h-[18px]" />
                        <span>{cert.date}</span>
                      </div>
                    </div>
                    {cert.url && (
                      <motion.a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors p-2 sm:p-3 rounded-full hover:bg-teal-100 dark:hover:bg-teal-900/50 focus:ring-2 focus:ring-teal-500 min-h-[44px] flex items-center justify-center"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={`View certification for ${cert.title}`}
                        style={{ touchAction: "manipulation" }}
                      >
                        <ExternalLink className="w-5 sm:w-6 h-5 sm:h-6" />
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
              <Calendar className="text-teal-600 dark:text-teal-400 w-5 sm:w-6 h-5 sm:h-6" />
              Education
            </h3>
            <div className="space-y-4 sm:space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-teal-900/50 rounded-xl p-4 sm:p-6 border border-teal-200 dark:border-teal-800 shadow-md hover:bg-teal-50 dark:hover:bg-teal-900/70 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-2 sm:mb-4">
                    <h4 className="font-bold text-base sm:text-lg md:text-xl text-slate-900 dark:text-slate-100">
                      {edu.title}
                    </h4>
                    {edu.status && (
                      <span className="bg-teal-600 dark:bg-teal-500 text-white dark:text-slate-100 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                        {edu.status}
                      </span>
                    )}
                  </div>
                  <p className="text-teal-600 dark:text-teal-400 font-medium mb-2 text-sm sm:text-base">
                    {edu.issuer}
                  </p>
                  <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs sm:text-sm">
                    <Calendar className="w-4 sm:w-[18px] h-4 sm:h-[18px]" />
                    <span>{edu.date}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-4 sm:mt-6 bg-white dark:bg-slate-800 rounded-xl p-4 sm:p-6 border border-gray-200 dark:border-slate-700 shadow-md"
            >
              <h4 className="font-bold text-base sm:text-lg md:text-xl text-slate-900 dark:text-slate-100 mb-3 sm:mb-4">
                Academic Highlights
              </h4>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-sm sm:text-base">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-teal-600 dark:bg-teal-400 rounded-full"></div>
                  Strong foundation in software engineering principles
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-teal-600 dark:bg-teal-400 rounded-full"></div>
                  Hands-on experience with modern development frameworks
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-teal-600 dark:bg-teal-400 rounded-full"></div>
                  Active participation in coding competitions
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-teal-600 dark:bg-teal-400 rounded-full"></div>
                  Collaborative project development experience
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}