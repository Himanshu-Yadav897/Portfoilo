import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full backdrop-blur-md bg-black/30 border-b border-gray-700 border-opacity-20 z-50">
      <nav className="relative max-w-7xl mx-auto py-6 px-6 lg:px-32 flex items-center justify-between text-white overflow-hidden">

        {/* Background beams positioned behind the navbar content */}
        <div className="absolute inset-0 -z-10 h-[72px] overflow-hidden pointer-events-none">
          <BackgroundBeamsWithCollision explodeY={10} />
        </div>

        <a
          href="#about"
          className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-blue-600 via-sky-500 to-blue-400 text-transparent bg-clip-text hover:scale-110 transition-all duration-300 whitespace-nowrap"
        >
          Himanshu Yadav
        </a>

        <ul className="hidden md:flex gap-10">
          <li className="opacity-70 hover:opacity-100 transition-opacity duration-300">
            <a href="#about">About</a>
          </li>
          <li className="opacity-70 hover:opacity-100 transition-opacity duration-300">
            <a href="#projects">Projects</a>
          </li>
          <li className="opacity-70 hover:opacity-100 transition-opacity duration-300">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <BiMenu className="text-3xl" />
        </button>

        {isMenuOpen && (
          <ul className="md:hidden absolute top-16 left-0 right-0 bg-black/90 border-b border-gray-800 space-y-5 py-16 text-center z-50">
            <li className="group px-10 opacity-80 hover:opacity-100 transition-opacity">
              <a href="#about" onClick={() => setIsMenuOpen(false)}>
                <span className="text-lg">About</span>
              </a>
            </li>
            <li className="group px-10 opacity-80 hover:opacity-100 transition-opacity">
              <a href="#projects" onClick={() => setIsMenuOpen(false)}>
                <span className="text-lg">Projects</span>
              </a>
            </li>
            <li className="group px-10 opacity-80 hover:opacity-100 transition-opacity">
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                <span className="text-lg">Contact</span>
              </a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
