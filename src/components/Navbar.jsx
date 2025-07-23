import React, { useState } from "react";
import { Link } from "react-router";
import { BiMenu } from "react-icons/bi";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full backdrop-blur-md bg-black/30 border-b border-gray-700 border-opacity-20 z-50">
      <nav className="relative max-w-7xl mx-auto py-6 px-6 lg:px-32 flex items-center justify-between text-white overflow-hidden">
        <div className="absolute inset-0 -z-10 h-[72px] overflow-hidden pointer-events-none">
          <BackgroundBeamsWithCollision explodeY={10} />
        </div>

        <Link
          to="/"
          className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-blue-600 via-sky-500 to-blue-400 text-transparent bg-clip-text hover:scale-110 transition-all duration-300 whitespace-nowrap"
        >
          Himanshu Yadav
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-10">
          <li className="opacity-70 hover:opacity-100 transition-opacity duration-300">
            <Link to="/about">About</Link>
          </li>
          <li className="opacity-70 hover:opacity-100 transition-opacity duration-300">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="opacity-70 hover:opacity-100 transition-opacity duration-300">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="opacity-70 hover:opacity-100 transition-opacity duration-300">
            <Link to="/project-timeline">Project Timeline</Link>
          </li>
          <li className="opacity-70 hover:opacity-100 transition-opacity duration-300">
            <Link to="/my-journey">My Journey</Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <BiMenu className="text-3xl" />
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <ul className="md:hidden absolute top-16 left-0 right-0 bg-black/90 border-b border-gray-800 space-y-5 py-16 text-center z-50">
            <li>
              <Link to="/about" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={() => setIsMenuOpen(false)}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/project-timeline" onClick={() => setIsMenuOpen(false)}>
                Project Timeline
              </Link>
            </li>
            <li>
              <Link to="/my-journey" onClick={() => setIsMenuOpen(false)}>
                My Journey
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
