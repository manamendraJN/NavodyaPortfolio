import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export function ContactSection() {
  const socialLinks = [
    {
      name: "Email",
      url: "mailto:navodyamanamendra19@gmail.com",
      icon: Mail,
      color: "hover:text-[hsl(172,85%,35%)]",
      description: "Send direct email",
    },
    {
      name: "GitHub",
      url: "https://github.com/manamendraJN",
      icon: Github,
      color: "hover:text-[hsl(172,85%,35%)]",
      description: "View code repositories and contributions",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/navodya-manamendra-35a309248/",
      icon: Linkedin,
      color: "hover:text-[hsl(172,85%,35%)]",
      description: "Connect on professional network",
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/94764390987",
      icon: Phone,
      color: "hover:text-[hsl(172,85%,35%)]",
      description: "Contact via WhatsApp",
    },
    {
      name: "Mobile",
      url: "tel:+94768685811",
      icon: Phone,
      color: "hover:text-[hsl(172,85%,35%)]",
      description: "Call directly",
    },
  ];

  return (
    <section
      id="contact"
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[hsl(213,50%,16%)] to-[hsl(172,85%,32%)] touch-auto"
      role="region"
      aria-labelledby="contact-heading"
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
    id="contact-heading"
    className="text-2xl sm:text-3xl md:text-4xl font-bold text-white"
  >
    Let's <span className="text-emerald-400">Shape</span> the Future Together <span className="inline-block transition-transform hover:rotate-12">🚀</span>
  </h2>
  <div className="mx-auto mt-4 h-1 w-20 bg-emerald-400 rounded-full" />
</div>
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            Ready to collaborate on your next project? Let's connect and build
            something amazing that makes a difference!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:gap-12 max-w-4xl mx-auto">
          {/* Contact Info - Enhanced accessibility with clickable links */}
          <motion.div
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                Let's Connect
              </h3>
              <p className="text-sm sm:text-base text-white/80 mb-6 sm:mb-8 leading-relaxed">
                I'm always excited to discuss new opportunities, innovative
                projects, and potential collaborations. Whether you have a
                project in mind, need technical consultation, or just want to
                chat about technology, feel free to reach out!
              </p>

              <div className="space-y-3 sm:space-y-4">
                {socialLinks.map((link) => (
                  <div
                    key={link.name}
                    className="flex items-center gap-3 sm:gap-4 text-white/80 min-h-[44px]"
                  >
                    <link.icon
                      className={`text-[hsl(172,85%,32%)] flex-shrink-0 ${link.color} w-5 sm:w-6 h-5 sm:h-6`}
                    />
                    <motion.a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`transition-all duration-300 ${link.color} hover:underline text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[hsl(172,85%,35%)] focus:ring-opacity-50`}
                      aria-label={`${link.name} - ${link.description}`}
                      style={{ touchAction: "manipulation" }}
                    >
                      {link.name === "Email"
                        ? "navodyamanamendra19@gmail.com"
                        : link.name === "GitHub"
                        ? "github.com/manamendraJN"
                        : link.name === "LinkedIn"
                        ? "Professional LinkedIn Profile"
                        : link.name === "WhatsApp"
                        ? "WhatsApp Chat (+94 76 439 0987)"
                        : link.name === "Mobile"
                        ? "Call Now (+94 76 868 5811)"
                        : ""}
                    </motion.a>
                  </div>
                ))}
              </div>
            </div>

            {/* Response time commitment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/5 rounded-2xl p-4 sm:p-6 border border-white/10"
            >
              <p className="text-white italic text-sm sm:text-base text-center font-medium">
                " 💡The best way to predict the future is to create it "
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}