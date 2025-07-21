import React from "react";
import { BiLogoLinkedin, BiLogoGithub } from "react-icons/bi";
import { SiLeetcode } from "react-icons/si";
import image from "../../public/image 1.jpg";
import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { FollowerPointerCard } from "../ui/following-pointer";

const About = () => {
  return (
    <div
      className="mx-auto max-w-6xl w-full min-h-screen p-4 md:p-8 lg:p-28 flex items-center justify-center"
      id="about"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col-reverse items-center justify-center md:flex-row gap-8 md:gap-16 lg:gap-24"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center md:items-start justify-center gap-3"
        >
          <span className="px-2 py-1 text-white bg-zinc-800 rounded-md">
            Open to Work
          </span>

          <h1 className="text-5xl whitespace-nowrap md:text-6xl lg:text-7xl font-semibold text-center md:text-left bg-gradient-to-r from-blue-600 via-sky-500 to-blue-400 text-transparent bg-clip-text">
            Himanshu Yadav
          </h1>

          <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-center md:text-left bg-gradient-to-r from-blue-400 via-sky-400 to-blue-600 text-transparent bg-clip-text">
            Full-Stack Developer
          </h3>

          <p className="text-sm text-slate-400 text-center md:text-left text-pretty">
            Full-stack developer skilled in building modern web applications
            with React, Node.js, Express, and MongoDB. Experienced in crafting
            intuitive UIs and robust backend systems. Passionate about learning
            through side projects, solving real-world problems, and optimizing
            user experience and performance.
          </p>

          <div className="flex gap-5 mt-3">
            <a
              href="https://github.com/Himanshu-Yadav897"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiLogoGithub className="text-2xl md:text-3xl text-white cursor-pointer hover:scale-110 hover:text-indigo-500 hover:rotate-12 transition-all duration-300 ease-in-out" />
            </a>
            <a
              href="https://www.linkedin.com/in/himanshu-yadav-89743"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiLogoLinkedin className="text-2xl md:text-3xl text-white cursor-pointer hover:scale-110 hover:text-blue-500 hover:rotate-12 transition-all duration-300 ease-in-out" />
            </a>
            <a
              href="https://leetcode.com/u/himanshu_897/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLeetcode className="text-2xl md:text-3xl text-white cursor-pointer hover:scale-110 hover:text-yellow-400 hover:-rotate-12 transition-all duration-300 ease-in-out" />
            </a>
          </div>
        </motion.div>

        
        <FollowerPointerCard
         
          
        >
          <CardContainer>
            <CardItem
              translateZ="100"
              rotateX={20}
              rotateZ={-10}
              className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden hover:scale-105 hover:rotate-2 transition-all duration-500"
            >
              <img
                src={image}
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </CardItem>
          </CardContainer>
        </FollowerPointerCard>
      </motion.div>
    </div>
  );
};

export default About;
