import React, { useState, useEffect } from "react";
import { BiLogoLinkedin, BiLogoGithub } from "react-icons/bi";
import { SiLeetcode } from "react-icons/si";
import image from "../../public/image 1.jpg";
import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { FollowerPointerCard } from "../ui/following-pointer";
import { Link } from "react-router"; 

const About = () => {
  // Check if story has been seen before
  const [hasSeenStory, setHasSeenStory] = useState(() => {
    return localStorage.getItem("hasSeenStory") === "true";
  });

  const [currentStoryIndex, setCurrentStoryIndex] = useState(() => {
    return hasSeenStory ? 4 : 0; // Start at end if already seen
  });

  const [showSkipButton, setShowSkipButton] = useState(false);
  const [storyCompleted, setStoryCompleted] = useState(false); // New state to track story completion

  const storyLines = [
    "When I was in 2nd grade, our teacher asked:",
    '"What do you want to be when you grow up?"',
    "My best friend said, 'Software Developer, like my uncle.'",
    "I copied his answer — and somehow, that word stuck with me.",
    "Little did I know, this copy-paste moment would change everything.",
  ];

  useEffect(() => {
    // Show skip button after 2 seconds if story hasn't been seen
    if (!hasSeenStory) {
      const skipTimer = setTimeout(() => {
        setShowSkipButton(true);
      }, 2000);

      return () => clearTimeout(skipTimer);
    }
  }, [hasSeenStory]);

  useEffect(() => {
    if (!hasSeenStory && currentStoryIndex < storyLines.length - 1) {
      const timer = setTimeout(() => {
        setCurrentStoryIndex(currentStoryIndex + 1);
      }, 3000);
      return () => clearTimeout(timer);
    }

    // Mark story as seen when it completes
    if (currentStoryIndex >= storyLines.length - 1 && !hasSeenStory) {
      localStorage.setItem("hasSeenStory", "true");
      setHasSeenStory(true);
      setStoryCompleted(true); // Set storyCompleted to true when story finishes
    } else if (hasSeenStory) {
      setStoryCompleted(true); // If already seen, set storyCompleted to true on mount
    }
  }, [currentStoryIndex, storyLines.length, hasSeenStory]);

  const skipToEnd = () => {
    setCurrentStoryIndex(storyLines.length - 1);
    localStorage.setItem("hasSeenStory", "true");
    setHasSeenStory(true);
    setShowSkipButton(false);
    setStoryCompleted(true); // Set storyCompleted to true when skipped
  };

  const replayStory = () => {
    setCurrentStoryIndex(0);
    setHasSeenStory(false);
    setShowSkipButton(false);
    setStoryCompleted(false); // Reset storyCompleted when replaying
    localStorage.removeItem("hasSeenStory"); // Clear localStorage to allow full replay
  };

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
        {/* Left Section - Story Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center md:items-start justify-center gap-4"
        >
          {/* Chapter indicator with controls */}
          <div className="flex items-center gap-4">
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="px-3 py-1 text-xs font-mono bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full"
            >
              Chapter 1: The Copy-Paste Dream
            </motion.span>

            {/* Skip button during first-time story */}
            {showSkipButton && !hasSeenStory && !storyCompleted && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={skipToEnd}
                className="px-2 py-1 text-xs bg-gray-700 text-gray-300 rounded-md hover:bg-gray-600 transition-colors"
              >
                Skip →
              </motion.button>
            )}

            {/* Replay button for return visitors or after story completion */}
            {storyCompleted && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={replayStory}
                className="px-2 py-1 text-xs bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center gap-1"
              >
                🔄 Replay
              </motion.button>
            )}
          </div>

          {/* Story Section - Hidden when storyCompleted is true */}
          {!storyCompleted && (
            <div className="min-h-[120px] flex flex-col justify-center">
              {storyLines.slice(0, currentStoryIndex + 1).map((line, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`text-lg md:text-xl text-center md:text-left mb-2 ${
                    index === 1
                      ? "text-blue-400 font-semibold italic"
                      : "text-gray-300"
                  } ${index === 4 ? "mt-4 text-blue-300 font-medium" : ""}`}
                >
                  {line}
                </motion.p>
              ))}
            </div>
          )}

          {/* Name and other details appear after story */}
          {storyCompleted && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col items-center md:items-start gap-3 mt-6"
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

              {/* Updated tagline */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-base text-gray-400 font-medium italic text-center md:text-left"
              >
                From copying answers to creating solutions.
              </motion.p>

              {/* Journey CTA */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="mt-4 text-center md:text-left"
              >
                <p className="text-sm text-slate-400 mb-4">
                  That 2nd-grade moment was just the beginning. The real story
                  involves ₹27,000 mistakes, library sessions, and proving
                  doubters wrong.
                </p>

                <Link
                  to="/my-journey"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
                >
                  Read the Full Story
                  <span className="text-xl">→</span>
                </Link>
              </motion.div>

              {/* Social Icons */}
              <div className="flex gap-5 mt-6">
                <a
                  href="https://github.com/Himanshu-Yadav897"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BiLogoGithub className="text-2xl md:text-3xl text-white cursor-pointer hover:scale-110 hover:text-indigo-500 hover:rotate-12 transition-all duration-300 ease-in-out" />
                </a>
                <a
                  href="https://www.linkedin.com/in/himanshu-yadav-897433-/"
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
          )}
        </motion.div>

        {/* Right Section - Image (Always visible now) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <FollowerPointerCard>
            <CardContainer>
              <CardItem
                translateZ="100"
                rotateX={20}
                rotateZ={-10}
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden hover:scale-105 hover:rotate-2 transition-all duration-500"
              >
                <img
                  src="/image 1.jpg"
                  alt="Himanshu Yadav - From 2nd grade dreamer to Full-Stack Developer"
                  className="w-full h-full object-cover rounded-full"
                />
                {/* Overlay text when story completes */}
              </CardItem>
            </CardContainer>
          </FollowerPointerCard>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;