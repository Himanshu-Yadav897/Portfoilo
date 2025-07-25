import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router";
import { motion } from "framer-motion";

const footerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Footer = () => {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
      className="bg-black/90 text-gray-300 py-10 px-6 border-t border-gray-800"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Branding */}

        <div className="group inline-block text-center md:text-left">
          <h2 className="text-xl font-semibold text-white transition duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-sky-500 group-hover:to-blue-400 group-hover:bg-clip-text group-hover:text-transparent">
            Himanshu Yadav
          </h2>

          <p className="text-sm text-gray-500">Full Stack Developer</p>
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-6 text-sm">
          {[
            { to: "/", label: "Home" },
            { to: "/project-timeline", label: "Project Timeline" },
            { to: "#contact", label: "Contact", external: true },
          ].map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {item.external ? (
                <a
                  href={item.to}
                  className="hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  to={item.to}
                  className="hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </motion.li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="flex gap-6 text-lg">
          {[
            {
              href: "https://github.com/Himanshu-Yadav897",
              icon: <FaGithub />,
            },
            {
              href: "https://linkedin.com/in/himanshu-yadav897",
              icon: <FaLinkedin />,
            },
            { href: "mailto:himanshuyadav897@gmail.com", icon: <FaEnvelope /> },
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="hover:text-white text-gray-400 transition-colors hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.3)]"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Himanshu Yadav. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
