import React from "react";

import { Timeline } from "../ui/timeline";
import Carousel from "../ui/carousel";
import { BiLogoGithub, BiLinkExternal } from "react-icons/bi";
import { LinkPreview } from "../ui/link-preview";
import { motion } from "framer-motion";
import {AnimatedBadge} from "../ui/animatedbadge";

import { projectData } from "../data/project-images";

export default function ProjectTimeline() {
  const data = projectData.map((item, index) => ({
    title: item.year,
    content: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        className="relative"
      >
        {/* Subtle background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-sky-500/5 to-blue-400/5 rounded-2xl blur-xl -z-10" />
        
        <div className="relative bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/10">
          <h1 className="mb-8 text-2xl md:text-3xl font-bold text-center flex items-center justify-center gap-5">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <LinkPreview
                url={item.github}
                href={item.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <BiLogoGithub className="inline-block text-2xl md:text-3xl text-blue-200 cursor-pointer hover:text-sky-400 transition-colors duration-200" />
              </LinkPreview>
            </motion.div>
            
            <span className="inline-block bg-gradient-to-r from-blue-600 via-sky-500 to-blue-400 bg-clip-text text-transparent">
              {item.title}
            </span>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <LinkPreview
                url={item.live}
                href={item.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                <BiLinkExternal className="inline-block text-2xl md:text-3xl text-blue-200 cursor-pointer hover:text-sky-400 transition-colors duration-200" />
              </LinkPreview>
            </motion.div>
          </h1>

          <p className="mb-4 text-xs font-normal text-blue-200/80 md:text-sm leading-relaxed">
            {item.description}
          </p>

          <div className="mb-8 space-y-3">
            {item.Bullet.map((point, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 text-xs text-blue-200/70 md:text-sm leading-relaxed"
              >
                <span className="inline-block w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-sky-400 rounded-full mt-2 flex-shrink-0"></span>
                <span className="flex-1">{point}</span>
              </div>
            ))}
          </div>

          {item.tech && item.tech.length > 0 && (
            <div className="flex flex-wrap gap-3 mb-8">
              {item.tech.map((techItem, techIndex) => (
                <motion.div
                  key={techIndex}
                  whileHover={{ scale: 1.02, y: -1 }}
                  transition={{ duration: 0.2 }}
                >
                  <AnimatedBadge
                    text={techItem.label}
                    icon={techItem.icon}
                    borderColor={`via-${techItem.color}-500`}
                    className="bg-blue-900/20 hover:bg-blue-800/30 text-sky-300 border-blue-500/30 hover:border-sky-400/50 transition-all duration-200"
                  />
                </motion.div>
              ))}
            </div>
          )}
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="relative">
              {/* Carousel wrapper with enhanced styling */}
              <div className="relative overflow-hidden rounded-xl border border-blue-500/20 bg-slate-900/30 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-transparent to-sky-400/10 pointer-events-none" />
                <Carousel slides={item.images} />
              </div>
            </div>
            
            {/* Project info sidebar */}
            <div className="hidden lg:flex flex-col justify-center space-y-4 pl-4">
              <div className="text-sm text-blue-200/60">
                <span className="block text-xs uppercase tracking-wider text-sky-400 mb-1">Project Year</span>
                <span className="text-lg font-semibold text-blue-200">{item.year}</span>
              </div>
              
              {item.tech && (
                <div className="text-sm text-blue-200/60">
                  <span className="block text-xs uppercase tracking-wider text-sky-400 mb-1">Tech Stack</span>
                  <span className="text-blue-200">{item.tech.length} Technologies</span>
                </div>
              )}
              
              <div className="pt-4">
                <div className="p-4 bg-gradient-to-br from-blue-900/20 to-sky-900/20 rounded-lg border border-blue-500/20 hover:border-blue-400/30 transition-colors duration-200">
                  <p className="text-xs text-blue-200/70 italic">
                    "{item.reflection}"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    ),
  }));
  
  return (
    <div className="relative w-full overflow-clip">
      {/* Background ambient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent pointer-events-none" />
      
      <Timeline data={data} />
    </div>
  );
}