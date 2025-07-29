import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  Sparkles,
  BookOpen,
  Trophy,
} from "lucide-react";

const EducationSection = () => {
  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Computer Applications",
      institution: "Mewar Group of Institutions, Ghaziabad",
      year: "2024",
      percentage: "67%",
      board: "CCS University",
      icon: <GraduationCap size={24} />,
      color: "from-blue-600 via-sky-500 to-blue-400",
    },
    {
      id: 2,
      degree: "Senior Secondary (12th) - PCM with Computer Science",
      institution: "H.M D.A.V School",
      year: "2021",
      percentage: "69.8%",
      board: "CBSE",
      icon: <BookOpen size={24} />,
      color: "from-sky-500 via-blue-400 to-blue-600",
    },
    {
      id: 3,
      degree: "Secondary (10th)",
      institution: "Lav Kush Sen. Sec. School",
      year: "2019",
      percentage: "76.6%",
      board: "CBSE",
      icon: <Trophy size={24} />,
      color: "from-blue-400 via-sky-500 to-blue-600",
    },
  ];

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

  const cardVariants = {
    hidden: {
      opacity: 0,
      x: -100,
      rotateY: -15,
    },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section
      className="py-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
      id="education"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/5 via-sky-500/5 to-blue-400/5 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-4 text-sky-400"
          >
            <Sparkles size={32} />
          </motion.div>
          <motion.h2
            whileHover={{ scale: 1.05 }}
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-sky-500 to-blue-400 bg-clip-text text-transparent mb-4"
          >
            Education
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl text-blue-200/80 max-w-2xl mx-auto"
          >
            My academic journey and achievements
          </motion.p>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 via-sky-500 to-blue-400 rounded-full shadow-lg shadow-blue-500/50" />

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.id}
                variants={cardVariants}
                whileHover={{
                  scale: 1.02,
                  rotateY: index % 2 === 0 ? 2 : -2,
                }}
                className="relative flex items-center"
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 200,
                  }}
                  className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${edu.color} rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-500/50 border-4 border-slate-900`}
                  >
                    {edu.icon}
                  </div>
                </motion.div>

                {/* Education Card - Left Side (index 0, 2, 4...) */}
                {index % 2 === 0 && (
                  <div className="w-full md:w-5/12 ml-24 md:ml-0 md:mr-16">
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 rounded-2xl p-6 shadow-2xl border border-blue-500/20 backdrop-blur-sm relative overflow-hidden group"
                    >
                      {/* Glowing Border Effect */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${edu.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm`}
                      />

                      <div className="relative z-10">
                        {/* Year Badge */}
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ delay: index * 0.3, type: "spring" }}
                          className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${edu.color} rounded-full text-white text-sm font-bold shadow-lg mb-4`}
                        >
                          <Calendar size={16} />
                          {edu.year}
                        </motion.div>

                        {/* Degree */}
                        <motion.h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:via-sky-300 group-hover:to-blue-200 group-hover:bg-clip-text transition-all duration-300">
                          {edu.degree}
                        </motion.h3>

                        {/* Institution */}
                        <motion.div className="flex items-center gap-2 text-blue-200/80 mb-3">
                          <MapPin size={16} />
                          <span className="text-lg">{edu.institution}</span>
                        </motion.div>

                        {/* Details */}
                        <div className="flex flex-wrap gap-4">
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-2 px-3 py-2 bg-blue-900/30 rounded-lg border border-blue-500/30"
                          >
                            <Award size={16} className="text-sky-400" />
                            <span className="text-sky-300 font-semibold">
                              {edu.percentage}
                            </span>
                          </motion.div>
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-2 px-3 py-2 bg-slate-700/50 rounded-lg border border-blue-500/20"
                          >
                            <span className="text-blue-200">{edu.board}</span>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                )}

                {/* Education Card - Right Side (index 1, 3, 5...) */}
                {index % 2 === 1 && (
                  <div className="w-full md:w-5/12 ml-24 md:ml-auto md:pl-16">
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 rounded-2xl p-6 shadow-2xl border border-blue-500/20 backdrop-blur-sm relative overflow-hidden group"
                    >
                      {/* Glowing Border Effect */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${edu.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm`}
                      />

                      <div className="relative z-10">
                        {/* Year Badge */}
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ delay: index * 0.3, type: "spring" }}
                          className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${edu.color} rounded-full text-white text-sm font-bold shadow-lg mb-4`}
                        >
                          <Calendar size={16} />
                          {edu.year}
                        </motion.div>

                        {/* Degree */}
                        <motion.h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:via-sky-300 group-hover:to-blue-200 group-hover:bg-clip-text transition-all duration-300">
                          {edu.degree}
                        </motion.h3>

                        {/* Institution */}
                        <motion.div className="flex items-center gap-2 text-blue-200/80 mb-3">
                          <MapPin size={16} />
                          <span className="text-lg">{edu.institution}</span>
                        </motion.div>

                        {/* Details */}
                        <div className="flex flex-wrap gap-4">
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-2 px-3 py-2 bg-blue-900/30 rounded-lg border border-blue-500/30"
                          >
                            <Award size={16} className="text-sky-400" />
                            <span className="text-sky-300 font-semibold">
                              {edu.percentage}
                            </span>
                          </motion.div>
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-2 px-3 py-2 bg-slate-700/50 rounded-lg border border-blue-500/20"
                          >
                            <span className="text-blue-200">{edu.board}</span>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;