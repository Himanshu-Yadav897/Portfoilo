import React from 'react';
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const contactLinks = [
    {
      icon: <FaEnvelope className="text-xl" />,
      label: 'hy897433@gmail.com',
      href: 'mailto:hy897433@gmail.com',
      delay: 0.3
    },
    {
      icon: <FaGithub className="text-xl" />,
      label: 'GitHub',
      href: 'https://github.com/Himanshu-Yadav897',
      delay: 0.35
    },
    {
      icon: <FaLinkedin className="text-xl" />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/himanshu-yadav-897433-/',
      delay: 0.4
    },
  ];

  return (
    <div className='mx-auto w-full min-h-[60vh] px-4 sm:px-6 lg:px-8' id='contact'>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className='max-w-4xl mx-auto mt-20 flex items-center justify-center flex-col gap-10'
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 text-center'
        >
          Let's Connect
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className='text-gray-300 text-lg text-center max-w-2xl leading-relaxed'
        >
          Got a project or just want to chat? Feel free to reach out through any of the platforms below.
        </motion.p>

        <div className="flex flex-wrap gap-6 justify-center mt-4">
          {contactLinks.map(({ icon, label, href, delay }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay }}
              className="flex items-center gap-3 bg-gradient-to-r from-blue-600 via-sky-500 to-blue-400 text-white px-6 py-3 rounded-full font-medium hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 transition-transform duration-300"
            >
              {icon} {label}
            </motion.a>
          ))}
        </div>

        <footer className='w-full mt-16 border-t border-gray-800/30 p-6 text-center text-sm text-gray-500'>
          © {new Date().getFullYear()} Himanshu Yadav. All rights reserved.
        </footer>
      </motion.div>
    </div>
  );
};

export default Contact;
