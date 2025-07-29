import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaCode, FaRocket } from "react-icons/fa";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { Sparkles, Coffee, Star, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const socialLinks = [
    {
      href: "https://github.com/Himanshu-Yadav897",
      icon: <FaGithub />,
      label: "GitHub",
      color: "hover:text-blue-400",
      hoverBg: "hover:bg-blue-600/20"
    },
    {
      href: "https://linkedin.com/in/himanshu-yadav897",
      icon: <FaLinkedin />,
      label: "LinkedIn",
      color: "hover:text-sky-400",
      hoverBg: "hover:bg-sky-500/20"
    },
    {
      href: "mailto:himanshuyadav897@gmail.com",
      icon: <FaEnvelope />,
      label: "Email",
      color: "hover:text-blue-300",
      hoverBg: "hover:bg-blue-500/20"
    }
  ];

  const navigationLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/project-timeline", label: "Timeline" },
    { to: "/my-story", label: "My Story" },
    { to: "#contact", label: "Contact", external: true },
  ];

  const skills = ["React", "Node.js", "MongoDB", "JavaScript", "TypeScript", "AWS"];

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="relative bg-gradient-to-br from-gray-900 via-blue-900/20 to-blue-800/20 text-gray-300 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-blue-600/10 via-sky-500/10 to-blue-400/10 rounded-full blur-xl"
          animate={{ scale: [1, 1.2, 1], rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-sky-500/10 to-blue-600/10 rounded-full blur-xl"
          animate={{ scale: [1.2, 1, 1.2], rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-blue-600 via-sky-500 to-blue-400 text-white p-3 rounded-full shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="lg:col-span-1 space-y-6">
            <div className="group">
              <motion.h2
                className="text-3xl font-bold text-white mb-2 transition duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-sky-500 group-hover:to-blue-400 group-hover:bg-clip-text group-hover:text-transparent cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                Himanshu Yadav
              </motion.h2>
              <div className="flex items-center gap-2 text-gray-400">
                <FaCode className="text-blue-400" />
                <span>Full Stack Developer</span>
              </div>
            </div>
            
            <p className="text-gray-400 leading-relaxed">
              Passionate about creating innovative web solutions and bringing ideas to life through code.
            </p>

            {/* Quick Skills */}
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-xs font-medium border border-blue-500/30 cursor-pointer hover:bg-blue-600/30 transition-all duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <Star className="text-blue-400" size={20} />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navigationLinks.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item.external ? (
                    <a
                      href={item.to}
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-blue-400 rounded-full group-hover:w-2 transition-all duration-300"></span>
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      to={item.to}
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-blue-400 rounded-full group-hover:w-2 transition-all duration-300"></span>
                      {item.label}
                    </Link>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <Coffee className="text-sky-400" size={20} />
              Let's Connect
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-400">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-sm">Available for opportunities</span>
              </div>
              <div className="text-gray-400 text-sm">
                <p>📍 Dadri, Uttar Pradesh, India</p>
                <p>⏰ Usually responds within 24 hours</p>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <Sparkles className="text-blue-400" size={20} />
              Follow Me
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-4 bg-blue-600/10 rounded-xl border border-blue-500/20 text-gray-400 ${social.color} ${social.hoverBg} transition-all duration-300 backdrop-blur-sm group relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  <span className="relative z-10 text-xl">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className="h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent mb-8"
        />

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          className="flex md:flex-row items-center justify-center mb-0"
        >
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>© {new Date().getFullYear()} Himanshu Yadav. Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FaHeart className="text-red-500" />
            </motion.div>
            <span>and</span>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <Coffee className="text-sky-400" size={16} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;