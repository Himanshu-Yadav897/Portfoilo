import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaDownload,
  FaWhatsapp,
  FaTelegram,
} from "react-icons/fa";
import {
  Send,
  MessageCircle,
  Sparkles,
  Heart,
  Code,
  Coffee,
  Calendar,
  Clock,
  Target,
  Users,
} from "lucide-react";

const Contact = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const contactMethods = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email",
      subtitle: "hy897433@gmail.com",
      description: "Best for detailed project discussions",
      href: "mailto:hy897433@gmail.com",
      color: "from-red-500 to-pink-600",
      delay: 0.2,
    },
    {
      icon: <FaLinkedin className="text-2xl" />,
      title: "LinkedIn",
      subtitle: "Professional Network",
      description: "Connect for career opportunities",
      href: "https://www.linkedin.com/in/himanshu-yadav-897433-/",
      color: "from-blue-600 to-blue-800",
      delay: 0.3,
    },
    {
      icon: <FaGithub className="text-2xl" />,
      title: "GitHub",
      subtitle: "Code Repository",
      description: "Explore my projects and contributions",
      href: "https://github.com/Himanshu-Yadav897",
      color: "from-gray-700 to-gray-900",
      delay: 0.4,
    },
    {
      icon: <FaWhatsapp className="text-2xl" />,
      title: "WhatsApp",
      subtitle: "+91 9310614314",
      description: "Quick responses and instant communication",
      href: "https://wa.me/+919310614314",
      color: "from-green-500 to-green-700",
      delay: 0.5,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-20, 20, -20],
      rotate: [0, 10, -10, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div
      className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden"
      id="contact"
    >
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Particles */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
            animate={{
              x: [0, 150, 0],
              y: [0, -150, 0],
              scale: [1, 2, 1],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Mouse Follower Effect */}
        <motion.div
          className="absolute w-[600px] h-[600px] bg-gradient-radial from-blue-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl"
          animate={{
            x: mousePosition.x - 300,
            y: mousePosition.y - 300,
          }}
          transition={{ type: "spring", stiffness: 20, damping: 30 }}
        />

        {/* Geometric Shapes */}
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-xl"
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-xl"
          animate={{ rotate: -360, scale: [1.2, 1, 1.2] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        {/* Hero Section */}
        <motion.div variants={itemVariants} className="text-center mb-20">
          <div className="relative inline-block">
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="absolute -top-12 -left-12 text-yellow-400"
            >
              <Sparkles size={40} />
            </motion.div>

            <motion.h1
              className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-blue-400 bg-clip-text text-transparent">
                Let's Work 
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Together
              </span>
            </motion.h1>

            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="absolute -bottom-8 -right-8 text-pink-400"
            >
              <Heart size={32} />
            </motion.div>
          </div>

          <motion.p
            variants={itemVariants}
            className="text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-8"
          >
            Ready to bring your next project to life? I'm available for
            <span className="text-blue-400 font-semibold">
              {" "}
              full-time opportunities
            </span>
            ,
            <span className="text-purple-400 font-semibold">
              {" "}
              freelance projects
            </span>
            , and
            <span className="text-green-400 font-semibold">
              {" "}
              exciting collaborations
            </span>
            .
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6 mb-16"
          >
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-lg px-6 py-3 rounded-full border border-white/20">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-white font-medium">Available for Work</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-lg px-6 py-3 rounded-full border border-white/20">
              <Calendar className="text-blue-400" size={20} />
              <span className="text-white font-medium">
                Open to Opportunities
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: method.delay,
                type: "spring",
                stiffness: 80,
              }}
              whileHover={{
                scale: 1.03,
                y: -10,
                boxShadow: "0 25px 50px rgba(0,0,0,0.25)",
              }}
              whileTap={{ scale: 0.98 }}
              className={`group relative overflow-hidden bg-gradient-to-br ${method.color} p-8 rounded-3xl text-white transition-all duration-500 cursor-pointer`}
            >
              {/* Background Animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <motion.div
                    whileHover={{ rotate: 20, scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                    className="p-4 bg-white/20 rounded-2xl"
                  >
                    {method.icon}
                  </motion.div>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="text-white/40"
                  >
                    <Send size={20} />
                  </motion.div>
                </div>

                <h3 className="text-2xl font-bold mb-2">{method.title}</h3>
                <p className="text-lg opacity-90 mb-3">{method.subtitle}</p>
                <p className="text-sm opacity-75 leading-relaxed">
                  {method.description}
                </p>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
          ))}
        </motion.div>

        {/* Call to Action Section */}
        <motion.div
          variants={itemVariants}
          className="text-center bg-white/5 backdrop-blur-lg rounded-3xl p-12 border border-white/20"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="inline-block text-blue-400 mb-6"
          >
            <Code size={48} />
          </motion.div>

          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Next Project?
          </h2>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            I specialize in creating modern, scalable web applications using the
            latest technologies. Let's discuss how I can help bring your vision
            to life.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <motion.a
              href="mailto:hy897433@gmail.com?subject=Let's Work Together"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
            >
              <FaEnvelope />
              Send Email
            </motion.a>

            <motion.a
              href="https://drive.google.com/file/d/1JW8gun-X80HVl5KXIro8tXNM9-AESP0d/view?usp=sharing" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 border border-white/20 backdrop-blur-lg"
            >
              <FaDownload />
              Download Resume
            </motion.a>
          </div>
        </motion.div>

        {/* Footer Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="text-yellow-400"
            >
              <Coffee size={24} />
            </motion.div>
            <p className="text-2xl text-gray-300 italic">
              "Great things are built by great teams"
            </p>
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="text-pink-400"
            >
              <Heart size={24} />
            </motion.div>
          </div>
          <p className="text-gray-400">
            Let's create something extraordinary together! 🚀
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
