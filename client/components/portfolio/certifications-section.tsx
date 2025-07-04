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
    title: "SQL (Basic)",
    issuer: "HackerRank",
    date: "2023",
    type: "certification",
    url: "#",
  },
  {
    title: "React (Basic)",
    issuer: "HackerRank",
    date: "2023",
    type: "certification",
    url: "#",
  },
  {
    title: "Java (Basic)",
    issuer: "HackerRank",
    date: "2023",
    type: "certification",
    url: "#",
  },
  {
    title: "JavaScript (Basic)",
    issuer: "HackerRank",
    date: "2023",
    type: "certification",
    url: "#",
  },
  {
    title: "AI/ML Engineer",
    issuer: "SLIIT",
    date: "2024",
    type: "certification",
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
  const certifications = achievements.filter(
    (item) => item.type === "certification",
  );
  const education = achievements.filter((item) => item.type === "education");

  return (
    <section
      id="certifications"
      className="py-20 bg-[hsl(0,0%,98%)] dark:bg-[hsl(213,50%,14%)] transition-colors duration-300"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[hsl(213,50%,16%)] dark:text-[hsl(0,0%,98%)] mb-6">
            Academic & Certifications
          </h2>
          <p className="text-xl text-[hsl(213,50%,16%)]/70 dark:text-[hsl(0,0%,85%)] max-w-3xl mx-auto">
            Continuous learning and professional development journey
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-navy mb-8 flex items-center gap-3">
              <Award className="text-teal" size={28} />
              Professional Certifications
            </h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 border border-silver shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-bold text-navy text-lg mb-2 group-hover:text-teal transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-teal font-medium mb-2">
                        {cert.issuer}
                      </p>
                      <div className="flex items-center gap-2 text-navy/60">
                        <Calendar size={16} />
                        <span>{cert.date}</span>
                      </div>
                    </div>
                    {cert.url && (
                      <motion.a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-silver hover:text-teal transition-colors p-2 rounded-full hover:bg-teal/10"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={20} />
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
            <h3 className="text-2xl font-bold text-navy mb-8 flex items-center gap-3">
              <Calendar className="text-teal" size={28} />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-teal/5 to-navy/5 rounded-xl p-6 border border-teal/20 shadow-lg"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="font-bold text-navy text-lg">{edu.title}</h4>
                    {edu.status && (
                      <span className="bg-teal text-white px-3 py-1 rounded-full text-sm font-medium">
                        {edu.status}
                      </span>
                    )}
                  </div>
                  <p className="text-teal font-medium mb-2">{edu.issuer}</p>
                  <div className="flex items-center gap-2 text-navy/60">
                    <Calendar size={16} />
                    <span>{edu.date}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Academic Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-8 bg-white rounded-xl p-6 border border-silver shadow-lg"
            >
              <h4 className="font-bold text-navy text-lg mb-4">
                Academic Highlights
              </h4>
              <ul className="space-y-2 text-navy/70">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-teal rounded-full"></div>
                  Strong foundation in software engineering principles
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-teal rounded-full"></div>
                  Hands-on experience with modern development frameworks
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-teal rounded-full"></div>
                  Active participation in coding competitions
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-teal rounded-full"></div>
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
