// src/components/JourneyTimeline.jsx
import React from "react";
import { motion } from "framer-motion"; // Correct import for Framer Motion
import { journeyData } from "../data/journeyData";
import { Timeline } from "../ui/timeline"; // Assuming this is your timeline UI component



export default function JourneyTimeline() {
  const data = journeyData.map((item) => ({
    title: item.year, // The year as the main timeline point
    content: (
      <motion.div
        key={item.id}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="p-6 md:p-8 rounded-xl bg-zinc-800/60 backdrop-blur-sm shadow-2xl border border-zinc-700 relative overflow-hidden group cursor-pointer" // Added group & cursor-pointer
      >
        <h3 className="mb-4 text-xl md:text-2xl font-bold text-center">
          <span className="inline-block bg-gradient-to-r from-blue-400 via-sky-300 to-purple-400 bg-clip-text text-transparent">
            {item.title}
          </span>
        </h3>

        {/* The overlay that hides the text */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileHover={{ opacity: 0, y: -20 }} // Moves up slightly and fades out on hover
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="absolute inset-0 bg-zinc-900/90 rounded-xl flex items-center justify-center p-6 text-center"
        >
          <p className="text-white text-lg font-semibold">
            Hover to reveal {item.year}'s story
          </p>
        </motion.div>

        {/* The actual description text, initially present but covered */}
        <p className="mb-4 text-sm font-normal text-neutral-200 md:text-base leading-relaxed">
          {item.description}
        </p>

        {/* If you implement the Carousel, uncomment and use it here */}
        {/* {item.images && item.images.length > 0 && (
      <div className="mt-6">
        <Carousel images={item.images} />
      </div>
    )} */}
      </motion.div>
    ),
  }));

  return (
    <section
      id="my-journey"
      className="py-20 md:py-28 lg:py-36 bg-zinc-950 text-white relative overflow-hidden"
    >
      {/* Background Gradients/Blobs for visual interest */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob motion-safe:animate-blob-slow"></div>
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000 motion-safe:animate-blob-slow"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-sky-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000 motion-safe:animate-blob-slow"></div>

      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-16 relative z-10 bg-gradient-to-r from-teal-400 via-sky-400 to-blue-500 text-transparent bg-clip-text"
      >
        My Journey: From Copy-Paste to Developer
        <span className="block h-1 w-32 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 mt-4 rounded-full"></span>
      </motion.h2>

      <div className="mx-auto max-w-5xl px-4 relative z-10">
        <Timeline data={data} />
      </div>

      {/* Tailwind CSS keyframes for blob animation (add to your CSS file or a <style> tag if not using global CSS) */}
      {/*
      <style>
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        @keyframes blob-slow {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          25% {
            transform: translate(20px, -30px) scale(1.05);
          }
          50% {
            transform: translate(-15px, 10px) scale(0.95);
          }
          75% {
            transform: translate(10px, -10px) scale(1.02);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      </style>
      */}
    </section>
  );
}
