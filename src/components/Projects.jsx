import React, { useState } from "react";
import { projectData } from "../projectData";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Eye, Code, Sparkles } from "lucide-react";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [filter, setFilter] = useState("all");

  // Extract unique technologies for filter
  const allTechnologies = [
    ...new Set(projectData.flatMap((project) => project.technologies)),
  ];

  const filteredProjects =
    filter === "all"
      ? projectData
      : projectData.filter((project) => project.technologies.includes(filter));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const projectVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -15,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.8,
      },
    },
    hover: {
      y: -10,
      scale: 1.03,
      rotateY: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
      },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      rotateZ: 2,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const techBadgeVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    }),
    hover: {
      scale: 1.1,
      backgroundColor: "#0ea5e9",
      transition: { duration: 0.2 },
    },
  };

  return (
    <div
      className="mx-auto max-w-7xl p-4 sm:p-10 text-white flex flex-col gap-10 sm:gap-16 items-center justify-center min-h-screen"
      id="projects"
    >
      {/* Animated Title with Sparkles */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
        className="text-center relative"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-4 -right-4 text-sky-400"
        >
          <Sparkles size={24} />
        </motion.div>
        <motion.h1
          className="text-5xl sm:text-7xl font-bold bg-gradient-to-r from-blue-600 via-sky-500 to-blue-400 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          My Projects
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg text-blue-200 mt-4 max-w-2xl"
        >
          A showcase of my technical expertise and creative solutions
        </motion.p>
      </motion.div>

      {/* Filter Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-wrap gap-3 justify-center"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded-full transition-all duration-300 ${
            filter === "all"
              ? "bg-gradient-to-r from-blue-600 via-sky-500 to-blue-400 text-white shadow-lg shadow-blue-500/25"
              : "bg-slate-800/50 text-blue-200 hover:bg-slate-700/70 border border-blue-500/20"
          }`}
        >
          All Projects
        </motion.button>
        {allTechnologies.slice(0, 5).map((tech) => (
          <motion.button
            key={tech}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFilter(tech)}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              filter === tech
                ? "bg-gradient-to-r from-blue-600 via-sky-500 to-blue-400 text-white shadow-lg shadow-blue-500/25"
                : "bg-slate-800/50 text-blue-200 hover:bg-slate-700/70 border border-blue-500/20"
            }`}
          >
            {tech}
          </motion.button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
      >
        <AnimatePresence mode="wait">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              whileHover="hover"
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className="group perspective-1000"
            >
              <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl overflow-hidden shadow-2xl transform-gpu border border-blue-500/10">
                {/* Glowing Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-sky-500 to-blue-400 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm" />

                {/* Image Container */}
                <div className="relative overflow-hidden h-56">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    variants={imageVariants}
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay with Action Buttons */}
                  <AnimatePresence>
                    {hoveredProject === project.id && (
                      <motion.div
                        variants={overlayVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center gap-4"
                      >
                        <motion.a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                          className="bg-slate-800/80 hover:bg-slate-700/80 p-3 rounded-full transition-all duration-300 group/btn border border-blue-500/20"
                        >
                          <Github className="w-6 h-6 text-blue-200 group-hover/btn:text-sky-300 transition-colors" />
                        </motion.a>
                        <motion.a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1, rotate: -5 }}
                          whileTap={{ scale: 0.9 }}
                          className="bg-gradient-to-r from-blue-600 via-sky-500 to-blue-400 hover:from-blue-500 hover:via-sky-400 hover:to-blue-300 p-3 rounded-full transition-all duration-300 group/btn shadow-lg shadow-blue-500/25"
                        >
                          <ExternalLink className="w-6 h-6 text-white group-hover/btn:text-blue-50 transition-colors" />
                        </motion.a>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Project Number Badge */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 200,
                    }}
                    className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 via-sky-500 to-blue-400 text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <motion.h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:via-sky-300 group-hover:to-blue-200 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </motion.h3>

                  <motion.p className="text-blue-200/80 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </motion.p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        custom={techIndex}
                        variants={techBadgeVariants}
                        initial="hidden"
                        whileInView="visible"
                        whileHover="hover"
                        className="px-3 py-1 bg-blue-900/30 hover:bg-blue-800/50 text-sky-300 rounded-full text-xs font-medium cursor-pointer transition-all duration-300 border border-blue-500/30 backdrop-blur-sm"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex gap-3 pt-4">
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-slate-800/70 hover:bg-slate-700/80 text-blue-200 rounded-lg transition-all duration-300 text-sm group/link border border-blue-500/20"
                    >
                      <Code className="w-4 h-4 group-hover/link:rotate-12 transition-transform" />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 via-sky-500 to-blue-400 hover:from-blue-500 hover:via-sky-400 hover:to-blue-300 text-white rounded-lg transition-all duration-300 text-sm group/link shadow-lg shadow-blue-500/25"
                    >
                      <Eye className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                      Live Demo
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Projects;