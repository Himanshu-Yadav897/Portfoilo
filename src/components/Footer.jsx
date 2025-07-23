import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-black/90 text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 border-t border-gray-800 pt-6">
        {/* Name / Branding */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold text-white">Himanshu Yadav</h2>
          <p className="text-sm text-gray-500">Frontend Developer</p>
        </div>

        {/* Internal Links */}
        <ul className="flex gap-6 text-sm">
          <li>
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/project-timeline"
              className="hover:text-white transition-colors"
            >
              Project Timeline
            </Link>
          </li>
          <li>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="flex gap-6 text-lg">
          <a
            href="https://github.com/Himanshu-Yadav897"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/himanshu-yadav897"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:himanshuyadav897@gmail.com"
            className="hover:text-white transition-colors"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Himanshu Yadav. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
