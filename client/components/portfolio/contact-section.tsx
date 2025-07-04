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
      className="py-20 bg-gradient-to-br from-[hsl(213,50%,16%)] to-[hsl(172,85%,32%)]"
      role="region"
      aria-labelledby="contact-heading"
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
            id="contact-heading"
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Let's Shape the Future Together 🚀
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Ready to collaborate on your next project? Let's connect and build
            something amazing that makes a difference!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-12 max-w-6xl mx-auto">
          {/* Contact Info - Enhanced accessibility with clickable links */}
          <motion.div
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-white/80 mb-8 leading-relaxed">
                I'm always excited to discuss new opportunities, innovative
                projects, and potential collaborations. Whether you have a
                project in mind, need technical consultation, or just want to
                chat about technology, feel free to reach out!
              </p>

              <div className="space-y-4">
                {socialLinks.map((link) => (
                  <div key={link.name} className="flex items-center gap-3 text-white/80">
                    <link.icon
                      className={`text-[hsl(172,85%,32%)] flex-shrink-0 ${link.color}`}
                      size={20}
                    />
                    <motion.a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`transition-all duration-300 ${link.color} hover:underline`}
                      aria-label={`${link.name} - ${link.description}`}
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
              className="bg-white/5 rounded-2xl p-6 border border-white/10"
            >
              <p className="text-white italic text-center font-medium">
                " 💡The best way to predict the future is to create it "
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}