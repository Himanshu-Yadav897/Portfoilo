import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { BiMenu, BiX } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";
import {
  Download,
  Code,
  User,
  Briefcase,
  MessageCircle,
  Clock,
  Sparkles,
} from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("/");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setActiveSection(location.pathname);
  }, [location]);

  const navigationItems = [
    {
      to: "/about",
      label: "About",
      icon: <User size={16} />,
      description: "Get to know me",
    },
    {
      to: "/projects",
      label: "Projects",
      icon: <Code size={16} />,
      description: "My work showcase",
    },
    {
      to: "/project-timeline",
      label: "Timeline",
      icon: <Clock size={16} />,
      description: "Project journey",
    },
    {
      to: "/my-story",
      label: "My Story",
      icon: <Sparkles size={16} />,
      description: "Personal journey",
    },
    {
      to: "/my-education",
      label: "Education",
      icon: <MessageCircle size={16} />,
      description: "See my Education",
    },
    {
      to: "/contact",
      label: "Contact",
      icon: <MessageCircle size={16} />,
      description: "Let's connect",
    },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.05,
      },
    },
  };

  const menuItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 },
  };

  const logoVariants = {
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-black/80 border-b border-blue-500/20 shadow-2xl shadow-blue-500/10"
          : "backdrop-blur-md bg-black/30 border-b border-blue-400/20"
      }`}
    >
      <nav className="relative max-w-7xl mx-auto py-4 px-6 lg:px-8 flex items-center justify-between text-white">
        {/* Background Beams - Only show when not scrolled for cleaner look */}
        {!scrolled && (
          <div className="absolute inset-0 -z-10 h-full overflow-hidden pointer-events-none">
            <BackgroundBeamsWithCollision explodeY={8} />
          </div>
        )}

        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-sky-500/5 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

        {/* Logo */}
        <motion.div variants={logoVariants} whileHover="hover">
          <Link to="/" className="relative group">
            <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 via-sky-500 to-blue-400 text-transparent bg-clip-text hover:from-blue-500 hover:via-sky-400 hover:to-blue-300 transition-all duration-500">
              Himanshu Yadav
            </span>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 via-sky-500 to-blue-400 group-hover:w-full transition-all duration-300" />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navigationItems.map((item, index) => (
            <motion.div
              key={item.to}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <Link
                to={item.to}
                className={`relative px-4 py-2 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeSection === item.to
                    ? "text-white bg-blue-600/20 backdrop-blur-sm border border-blue-400/30"
                    : "text-gray-300 hover:text-white hover:bg-blue-600/10"
                }`}
              >
                <motion.span
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.3 }}
                  className="text-blue-400"
                >
                  {item.icon}
                </motion.span>
                {item.label}

                {/* Active indicator */}
                {activeSection === item.to && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-sky-500/20 to-blue-400/20 rounded-xl border border-blue-400/30"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>

              {/* Tooltip */}
              <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-black/90 text-white text-xs py-1 px-2 rounded-md whitespace-nowrap backdrop-blur-sm border border-blue-400/30">
                  {item.description}
                </div>
                <div className="w-2 h-2 bg-black/90 transform rotate-45 absolute -top-1 left-1/2 -translate-x-1/2 border-l border-t border-blue-400/30"></div>
              </div>
            </motion.div>
          ))}

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="ml-4"
          >
            <motion.a
              href="https://drive.google.com/file/d/1JW8gun-X80HVl5KXIro8tXNM9-AESP0d/view?usp=sharing"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 via-sky-500 to-blue-400 hover:from-blue-500 hover:via-sky-400 hover:to-blue-300 text-white px-4 py-2 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
            >
              <Download size={16} />
              <span className="hidden xl:inline">Resume</span>
            </motion.a>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="lg:hidden relative z-50 p-2 rounded-xl bg-blue-600/20 backdrop-blur-sm border border-blue-400/30"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <AnimatePresence mode="wait">
            {isMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <BiX className="text-2xl text-blue-400" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <BiMenu className="text-2xl text-blue-400" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden fixed inset-0 top-0 bg-black/95 backdrop-blur-xl z-40"
              onClick={() => setIsMenuOpen(false)}
            >
              <motion.div
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute top-0 left-0 right-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-blue-800/20 backdrop-blur-xl border-b border-blue-400/30"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="pt-20 pb-8 px-6 bg-blue-950  ">
                  {/* Mobile Menu Header */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-center mb-8"
                  >
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-sky-500 to-blue-400 bg-clip-text text-transparent mb-2">
                      Navigation
                    </h3>
                  </motion.div>

                  {/* Mobile Menu Items */}
                  <motion.div
                    variants={menuVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="space-y-4"
                  >
                    {navigationItems.map((item, index) => (
                      <motion.div
                        key={item.to}
                        variants={menuItemVariants}
                        className="relative"
                      >
                        <Link
                          to={item.to}
                          onClick={() => setIsMenuOpen(false)}
                          className={`flex items-center gap-2 p-2 rounded-xl transition-all duration-300 ${
                            activeSection === item.to
                              ? "bg-gradient-to-r from-blue-600/20 via-sky-500/20 to-blue-400/20 text-white border border-blue-400/30"
                              : "text-gray-300 hover:text-white hover:bg-blue-600/10"
                          }`}
                        >
                          <span className="text-blue-400 text-xl">
                            {item.icon}
                          </span>
                          <div>
                            <div className="font-medium">{item.label}</div>
                            <div className="text-xs text-gray-400">
                              {item.description}
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}

                    {/* Mobile CTA */}
                    <motion.div variants={menuItemVariants} className="pt-4">
                      <a
                        href="https://drive.google.com/file/d/1JW8gun-X80HVl5KXIro8tXNM9-AESP0d/view?usp=sharing" // Add your resume link
                        className="flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 via-sky-500 to-blue-400 text-white p-4 rounded-xl font-medium transition-all duration-300 hover:from-blue-500 hover:via-sky-400 hover:to-blue-300"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <Download size={20} />
                        Download Resume
                      </a>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Progress Bar */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrolled ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 via-sky-500 to-blue-400 origin-left"
        style={{ width: "100%" }}
      />
    </motion.header>
  );
};

export default Navbar;
