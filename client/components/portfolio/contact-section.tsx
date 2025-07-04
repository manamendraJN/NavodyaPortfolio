import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
  Github,
  Linkedin,
  Mail,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 4 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    }, 4000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/manamendraJN",
      icon: Github,
      color: "hover:text-gray-900 dark:hover:text-white",
      description: "View code repositories and contributions",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/navodya-manamendra-35a309248/",
      icon: Linkedin,
      color: "hover:text-blue-600",
      description: "Connect on professional network",
    },
    {
      name: "Email",
      url: "mailto:navodyamanamendra19@gmail.com",
      icon: Mail,
      color: "hover:text-red-500",
      description: "Send direct email",
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

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form - Enhanced with validation and accessibility */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Send me a message
            </h3>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle
                  size={60}
                  className="text-green-400 mx-auto mb-4"
                />
                <h4 className="text-xl font-bold text-white mb-2">
                  Message Sent Successfully!
                </h4>
                <p className="text-white/80">
                  Thank you for reaching out. I'll get back to you within 24
                  hours!
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div>
                  <label htmlFor="contact-name" className="sr-only">
                    Your name
                  </label>
                  <Input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    aria-invalid={errors.name ? "true" : "false"}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={`bg-white/5 border-white/20 text-white placeholder:text-white/60 focus:border-[hsl(172,85%,32%)] focus:ring-[hsl(172,85%,32%)] ${
                      errors.name ? "border-red-400 focus:border-red-400" : ""
                    }`}
                  />
                  {errors.name && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 mt-2 text-red-400 text-sm"
                      id="name-error"
                      role="alert"
                    >
                      <AlertCircle size={16} />
                      {errors.name}
                    </motion.div>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-email" className="sr-only">
                    Your email address
                  </label>
                  <Input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    aria-invalid={errors.email ? "true" : "false"}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={`bg-white/5 border-white/20 text-white placeholder:text-white/60 focus:border-[hsl(172,85%,32%)] focus:ring-[hsl(172,85%,32%)] ${
                      errors.email ? "border-red-400 focus:border-red-400" : ""
                    }`}
                  />
                  {errors.email && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 mt-2 text-red-400 text-sm"
                      id="email-error"
                      role="alert"
                    >
                      <AlertCircle size={16} />
                      {errors.email}
                    </motion.div>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-message" className="sr-only">
                    Your message
                  </label>
                  <Textarea
                    id="contact-message"
                    name="message"
                    placeholder="Your message..."
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    aria-invalid={errors.message ? "true" : "false"}
                    aria-describedby={
                      errors.message ? "message-error" : undefined
                    }
                    className={`bg-white/5 border-white/20 text-white placeholder:text-white/60 focus:border-[hsl(172,85%,32%)] focus:ring-[hsl(172,85%,32%)] resize-none ${
                      errors.message
                        ? "border-red-400 focus:border-red-400"
                        : ""
                    }`}
                  />
                  {errors.message && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 mt-2 text-red-400 text-sm"
                      id="message-error"
                      role="alert"
                    >
                      <AlertCircle size={16} />
                      {errors.message}
                    </motion.div>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[hsl(172,85%,32%)] hover:bg-[hsl(172,85%,25%)] text-white font-medium py-4 flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 min-h-[48px]"
                  aria-label={
                    isSubmitting ? "Sending message..." : "Send message"
                  }
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>

          {/* Contact Info & Social Links - Enhanced accessibility */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
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
                <div className="flex items-center gap-3 text-white/80">
                  <Mail
                    className="text-[hsl(172,85%,32%)] flex-shrink-0"
                    size={20}
                  />
                  <span className="break-all">
                    navodyamanamendra19@gmail.com
                  </span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <Github
                    className="text-[hsl(172,85%,32%)] flex-shrink-0"
                    size={20}
                  />
                  <span>github.com/manamendraJN</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <Linkedin
                    className="text-[hsl(172,85%,32%)] flex-shrink-0"
                    size={20}
                  />
                  <span>Professional LinkedIn Profile</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h4 className="text-xl font-bold text-white mb-6">
                Follow me on social media
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 bg-white/10 rounded-full border border-white/20 text-white transition-all duration-300 ${link.color} hover:bg-white hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 min-w-[56px] min-h-[56px] flex items-center justify-center`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`${link.name} - ${link.description}`}
                  >
                    <link.icon size={24} />
                  </motion.a>
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
              <p className="text-white/80 italic text-center mb-3">
                "The best way to predict the future is to create it."
              </p>
              <p className="text-[hsl(172,85%,32%)] text-center font-medium">
                💡 Committed to responding within 24 hours
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
