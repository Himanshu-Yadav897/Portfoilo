// src/components/TypewriterText.jsx (New component)
import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const TypewriterText = ({ text, delay = 0.05, once = true }) => {
  const controls = useAnimation();
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(prev => prev + text[i]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, delay * 1000); // Convert delay to milliseconds

    return () => clearInterval(interval);
  }, [text, delay]);

  // If you want it to trigger on scroll into view
  // const [ref, inView] = useInView({ threshold: 0.5, once: once });
  // useEffect(() => {
  //   if (inView) {
  //     // Start animation logic here if using framer-motion variants
  //   }
  // }, [inView, controls]);

  return (
    <motion.p
      // ref={ref} // For scroll-triggered animation
      className="mb-4 text-sm font-normal text-neutral-200 md:text-base leading-relaxed"
    >
      {displayedText}
    </motion.p>
  );
};

export default TypewriterText;